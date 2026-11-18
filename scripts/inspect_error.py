import asyncio
import json
import websockets
import requests
import subprocess
import os

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
USER_DATA_DIR = os.path.abspath("screenshots/.chrome-profile")

async def check_browser_error():
    chrome_proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--remote-debugging-port=9222",
        f"--user-data-dir={USER_DATA_DIR}",
        "--disable-gpu",
        "--no-first-run",
        "about:blank"
    ])
    try:
        await asyncio.sleep(2)
        targets = requests.get("http://127.0.0.1:9222/json").json()
        ws_url = targets[0]["webSocketDebuggerUrl"]

        async with websockets.connect(ws_url, max_size=20*1024*1024) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
                while True:
                    res = json.loads(await ws.recv())
                    if res.get("id") == msg_id:
                        return res.get("result", {})

            await send("Page.enable")
            await send("Runtime.enable")

            await send("Page.navigate", {"url": "http://localhost:3000"})
            await asyncio.sleep(3)

            dom_res = await send("Runtime.evaluate", {
                "expression": "document.body.innerText"
            })
            print("DOM text preview:\n", dom_res.get("value", "")[:1000])

            overlay_res = await send("Runtime.evaluate", {
                "expression": """
                (function() {
                    const el = document.querySelector('nextjs-portal');
                    if (el && el.shadowRoot) {
                        return el.shadowRoot.innerText;
                    }
                    return document.body.innerText;
                })()
                """
            })
            text = overlay_res.get("value", "")
            print("OVERLAY TEXT:\n", text[:2000])

    finally:
        chrome_proc.terminate()
        chrome_proc.wait()

asyncio.run(check_browser_error())

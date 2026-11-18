import os
import time
import json
import base64
import asyncio
import subprocess
import requests
import websockets

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = os.path.abspath("screenshots/after")
os.makedirs(OUTPUT_DIR, exist_ok=True)

USER_DATA_DIR = os.path.abspath("screenshots/.chrome-profile")
os.makedirs(USER_DATA_DIR, exist_ok=True)

async def capture_views():
    # Start Chrome with remote debugging
    chrome_proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--remote-debugging-port=9222",
        f"--user-data-dir={USER_DATA_DIR}",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        "about:blank"
    ])
    
    time.sleep(2)
    try:
        # Get websocket URL
        targets = requests.get("http://127.0.0.1:9222/json").json()
        page_target = [t for t in targets if t.get("type") == "page"][0]
        ws_url = page_target["webSocketDebuggerUrl"]

        async with websockets.connect(ws_url, max_size=25*1024*1024) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {"id": msg_id, "method": method, "params": params or {}}
                await ws.send(json.dumps(payload))
                while True:
                    res = json.loads(await ws.recv())
                    if res.get("id") == msg_id:
                        return res.get("result", {})

            await send("Page.enable")
            await send("DOM.enable")

            # Test viewports
            viewports = [
                ("1440x900", 1440, 900, False),
                ("390x844", 390, 844, True),
            ]

            sections = [
                ("hero", "section"),
                ("about", "#about"),
                ("stagepanels", "#process"),
                ("audience", "#services"),
                ("materials", "#materials"),
                ("gallery", "#gallery"),
                ("aggregate-grab", "#dispatch-cta"),
                ("footer", "#contact"),
            ]

            for vp_name, width, height, is_mobile in viewports:
                print(f"Capturing viewport: {vp_name}")
                await send("Emulation.setDeviceMetricsOverride", {
                    "width": width,
                    "height": height,
                    "deviceScaleFactor": 1,
                    "mobile": is_mobile
                })

                await send("Page.navigate", {"url": "http://localhost:3000"})
                await asyncio.sleep(2)

                # Capture full page
                full_res = await send("Page.captureScreenshot", {"format": "png"})
                if "data" in full_res:
                    with open(os.path.join(OUTPUT_DIR, f"fullpage-{vp_name}.png"), "wb") as f:
                        f.write(base64.b64decode(full_res["data"]))
                    print(f"  Saved fullpage-{vp_name}.png")

                # Scroll to each section and capture
                for sec_name, sec_selector in sections:
                    eval_code = f"""
                    (function() {{
                        const el = document.querySelector('{sec_selector}');
                        if (el) {{
                            el.scrollIntoView({{ behavior: 'instant', block: 'start' }});
                            return true;
                        }}
                        return false;
                    }})()
                    """
                    await send("Runtime.evaluate", {"expression": eval_code})
                    await asyncio.sleep(0.5)

                    shot_res = await send("Page.captureScreenshot", {"format": "png"})
                    if "data" in shot_res:
                        filename = f"{sec_name}-{vp_name}.png"
                        filepath = os.path.join(OUTPUT_DIR, filename)
                        with open(filepath, "wb") as f:
                            f.write(base64.b64decode(shot_res["data"]))
                        print(f"  Saved {filename}")

    finally:
        chrome_proc.terminate()
        chrome_proc.wait()

if __name__ == "__main__":
    asyncio.run(capture_views())

import os
import re

files_to_check = []
for root, dirs, files in os.walk('.'):
    if any(p in root for p in ['node_modules', '.next', '.git', 'tokens', 'guidelines', 'slides', 'templates', 'ui_kits', 'screenshots']):
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css', '.html', '.mjs')) and not f.endswith('package-lock.json'):
            files_to_check.append(os.path.join(root, f))

hex_pattern = re.compile(r'#[0-9a-fA-F]{3,8}\b')
px_fs_pattern = re.compile(r'(?:font-size:\s*\d+px|text-\[\d+px\]|fontSize:\s*[\'"]?\d+px)')
mono_pattern = re.compile(r'(?:font-mono|monospace|Consolas|Courier)')
banned_claims = [
    'Mining Licences & GST Registered',
    'Lab Test Certificates',
    'Weighbridge Calibration & Fleet',
    'Primary Quarry & Crushing Complex',
    'Heavy Civil Foundations',
    'Built for Infrastructure & Commercial High-Rises',
    'Official Desk',
    'Dispatch Phone Desk'
]

banned_ampersand_brand = re.compile(r'Fortune Aggregates & Sands', re.IGNORECASE)

print(f'Checking {len(files_to_check)} files...')
total_issues = 0
for path in files_to_check:
    with open(path, 'r', encoding='utf-8', errors='ignore') as fl:
        content = fl.read()
    
    hexes = []
    for line_no, line in enumerate(content.splitlines(), 1):
        if 'theme-dark' in path or 'theme-dark' in line or 'colors.css' in path or 'scripts' in path:
            continue
        matches = hex_pattern.findall(line)
        for m in matches:
            if m.lower() in ['#about', '#materials', '#process', '#projects', '#contact', '#quote', '#services', '#who-we-serve']:
                continue
            # Also check if it's an anchor href like href="#..."
            if f'href="#{m[1:]}"' in line or f'href=\'#{m[1:]}\'' in line:
                continue
            hexes.append((line_no, m, line.strip()))
            
    px_fs = []
    for line_no, line in enumerate(content.splitlines(), 1):
        m = px_fs_pattern.findall(line)
        if m:
            px_fs.append((line_no, m, line.strip()))
            
    monos = []
    for line_no, line in enumerate(content.splitlines(), 1):
        m = mono_pattern.findall(line)
        if m:
            monos.append((line_no, m, line.strip()))
            
    claims = []
    for c in banned_claims:
        if c.lower() in content.lower():
            claims.append(c)

    amp_brands = []
    for line_no, line in enumerate(content.splitlines(), 1):
        if banned_ampersand_brand.search(line):
            amp_brands.append((line_no, line.strip()))
            
    if hexes or px_fs or monos or claims or amp_brands:
        total_issues += 1
        print(f'=== {path} ===')
        if hexes:
            print(f'  Hex ({len(hexes)}):')
            for h in hexes:
                print(f'    Line {h[0]}: {h[1]} in: {h[2]}')
        if px_fs:
            print(f'  px_fs ({len(px_fs)}):')
            for p in px_fs:
                print(f'    Line {p[0]}: {p[1]} in: {p[2]}')
        if monos:
            print(f'  monos ({len(monos)}):')
            for mn in monos:
                print(f'    Line {mn[0]}: {mn[1]} in: {mn[2]}')
        if claims:
            print(f'  claims ({len(claims)}): {claims}')
        if amp_brands:
            print(f'  amp_brands ({len(amp_brands)}):')
            for ab in amp_brands:
                print(f'    Line {ab[0]}: {ab[1]}')

print(f'\nFinished scanning. Total files with issues: {total_issues}')

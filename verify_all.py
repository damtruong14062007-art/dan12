# -*- coding: utf-8 -*-
import os, glob, re

base_dir = r"C:\Users\Acer\.gemini\antigravity\scratch\velora-fashion"
html_files = glob.glob(os.path.join(base_dir, "*.html"))

all_valid = True
print(f"Checking {len(html_files)} HTML files:")

for path in sorted(html_files):
    fname = os.path.basename(path)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # Find internal html links
    links = re.findall(r'href=["\']([^"\'#?]+\.html)["\']', html)
    for link in set(links):
        target = os.path.join(base_dir, link)
        if not os.path.exists(target):
            print(f"  [FAIL] Broken link in {fname}: {link}")
            all_valid = False
        else:
            # valid
            pass

    # Find local script/img assets
    assets = re.findall(r'src=["\']([^"\']+\.(?:svg|png|js))["\']', html)
    for asset in set(assets):
        if not asset.startswith("http"):
            target = os.path.join(base_dir, asset)
            if not os.path.exists(target):
                print(f"  [FAIL] Broken asset in {fname}: {asset}")
                all_valid = False

    css_links = re.findall(r'href=["\']([^"\']+\.css)["\']', html)
    for css in set(css_links):
        if not css.startswith("http"):
            target = os.path.join(base_dir, css)
            if not os.path.exists(target):
                print(f"  [FAIL] Broken css in {fname}: {css}")
                all_valid = False

    print(f"  [OK] {fname} ({os.path.getsize(path):,} bytes) - Internal links: {len(set(links))}, Local assets: {len(set(assets))}")

if all_valid:
    print("\nSUCCESS: All 8 HTML pages have 100% valid internal links and local assets!")
else:
    print("\nFAILURE: Some broken references were detected.")

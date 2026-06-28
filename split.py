import os
import re

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract main JS block (excluding Monetag scripts)
# The main JS block is the last <script> block before </body>
js_match = re.search(r'<script>(.*?)</script>\s*<!-- MODULE QUIZ MODAL -->', content, re.DOTALL)
if js_match:
    js_content = js_match.group(1).strip()
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Extracted main.js ({len(js_content)} chars)")
else:
    print("Could not find main JS block.")

# Extract CSS block
css_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if css_match:
    css_content = css_match.group(1).strip()
    with open('old_styles.css', 'w', encoding='utf-8') as f:
        f.write(css_content)
    print(f"Extracted old_styles.css ({len(css_content)} chars)")
else:
    print("Could not find CSS block.")

# Remove CSS and JS from HTML and replace with links
new_html = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="styles.css">', content, flags=re.DOTALL)
new_html = re.sub(r'<script>(.*?)</script>\s*<!-- MODULE QUIZ MODAL -->', '<script src="main.js"></script>\n\n<!-- MODULE QUIZ MODAL -->', new_html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
print("Updated index.html to link to styles.css and main.js")


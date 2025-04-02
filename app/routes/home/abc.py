# Define the new SVG content with "Arjan" (ਅਰਜਨ) in Gurmukhi
new_svg_content = """<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="50" font-size="40" font-family="Gurmukhi, Arial, sans-serif" fill="black">ਅਰਜਨ</text>
</svg>
"""

# File path of the uploaded file (to be replaced)
file_path = "./app/routes/home/katakana.svg"

# Write the new SVG content to the file
with open(file_path, "w", encoding="utf-8") as file:
    file.write(new_svg_content)

# Confirm the replacement
file_path

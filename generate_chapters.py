import os

with open('chapter-template.html', 'r') as f:
    template = f.read()

os.makedirs('chapters', exist_ok=True)

for i in range(1, 101):
    chapter_content = template\
        .replace("{{NUM}}", str(i))\
        .replace("{{TRACK_ID}}", "SPOTIFY_TRACK_ID")\
        .replace("{{QUOTE}}", "YOUR_CHAPTER_QUOTE")
        
    with open(f'chapters/chapter{i}.html', 'w') as f:
        f.write(chapter_content)

const fs = require('fs');
const path = require('path');

// Configuration
const TOTAL_CHAPTERS = 100;
const TEMPLATE_PATH = 'chapter-template.html';
const CHAPTERS_DIR = 'chapters';
const COVER_IMAGE_PATH = 'assets/covers/chapterCHAPTER-cover.jpg';

// Ensure chapters directory exists
if (!fs.existsSync(CHAPTERS_DIR)) {
    fs.mkdirSync(CHAPTERS_DIR, { recursive: true });
}

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Generate chapters
for (let chapter = 1; chapter <= TOTAL_CHAPTERS; chapter++) {
    const previousChapter = chapter > 1 ? chapter - 1 : null;
    const nextChapter = chapter < TOTAL_CHAPTERS ? chapter + 1 : null;
    
    const content = template
        .replace(/CHAPTER_NUMBER/g, chapter)
        .replace(/PREV_CHAPTER/g, previousChapter)
        .replace(/NEXT_CHAPTER/g, nextChapter)
        .replace(/TRACK_ID/g, `CHAPTER_${chapter}_TRACK_ID`)
        .replace(/COVER_IMAGE/g, COVER_IMAGE_PATH.replace('CHAPTER', chapter));
    
    const filename = path.join(CHAPTERS_DIR, `chapter${chapter}.html`);
    fs.writeFileSync(filename, content);
}

console.log(`Generated ${TOTAL_CHAPTERS} chapters!`);

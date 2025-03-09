// Home Page Navigation
document.getElementById('enterBtn').addEventListener('click', () => {
    window.location.href = 'chapter1.html';
});

document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'https://google.com';
});

// Chapter Navigation
function navigateChapter(direction) {
    const path = window.location.pathname;
    const chapterNumber = parseInt(path.split('chapter')[1].split('.')[0]);
    const newChapter = chapterNumber + direction;
    
    if(newChapter >= 1 && newChapter <= 100) {
        window.location.href = `chapter${newChapter}.html`;
    }
}

// Error handling for audio
function playBooLaugh() {
    try {
        const audio = new Audio('assets/sounds/boo-laugh.mp3');
        audio.play().catch(() => { /* Silent error handling */ });
    } catch(e) { /* Fallback silent */ }
}

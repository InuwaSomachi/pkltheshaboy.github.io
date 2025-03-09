// Home Page Navigation
document.getElementById('enterBtn').addEventListener('click', () => {
    window.location.href = 'chapters/chapter1.html';
});

document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'https://google.com';
});

// Chapter Navigation
function navigateChapter(direction) {
    const currentChapter = parseInt(window.location.pathname.match(/chapter(\d+)\.html/)[1]);
    const newChapter = currentChapter + direction;
    
    if(newChapter >= 1 && newChapter <= 100) {
        window.location.href = `chapters/chapter${newChapter}.html`;
    } else if(newChapter < 1) {
        window.location.href = '../index.html';
    } else {
        window.location.href = '../404.html';
    }
}

// Error handling for audio
function playBooLaugh() {
    try {
        const audio = new Audio('assets/sounds/boo-laugh.mp3');
        audio.play().catch(() => { /* Silent error handling */ });
    } catch(e) { /* Fallback silent */ }
}

// Global audio control
function playBooLaugh() {
    try {
        const audio = new Audio('../assets/sounds/boo-laugh.mp3');
        audio.play().catch(error => console.log('Audio play prevented:', error));
    } catch (e) {
        console.log('Audio error:', e);
    }
}

// Page transition effect
function fadeOutPage() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
}

// Chapter navigation handler
function navigateChapter(chapterNumber) {
    fadeOutPage();
    playBooLaugh();
    setTimeout(() => {
        window.location.href = `chapter${chapterNumber}.html`;
    }, 500);
}

// Initialize page fade-in
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 1s ease';
    }, 100);
});

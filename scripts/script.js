// Home Page Functionality
document.getElementById('enterBtn').addEventListener('click', () => {
    window.location.href = 'chapters/chapter1.html';
});

document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'about:blank';
});

// Chapter Navigation
function navigateChapter(direction) {
    const currentPath = window.location.pathname;
    const chapterNumber = parseInt(currentPath.match(/chapter(\d+)\.html/)[1]);
    const newChapter = chapterNumber + direction;
    
    if(newChapter >= 1 && newChapter <= 100) {
        window.location.href = `chapter${newChapter}.html`;
    }
}

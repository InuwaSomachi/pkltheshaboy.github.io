// Home Page Navigation
document.getElementById('enterBtn').addEventListener('click', () => {
    window.location.href = 'chapters/chapter1.html';
});

document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'https://google.com';
});

// Chapter Navigation Logic
function navigateChapter(direction) {
    const pathSegments = window.location.pathname.split('/');
    const currentChapterFile = pathSegments[pathSegments.length - 1];
    const chapterNumber = parseInt(currentChapterFile.match(/\d+/)[0]);
    const newChapter = chapterNumber + direction;

    if(newChapter >= 1 && newChapter <= 100) {
        window.location.href = `chapter${newChapter}.html`;
    } else if(newChapter < 1) {
        window.location.href = '../index.html';
    } else {
        window.location.href = '../404.html';
    }
}

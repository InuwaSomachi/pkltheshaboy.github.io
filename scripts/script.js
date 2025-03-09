// Home Page Navigation
document.getElementById('enterBtn').addEventListener('click', () => {
    window.location.href = 'chapter1.html';
});

document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'https://google.com';
});

// Chapter Navigation
function navigateChapter(direction) {
    const currentChapter = parseInt(window.location.pathname.match(/chapter(\d+)\.html/)[1]);
    const newChapter = currentChapter + direction;
    
    if(newChapter >= 1 && newChapter <= 100) {
        window.location.href = `chapter${newChapter}.html`;
    } else {
        window.location.href = '/pkltheshaboy.github.io/404.html';
    }
}

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
/* Add this new animation */
@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-20px); }
}

/* Fix button styling */
.choice-button {
    background: transparent;
    border: 2px solid #00ff00;
    color: #00ff00;
    padding: 12px 25px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.choice-button:hover {
    background: #00ff00;
    color: #000;
}

/* Fix logo display */
.logo {
    width: 100px;
    position: absolute;
    top: 20px;
    left: 20px;
    filter: drop-shadow(0 0 10px #00ff00);
}

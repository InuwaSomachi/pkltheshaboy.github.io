function enterSite() {
    window.location.href = "chapters/chapter1.html";
}

// Sound effect function
function playBooLaugh() {
    const audio = new Audio('assets/audio/boo-laugh.mp3');
    audio.play();
}
function handleChoice(choice) {
    // Play sound effect
    playBooLaugh();
    
    // Add fade-out animation to buttons
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(button => button.classList.add('fade-out'));
    
    // Redirect after animation completes
    setTimeout(() => {
        if(choice) {
            window.location.href = "chapters/chapter1.html";
        } else {
            window.location.href = "https://www.google.com"; // or any exit URL
        }
    }, 500);
}

// Updated sound effect function with error handling
function playBooLaugh() {
    try {
        const audio = new Audio('assets/audio/boo-laugh.mp3');
        audio.play().catch(error => console.log('Audio play failed:', error));
    } catch (e) {
        console.log('Audio error:', e);
    }
}

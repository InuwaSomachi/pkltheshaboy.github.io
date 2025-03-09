document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('assets/sounds/boo-laugh.mp3');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    function handleResponse(choice) {
        // Add visual feedback
        document.body.style.opacity = '0.7';
        yesBtn.style.pointerEvents = 'none';
        noBtn.style.pointerEvents = 'none';

        // Play sound and redirect
        audio.play().then(() => {
            setTimeout(() => {
                window.location.href = choice ? 
                    'chapters/chapter1.html' : 
                    'about:blank';
            }, 800);
        }).catch(() => {
            // Fallback if audio fails
            window.location.href = choice ? 
                'chapters/chapter1.html' : 
                'about:blank';
        });
    }

    yesBtn.addEventListener('click', () => handleResponse(true));
    noBtn.addEventListener('click', () => handleResponse(false));
});

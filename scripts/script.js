document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio context for browser compatibility
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Preload audio file
    let audioBuffer;
    fetch('assets/sounds/boo-laugh.mp3')
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => audioBuffer = buffer);

    // Button handlers
    document.getElementById('yesButton').addEventListener('click', handleChoice(true));
    document.getElementById('noButton').addEventListener('click', handleChoice(false));

    function handleChoice(choice) {
        return async function() {
            try {
                // Play sound
                const source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioContext.destination);
                source.start(0);

                // Add visual feedback
                document.body.style.opacity = '0.5';
                document.querySelector('.prompt').style.transform = 'scale(0.9)';
                
                // Wait for audio to complete
                await new Promise(resolve => setTimeout(resolve, 800));
                
                // Redirect
                window.location.href = choice ? 
                    'chapters/chapter1.html' : 
                    'https://google.com';
                    
            } catch (error) {
                console.error('Error:', error);
                // Fallback redirect if audio fails
                window.location.href = choice ? 
                    'chapters/chapter1.html' : 
                    'https://google.com';
            }
        };
    }
});

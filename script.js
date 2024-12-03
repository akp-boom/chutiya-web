window.addEventListener('load', function () {
    // Create an Audio object with the pre-recorded sound
    const audio = new Audio('chutiya-ha-kya.mp3');

    // Attempt to play the audio automatically
    audio.play().catch(error => {
        console.warn('Autoplay failed:', error);

        // Notify the user and set up a click listener
        alert('Audio autoplay is blocked by your browser. Please click anywhere on the page to enable sound.');
        
        // Play the audio on user interaction
        window.addEventListener('click', function () {
            audio.play().catch(err => {
                console.error('Audio playback failed even after user interaction:', err);
            });
        }, { once: true }); // Ensures the click listener runs only once
    });
});

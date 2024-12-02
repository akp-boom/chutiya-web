document.getElementById('speakBtn').addEventListener('click', function() {
    const msg = new SpeechSynthesisUtterance('CHUTIYA HA KYA');
    window.speechSynthesis.speak(msg);
});

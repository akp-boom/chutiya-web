window.addEventListener('load', function() {
    const synth = window.speechSynthesis;

    // Function to get a Hindi-compatible voice
    function getHindiVoice() {
        const voices = synth.getVoices();
        return voices.find(voice => voice.lang.includes('hi')) || voices[0]; // Fallback to the first voice if no Hindi voice is found
    }

    // Function to speak the text
    function speakHindi() {
        const message = new SpeechSynthesisUtterance('चूतिया है क्याबेहेनचॉड');
        const hindiVoice = getHindiVoice();

        if (hindiVoice) {
            message.voice = hindiVoice;
        }

        message.lang = 'hi-IN'; // Set language to Hindi
        synth.speak(message);
    }

    // Wait for voices to load, then speak
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = speakHindi;
    } else {
        speakHindi();
    }
});

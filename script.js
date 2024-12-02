const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voiceSelect');
const speakButton = document.getElementById('speakBtn');
let voices = [];

// Populate the voice options
function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceSelect.appendChild(option);
    });
}

// Speak the message
function speakMessage() {
    const message = new SpeechSynthesisUtterance('CHUTIYA HA KYA');
    const selectedVoiceIndex = voiceSelect.value;
    message.voice = voices[selectedVoiceIndex];
    synth.speak(message);
}

// Populate voice list when voices are loaded
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Add event listeners
speakButton.addEventListener('click', speakMessage);

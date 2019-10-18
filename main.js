const synth = window.speechSynthesis
const readTrigger = document.getElementById('readTrigger')

const utterance = new SpeechSynthesisUtterance(
    document.querySelector('section').textContent
)

readTrigger.addEventListener('click', () => {
    if (readTrigger.dataset.isPlaying === 'true') {
        synth.cancel()
        readTrigger.dataset.isPlaying = false
        readTrigger.textContent = 'Play'
    } else {
        synth.speak(utterance)
        readTrigger.dataset.isPlaying = true
        readTrigger.textContent = 'Stop'
    }
})

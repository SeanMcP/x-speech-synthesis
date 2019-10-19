const synth = window.speechSynthesis
const readTrigger = document.getElementById('readTrigger')
const readAloudButton = document.getElementById('read-aloud__button')

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

function toggleReadAloudMode(e) {
    e.stopPropagation()
    const { body } = document
    const { readAloudModeIsOn } = body.dataset
    if (readAloudModeIsOn === 'true') {
        body.dataset.readAloudModeIsOn = 'false'
        window.removeEventListener('click', clickListener)
    } else {
        body.dataset.readAloudModeIsOn = 'true'
        window.addEventListener('click', clickListener)
    }
}

function clickListener(e) {
    debugger
    e.preventDefault()

    const { textContent } = e.target
    if (textContent) {
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(textContent))
        document.body.dataset.readAloudIsOn = 'true'
    }
}

readAloudButton.addEventListener('click', toggleReadAloudMode)

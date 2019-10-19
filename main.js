const synth = window.speechSynthesis
const readAloudButton = document.getElementById('read-aloud__button')

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
        synth.cancel()
        synth.speak(new SpeechSynthesisUtterance(textContent))
        document.body.dataset.readAloudIsOn = 'true'
    }
}

readAloudButton.addEventListener('click', toggleReadAloudMode)

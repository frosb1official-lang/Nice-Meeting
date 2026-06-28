import { questions } from "./Questions.js";
const questionScreen = document.getElementById("questionScreen");
const finalScreen = document.getElementById("finalScreen");
const qText = document.getElementById('qText')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const questionGif = document.getElementById('questionGif')
const btnsWrapper = document.querySelector('.btns-wrapper')
const datetimeWrapper = document.getElementById('datetimeWrapper')
const submitDateBtn = document.getElementById('submitDateBtn')
const dateInput = document.getElementById('dateInput')
const timeInput = document.getElementById('timeInput')
const containerWrapper = questionScreen.querySelector('.container-wrapper')

dateInput.addEventListener('click', () => dateInput.showPicker())
timeInput.addEventListener('click', () => timeInput.showPicker())

let currentQuestion = 0;

function resetNoBtn() {
    noBtn.style.left = '';
    noBtn.style.top = '';
    noBtn.style.position = '';
}

function replayCardAnimation() {
    containerWrapper.style.animation = 'none';
    containerWrapper.offsetHeight; // force reflow
    containerWrapper.style.animation = '';
}

function renderQuestion() {
    
    if (currentQuestion >= questions.length - 1) {
        showFinalScreen();
        return;
    }

    resetNoBtn()
    replayCardAnimation()

    const q = questions[currentQuestion];
    
    qText.textContent = q.text;
    questionGif.src = q.gif
    questionGif.style.transform = q.gifOffsetX ? `translateX(${q.gifOffsetX}px)` : '';

    if (q.type === 'datetime') {
        btnsWrapper.classList.add('hidden');
        datetimeWrapper.classList.remove('hidden');
    } else {
        btnsWrapper.classList.remove('hidden');
        datetimeWrapper.classList.add('hidden');
        yesBtn.textContent = q.btnYes;
        noBtn.textContent = q.btnNo;
    }
}

yesBtn.addEventListener('click', () => {
    currentQuestion++;
    renderQuestion();
})

submitDateBtn.addEventListener('click', () => {
    currentQuestion++;
    renderQuestion();
})

function showFinalScreen() {
    const finalQ = questions[questions.length - 1];
    const finalText = document.getElementById('finalText');
    const finalGif = document.getElementById('finalGif');
    finalText.textContent = finalQ.text;
    finalGif.src = finalQ.gif;
    questionScreen.classList.add('hidden')
    finalScreen.classList.remove('hidden')
}

window.addEventListener('contextmenu', (e) => {
    e.defaultPrevented();
}, false);

renderQuestion()
resetNoBtn()
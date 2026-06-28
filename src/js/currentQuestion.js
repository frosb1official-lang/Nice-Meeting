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

let currentQuestion = 0;

function resetNoBtn() {
    noBtn.style.left = '';
    noBtn.style.top = '';
    noBtn.style.position = '';
}

function renderQuestion() {
    
    if (currentQuestion >= questions.length - 1) {
        showFinalScreen();
        return;
    }

    resetNoBtn()

    const q = questions[currentQuestion];
    
    qText.textContent = q.text;
    questionGif.src = q.gif

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
    questionScreen.classList.add('hidden')
    finalScreen.classList.remove('hidden')
}

window.addEventListener('contextmenu', (e) => {
    e.defaultPrevented();
}, false);

renderQuestion()
resetNoBtn()
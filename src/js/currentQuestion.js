import { questions } from "./Questions.js";
const questionScreen = document.getElementById("questionScreen");
const finalScreen = document.getElementById("finalScreen");
const qText = document.getElementById('qText')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const questionGif = document.getElementById('questionGif')

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
    yesBtn.textContent = q.btnYes;
    noBtn.textContent = q.btnNo;
    questionGif.src = q.gif
}

yesBtn.addEventListener('click', () => {
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
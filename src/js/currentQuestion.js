import { questions } from "./Questions.js";
const questionScreen = document.getElementById("questionScreen");
const finalScreen = document.getElementById("finalScreen");
const qText = document.getElementById('qText')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')

let currentQuestion = 0;

function renderQuestion() {

    if (currentQuestion >= questions.length) {
        showFinalScreen();
        return;
    }

    let q = questions[currentQuestion];

    qText.textContent = q.text;
    yesBtn.textContent = q.btnYes;
    noBtn.textContent = q.btnNo;
}

yesBtn.addEventListener('click', () => {
    currentQuestion++;
    renderQuestion();
})

function showFinalScreen() {
    yesBtn.addEventListener('click', () => {
        questionScreen.classList.add('hidden')
        finalScreen.classList.remove('hidden')
    })
}

renderQuestion()
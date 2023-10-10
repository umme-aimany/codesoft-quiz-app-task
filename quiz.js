const questions = [
    {
        question: "What is HTML?",
        options: ["Hyper Text Markup Language", "High-Level Programming Language"],
        answer: "A"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const options = document.getElementById("options");
    
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;

    options.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + index)}"> ${option}`;
        options.appendChild(label);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;

    if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizProgress = document.getElementById("quiz-progress");
    quizProgress.textContent = `Your Score: ${score} / ${questions.length}`;
}

document.getElementById("start-quiz").addEventListener("click", () => {
    displayQuestion();
});

document.getElementById("next-question").addEventListener("click", () => {
    checkAnswer();
});

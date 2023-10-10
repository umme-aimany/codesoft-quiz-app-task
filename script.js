const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is HTML?",
        options: ["Hyper Text Markup Language", "High-Level Programming Language"],
        correctAnswer: 0
    },
    {
        question: "Which language is often used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of JavaScript?",
        options: ["Styling web pages", "Creating interactive web pages", "Managing databases"],
        correctAnswer: 1
    },
    {
        question: "Which programming language is known for its asynchronous capabilities?",
        options: ["Java", "C++", "JavaScript", "Python"],
        correctAnswer: 2
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "55", "Error", "NaN"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is not a data type in JavaScript?",
        options: ["Boolean", "String", "Tuple", "Number"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'console.log' function in JavaScript?",
        options: ["Display an alert message", "Print text on the web page", "Output data to the console", "Create a pop-up window"],
        correctAnswer: 2
    },
    {
        question: "What does CSS Grid Layout allow you to do?",
        options: ["Style text on a web page", "Create responsive web designs", "Define layouts using a grid", "Animate web elements"],
        correctAnswer: 2
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: ["Declares a variable with block scope", "Declares a constant variable", "Declares a global variable", "Declares a function"],
        correctAnswer: 0
    },
    {
        question: "What is the role of the 'head' element in an HTML document?",
        options: ["It defines the main content of the page", "It contains metadata about the document", "It specifies the page's layout", "It adds interactive functionality"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "===", "=", "!=",],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of 'git' in software development?",
        options: ["To create websites", "To manage version control", "To write code", "To design user interfaces"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 3 * '2' in JavaScript?",
        options: ["6", "32", "Error", "NaN"],
        correctAnswer: 0
    },
    {
        question: "Which symbol is used to comment a single line in JavaScript?",
        options: ["//", "/*", "*/", "#"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a front-end JavaScript framework?",
        options: ["React", "Express", "Node.js", "Django"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        options: ["To store data on the server", "To store data in the browser", "To store data in a database", "To store data in a text file"],
        correctAnswer: 1
    },
    {
        question: "Which programming language is often used for machine learning and data analysis?",
        options: ["Java", "C#", "Python", "Ruby"],
        correctAnswer: 2
    },
    {
        question: "What does 'CSS' stand for?",
        options: ["Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Sheet"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'document.getElementById' method in JavaScript?",
        options: ["To get the value of a variable", "To access an element by its ID", "To display an alert message", "To define a function"],
        correctAnswer: 1
    },
    {
        question: "What is the output of 'console.log('Hello, ' + 'World!')' in JavaScript?",
        options: ["Hello, World!", "Hello + World!", "Undefined", "An error occurs"],
        correctAnswer: 0
    },
    {
        question: "Which symbol is used for single-line comments in CSS?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'JSON' format?",
        options: ["To store images", "To define website structure", "To represent data in a structured format", "To create animations"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a commonly used front-end framework for building responsive web designs?",
        options: ["React", "Django", "Angular", "Flask"],
        correctAnswer: 0
    },
    {
        question: "What is the role of the 'href' attribute in an HTML 'a' (anchor) element?",
        options: ["It specifies the element's height", "It defines the element's color", "It specifies the destination of the link", "It sets the element's font size"],
        correctAnswer: 2
    },
    {
        question: "Which programming language is often used for server-side scripting?",
        options: ["JavaScript", "Python", "HTML", "CSS"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'return' keyword in JavaScript functions?",
        options: ["To declare a variable", "To exit the function and return a value", "To create a loop", "To define an object"],
        correctAnswer: 1
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "font-size", "background-color", "margin"],
        correctAnswer: 0
    }
];

// Function to display the current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsHTML = currentQuestion.options.map((option, index) => `
        <label>
            <input type="radio" name="answer" value="${index}"> ${option}
        </label>
    `).join("");

    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <form id="quiz-form">${optionsHTML}</form>
    `;
}

// Function to check the selected answer and move to the next question
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        return; // No answer selected
    }

    const answerIndex = parseInt(selectedAnswer.value);

    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Function to display the quiz results
function showResults() {
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${questions.length}</p>
    `;
    nextButton.style.display = "none";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});

nextButton.addEventListener("click", () => {
    checkAnswer();
});

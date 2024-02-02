// Trivia data
const triviaData = [
    {
        question: "What's the capital of France?",
        answer: "Paris",
        wrongAnswers: ["London", "Berlin", "Madrid"],
    },
    {
        question: "Who painted the Mona Lisa??",
        answer: "Da Vinci",
        wrongAnswers: ["Van Gogh", "Picasso", "Rembrant"],
    },
    {
        question: "What planet is know as the 'Red Planet'?",
        answer: "Mars",
        wrongAnswers: ["Earth", "Jupiter", "Saturn"],
    },
    {
        question: "Where did the mocha coffee originated from?",
        answer: "Yemen",
        wrongAnswers: ["Moroco", "Mexico", "Japan"],
    },
    {
        question: "Name the Earth’s largest ocean?",
        answer: "Pacific",
        wrongAnswers: ["Atlantic", "Indian", "Antartic"],
    },
    {
        question: "How many eyes does a spider have?",
        answer: "8",
        wrongAnswers: ["6", "4", "2"],
    },
    {
        question: "What is the biggest internal organ in the human body?",
        answer: "Liver",
        wrongAnswers: ["Heart", "Brain", "Lungs"],
    },
    {
        question: "Which is the largest continent of the world?",
        answer: "Asia",
        wrongAnswers: ["Africa", "America", "Australia"],
    },
    {
        question: "What is the color of Sapphire stone?",
        answer: "Blue",
        wrongAnswers: ["Red", "Green", "Black"],
    },
    {
        question: "What is the capital of Indonesia?",
        answer: "Jakarta",
        wrongAnswers: ["Kuala Lumpur", "Manila", "Ho Chi Minh"],
    },
];

// suffle question
let currentQuestionIndex = 0;
let score = 0;
const shuffledQuestion = [];
for (let i = triviaData.length - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  shuffledQuestion.push(triviaData[randomIndex]);
  triviaData.splice(randomIndex, 1);
}

function displayQuestion() {
    const question = shuffledQuestion[currentQuestionIndex];
    // suffle button answer
    const choices = [1,2,3,4];
    const shuffledAnswer = [];
    for (let i = 4 ; i > 0; i--) {
        const randomAnswers = Math.floor(Math.random() * i);
        shuffledAnswer.push(choices[randomAnswers]);
        choices.splice(randomAnswers, 1);
    }

    document.getElementById("question").innerText = question.question;
    document.getElementById("choice"+shuffledAnswer[0]).innerText = question.wrongAnswers[0];
    document.getElementById("choice"+shuffledAnswer[1]).innerText = question.wrongAnswers[1];
    document.getElementById("choice"+shuffledAnswer[2]).innerText = question.wrongAnswers[2];
    document.getElementById("choice"+shuffledAnswer[3]).innerText = question.answer;
    
    document.getElementById("result").innerText = "Question number "+
        (currentQuestionIndex + 1) +" of "+ shuffledQuestion.length;
    document.getElementById("result").style.fontSize = "1rem";
}

displayQuestion();

function checkAnswer(btn) {
    if (btn.innerText === shuffledQuestion[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === shuffledQuestion.length) {
        document.getElementById("result").style.fontSize = "1.5rem";
        if (score === 10) {
            document.getElementById("result").innerText = "Your Score is " + score + " (PERFERCT..!!)";    
        } else {
            document.getElementById("result").innerText = "Your Score is " + score;
        }
        
        document.getElementById("question").hidden = true;
        document.getElementById("choices").hidden = true;  
        document.getElementById("reload").hidden = false; 
    } else {
        displayQuestion();
    }
}

function reloadPage() {
    window.location.reload();
}
const isMobile = navigator.userAgentData.mobile;
const container = document.getElementById('container');
const footer = document.getElementById('footer');
const rps = document.getElementById('rps');
const btnPlay = document.getElementById('play');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnAttackAgain = document.getElementById('attackagain');
const btnGiveUp = document.getElementById('giveup');
const btnScissors = document.getElementById('scissors');
const handRed = document.getElementById('handRed');
const handBlue = document.getElementById('handBlue');
const textScoreRed = document.getElementById('scoreRed');
const textScoreBlue = document.getElementById('scoreBlue');
const labelFooter = document.getElementById('label');

if (isMobile) {
    handRed.style.fontSize = -30;
    handBlue.style.fontSize = -30;
}

const hand = [
    {
        code: "&#x270A",
        stat: "rock"
    },
    {
        code: "&#x270B",
        stat: "paper"
    },
    {
        code: "&#x270C",
        stat: "scissors"
    }
];
let scoreRed = 0;
let scoreBlue = 0;
let statRed = "";
let statBlue = "";

container.style.display = "none";
footer.style.display = "none";

const startPlay = () => {
    btnPlay.style.display = "none";
    container.style.display = "flex";
    handRed.style.display = "none";
    handBlue.style.display = "none";
    updateScore();
}

function attack(id) {
    const randomCom = Math.floor(Math.random() * 3);
    handBlue.innerHTML = hand[randomCom].code;
    statBlue = hand[randomCom].stat;
    handBlue.style.display = "block";

    handRed.style.display = "block";
    for (let i = 0; i < hand.length; i++) {
        if (id === hand[i].stat) {
            handRed.innerHTML = hand[i].code;
            statRed = hand[i].stat;
        }        
    }

    rps.style.display = "none";
    footer.style.display = "block";

    if (statRed === statBlue) {
        labelFooter.innerHTML = "Tie";
    } else if (statRed === "rock" && statBlue === "scissors") {
        labelFooter.innerHTML = "You Win";
        scoreRed += 1;
    } else if (statRed === "rock" && statBlue === "paper") {
        labelFooter.innerHTML = "You Lose";
        scoreBlue += 1;
    } else if (statRed === "paper" && statBlue === "rock") {
        labelFooter.innerHTML = "You Win";
        scoreRed += 1;
    } else if (statRed === "paper" && statBlue === "scissors") {
        labelFooter.innerHTML = "You Lose";
        scoreBlue += 1;
    } else if (statRed === "scissors" && statBlue === "paper") {
        labelFooter.innerHTML = "You Win";
        scoreRed += 1;
    } else if (statRed === "scissors" && statBlue === "rock") {
        labelFooter.innerHTML = "You Lose";
        scoreBlue += 1;
    };
    updateScore();
}

function attackAgain() {
    rps.style.display = "block";
    footer.style.display = "none";
    handRed.style.display = "none";
    handBlue.style.display = "none";
}

function reloadPage() {
    window.location.reload();
}
function updateScore() {
    textScoreRed.innerHTML = "Score: " + scoreRed;
    textScoreBlue.innerHTML = "Score: " + scoreBlue;
}
btnPlay.onclick = startPlay;
btnGiveUp.onclick = reloadPage;
btnAttackAgain.onclick = attackAgain;
btnRock.onclick = function() {attack(this.id)};
btnPaper.onclick = function() {attack(this.id)};
btnScissors.onclick = function() {attack(this.id)};
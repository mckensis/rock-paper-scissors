//Add an event listener to all buttons,
//Set the playerSelection variable based on button pressed
const buttons = document.querySelectorAll('button');
const score = document.createElement('p');
const winner = document.createElement('p');
const info = document.querySelector('.info');
const h3 = document.createElement('h3');
const board = document.querySelector('.board');
const rules = document.querySelector('.rules');

winner.classList.add("winner");
score.classList.add("score");

let playerScore = 0;
let cpuScore = 0;

for (const button of buttons) {
    button.addEventListener("click", (e) => {

        if (playerScore < 5 && cpuScore < 5) {
            const playerSelection = e.target.textContent;
            playRound(playerSelection);
        }
    });
};

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * (options.length - 0) + 0);
    //console.log(`computer choice: ${options[choice]}`);
    return options[choice];
}

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    let roundWinner = [];

    if (computerSelection === playerSelection) {
        roundWinner = ["round tied!", "tie"];
    } else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {
            roundWinner = ["round won! paper beats rock!", "player"];
        } else if (playerSelection === "Scissors") {
            roundWinner = ["round lost! rock beats scissors!", "cpu"];
        }

    } else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {
            roundWinner = ["round won! scissors beats paper!", "player"];
        } else if (playerSelection === "Rock") {
            roundWinner = ["round lost! paper beats rock!", "cpu"];
        }

    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
            roundWinner = ["round won! rock beats scissors!", "player"];
        } else if (playerSelection === "Paper") {
            roundWinner = ["round lost! scissors beats paper!", "cpu"];
        }
    }
    
    if (roundWinner[1] === "cpu") {
        cpuScore++;
    } else if (roundWinner[1] === "player") {
        playerScore++;
    }

    if (rules.parentNode) {
        rules.style.height = "0px";
        rules.parentNode.removeChild(rules);
    }

    h3.textContent = "score:";
    score.textContent = `${playerScore} - ${cpuScore}`;
    winner.textContent = roundWinner[0];
    info.appendChild(h3);
    info.appendChild(score);
    info.appendChild(winner);

    if (cpuScore === 5) {
        winner.classList.add("gameOver");
        winner.textContent = "game over! computer wins!";
        info.removeChild(score);
        info.removeChild(h3);
    } else if (playerScore === 5) {
        winner.classList.add("gameOver");
        winner.textContent = "game over! you win!";
        info.removeChild(score);
        info.removeChild(h3);
    }
};
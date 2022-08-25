//Add an event listener to all buttons,
//Set the playerSelection variable based on button pressed
const buttons = document.querySelectorAll('button');
const score = document.createElement('p');
const winner = document.createElement('p');
const info = document.querySelector('.info');
const board = document.querySelector('.board');
const rules = document.querySelector('.rules');
const playerChoice = document.querySelector('.player');
const cpuChoice = document.querySelector('.cpu');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');

winner.classList.add("winner");

let playerScore = 0;
let cpuScore = 0;

for (const button of buttons) {
    button.addEventListener("click", (e) => {

        if (playerScore < 5 && cpuScore < 5) {
            const playerSelection = e.target.classList.value;
            playRound(playerSelection);
        }
    });
};

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * (options.length - 0) + 0);
    //console.log(`computer choice: ${options[choice]}`);
    return options[choice];
}

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    displayChoice(playerSelection, computerSelection);

    let roundWinner = [];

    if (computerSelection === playerSelection) {
        roundWinner = ["Tie", computerSelection, playerSelection];
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            roundWinner = ["Player wins the", computerSelection, playerSelection];
        } else if (playerSelection === "scissors") {
            roundWinner = ["Computer wins the", computerSelection, playerSelection];
        }

    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            roundWinner = ["Player wins the", computerSelection, playerSelection];
        } else if (playerSelection === "rock") {
            roundWinner = ["Computer wins the", computerSelection, playerSelection];
        }

    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            roundWinner = ["Player wins the", computerSelection, playerSelection];
        } else if (playerSelection === "paper") {
            roundWinner = ["Computer wins the", computerSelection, playerSelection];
        }
    }
    
    if (roundWinner[0].startsWith("Computer")) {
        cpuScore++;
        cScore.textContent = cpuScore;
        pScore.textContent = playerScore;
    } else if (roundWinner[0].startsWith("Player")) {
        playerScore++;
        cScore.textContent = cpuScore;
        pScore.textContent = playerScore;
    }

    winner.textContent = `${roundWinner[0]} round!`;
    info.appendChild(winner);

    if (cpuScore === 5) {
        winner.classList.add("gameOver");
        winner.textContent = "game over! computer wins!";
    } else if (playerScore === 5) {
        winner.classList.add("gameOver");
        winner.textContent = "game over! you win!";
    }
};

function displayChoice(playerSelection, computerSelection) {

    playerChoice.style.backgroundImage = (`url("images/${playerSelection}.png")`);
    cpuChoice.style.backgroundImage = (`url("images/${computerSelection}.png")`);
}
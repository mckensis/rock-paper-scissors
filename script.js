const startingScore = 0;

let computerScore = 0;
let playerScore = 0;

const computerSelection = '';
const playerSelection = '';

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * (options.length - 0) + 0);
    //console.log(`computer choice: ${options[choice]}`);
    return options[choice];
}

function getPlayerChoice() {
    switch(choice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase()) {

        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:
            getPlayerChoice();
    };
    //console.log(`player choice: ${choice}`);
    return choice;
}

function playRound(computerSelection, playerSelection) {

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if (computerSelection === playerSelection) {
        console.log("Tie Round!");

    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            console.log("You Win! Paper beats Rock!");
            return playerScore++;
        } else if (playerSelection === "scissors") {
            console.log("You Lose! Rock beats Scissors!");
            return computerScore++;
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            console.log("You Win! Scissors beats Paper!");
            return playerScore++;
        } else if (playerSelection === "rock") {
            console.log("You Lose! Rock beats Scissors!");
            return computerScore++;
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            console.log("You Win! Rock beats Scissors!");
            return playerScore++;
        } else if (playerSelection === "paper") {
            console.log("You Lose! Scissors beats Paper!");
            return computerScore++;
        }
    }

}

function game() {

    playerScore = startingScore;
    computerScore = startingScore;


    const rounds = 5;

    for (let i = 1; i <= rounds; i++) {
        playRound(computerSelection, playerSelection);
    }

    if (playerScore > computerScore) {
        console.log("%cGame Over! You win!", "color:green");
    } else if (playerScore < computerScore) {
        console.log("%cGame Over! Computer wins!", "color:red");
    } else {
        console.log("%cGame Over! It's a Draw!", "color:orange");
    }
}

console.log("Type %cgame(); %cto begin!", "font-size:16px;", "color:black");
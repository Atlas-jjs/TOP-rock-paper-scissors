// The Odin Project
// Project: Rock Paper Scissors
// Coded on: July 27, 2024

// Score points
let humanScore = 0;
let computerScore = 0;

// Computer Pick
function getComputerChoice() {
    let computerChoice = Math.trunc(Math.random() * 3 + 1);

    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// Player Pick
function getHumanChoice() {
    let choice;

    // Validate user input
    while(true) {
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            break;
        } else {
            alert("Enter a valid choice.")
        }
    }
    return choice;
}

// Play a round
function playRound(humanChoice, computerChoice) {
    // IF COMPUTER CHOICE IS A ROCK
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("It's a tie!");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log ("You Win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log ("You Lose! Rock beats Scissors!");
        computerScore++;
    }

    // IF COMPUTER CHOICE IS A PAPER
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log ("It's a tie!");
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log ("You Win! Scissors beats Paper!");
        humanScore++;
    }

    // IF COMPUTER CHOICE IS A SCISSOR
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log ("You Lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log ("It's a tie!");
    }

}

// Play the game depending on how many rounds
function playGame() {

    // Credit to Philip-11 on GitHub
    let number = prompt("How many rounds are you going to play?")
    let rounds = parseInt(number)

    while (humanScore !== rounds || computerScore !== rounds) {
        const humanPick = getHumanChoice();
        const computerPick = getComputerChoice();
        playRound(humanPick, computerPick)

        if (humanScore === rounds) {
            console.log("Player Wins! Current score is Player: " + humanScore + " Computer: " + computerScore);
            break;
        } else if (computerScore === rounds) {
            console.log("Computer Wins! Current score is Player: " + humanScore + " Computer: " + computerScore);
            break;
        }
    }
    alert("Game has Ended!")
}

playGame();

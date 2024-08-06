// The Odin Project
// Project: Rock Paper Scissors
// Coded on: July 27, 2024

// Score points
let playerScore = 0;
let computerScore = 0;

function playGame(rounds) {

    // Computer pick
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

    // Player pick
    let choiceButtons = document.querySelectorAll('.btn');

    choiceButtons.forEach(button => {
        button.addEventListener('click', e => {
            switch(e.target.id) {
                case 'rockBtn': 
                    playRound('rock', getComputerChoice());
                    break;
                case 'paperBtn': 
                    playRound('paper', getComputerChoice());
                    break;
                case 'scissorsBtn':
                    playRound('scissors', getComputerChoice());
            }
        })
    });

    // Play a round
    let roundResults = document.createElement('div');
    roundResults.style["margin"] = "1em 2em";

    function playRound(playerOption, computerChoice) {

        // IF COMPUTER CHOICE IS A ROCK
        if (playerOption === 'rock' && computerChoice === 'rock') {
            roundResults.textContent = "It's a tie!";
        } else if (playerOption === 'paper' && computerChoice === 'rock') {
            roundResults.textContent = "You Win! Paper beats Rock!";
            playerScore++;
        } else if (playerOption === 'scissors' && computerChoice === 'rock') {
            roundResults.textContent = "You Lose! Rock beats Scissors!";
            computerScore++;
        }

        // IF COMPUTER CHOICE IS A PAPER
        if (playerOption === 'rock' && computerChoice === 'paper') {
            roundResults.textContent = "You Lose! Paper beats Rock!";
            computerScore++;
        } else if (playerOption === 'paper' && computerChoice === 'paper') {
            roundResults.textContent = "It's a tie!";
        } else if (playerOption === 'scissors' && computerChoice === 'paper') {
            roundResults.textContent = "You Win! Scissors beats Paper!";
            playerScore++;
        }

        // IF COMPUTER CHOICE IS A SCISSOR
        if (playerOption === 'rock' && computerChoice === 'scissors') {
            roundResults.textContent = "You Win! Rock beats Scissors!";
            playerScore++;
        } else if (playerOption === 'paper' && computerChoice === 'scissors') {
            roundResults.textContent = "You Lose! Scissors beats Paper!";
            computerScore++;
        } else if (playerOption === 'scissors' && computerChoice === 'scissors') {
            roundResults.textContent = "It's a tie!";
        }

        // Update the player score and computer score
        displayCurrentScore(rounds, playerScore, computerScore);
    }
    document.body.appendChild(roundResults);

    // Display current score
    let displayScore = document.createElement("div");
    displayScore.style["margin"] = "1em 2em";

    // Display final result
    let displayResults = document.createElement("div");
    displayResults.style["margin"] = "1em 2em";

    function displayCurrentScore(rounds, playerScore, computerScore) {
        if (playerScore === rounds || computerScore === rounds) {
            displayResults.textContent = "Game is Finished!"
            document.body.appendChild(displayResults);

            stopGame();
            
            // Display the winner
            let winner = document.createElement("div");
            winner.style["margin"] = "1em 2em";

            if (playerScore > computerScore) {
                winner.textContent = "Player Wins!"
            } else {
                winner.textContent = "Computer Wins!"
            }
            document.body.appendChild(winner);
        }

        displayScore.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    }
    document.body.appendChild(displayScore);

    

    // Stop the game
    function stopGame() {
        choiceButtons.forEach(button => {
            button.disabled = true;

            button.style["background-color"] = 'grey';
            button.style["pointer-events"] = 'none';
        })

        // let playAgainButton = document.createElement("button");
        // playAgainButton.textContent = "Play Again?";
        // playAgainButton.style["margin"] = "1em 2em";
        // document.body.appendChild(playAgainButton);  
        
        // playAgainButton.addEventListener('click', () => {
        //     if (playAgainButton.clicked == true) {
        //         startGame();
        //     }
        // });   
    }
}

function startGame() {
    let number = prompt("How many rounds are you going to play?");
    let rounds = parseInt(number);

    playGame(rounds);
}

startGame();








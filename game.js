function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let displayAnswer = document.querySelector("#results h2");
    let displayScores = document.querySelector("#results h3");

    if (playerScore < 5 && computerScore < 5) {

        if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "Rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
            playerScore++
            if (playerScore === 5) {
                displayAnswer.textContent = `Player wins!`;
            } else {
            displayAnswer.textContent = `You win, ${playerSelection} beats ${computerSelection}.`;
            }
        } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            displayAnswer.textContent = `That's a tie.`;
        } else {
            computerScore++
            if (computerScore === 5) {
                displayAnswer.textContent = `Computer wins!`;
            } else {
            displayAnswer.textContent = `You Lose, ${computerSelection} beats ${playerSelection}.`;
            }
            
        }
        displayScores.textContent = `Player score: ${playerScore}. | Computer score: ${computerScore}.`;

    }
}


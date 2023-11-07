function game() {
    function getPlayerChoice() {
        return prompt("Rock, Paper or Scissors?");
    }

    function getComputerChoice() {
        const choices=["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerSelection, computerSelection) {

        if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "Rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
            alert("You Win");
            playerScore++
        } else  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            alert("That's a tie");
        } else {    
            alert("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore++
        }
    }

    let playerScore = 0;
    let computerScore = 0;

    for (let count = 0; count < 5; count++ ) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("player: " + playerScore);
        console.log("computer: " + computerScore);
    }


}


game();


  
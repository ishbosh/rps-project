// Per Specification: Start with getComputerChoice function.
// Randomly return either Rock, Paper, or Scissors.
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Per Specification: Write a function that plays a single round of Rock Paper Scissors
// Input is Two Parameters - playerSelection and computerSelection
// Return a string declaring the winner of the round
// Return a string declaring a tie if it is a tie
// Return a string indicating player forfeit if something other than rock paper or scissors is input.

function playRound(playerSelection, computerSelection) {
   
    console.log("Computer Choice: " + computerSelection);
    console.log(`Player Choice: ${playerSelection}`);
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "You win! Rock beats Scissors!";
            } else if (computerSelection === "paper") {
                return "You lose! Paper beats Rock!";
            } else {
                return "Tie! Both chose Rock!";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats Rock!";
            } else if (computerSelection === "scissors") {
                return "You lose! Scissors beats Paper!";
            } else {
                return "Tie! Both chose Paper!";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "You win! Scissors beats Paper!";
            } else if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors!";
            } else {
                return "Tie! Both chose Scissors!";
            }
        default:
            return "Player Forfeits! Please input Rock, Paper, or Scissors next time!";
    }

}


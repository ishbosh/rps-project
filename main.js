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
                return "win";
            } else if (computerSelection === "paper") {
                return "lose";
            } else {
                return "tie";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "win";
            } else if (computerSelection === "scissors") {
                return "lose";
            } else {
                return "tie";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "win";
            } else if (computerSelection === "rock") {
                return "lose";
            } else {
                return "tie";
            }
    }
}

// Write a function called game() which calls the playRound() function and plays a 5 round
// game, keeping score and reporting the winner or loser at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    const gameWinner = document.querySelector('#winner');
    const results = document.querySelector('#results');
    // When Player clicks button
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function(e){
            let playerSelection = e.target.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);

            if (result === "win") {
                roundResult = `Player wins this round! Player Score: ${++playerScore} | Computer Score: ${computerScore}`
            } else if (result === "lose") {
                roundResult = `Computer wins this round! Player Score: ${playerScore} | Computer Score: ${++computerScore}`
            } else {
                roundResult = `Tie! No points awarded! Player Score: ${playerScore} | Computer Score: ${computerScore}`
            }

            results.textContent = roundResult;

            if (playerScore == 5 || computerScore == 5) {
                gameWinner.textContent = getWinner(playerScore, computerScore);
            }
            
        });
    });
    
}

// Function that will take two scores as input and return which is the winner
function getWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        return "Player wins!";
    } else if (computerScore == 5) {
        return "Computer wins!";
    } else {
        return;
    }
}

game();


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
        default:
            return "invalid player input";
    }

}

// Write a function called game() which calls the playRound() function and plays a 5 round
// game, keeping score and reporting the winner or loser at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)

        const computerSelection = getComputerChoice();
        const playerSelection = prompt().toLowerCase();

        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            console.log(`Player wins this round! Player Score: ${++playerScore}`);
        } else if (result === "lose") {
            console.log(`Computer wins this round! Computer Score: ${++computerScore}`);
        } else if (result === "tie") {
            console.log(`Tie! No points awarded!`)
        } else {
            console.log(`Invalid Input! The Player forfeits round! Computer Score: ${++computerScore}`);
        }
    }

    // Declare who the winner is
    console.log(getWinner(playerScore, computerScore));
    
}

// Function that will take two scores as input and return which is the winner
function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        // Tie breaker
        return tieBreaker();
    }
}

// Recursively break ties until a winner is decided, then return the winner.
function tieBreaker() {
    console.log(`It's a tie! Tie-breaker round!`);
    
    const computerSelection = getComputerChoice();
    const playerSelection = prompt().toLowerCase();    

    let result = playRound(playerSelection, computerSelection);

    if (result === "win") {
        return "Player Wins!";
    } else if (result === "lose") {
        return "Computer wins!";
    } else {
        console.log(`Another tie!`);
        tieBreaker();
    }
}

game();
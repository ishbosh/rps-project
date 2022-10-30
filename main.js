const gameWinner = document.querySelector('#winner');
const results = document.querySelector('#results');
const choices = document.querySelector('#choices');

function player(playerName, playerScore) {
    this.name = playerName;
    this.score = playerScore;
}

const humanPlayer = new player("player", 0);
const computerPlayer = new player("computer", 0);

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

function playRound(playerSelection) {
   
    let computerSelection = getComputerChoice();
    let roundResult;
    
    choices.querySelector('#computerChoice').textContent = `Computer Chose: ${computerSelection}`;
    choices.querySelector('#playerChoice').textContent = `Player Chose: ${playerSelection}`;

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                addScore(humanPlayer);
                roundResult = `Player wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            } else if (computerSelection === "paper") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`
            } else {
                roundResult = `Tie! No points awarded! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                addScore(humanPlayer);
                roundResult = `Player wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            } else if (computerSelection === "scissors") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`
            } else {
                roundResult = `Tie! No points awarded! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                addScore(humanPlayer);
                roundResult = `Player wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            } else if (computerSelection === "rock") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`
            } else {
                roundResult = `Tie! No points awarded! Player Score: ${humanPlayer.score} | Computer Score: ${computerPlayer.score}`;
            }
            break;
    }

    results.textContent = roundResult;
    gameWinner.textContent = '';
    
    if (humanPlayer.score == 5 || computerPlayer.score == 5){
        gameWinner.textContent = getWinner(humanPlayer.score, computerPlayer.score);
        humanPlayer.score = 0;
        computerPlayer.score = 0;
    }
}

// Write a function called game() which calls the playRound() function and plays a 5 round
// game, keeping score and reporting the winner or loser at the end.
function game() {

    let gameStartText = "Make a selection to start the game";
    let playerSelection;

    results.textContent = gameStartText;

    // When Player clicks button
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function(e){
            playerSelection = e.target.id;
            
            playRound(playerSelection);
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

// Function to change score of either player or computer
function addScore(playerName) {
    playerName.score++;
}

game();


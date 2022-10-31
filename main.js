



// Create player class
function player(playerName, playerScore) {
    this.name = playerName;
    this.score = playerScore;
}

// Add new players
const humanPlayer = new player("player", 0);
const computerPlayer = new player("computer", 0);

// Randomly return either Rock, Paper, or Scissors.
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


// Plays a single round of RPS
function playRound(playerSelection) {

    const winner = choiceContainer.querySelector('#winner');
    let computerSelection = getComputerChoice();
    let roundResult;

    // Select the result to display on the page based on the player and computer choices
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                addScore(humanPlayer);
                roundResult = `Player wins this round!`;
                winner.textContent = "Rock beats Scissors";
            } else if (computerSelection === "Paper") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round!`
                winner.textContent = "Paper beats Rock";
            } else {
                roundResult = `Tie! No points awarded!`;
                winner.textContent = "It's a tie";
            }
            break;
        case "Paper":
            if (computerSelection === "Rock") {
                addScore(humanPlayer);
                roundResult = `Player wins this round!`;
                winner.textContent = "Paper beats Rock";
            } else if (computerSelection === "Scissors") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round!`
                winner.textContent = "Scissors beats Paper";
            } else {
                roundResult = `Tie! No points awarded!`;
                winner.textContent = "It's a tie";
            }
            break;
        case "Scissors":
            if (computerSelection === "Paper") {
                addScore(humanPlayer);
                roundResult = `Player wins this round!`;
                winner.textContent = "Scissors beats Paper";
            } else if (computerSelection === "Rock") {
                addScore(computerPlayer);
                roundResult = `Computer wins this round!`
                winner.textContent = "Rock beats Scissors";
            } else {
                roundResult = `Tie! No points awarded!`;
                winner.textContent = "It's a tie";
            }
            break;
    }

    updatePage(roundResult, playerSelection, computerSelection);
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

    // Add option to restart the game after a winner has been declared
}

// Function that will take two scores as input and return which is the winner
function getWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        return "Player wins the game!";
    } else if (computerScore == 5) {
        return "Computer wins the game!";
    } else {
        return;
    }
}

// Function to change score of either player or computer
function addScore(playerName) {
    playerName.score++;
}

function updatePage(roundResult, playerSelection, computerSelection){

    // Select HTML Elements for manipulation
    const results = document.querySelector('#results');
    const choices = document.querySelector('#choiceContainer');
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');

    const computerChoice = choiceContainer.querySelector('#computer > .choice');
    const playerChoice = choiceContainer.querySelector('#player > .choice');

    // Send the player and computer choices to the page
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;

    // Send the updated scores to the page
    playerScoreDisplay.textContent = humanPlayer.score;
    computerScoreDisplay.textContent = computerPlayer.score;
    
    // Declare winner once one of the players reaches a score of 5
    if (humanPlayer.score == 5 || computerPlayer.score == 5){
        results.textContent = getWinner(humanPlayer.score, computerPlayer.score);
        humanPlayer.score = 0;
        computerPlayer.score = 0;
    } else {
    // Send the result to the page
      results.textContent = roundResult;
    }
}

game();


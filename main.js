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


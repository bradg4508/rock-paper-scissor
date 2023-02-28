// Rock Paper Scissors Game

// Create a function to get the computer's choice of rock, paper, or scissors
// The selection will be chosen at random
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create a function to get a player's choice of rock. paper, or scissors
// The selection will be input from the player

function getPlayerChoice() {
    let choice = prompt("What would you like to choose: Rock, Paper, or Scissors", "");
    return choice.toLowerCase();
}
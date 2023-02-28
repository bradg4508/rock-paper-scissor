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

// Create a function that plays a single round of rock, paper, scissors
// The function should take two parameters - the playerSelection and computerSelection
// It will then return a string that declares the result of the round like so: "You Lose! Paper beats Rock"
// There are responses for when the player either wins, loses, or ties
function playRound (playerPick, computerPick) {
    let playerPickCap = playerPick.charAt(0).toUpperCase() + playerPick.substring(1);
    let computerPickCap = computerPick.charAt(0).toUpperCase() + computerPick.substring(1);
    if ((playerPickCap === "Rock" && computerPickCap === "Scissors") ||
        (playerPickCap === "Paper" && computerPickCap === "Rock") ||
        (playerPickCap === "Scissors" && computerPickCap === "Paper")) {
        return `You Win! ${playerPickCap} beats ${computerPickCap}.`;
    } else if (playerPickCap === computerPickCap) {
        return `It's a tie! You both chose ${playerPickCap}.`
    } else {
        return `You Lose! ${computerPickCap} beats ${playerPickCap}.`;
    }
}

// Test
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
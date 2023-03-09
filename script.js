// Rock Paper Scissors Game

// Create a function to get the computer's choice of rock, paper, or scissors
// The selection will be chosen at random
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Create a function that plays a single round of rock, paper, scissors
// The function should take two parameters - the playerSelection and computerSelection
// It will then return a string that declares the result of the round like so: "You Lose! Paper beats Rock"
// There are responses for when the player either wins, loses, or ties
function playRound(playerPick, computerPick) {
    if (playerPick=== computerPick) {
        return `It's a tie! You both chose ${playerPick}.`
    } else if ((playerPick === "Rock" && computerPick === "Scissors") || 
               (playerPick === "Paper" && computerPick === "Rock") || 
               (playerPick === "Scissors" && computerPick === "Paper")) {
        return `You Win! ${playerPick} beats ${computerPick}.`;
    } else {
        return `You Lose! ${computerPick} beats ${playerPick}.`;
    }
}

// Get a player's choice of rock, paper, or scissors based on the button that is pressed
// Play the user's choice against the computer's choice by calling the playRound() function
// Display the running score, and announce a winner of the game once one player reaches 5 points
// In the end, it will tell the player the final score and whether or not they won
function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.indexOf("Win") >= 0) {
        playerScore++;
    } else if (roundResult.indexOf("Lose") >= 0) {
        computerScore++;
    }
    
    const div = document.querySelector("div");
    // Style the text content in the div to accept line breaks for cleaner output on the screen
    div.style.cssText = "white-space: pre";
    const newLine = "\r\n";
    const currentScore = `PLAYER: ${playerScore}    COMPUTER: ${computerScore}`;
    div.textContent = `${roundResult}${newLine}${currentScore}`;
    
    if (playerScore === 5 || computerScore === 5) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => button.removeEventListener("click", game));
    }

    const finalResult = `${currentScore}${newLine}GAME OVER!`;
    if (playerScore >= 5) {
        div.textContent = `${roundResult}${newLine}${finalResult}${newLine}Congratulations, you have defeated the computer!`;
    } else if (computerScore >= 5) {
        div.textContent = `${roundResult}${newLine}${finalResult}${newLine}The computer has bested you this time.`;
    }    
}

// Call the game() function to play the user's button choice against the computer
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", game));
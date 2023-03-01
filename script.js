// Rock Paper Scissors Game

// Create a function to get the computer's choice of rock, paper, or scissors
// The selection will be chosen at random
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
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
    const choice = prompt("What would you like to choose: Rock, Paper, or Scissors", "");
    return choice.toLowerCase();
}

// Create a function that plays a single round of rock, paper, scissors
// The function should take two parameters - the playerSelection and computerSelection
// It will then return a string that declares the result of the round like so: "You Lose! Paper beats Rock"
// There are responses for when the player either wins, loses, or ties
function playRound (playerPick, computerPick) {
    const playerPickCap = playerPick.charAt(0).toUpperCase() + playerPick.substring(1);
    const computerPickCap = computerPick.charAt(0).toUpperCase() + computerPick.substring(1);

    if (playerPickCap === computerPickCap) {
        return `It's a tie! You both chose ${playerPickCap}.`
    } else if ((playerPickCap === "Rock" && computerPickCap === "Scissors") || 
               (playerPickCap === "Paper" && computerPickCap === "Rock") || 
               (playerPickCap === "Scissors" && computerPickCap === "Paper")) {
        return `You Win! ${playerPickCap} beats ${computerPickCap}.`;
    } else {
        return `You Lose! ${computerPickCap} beats ${playerPickCap}.`;
    }
}

// Create a function to call the playRound() function to simulate a game with multiple rounds
// The game will consist of 5 rounds that provide updates of the score after each round
// Once all rounds are complete, the game will tell the player the final score and whether or not they won
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.indexOf("Win") >= 0) {
            playerScore++;
        } else if (roundResult.indexOf("Lose") >= 0) {
            computerScore++;
        }
        console.log(roundResult);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
    const finalResult = `Final Score\nPlayer: ${playerScore} Computer: ${computerScore}`;
    if (playerScore === computerScore) {
        console.log(`${finalResult}\nThe computer is truly your equal.`);
    } else if (playerScore > computerScore) {
        console.log(`${finalResult}\nCongratulations, you have defeated the computer!`);
    } else {
        console.log(`${finalResult}\nThe computer has bested you this time.`);
    }
}

// Play the game for 5 rounds
game();
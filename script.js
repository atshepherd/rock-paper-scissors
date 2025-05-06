// Create a new function named getComputerChoice
function getComputerChoice() {

// Return a random value of rock, paper, or scissors (1, 2, or 3)
let computerChoice = Math.floor((Math.random() * 3) + 1);

    switch(computerChoice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }

}

// 
// console.log(getComputerChoice()); for debug

// Create a new function named getHumanChoice
function getHumanChoice() {
    // Take user input, assume correct input
    let humanChoice = prompt("Please enter your choice of Rock, Paper, or Scissors.");
    return humanChoice;
}

// console.log(getHumanChoice()); debug

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// Create a function named playRound, takes parameters humanChoice and computerChoice

// Make humanChoice case-insensitive

// Print an outcome statement

// Increment score based on winner
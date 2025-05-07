// Create a new function named getComputerChoice
function getComputerChoice() {

// Return a random value of rock, paper, or scissors (1, 2, or 3)
let computerChoice = Math.floor((Math.random() * 3) + 1);

    switch(computerChoice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }

}

// Create a new function named getHumanChoice
function getHumanChoice() {

    // Take user input, assume correct input
    let humanChoice = prompt("Please enter your choice of Rock, Paper, or Scissors.");
    return humanChoice;
}

// Create a function named playRound, takes parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {

// Make humanChoice case-insensitive
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

// Tie condition
if ( (humanChoice === "rock" && computerChoice == "rock") || (humanChoice === "paper" && computerChoice == "paper") || (humanChoice === "scissors" && computerChoice == "scissors")) {
    console.log("It's a tie!");
}

//If player chooses rock
else if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore++;
}
else if (humanChoice === "rock" && computerChoice == "paper") {
    console.log("You lose. Paper beats rock.");
    computerScore++;
}

//If player chooses paper
else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats rock.");
    humanScore++;
}
else if (humanChoice === "paper" && computerChoice == "scissors") {
    console.log("You lose. Scissors beats paper.");
    computerScore++;
}

//If player chooses scissors
else if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats paper.");
    humanScore++;
}
else if (humanChoice === "scissors" && computerChoice == "rock") {
    console.log("You lose. Rock beats scissors");
    computerScore++;
}

}

// Create a new function named playGame
function playGame() {
    
}

//Move playRound and score variables so they are declared within playGame

// Play 5 rounds by calling playRound 5 times

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0
let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

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

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0
let humanScore = 0;
let computerScore = 0;

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
else if (humanChoice === "rock" && computerChoice == "paper") {
    console.log("You lose. Paper beats rock.");
}
else if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats scissors!");
}

//If player chooses paper
else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats rock.");
}
else if (humanChoice === "paper" && computerChoice == "scissors") {
    console.log("You lose. Scissors beats paper.");
}

// Increment score based on winner

}

playRound(getHumanChoice(), getComputerChoice());


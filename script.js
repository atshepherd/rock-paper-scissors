// Create a new function named getComputerChoice
function getComputerChoice() {

// Return a random value of rock, paper, or scissors (1, 2, or 3)
let computerChoice = Math.floor((Math.random() * 3) + 1);

    // return 1 of three possible choices based on the number generated
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

function keepScore(humanScore, computerScore) {
    // Announce a winner and output the score of both players
    if (humanScore == 5 || computerScore == 5) {
        announceWinner(humanScore, computerScore);
    }
}

function announceWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
    console.log(`You win! Your score was ${humanScore}, and the computer's score was ${computerScore}.`);
    }
    else if (computerScore > humanScore) {
    console.log(`You lose. Your score was ${humanScore}, and the computer's score was ${computerScore}.`);
    }
    else if (humanScore === computerScore) {
    console.log(`It's a tie! Your score was ${humanScore}, and the computer's score was ${computerScore}.`);
    }
}

// Create a function named playRound, takes parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
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

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);
});

paperBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);
});
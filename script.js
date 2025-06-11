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
    let roundWinner = document.querySelector(".winner");

    if (humanScore > computerScore) {
    roundWinner.textContent = `The results are in. You win! Your score was ${humanScore}, and the computer's score was ${computerScore}.`;
    }
    else if (computerScore > humanScore) {
    roundWinner.textContent = `The results are in. You lost. Your score was ${humanScore}, and the computer's score was ${computerScore}.`;
    }
}

// Create a function named playRound, takes parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {

let roundResults = document.querySelector(".results");

// Tie condition
if ( (humanChoice === "rock" && computerChoice == "rock") || (humanChoice === "paper" && computerChoice == "paper") || (humanChoice === "scissors" && computerChoice == "scissors")) {
    roundResults.textContent = `It's a tie! The score is ${humanScore} to ${computerScore}.`;
}

//If player chooses rock
else if (humanChoice === "rock" && computerChoice == "scissors") {
    humanScore++;
    roundResults.textContent = `You won that round! Rock beats scissors! The score is ${humanScore} to ${computerScore}.`;
}
else if (humanChoice === "rock" && computerChoice == "paper") {
    computerScore++;
    roundResults.textContent = `You lost that round. Paper beats rock. The score is ${humanScore} to ${computerScore}.`;
}

//If player chooses paper
else if (humanChoice === "paper" && computerChoice == "rock") {
    humanScore++;
    roundResults.textContent = `You won that round! Paper beats rock. The score is ${humanScore} to ${computerScore}.`;
}
else if (humanChoice === "paper" && computerChoice == "scissors") {
    computerScore++;
    roundResults.textContent = `You lost that round. Scissors beats paper. The score is ${humanScore} to ${computerScore}.`;
}

//If player chooses scissors
else if (humanChoice === "scissors" && computerChoice == "paper") {
    humanScore++;
    roundResults.textContent = `You won that round! Scissors beats paper. The score is ${humanScore} to ${computerScore}.`;
}
else if (humanChoice === "scissors" && computerChoice == "rock") {
    computerScore++;
    roundResults.textContent = `You lost that round. Rock beats scissors. The score is ${humanScore} to ${computerScore}.`;
}

}

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0
let humanScore = 0;
let computerScore = 0;
let roundReset = document.querySelector(".reset");

rockBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";

    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);

    if (humanScore >= 5 || computerScore >= 5 ) {
        humanScore = 0;
        computerScore = 0;
        roundReset.textContent = "The score has been reset. Choose an option to play again!";
    }
});

paperBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);

    if (humanScore >= 5 || computerScore >= 5 ) {
        humanScore = 0;
        computerScore = 0;
        roundReset.textContent = "The score has been reset. Choose an option to play again!";
    }
});

scissorsBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    keepScore(humanScore, computerScore);

    if (humanScore >= 5 || computerScore >= 5 ) {
        humanScore = 0;
        computerScore = 0;
        roundReset.textContent = "The score has been reset. Choose an option to play again!";
    }
});
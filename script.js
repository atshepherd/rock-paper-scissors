// Create a new function named getComputerChoice
function getComputerChoice() {

// Return a random value of rock, paper, or scissors (1, 2, or 3)
let randNum = Math.floor((Math.random() * 3) + 1);

    switch(randNum){
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

// console.log(getComputerChoice()); for debug

// Create a new function named getHumanChoice
function getHumanChoice() {
    let choice = prompt("Please enter your choice of Rock, Paper, or Scissors.");
    return choice;
}

// Take user input, assume correct input
console.log(getHumanChoice());

// Create two variables named humanScore and computerScore
// Initialize these variables with the value of 0


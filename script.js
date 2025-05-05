// Create a new function named getComputerChoice
function getComputerChoice() {

// Return a random value of rock, paper, or scissors (1, 2, or 3)
    return Math.floor((Math.random() * 3) + 1);
    
}

console.log(getComputerChoice());
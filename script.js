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

console.log(getComputerChoice());
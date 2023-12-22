function playRound(playerSelection, computerSelection) {
    // use prompt() to get player input and store it in playerSelection
    playerSelection = prompt("What is your selection?");
    
    // make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    //if win --> str
    
    //if lose --> str
    
    //if tie --> replay the round --> playRound(playerSelection, computerSelection)
    
    // return winner "You Lose! Paper beats Rock"
}

function getComputerChoice() {
    //declare array with 3 choices
    let choices = ['rock', 'paper', 'scissors'];

    //randomise a selection
    choiceIndex = Math.floor(Math.random() * choices.length);
    console.log(choiceIndex);
    console.log(choices[choiceIndex]);
} 


function game() {
    //loop playRound for 5 rounds

    //keep score
    
    //announce
}
function playRound(playerSelection, computerSelection) {
    // use prompt() to get player input and store it in playerSelection
    playerSelection = prompt("What is your selection?");
    
    // make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    //get computerSelection
    computerSelection = getComputerChoice();

    //if win --> str, if paper rock, rock scissors and scissors paper
    //if lose --> str, if rock paper, scissors rock and paper scissors
    // else replay the round --> playRound(playerSelection, computerSelection)
    if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        alert(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'scissors')) {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    } else {
        playRound(playerSelection, computerSelection);
    }
}

function getComputerChoice() {
    //declare array with 3 choices
    let choices = ['rock', 'paper', 'scissors'];

    //randomise a selection
    choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
} 


function game() {
    //loop playRound for 5 rounds

    //keep score
    
    //announce
}
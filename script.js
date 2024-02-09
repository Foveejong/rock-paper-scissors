let wins = 0;

//execute playround when each button is pressed

//addeventlistener on the div with buttons
const buttons = document.querySelector(".buttons");

//upon click, playround
buttons.addEventListener("click", function (e) {
    playRound(e.target.value, getComputerChoice)
});

// buttons.addEventListener("click", e => console.log(e.target.value));


function playRound(playerSelection, computerSelection) {
    // use prompt() to get player input and store it in playerSelection
    // playerSelection = prompt("What is your selection?");

    // make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    //get computerSelection
    computerSelection = getComputerChoice();

    //if win --> str, if paper rock, rock scissors and scissors paper
    //if lose --> str, if rock paper, scissors rock and paper scissors
    // else replay the round --> playRound(playerSelection, computerSelection)
    if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        wins++;
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


// function game() {
//     wins = 0;
//     //loop playRound for 5 rounds
//     for (let r = 0; r < 5; r++) {
//         playRound();
//     }
    
//     //announce
//     if (wins >= 3) {
//         alert("You Won!");
//     } else {
//         alert("You Lost!");
//     }
// }
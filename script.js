let playerWins = 0;
let compWins = 0;
let rounds = 0;

//execute playround when each button is pressed

//addeventlistener on the div with buttons
const buttons = document.querySelector(".buttons");

//create div for displaying results
const results = document.createElement('div');

// create and add textnode to display results
const node = document.createTextNode("");
results.appendChild(node);

// record scores
const playerScore = document.querySelector("span#playerscore");
const compScore = document.querySelector("span#computerscore");

//append results to end of document
document.body.appendChild(results);

//upon click, playround
buttons.addEventListener("click", function (e) {
    //get button value and getcomputerchoice
    playRound(e.target.value, getComputerChoice);
    if (compWins === 5 || playerWins === 5){
        checkWinner(playerWins);
    }
});

function playRound(playerSelection, computerSelection) {
    // make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    //get computerSelection
    computerSelection = getComputerChoice();

    //if win --> str, if paper rock, rock scissors and scissors paper
    //if lose --> str, if rock paper, scissors rock and paper scissors
    // else replay the round --> playRound(playerSelection, computerSelection)
    if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerWins++, rounds++;
        // create and add textnode to display results
        node.nodeValue = `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'scissors')) {
        compWins++, rounds++;
        node.nodeValue = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        node.nodeValue = `Tie! Choose Again!`;
    }
    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
}

function getComputerChoice() {
    //declare array with 3 choices
    let choices = ['rock', 'paper', 'scissors'];

    //randomise a selection
    choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
} 

function checkWinner(playerWins) {
    // update node to announce winner
    if (playerWins >= 3) {
        node.nodeValue = `You Won! Refresh to play again.`
    } else {
        node.nodeValue = `You Lost! Refresh to play again.`
    }

    // disable buttons to stop players from playing after someone reaches 5 points
    btnArr = Array.from(document.querySelectorAll("button")).forEach(element => {
        element.setAttribute("disabled", "true");
    });
}
// function game() {
//     playerWins = 0;
//     //loop playRound for 5 rounds
//     for (let r = 0; r < 5; r++) {
//         playRound();
//     }
    
//     //announce
//     if (playerWins >= 3) {
//         alert("You Won!");
//     } else {
//         alert("You Lost!");
//     }
// }
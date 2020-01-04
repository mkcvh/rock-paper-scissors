//initialize variables
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// starts game
let startgame = document.querySelector('#startGame');
startgame.addEventListener('click', () => {
    var buttons = document.querySelector('#buttons');
    let startGame = document.querySelector('#startGame');
    startGame.style.visibility = "hidden";
    buttons.style.visibility = "visible";
    return;
});

// computer's play
let computerSelection;
function computerPlay() {
    let rand = Math.random();
    if (rand < (1/3)) computerSelection = 'rock';
    else if (rand >= (1/3) && rand < (2/3))  computerSelection = 'paper';
    else  computerSelection = 'scissors';
}

// player makes a play
let playerSelection;
let rock = document.querySelector("#rock");
rock.addEventListener('click', () => {playerSelection = 'rock';});
let paper = document.querySelector("#paper");
paper.addEventListener('click', () => {playerSelection = 'paper';})
let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {playerSelection = 'scissors';})
let buttons = document.querySelectorAll('.gameButtons');

buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        computerPlay();
        notifyChoices();
        playRound(playerSelection, computerSelection);
        notifyScores();
        checkScore();
        
    })
})

// notify the players' choices
let choicesContainer = document.querySelector('#round');

function notifyChoices() {
    choicesContainer.textContent = "You played " + playerSelection + ", the computer played " + computerSelection + ".";
}

// update scoreboard
let displayPlayerScore = document.querySelector('#playerScore');
let displayComputerScore = document.querySelector('#computerScore')
function notifyScores() {
    displayPlayerScore.textContent = "Human: " + playerScore.toString();
    displayComputerScore.textContent = "Computer: " + computerScore.toString();
}

// determines the winner of one round and keeps score
let roundResult = document.querySelector('#roundResult');
function playRound(playerSelection, computerSelection) {
    // tie
    if (playerSelection == computerSelection) {
        roundResult.textContent = "It's a tie!"
    } 
    // player wins
    else if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        playerScore++;
        roundResult.textContent = capitalize(playerSelection) + " beats " + computerSelection + "! Point to you!";
    }
    // player loses
    else {
      computerScore++;
      roundResult.textContent = "Uh oh! " + capitalize(computerSelection) + " beats " + playerSelection;
    
}
}

// capitalizes a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

// checks score for winner
let button = document.getElementById('playAgain');
function checkScore() {
    if (computerScore == 5) {
        alert("You lose the game!");
        button.style.backgroundColor = 'red';
        endGame();
    } else if (playerScore == 5) {
        alert("You win!");
        button.style.backgroundColor = 'green';
        endGame();
    }
}

// ends the game and asks the player to play again
function endGame() {
    displayPlayerScore.textContent = "";
    displayComputerScore.textContent = "";
    roundResult.textContent = "";
    choicesContainer.textContent = "";
    let buttons = document.getElementById('buttons');
    buttons.style.visibility = "hidden";
    button.style.visibility = "visible";
    return;
}

// play again button
button.addEventListener('click', () => {location.reload()} )

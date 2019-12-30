let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
    let rand = Math.random();
    if (rand < (1/3)) return 'rock';
    else if (rand >= (1/3) && rand < (2/3)) return 'paper';
    else return 'scissors';
}

function computerPlayNotify(playerSelection, computerSelection) {
   let para = document.createElement('p');
    let message = document.createTextNode("Computer played: " + computerSelection + 'You played: ' + playerSelection);
    para.appendChild(message);
    para.setAttribute('id', 'message');
    let div = document.getElementById('messages');
    let child = document.getElementById('message');
    g = div.replaceChild(para, child);
}

function cleanUp() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    return;
}

function playedRock() {
    playRound('rock', computerPlay());
    return;
}

function playedPaper() {
   playRound('paper', computerPlay());
    return;
}

function playedScissors() {
    playRound('scissors', computerPlay());
    return;
}

function playRound(playerSelection, computerSelection) {
    // tie
    computerPlayNotify(playerSelection, computerSelection);
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        game();
        return;
    } 
    // player wins
    else if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        playerScore++;
        console.log(playerSelection + " beats " + computerSelection + "! Point to you!");
        game();
        return;
    }
    // player loses
    else {
      computerScore++;
      console.log("You lose! " + computerSelection + " beats " + playerSelection);
        game();
        return;}
    }

function startGame() {
    var buttons = document.getElementById('buttons');
    let startGame = document.getElementById('startGame');
    startGame.style.visibility = "hidden";
    buttons.style.visibility = "visible";
    return;
}

function game() {
    if (computerScore + playerScore == 5) {
        if (computerScore > playerScore) {
            alert("You lose the game!");
            return;
        } else {
            alert("You win!");
            return;
        }
    }
}

















































/*
function playerPlay() {
    return prompt("What will it be? Rock, paper, scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // tie
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } 
    
    // player wins
    else if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        playerScore++;
        return (playerSelection + " beats " + computerSelection + "! You win!");}
    
    // player loses
    else {
      computerScore++;
      return ("You lose! " + computerSelection + " beats " + playerSelection);}
    }

    function game() {
        for ( ;  rounds < 5;  ) {
            playRound(playerPlay(), computerPlay());
            rounds = computerScore + playerScore;
            console.log("Your score: " + playerScore);
            console.log("Computer score: " + computerScore);
        };
        if (computerScore > playerScore) {
            alert("You lose, sorry!");
        } else {
            alert("You win!");
        }
    }

*/
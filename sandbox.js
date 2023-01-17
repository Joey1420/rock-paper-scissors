// user choice
const userChoice = prompt ("Would you like rock, paper, or scissors?");

// computer choices
function computerChoice(max){
    const choice = ["rock", "paper", "scissors"];
    return Math.floor(Math.random(0) * 3);
}
// if else functions for game
function chooseWinner() {
if (computerChoice === playerChoice){
    alert console.log ("Draw!"); 
  }
}

if (playerChoice === "rock"){
    if (computerChoice === "paper"){
    alert console.log ("You lose! Paper beats rock");
    } else { 
    console.log ("You win!");
  }
}

if (playerChoice === "scissors"){
  if (computerChoice === "rock"){
    alert console.log ("You lose! Rock beats scissors");
  } else {
    console.log("You win!");
  }
}

if (playerChoice === "paper"){
  if (computerChoice === "scissors"){
    alert console.log ("You lose! Scissors beats paper");
  } else {
    console.log("You win!");
  }
}
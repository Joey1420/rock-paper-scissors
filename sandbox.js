const userChoice = prompt ("rock, paper, or scissors?");

// computer choices
function computerChoice(max){
    const choice = ["rock", "paper", "scissors"];
    return Math.floor(Math.random(0) * 3);
}
// if else functions for game
function chooseWinner() {
if (computerChoice === playerChoice){
    return console.log ("Draw!"); 
  }
}

if (playerChoice === "rock"){
    if (computerChoice === "paper"){
    return console.log ("You lose!");
    } else { 
    console.log ("You win!");
  }
}

if (playerChoice === "scissors"){
  if (computerChoice === "rock"){
    return console.log ("You lose!");
  } else {
    console.log("You win!");
  }
}

if (playerChoice === "paper"){
  if (computerChoice === "scissors"){
    return console.log ("You lose!");
  } else {
    console.log("You win!");
  }
}
// computer choices
function computerChoice(max){
    const choice = ["rock", "paper", "scissors"];
    return Math.floor(Math.random(0) * 3);
}
// if else functions for game
function chooseWinner() {
if (computerChoice === playerChoice){
    return "Draw!";
  }
}
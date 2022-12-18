function computerChoice(max){
    const choice = ["rock", "paper", "scissors"];
    return Math.floor(Math.random(0) * 3);
}

if (computerChoice === playerChoice){
    alert = "Draw!";
}

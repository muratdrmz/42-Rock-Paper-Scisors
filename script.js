const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const handsDiv = document.getElementById("hands");
const rpsButtons = document.querySelectorAll(".rpsButton");
const endGameButton = document.getElementById("endGameButton");

let playerScore = 0;

function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = rpsChoices[randomNum];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    score = 0;
    result.innerText = "It's a Draw!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
    result.innerText = "You Win!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
    result.innerText = "You Win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
    result.innerText = "You Win!";
  } else {
    score = -1;
    result.innerText = "You Lose!";
  }
  return score;
}

 rpsButtons.forEach((rpsButton)=>{
  rpsButton.addEventListener('click',()=>{
    const playerChoice=rpsButton.value;
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice);
    playerScore += score;
    handsDiv.innerText = `👱 ${playerChoice} vs  ${computerChoice}🤖 `;
    playerScoreDiv.innerText = `Your score: ${playerScore}`;
  })
 })

endGameButton.addEventListener('click',endGame)

function endGame() {
  playerScoreDiv.innerText = "";
  result.innerText = "";
  hands.innerText = "";
}


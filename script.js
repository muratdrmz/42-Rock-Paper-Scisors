const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const handsDiv = document.getElementById("hands");
const rpsButtons = document.querySelectorAll(".rpsButton");
const endGameButton = document.getElementById("endGameButton");

function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = rpsChoices[randomNum];
  return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function getResult(playerChoice, computerChoice) {
  
  if (playerChoice === computerChoice) {
    result.innerText = "It's a Draw!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    playerScore++;
    result.innerText = "You Win!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    playerScore++;
    result.innerText = "You Win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    playerScore++;
    result.innerText = "You Win!";
  } else {
    computerScore ++;
    result.innerText = "You Lose!";
  } 
}

 rpsButtons.forEach((rpsButton)=>{
  rpsButton.addEventListener('click',()=>{
    const playerChoice=rpsButton.value;
    const computerChoice=getComputerChoice();
    getResult(playerChoice, computerChoice);  
    playerScoreDiv.innerText = `Your Score: ${playerScore} && Computer Score:${computerScore}`;
    handsDiv.innerText = `👱 ${playerChoice} vs  ${computerChoice}🤖 `; 
    if(computerScore===10){
      playerScoreDiv.innerText = "Computer Wins";
      resultDiv.innerText = "Game Over";
      handsDiv.innerText = "🤖";
    }else if(playerScore===10){
      playerScoreDiv.innerText = "You Won";
      resultDiv.innerText = "Game Over";
      handsDiv.innerText = "👱";
      
    }
   })
 })

endGameButton.addEventListener('click',endGame)

function endGame() {
  playerScoreDiv.innerText = "";
  resultDiv.innerText = "";
  handsDiv.innerText = "";
}


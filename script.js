/*
declare vars for eah element that will be interacted with

 - only start game can be clicked upon loading
 - array can hold comp and user scroes, both start at 0
 - computer needs rock, paper, scissors array and random num generated on turn

*/

const startGameBtn = document.getElementById("startGame");
const resetGameBtn = document.getElementById("resetGame");
const messageBox = document.getElementById("messageBox");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let choices = document.querySelectorAll(".choice");

const playerScoreEl = document.getElementById("playerScoreEl");
const compScoreEl = document.getElementById("compScoreEl");

let playerScore = 0;
let compScore = 0;

playerScoreEl.innerText = playerScore;
compScoreEl.innerText = compScore;

const playerChoice = function () {
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      return playRound(choice.id, compChoice());
    });
  });
};

//could this be an object containing name and images? Display on load, compturn and userturn can be determined by an object.name property?
const compChoices = ["rock", "paper", "scissors"];

// const choices = {
//   rock: {
//     choiceName: "rock",
//     choiceAsset: "/assets/rock.png",
//   },
//   paper: {
//     choiceName: "paper",
//     choiceAsset: "/assets/paper.png",
//   },
// };

const playRound = function (playerSelection, compSelection) {
  if (playerSelection === compSelection) {
    // messageBox.innerText = `It's a tie`;
  } else if (
    (playerSelection === "rock" && compSelection === "scissors") ||
    (playerSelection === "paper" && compSelection === "rock") ||
    (playerSelection === "scissors" && compSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.innerText = playerScore;
  } else {
    compScore++;
    compScoreEl.innerText = compScore;
  }
};

const compChoice = function () {
  let randomNum = Math.floor(Math.random() * compChoices.length);
  return compChoices[randomNum];
};

const resetGame = function () {
  playerScore = 0;
  compScore = 0;

  playerScoreEl.innerText = 0;
  compScoreEl.innerText = 0;
};

resetGameBtn.addEventListener("click", resetGame);

playerChoice();

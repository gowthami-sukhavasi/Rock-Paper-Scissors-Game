let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
let userscoreDisplay = document.getElementById("user-score");
let compscoreDisplay = document.getElementById("comp-score");

const generateComputerChoice = () => {
  const select = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return select[index];
};
const drawGame = () => {
  console.log("Draw game");
  msg.innerText = "It's a draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! Your choice ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userscoreDisplay.innerText = userScore;
  } else {
    msg.innerText = `You lost. Computer choice ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compscoreDisplay.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = generateComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

document.getElementById("user-score");

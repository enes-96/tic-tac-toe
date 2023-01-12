const player1 = "x";
const player2 = "o";
let player1Begins = true;
const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const userScore = [];
const user2Score = [];

function eventHandle(e) {
  const cell = e.target;
  if (player1Begins === true) {
    cell.innerText = "x";
    userScore.push(cell.id);
    console.log(userScore);
    // eslint-disable-next-line no-return-assign
    return (player1Begins = false);
  }
  if (player1Begins === false) {
    cell.innerText = "o";
    user2Score.push(cell.id);
    console.log(user2Score);
    return (player1Begins = true);
  }
}

function startGame() {
  const boardCells = document.querySelectorAll(".grid-item");
  boardCells.forEach((cell) => {
    cell.addEventListener("click", eventHandle, { once: true });
  });
}
startGame();

const GAMEBOARD = [];
const GAMEBOARD2 = [];
const gameboardSize = 3;
const squareSize = 200;
let gameFinished = false;
let winningLine = undefined;
let itsThePlayersTurn = true;

function sleep(t) {
  const start = Date.now();
  while (Date.now() - start < t);
}

// const winningLines = [
//   [
//     [0, 0],
//     [0, 1],
//     [0, 2],
//   ],
//   [
//     [1, 0],
//     [1, 1],
//     [1, 2],
//   ],
//   [
//     [2, 0],
//     [2, 1],
//     [2, 2],
//   ],

//   [
//     [0, 0],
//     [1, 0],
//     [2, 0],
//   ],
//   [
//     [0, 2],
//     [1, 2],
//     [2, 2],
//   ],
//   [
//     [0, 2],
//     [1, 2],
//     [2, 2],
//   ],

//   [
//     [0, 0],
//     [1, 1],
//     [2, 2],
//   ],
//   [
//     [0, 2],
//     [1, 1],
//     [2, 0],
//   ],
// ];


function draw(){
  if(!itsThePlayersTurn && !gameFinished){
    sleep(1000);
    randomO();
  }
  drawGameboard();
  checkWinningLines();
}

function checkWinningLines() {
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[1][0].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[2][0].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 0;
  }
  if (
    GAMEBOARD[0][1].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[0][1].symbol == GAMEBOARD[2][1].symbol &&
    GAMEBOARD[0][1].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 1;
  }
  if (
    GAMEBOARD[0][2].symbol == GAMEBOARD[1][2].symbol &&
    GAMEBOARD[0][2].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[0][2].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 2;
  }
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[0][1].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[0][2].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 3;
  }
  if (
    GAMEBOARD[1][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[1][0].symbol == GAMEBOARD[1][2].symbol &&
    GAMEBOARD[1][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 4;
  }
  if (
    GAMEBOARD[2][0].symbol == GAMEBOARD[2][1].symbol &&
    GAMEBOARD[2][0].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[2][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 5;
  }
  if (
    GAMEBOARD[2][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[2][0].symbol == GAMEBOARD[0][2].symbol &&
    GAMEBOARD[2][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 6;
  }
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 7;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background(225);
  gameboardCreator();
}

function drawGameboard() {
  textSize(250);
  fill(255);
  GAMEBOARD.forEach((row) => {
    row.forEach((cell) => {
      text(
        cell.symbol,
        cell.x + (cell.symbol == "X" ? 15 : 2),
        cell.y + squareSize - 10
      );
    });
  });
}

function gameboardCreator() {
  for (let x = 0; x < gameboardSize; x++) {
    GAMEBOARD.push([]);
    for (let y = 0; y < gameboardSize; y++) {
      fill(0);
      stroke(120);
      square(
        x * squareSize + width / 3,
        y * squareSize + height / 5,
        squareSize
      );
      const squareCoordinate = {
        x: x * squareSize + width / 3,
        y: y * squareSize + height / 5,
        symbol: "",
      };
      GAMEBOARD[GAMEBOARD.length - 1].push(squareCoordinate);
    }
  }
}

function mousePressed() {
  if (gameFinished) {
    return;
  }
  if(!itsThePlayersTurn){
    return;
  }

  for (let x = 0; x < GAMEBOARD.length; x++) {
    for (let y = 0; y < GAMEBOARD[x].length; y++) {
      let currentCell = GAMEBOARD[x][y];
      if (
        mouseX > currentCell.x &&
        mouseX < currentCell.x + squareSize &&
        mouseY > currentCell.y &&
        mouseY < currentCell.y + squareSize
      ) {
        if (currentCell.symbol == "") {
          currentCell.symbol = "X";
          checkWinningLines();
          itsThePlayersTurn = false;
          // if (!gameFinished) {
          //   // sleep(2000);
          //   randomO();
          //   checkWinningLines();
          // }
          break;
        }
      }
    }
  }

  // if (gameFinished) {
  //   drawWinningLine(100, 100, 500, 500);
  // }
  drawGameboard();
  if (winningLine != undefined) {
    drawWinningLine();
  }
}

function randomO() {
  let x;
  let y;
  let counter = 0;
  let currentCell;
  do {
    counter++;
    x = floor(random(3));
    y = floor(random(3));
    currentCell = GAMEBOARD[x][y];
  } while (currentCell.symbol != "" && !gameFinished && counter < 100);
  if (currentCell.symbol == "") {
    currentCell.symbol = "O";
    itsThePlayersTurn = true;
  }
}

function drawWinningLine() {
  push();
  translate(width / 3, height / 5);
  stroke(255, 0, 0);
  strokeWeight(10);
  switch (winningLine) {
    case 0:
      line(0, 100, 600, 100);
      break;
    case 1:
      line(0, 100, 600, 100);
      break;
    case 2:
      line(0, 100, 600, 100);
      break;
    case 3:
      line(0, 100, 600, 100);
      break;
    case 4:
      line(0, 100, 600, 100);
      break;
    case 5:
      line(0, 100, 600, 100);
      break;
    case 6:
      line(0, 100, 600, 100);
      break;
    case 7:
      line(0, 100, 600, 100);
      break;
    default:
      break;
  }
  pop();
}

const GAMEBOARD = [];
const gameboardSize = 3;
const squareSize = 200;
let gameFinished = false;
let winningLine = undefined;
let itsThePlayersTurn = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background(225);
  gameboardCreator();
  textSize(50)
  text("TIC TAC TOE",width/2-100,20,1500,50)
  textSize(20)
  text("Please click with the mouse on the gameboard and start the game. You are X and computer is O.",width/2-370,90,1500,50)
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
  if (!itsThePlayersTurn) {
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
          break;
        }
      }
    }
  }

  drawGameboard();

  if (winningLine != undefined) {
    drawWinningLine();
  }
}

function sleep(t) {
  const start = Date.now();
  while (Date.now() - start < t);
}

function draw() {
  if (!itsThePlayersTurn && !gameFinished) {
    sleep(1000);
    randomO();
  }
  
  checkWinningLines();
  drawGameboard();
}

function checkWinningLines() {
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[1][0].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[2][0].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 1;
  }
  if (
    GAMEBOARD[0][1].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[0][1].symbol == GAMEBOARD[2][1].symbol &&
    GAMEBOARD[0][1].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 2;
  }
  if (
    GAMEBOARD[0][2].symbol == GAMEBOARD[1][2].symbol &&
    GAMEBOARD[0][2].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[0][2].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 3;
  }
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[0][1].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[0][2].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 4;
  }
  if (
    GAMEBOARD[1][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[1][0].symbol == GAMEBOARD[1][2].symbol &&
    GAMEBOARD[1][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 5;
  }
  if (
    GAMEBOARD[2][0].symbol == GAMEBOARD[2][1].symbol &&
    GAMEBOARD[2][0].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[2][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 6;
  }
  if (
    GAMEBOARD[2][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[2][0].symbol == GAMEBOARD[0][2].symbol &&
    GAMEBOARD[2][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 7;
  }
  if (
    GAMEBOARD[0][0].symbol == GAMEBOARD[1][1].symbol &&
    GAMEBOARD[0][0].symbol == GAMEBOARD[2][2].symbol &&
    GAMEBOARD[0][0].symbol != ""
  ) {
    gameFinished = true;
    winningLine = 8;
  }
}

function drawWinningLine() {
  push();
  translate(width / 3, height / 5);
  strokeWeight(20);
  stroke(255, 0, 0);
  switch (winningLine) {
    case 1:
      line(50, 100, 550, 100); //789
      break;
    case 2:
      line(50, 300, 550, 300); //456
      break;
    case 3:
      line(50, 500, 550, 500); //123
      break;
    case 4:
      line(100, 50, 100, 550); //741
      break;
    case 5:
      line(300, 50, 300, 550); //852
      break;
    case 6:
      line(500, 50, 500, 550); //963
      break;
    case 7:
      line(550, 50, 50, 550); //951
      break;
    case 8:
      line(50, 50, 550, 550); //753
      break;
    default:
      break;
  }
  pop();
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

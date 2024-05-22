const BOARD_SQUARE_ARR_2D = [];
const SQUARE_ARR_2D = [];
const BOARD_SQUARE_SIZE = 30;
let running = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  frameRate(10);
  createSquareBoard();
}

function draw() {
  clear();
  if (running) {
    checkNeighbourAlive();
    arrayAssingment();
  }

  cellPaint();
}

function createSquareBoard() {
  for (
    let x = 1;
    x + BOARD_SQUARE_SIZE < windowWidth - 1;
    x += BOARD_SQUARE_SIZE + 1
  ) {
    BOARD_SQUARE_ARR_2D.push([]);
    SQUARE_ARR_2D.push([]);
    for (
      let y = 1;
      y + BOARD_SQUARE_SIZE < windowHeight - 1;
      y += BOARD_SQUARE_SIZE + 1
    ) {

      fill(225);
      stroke(120);
      square(x, y, BOARD_SQUARE_SIZE);

      const squareCoordinate = { x, y, alive: false };
      const squareCoordinate2 = { x, y, alive: false };
      BOARD_SQUARE_ARR_2D[BOARD_SQUARE_ARR_2D.length - 1].push(
        squareCoordinate
      );
      SQUARE_ARR_2D[SQUARE_ARR_2D.length - 1].push(squareCoordinate2);


      // BOARD_SQUARE_ARR_2D[BOARD_SQUARE_ARR_2D.length - 1].push(
      //   new Square(x, y)
      // );
      // SQUARE_ARR_2D[SQUARE_ARR_2D.length - 1].push(new Square(x, y));
    }
  }
}

function mousePressed() {
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      const currSquare = BOARD_SQUARE_ARR_2D[x][y];
      let xP = null;
      let yP = null;
      if (
        mouseX > currSquare.x &&
        mouseX < currSquare.x + BOARD_SQUARE_SIZE
      ) {
        xP = currSquare.x;
      }
      if (
        mouseY > currSquare.y &&
        mouseY < currSquare.y + BOARD_SQUARE_SIZE
      ) {
        yP = currSquare.y;
      }

      if (xP != null && yP != null) {
        // fill(180, 28, 28);
        // square(xP, yP, BOARD_SQUARE_SIZE);
        BOARD_SQUARE_ARR_2D[x][y].alive = !currSquare.alive;
        SQUARE_ARR_2D[x][y].alive = BOARD_SQUARE_ARR_2D[x][y].alive;

      }
    }
  }
}

function checkNeighbourAlive() {
  let countAliveNeighbour = 0;
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      //! FIX Index out of Bounds like index = -1 or index = arr.length

      if (x - 1 >= 0 && y - 1 >= 0 && BOARD_SQUARE_ARR_2D[x - 1][y - 1].alive) {
        countAliveNeighbour++;
      }
      if (y - 1 >= 0 && BOARD_SQUARE_ARR_2D[x][y - 1].alive) {
        countAliveNeighbour++;
      }
      if (
        x + 1 < BOARD_SQUARE_ARR_2D.length &&
        y - 1 >= 0 &&
        BOARD_SQUARE_ARR_2D[x + 1][y - 1].alive
      ) {
        countAliveNeighbour++;
      }
      if (x - 1 >= 0 && BOARD_SQUARE_ARR_2D[x - 1][y].alive) {
        countAliveNeighbour++;
      }
      if (
        x + 1 < BOARD_SQUARE_ARR_2D.length &&
        BOARD_SQUARE_ARR_2D[x + 1][y].alive
      ) {
        countAliveNeighbour++;
      }
      if (
        x - 1 >= 0 &&
        y + 1 < BOARD_SQUARE_ARR_2D[x].length &&
        BOARD_SQUARE_ARR_2D[x - 1][y + 1].alive
      ) {
        countAliveNeighbour++;
      }
      if (
        y + 1 < BOARD_SQUARE_ARR_2D[x].length &&
        BOARD_SQUARE_ARR_2D[x][y + 1].alive
      ) {
        countAliveNeighbour++;
      }
      if (
        x + 1 < BOARD_SQUARE_ARR_2D.length &&
        y + 1 < BOARD_SQUARE_ARR_2D[x].length &&
        BOARD_SQUARE_ARR_2D[x + 1][y + 1].alive
      ) {
        countAliveNeighbour++;
      }

      if (BOARD_SQUARE_ARR_2D[x][y].alive == true) {
        //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        if (countAliveNeighbour < 2) {
          SQUARE_ARR_2D[x][y].alive = false;
        }
        //Any live cell with two or three live neighbours lives on to the next generation.
        if (countAliveNeighbour == 2 || countAliveNeighbour == 3) {
          SQUARE_ARR_2D[x][y].alive = true;
        }
        //Any live cell with more than three live neighbours dies, as if by overpopulation.
        if (countAliveNeighbour > 3) {
          SQUARE_ARR_2D[x][y].alive = false;
        }
      } else {
        //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if (countAliveNeighbour == 3) {
          SQUARE_ARR_2D[x][y].alive = true;
        }
      }
      countAliveNeighbour = 0;
    }
  }
}

function arrayAssingment() {
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      BOARD_SQUARE_ARR_2D[x][y].alive = SQUARE_ARR_2D[x][y].alive;
    }
  }
}



function cellPaint() {
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      if (BOARD_SQUARE_ARR_2D[x][y].alive) {
        fill(180, 28, 28);
      } else {
        fill(225);
      }
      square(
        BOARD_SQUARE_ARR_2D[x][y].x,
        BOARD_SQUARE_ARR_2D[x][y].y,
        BOARD_SQUARE_SIZE
      );
    }
  }
}

function keyPressed() {
  switch (keyCode) {
    case 32:
    case 13:
    //  if(running == true){
    //   running = false;
    //  }else{
    //   running = true;
    //  }

     running = !running
      break;
    default:
      break;
  }
}



//! IVO
// function updateAllSquares() {
//   BOARD_SQUARE_ARR_2D.forEach((row, ix) => {
//     row.forEach((square, iy) => {
//       let count = countNeighbours(ix, iy);
//       if (square.alive) {
//         if (count < 2 || count > 3) SQUARE_ARR_2D[ix][iy].alive = false;
//         // if(count ==2 || count == 3) SQUARE_ARR_2D[ix][iy].alive = true;
//       } else {
//         if (count == 3) {
//           SQUARE_ARR_2D[ix][iy].alive = true;
//         }
//       }
//     });
//   });
// }

// function countNeighbours(x, y) {
//   let count = 0;
//   for (let dx = -1; dx < 2; dx++) {
//     for (let dy = -1; dy < 2; dy++) {
//       if (!(dx == 0 && dy == 0)) {
//         let currX = x + dx;
//         let currY = y + dy;
//         //Screen wrap
//         if (currX < 0) {
//           currX += BOARD_SQUARE_ARR_2D.length;
//         }
//         if (currX >= BOARD_SQUARE_ARR_2D.length) {
//           currX -= BOARD_SQUARE_ARR_2D.length;
//         }
//         if (currY < 0) {
//           currY += BOARD_SQUARE_ARR_2D[x].length;
//         }
//         if (currY >= BOARD_SQUARE_ARR_2D[x].length) {
//           currY -= BOARD_SQUARE_ARR_2D[x].length;
//         }

//         //increase conter if
//         if (BOARD_SQUARE_ARR_2D[currX][currY].alive) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }




// function createCopy() {
//   for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
//     for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
//       SQUARE_ARR_2D[x][y].alive = BOARD_SQUARE_ARR_2D[x][y].alive;
//     }
//   }
// }

// class Square {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.ix = Math.floor(x / BOARD_SQUARE_SIZE + 1);
//     this.iy = Math.floor(y / BOARD_SQUARE_SIZE + 1);
//     this.alive = false;
//   }
// }

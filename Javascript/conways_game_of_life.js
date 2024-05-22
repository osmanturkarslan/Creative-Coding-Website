const BOARD_SQUARE_ARR_2D = [];
const SQUARE_ARR_2D =[];
const BOARD_SQUARE_SIZE = 30;
let alive = false;
// let numOfSquaresInXDirection = 0;
// let numOfSquaresInYDirection = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

  createSquareBoard();
  

  // // ! Output number of board square
  // console.log(
  //   "x: " + numOfSquaresInXDirection + ", y: " + numOfSquaresInYDirection
  // );
  // ! Debug Only
  console.log(BOARD_SQUARE_ARR_2D);
  console.log(SQUARE_ARR_2D)
}

function draw(){
  checkNeighbourAlive();
  arrayAssingment()
  cellPaint()
}

function createSquareBoard() {
  for (let x = 1; x < windowWidth - 1; x += BOARD_SQUARE_SIZE + 1) {
    BOARD_SQUARE_ARR_2D.push([]);
    SQUARE_ARR_2D.push([]);
    // numOfSquaresInXDirection++;
    for (let y = 1; y < windowHeight - 1; y += BOARD_SQUARE_SIZE + 1) {
      // if (x == 1) {
      //   numOfSquaresInYDirection++;
      // }
      fill(225);
      stroke(120);
      square(x, y, BOARD_SQUARE_SIZE);
      const squareCoordinate = { x, y, alive };
      BOARD_SQUARE_ARR_2D[BOARD_SQUARE_ARR_2D.length - 1].push(squareCoordinate);
      SQUARE_ARR_2D[SQUARE_ARR_2D.length - 1].push(squareCoordinate);
    }
  }
}

function mousePressed() {
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      let xP = null;
      let yP = null;
      if (
        mouseX > BOARD_SQUARE_ARR_2D[x][y].x && mouseX < BOARD_SQUARE_ARR_2D[x][y].x + BOARD_SQUARE_SIZE
      ) {
        xP = BOARD_SQUARE_ARR_2D[x][y].x;
      }
      if (
        mouseY > BOARD_SQUARE_ARR_2D[x][y].y && mouseY < BOARD_SQUARE_ARR_2D[x][y].y + BOARD_SQUARE_SIZE
      ) {
        yP = BOARD_SQUARE_ARR_2D[x][y].y;
      }

      fill(180, 28, 28);
      if (xP != null && yP != null) {
        square(xP, yP, BOARD_SQUARE_SIZE);
        BOARD_SQUARE_ARR_2D[x][y].alive = true;
      }
    }
  }
}

// function checkNeighbourAlive(){
//   let countAliveNeighbour = 0;
//   for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
//     for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
//       if(BOARD_SQUARE_ARR_2D[x][y].alive === true){
//         if(BOARD_SQUARE_ARR_2D[x-BOARD_SQUARE_SIZE-1][y-BOARD_SQUARE_SIZE-1].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x][y-BOARD_SQUARE_SIZE-1].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x+BOARD_SQUARE_SIZE+1][y-BOARD_SQUARE_SIZE-1].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x-BOARD_SQUARE_SIZE-1][y].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x+BOARD_SQUARE_SIZE+1][y].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x-BOARD_SQUARE_SIZE-1][y+BOARD_SQUARE_SIZE+1].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x][y+BOARD_SQUARE_SIZE+1].alive === true){
//           countAliveNeighbour ++
//         }
//         if(BOARD_SQUARE_ARR_2D[x+BOARD_SQUARE_SIZE+1][y+BOARD_SQUARE_SIZE+1].alive === true){
//           countAliveNeighbour ++
//         }
//         //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//         if(countAliveNeighbour<2){
//           BOARD_SQUARE_ARR_2D[x][y].alive = false
//         }
//         //Any live cell with two or three live neighbours lives on to the next generation.
//         if(countAliveNeighbour===2 || countAliveNeighbour===3){
//           BOARD_SQUARE_ARR_2D[x][y].alive = true
//         }
//         //Any live cell with more than three live neighbours dies, as if by overpopulation.
//         if(countAliveNeighbour > 3){
//           BOARD_SQUARE_ARR_2D[x][y].alive = false
//         }
//         //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
//         if(countAliveNeighbour === 3){
//           BOARD_SQUARE_ARR_2D[x][y].alive = true
//         }
//       }
//       console.log(countAliveNeighbour)
//       countAliveNeighbour = 0;
//     }
//   }
// }

function checkNeighbourAlive(){
  let countAliveNeighbour = 0;
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      if(BOARD_SQUARE_ARR_2D[x][y].alive === true){
        if(BOARD_SQUARE_ARR_2D[x-1][y-1].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x][y-1].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x+1][y-1].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x-1][y].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x+1][y].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x-1][y+1].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x][y+1].alive === true){
          countAliveNeighbour ++
        }
        if(BOARD_SQUARE_ARR_2D[x+1][y+1].alive === true){
          countAliveNeighbour ++
        }
        //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        if(countAliveNeighbour<2){
          BOARD_SQUARE_ARR_2D[x][y].alive = false
        }
        //Any live cell with two or three live neighbours lives on to the next generation.
        if(countAliveNeighbour===2 || countAliveNeighbour===3){
          BOARD_SQUARE_ARR_2D[x][y].alive = true
        }
        //Any live cell with more than three live neighbours dies, as if by overpopulation.
        if(countAliveNeighbour > 3){
          BOARD_SQUARE_ARR_2D[x][y].alive = false
        }
        //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if(countAliveNeighbour === 3){
          BOARD_SQUARE_ARR_2D[x][y].alive = true
        }
      }
      console.log(countAliveNeighbour)
      countAliveNeighbour = 0;
    }
  }
}

function arrayAssingment(){
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      BOARD_SQUARE_ARR_2D[x][y] = SQUARE_ARR_2D[x][y];
    }
  }
}

function cellPaint(){
  for (let x = 0; x < BOARD_SQUARE_ARR_2D.length; x++) {
    for (let y = 0; y < BOARD_SQUARE_ARR_2D[x].length; y++) {
      if(BOARD_SQUARE_ARR_2D[x][y].alive)
      fill(180, 28, 28);
      square(BOARD_SQUARE_ARR_2D[x][y].x, BOARD_SQUARE_ARR_2D[x][y].y, BOARD_SQUARE_SIZE);
    }
  }
}
const BOARD_SQUARE_ARR = [];
const BOARD_SQUARE_SIZE = 30;
const SQUARE_ARR = [];
let alive = true;
let filled = true;
let numOfSquaresInXDirection = 0;
let numOfSquaresInYDirection = 0;

let arr2D = [];

// console.log(arr2D[0][1])

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

  createSquareBoard();

  //! Output number of Square
  console.log(
    "x: " + numOfSquaresInXDirection + ", y: " + numOfSquaresInYDirection
  );
  // Square.starterSquare()
  // mousePressed();

  // ! Debug Only
  //console.log(BOARD_SQUARE_ARR);
  //print(BOARD_SQUARE_ARR[34]);
  // console.log(BOARD_SQUARE_ARR);
  console.log(arr2D);
  // print(SQUARE_ARR[3]);
  // ! Debug Only

  //let randomStart = int(random(SQUARE_ARR.length))
  //console.log(MySquare.starterSquare().randomStart)
  //console.log(SQUARE_ARR[randomStart])

  //SQUARE_ARR[randomStart].alive ? fill(255) : fill(0);
  //square(SQUARE_ARR[randomStart].x, SQUARE_ARR[randomStart].y, SQUARE_SIZE);
}

// function draw(){
//   for(let x=1; x<rows.length-1; x++){
//     for(let y=1; y<columns.length-1; y++){

//   }
//   }
// }

function createSquareBoard() {
  for (let x = 1; x < windowWidth - 1; x += BOARD_SQUARE_SIZE + 1) {
    arr2D.push([]);
    numOfSquaresInXDirection++;
    for (let y = 1; y < windowHeight - 1; y += BOARD_SQUARE_SIZE + 1) {
      if (x == 1) {
        numOfSquaresInYDirection++;
      }
      fill(225);
      stroke(120);
      square(x, y, BOARD_SQUARE_SIZE);
      const squareCoordinate = { x, y, filled, alive };
      // SQUARE_ARR.push(new Square(x, y, alive));    //Square classdaki constructor ile calisir.
      BOARD_SQUARE_ARR.push(squareCoordinate);
      arr2D[arr2D.length - 1].push(squareCoordinate);
    }
  }
}

function mousePressed() {
  // BOARD_SQUARE_ARR[randomStart].alive ? fill(180, 28, 28) : fill(0);

  for (let x = 0; x < arr2D.length; x++) {
    for (let y = 0; y < arr2D[x].length; y++) {
      let xP = null;
      let yP = null;
      if (
        mouseX > arr2D[x][y].x &&
        mouseX < arr2D[x][y].x + BOARD_SQUARE_SIZE
      ) {
        xP = arr2D[x][y].x;
      }
      if (
        mouseY > arr2D[x][y].y &&
        mouseY < arr2D[x][y].y + BOARD_SQUARE_SIZE
      ) {
        yP = arr2D[x][y].y;
      }

      fill(180, 28, 28);
      // square(x, y, BOARD_SQUARE_SIZE);
      if (xP != null && yP != null) {
        square(xP, yP, BOARD_SQUARE_SIZE);
        const squareCoordinate = { xP, yP, filled, alive };

        SQUARE_ARR.push(squareCoordinate);
        // console.log(SQUARE_ARR);

        return;
      }
    }
  }
  // for (let i = 0; i < BOARD_SQUARE_ARR.length; i++) {
  //   let x = null;
  //   let y = null;
  //   // if (mouseX > BOARD_SQUARE_ARR[i].x && mouseX < BOARD_SQUARE_ARR[i + numOfSquaresInYDirection].x) {
  //   if (
  //     mouseX > BOARD_SQUARE_ARR[i].x &&
  //     mouseX < BOARD_SQUARE_ARR[i + numOfSquaresInYDirection].x
  //   ) {
  //     x = BOARD_SQUARE_ARR[i].x;
  //   }
  //   if (mouseY > BOARD_SQUARE_ARR[i].y && mouseY < BOARD_SQUARE_ARR[i + 1].y) {
  //     y = BOARD_SQUARE_ARR[i].y;
  //   }

  //   fill(180, 28, 28);
  //   // square(x, y, BOARD_SQUARE_SIZE);
  //   if (x != null && y != null) {
  //     square(x, y, BOARD_SQUARE_SIZE);
  //     const squareCoordinate = { x, y, filled, alive };

  //     SQUARE_ARR.push(squareCoordinate);
  //     // console.log(SQUARE_ARR);

  //     return;
  //   }
  // }
}

// class Square {

//     // constructor (x, y, alive){
//     //   this.x = x
//     //   this.y = y
//     //   this.alive = alive
//     // };

//     static starterSquare() {
//       let randomStart = int(random(BOARD_SQUARE_ARR.length))
//       BOARD_SQUARE_ARR[randomStart].alive ? fill(180, 28, 28) : fill(0);
//       square(BOARD_SQUARE_ARR[randomStart].x, BOARD_SQUARE_ARR[randomStart].y, BOARD_SQUARE_SIZE);
//     }

//     checkNeighbour() {
//       starterSquare().Square
//     }

//}

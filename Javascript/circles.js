const CIRCLE_ARR = [];
const POINT_ARR = []
const POINT_SIZE = 15;
const MAX_RADIUS = 300;

// ####################      POINT     #######################################
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static createRandom() {
    return new Point(random(width), random(height));
  }

  calcDist(point) {
    return dist(this.x, this.y, point.x, point.y);
  }

  draw() {
    push();
    Color.createRandom().setStroke();
    strokeWeight(POINT_SIZE);
    point(this.x, this.y);
    pop();
  }

  drawLine(point) {
    push();
    Color.createRandom().setStroke();
    strokeWeight(2);
    line(this.x, this.y, point.x, point.y);
    pop();
  }

  calcWallDist() {
    let minX = min(this.x, width - this.x);
    let minY = min(this.y, height - this.y);

    return min(minX, minY);
  }

  static drawAll(){
    POINT_ARR.forEach(p=>{
      p.draw();
    })
  }
}
// ########################    COLOR     #####################################
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static createRandom() {
    return new Color(random(255), random(255), random(255));
  }

  setStroke() {
    stroke(this.r, this.g, this.b);
  }

  setFill() {
    fill(this.r, this.g, this.b);
  }

  static resetStroke() {
    stroke(0);
  }
  static resetFill() {
    stroke(255, 255, 255);
  }
}

// ###########################     CIRCLE     ###################################

class Circle {
  // static count = 0;

  constructor(center, radius, color = Color.createRandom()) {
    this.center = center;
    this.radius = radius;
    this.color = color;

    // Circle.count++;
  }

  draw() {
    push();
    strokeWeight(0);
    this.color.setFill();
    circle(this.center.x, this.center.y, this.radius *2);
    pop();
  }

  // calcArea() {
  //   return this.radius * this.radius * Math.PI;
  // }

  static createRandom() {
    let centerPoint = Point.createRandom();
    let distanceToWall = centerPoint.calcWallDist();
    return new Circle(centerPoint, random(distanceToWall));
  }

  // static calcTotalArea() {
  //   let sum = 0;
  //   CIRCLE_ARR.forEach((c) => {
  //     sum += c.calcArea();
  //   });
  //   return sum;
  // }
  
  static drawAll() {
    CIRCLE_ARR.forEach((element) => {
      element.draw();
    });
  }

  static tryToCreateNewCircle(maxNumberOfCircles = 10) {
    if (CIRCLE_ARR.length >= maxNumberOfCircles) {
      return;
    }
    let c;
    do {
        c = Circle.createRandom()
    }while (c.checkForOverlappingCircles());
    CIRCLE_ARR.push(c);
  }

  calcDistance(other) {
    if (other instanceof Point)
      return this.center.calcDist(other) - this.radius;
    if (other instanceof Circle)
      return (this.center.calcDist(other.center) - this.radius - other.radius);
    return NaN;
  }

  checkForOverlappingCircles(){
    CIRCLE_ARR.forEach(c=>{

      let dist = this.calcDistance(c);
      if(dist<0)
        return true;
      });
      return false
  }
}

// #######################       SETUP      ################################

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(5);

  // let c1 = Circle.createRandom();
  // let p2 = Point.createRandom();
  // CIRCLE_ARR.push(c1);
  // POINT_ARR.push(p2);

  // c1.draw();
  // c1.center.draw();
  // p2.draw();

  // let distance = c1.center.calcDist(p2);
  // console.log(distance);

  // c1.center.drawLine(p2);
}

// #########################     DRAW       #####################################
function draw() {
  Circle.tryToCreateNewCircle();
  Circle.drawAll();
  // Point.drawAll()
}

const CIRCLE_ARR = [];
const POINT_ARR = [];
const POINT_SIZE = 15;
const MIN_RADIUS = 20;
const MAX_RADIUS = 200;

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

  static drawAll() {
    POINT_ARR.forEach((p) => {
      p.draw();
    });
  }
  calcMinDistance(){
    let minDist = this.calcWallDist()
    for(const c of CIRCLE_ARR){
      let dist = c.calcDist(this);
      if(dist<minDist){
        minDist = dist;
      }
    }
    return minDist;
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
    circle(this.center.x, this.center.y, this.radius * 2);
    pop();
  }

  static createRandom() {
    let centerPoint = Point.createRandom();
    let distanceToWall = centerPoint.calcWallDist();
    return new Circle(centerPoint, random(distanceToWall));
  }

  static drawAll() {
    CIRCLE_ARR.forEach((c) => {
      c.draw();
    });
  }

  static tryToCreateNewCircle(maxNumberOfCircles = 10) {
    if (CIRCLE_ARR.length >= maxNumberOfCircles) {
      return;
    }
    let c;
    let p;
    let minDist;
    do {
      // Version one
      // c = Circle.createRandom();
      // } while (c.checkForOverlappingCircles());
      // c = new Circle(p,minDist) 


      //version two
      p = Point.createRandom();
      minDist = p.calcMinDistance()
    } while (minDist < MIN_RADIUS);
    c = new Circle(p,random(MIN_RADIUS,min(minDist,MAX_RADIUS)))

    CIRCLE_ARR.push(c);
  }

  calcDist(other) {
    if (other instanceof Point)
      return this.center.calcDist(other) - this.radius;
    if (other instanceof Circle)
      return this.center.calcDist(other.center) - this.radius - other.radius;
    return NaN;
  }

  checkForOverlappingCircles() {
    for (const c of CIRCLE_ARR) {
      let dist = this.calcDist(c);
      if (dist < 0) {
        return true;
      }
    }
    return false;
  }

  static deleteLast(){
    CIRCLE_ARR.pop()
  }
}

// #######################       SETUP      ################################

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(120);
}

// #########################     DRAW       #####################################
// function draw() {
//   Circle.tryToCreateNewCircle(150);
//   Circle.drawAll();
// }

function mouseWheel(event){
  clear()
  if(event.delta < 0){
    Circle.tryToCreateNewCircle(15614634136123)
  }else{
    Circle.deleteLast()
  }
  Circle.drawAll()
}
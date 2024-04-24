let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(100, 100);
  background(220);

  const firstCircle = { 
    x: random(width),
    y: random(height),
  };
  
  circle(firstCircle.x,firstCircle.y,random(200))
  
  circles.push(firstCircle)
  stroke(255,0,0)
  strokeWeight(8)
  point(random(width),random(height))
  
}


function draw(){
  
  
  
}

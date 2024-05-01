/*

axiom = FX
X -> X+YF+
Y -> -FX-Y
angle = 90

*/

var angle
var axiom = "FX";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
  x: "X",
  y: "X+YF+",
};
rules[1] = {
  x: "Y",
  y: "-FX-Y",
};

//function rules(){
//    this.X = "X+YF+"
//    this.Y = "-FX-Y"
//}

function generate() {
  len *= 0.8;
  var nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].x) {
        found = true;
        nextSentence += rules[j].y;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width/2, height/2);
  //stroke(255);
  stroke(random(255), random(255), random(255))
  strokeWeight(3)
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    switch (current) {
      case "F":
        line(0, 0, 0, -len);
        translate(0, -len);
        break;
      case "+":
        rotate(angle);
        break;
      case "-":
        rotate(-angle);
        break;
    }
  }
}

function mousePressed(){
    generate()
    
}

function setup() {
  //noCanvas()
  createCanvas(windowWidth, windowHeight)
  //createCanvas(400, 400);
  //background(225);
  createP(axiom);
  turtle();
  angle = radians(90)
  

  var button = createButton("generate");
  button.mousePressed(generate);

  mousePressed()
}

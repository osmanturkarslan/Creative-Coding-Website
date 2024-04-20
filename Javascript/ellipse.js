function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke(0, 0, 0);
    strokeWeight(2);
    background(255, 255, 255);

    for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {
            ellipse(i, j, random(50))
            //fill(random(255), random(255), random(255))
            fill(100 + random(150))
        }
    }
}

function mousePressed() {
    for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {
            ellipse(i, j, random(50))
            //fill(random(255), random(255), random(255))
            fill(100 + random(150))
        }
    }
}

function mouseWheel() {
    for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {
            ellipse(i, j, random(50))
            //fill(random(255), random(255), random(255))
            fill(100 + random(150))
        }
    }
}

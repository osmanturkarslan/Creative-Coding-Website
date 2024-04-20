function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke(0, 0, 0);
    strokeWeight(2);
    background(255, 255, 255);
    noFill()

    for (let i = 0; i < 50; i++) {
        square(random(width), random(height), random(height))
    }
}

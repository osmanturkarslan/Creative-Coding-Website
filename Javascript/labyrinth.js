function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke(0, 0, 0);
    strokeWeight(6);
    background(255, 255, 255);

    for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {

            let r = random(1);
            //stroke(random(255), random(255), random(255));

            if (r < 0.5) {
                line(i, j, i + 40, j + 40)
            } else {
                line(i, j + 40, i + 40, j)
            }
        }
    }
}
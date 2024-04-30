let img;

function preload() {
    //img = loadImage("https://www.hsv.com.au/images/see/camaro/camaro-zl1-garnet-red-tintcoat.jpg")
    //img = loadImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hsv.com.au%2Fsee%2Fcamaro%2F&psig=AOvVaw3_mVapXjzjZxbQ4MS0A_11&ust=1714309907391000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMipium84oUDFQAAAAAdAAAAABAE")
    img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRlNqO-0wJ0622FKFxiBnnps_PV3OEZkjcg&s")
    //img = loadImage("../Images/camaro-zl1-red.jpg/")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    image(img, 0, 0, windowWidth, windowHeight)
    //applyFilter()
    //applyGrayscaleFilter()
    //filter(INVERT)
    //filter(GRAY)
    //filter(THRESHOLD)
    //filter(OPAQUE)
    //filter(POSTERIZE, 3)
    //filter(BLUR, 3)
    //filter(DILATE)
    //filter(ERODE)
    filter(BLUR, 3, false)
}

function applyFilter() {
    loadPixels()

    for (let i = 0; i < pixels.length; i += 4) {
        let r = pixels[i];
        let g = pixels[i + 1];
        let b = pixels[i + 2];

        pixels[i] = r + 50
    }

    updatePixels()
}

function applyGrayscaleFilter() {
    loadPixels(); // Piksel verilerini yükleyin

    for (let i = 0; i < pixels.length; i += 4) {
        let avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3; // Ortalama renk
        pixels[i] = pixels[i + 1] = pixels[i + 2] = avg; // Her rengi aynı yaparak gri tonlama elde edin
    }

    updatePixels(); // Değişiklikleri güncelleyin
}
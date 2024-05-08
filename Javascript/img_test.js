let img;
var imgWidth = 259
var imgHeight = 194

function preload() {
  img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVBADM9wj7KvvMccmivaPxWA6IozHfxlX1g&s")
  img2 = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mRg7DZLQ7Gg4WwQoMjwEz3aYBXIV_sUJ9g&s")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  pixelDensity(1)
  image(img2, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight)
  console.log(img2.height, img2.width)

}

const p = 20

function mouseWheel(event) {
  clear()
  if (event.delta < 0) {
    clear()
    imgWidth += p
    if (imgWidth < width || imgHeight < height) {
      img2.resize(imgWidth, 0)
      imgHeight = img2.height
      image(img2, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2)
    }

    console.log(img2.width, img2.height)
  } else {
    clear()
    imgWidth -= p
    if (imgWidth > 0 || imgHeight > 0) {
      img2.resize(imgWidth, 0)
      imgHeight = img2.height
      image(img2, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2)
    }

    console.log(img2.width, img2.height)
  }

}

//function draw() {
//  //image(img2, 0,0,660,495)
//  img2.loadPixels()
//
//
//  for (let i = 0; i < img2.pixels.length; i += 4) {
//    let red =   img2.pixels[i + 0]
//    let green = img2.pixels[i + 1]
//    let blue =  img2.pixels[i + 2]
//    let alpha = img2.pixels[i + 3]
//
//    img2.pixels[i + 0] = red
//    img2.pixels[i + 1] = green
//    img2.pixels[i + 2] = green
//    //img2.pixels[i + 3] = alpha
//  }

//
//  //mousePressed()
//  /*
//
//  for(var y = 0; y<height; y++){
//    for(var x = 0; x<width; x++){
//      var index = (x + y * width) * 4
//
//      img2.pixels[index+0] = mouseX
//      img2.pixels[index+1] = mouseY
//      img2.pixels[index+2] = y
//      img2.pixels[index+3] = p0
//    }
//  }
//   */
//
//
//  img2.updatePixels()
//}


let img;

function preload(){
  img=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVBADM9wj7KvvMccmivaPxWA6IozHfxlX1g&s")
  img2=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mRg7DZLQ7Gg4WwQoMjwEz3aYBXIV_sUJ9g&s")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
  
  //image(img2, 0,0,600,400)
  pixelDensity(1)
  
}

function mousePressed(){
  image(img2, 0,0,mouseX,mouseY)
}

function mouseWheel(){
  image(img2, 0,0,mousePressed()+10,mousePressed()+10)
}

function draw(){
  //image(img2, 0,0,660,495)
  img2.loadPixels()
  
  
  for(let i = 0; i< img2.pixels.length; i+=4){
    let red = img2.pixels[i+0]
    let green = img2.pixels[i+1]
    let blue = img2.pixels[i+2]
    let alpha = img2.pixels[i+3]
    
    img2.pixels[i+0] = red
    img2.pixels[i+1] = green
    img2.pixels[i+2] = green
    img2.pixels[i+3] = 10000
    }
    
    //mousePressed()
  /*
  
  for(var y = 0; y<height; y++){
    for(var x = 0; x<width; x++){
      var index = (x + y * width) * 4
      
      img2.pixels[index+0] = mouseX
      img2.pixels[index+1] = mouseY
      img2.pixels[index+2] = y
      img2.pixels[index+3] = 100
    }
  }
   */
  
  
  img2.updatePixels()
}


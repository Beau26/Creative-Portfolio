//creates arrays for the sound and frames of the animation
let img;
let meow;
let frame = 0
let meowChoice;

//preloads the sounds and frames into their respective arrays
function preload(){
  img = [loadImage('CatFrame1.jpeg'),loadImage('CatFrame2.jpeg'),loadImage('CatFrame3.jpeg'),
    loadImage('CatFrame4.jpeg'),loadImage('CatFrame5.jpeg'),loadImage('CatFrame6.jpeg')]
  meow = [loadSound('CatMeow1.mp3'),loadSound('CatMeow2.mp3'),loadSound('CatMeow3.mp3')]

}

function setup() {
  createCanvas(500, 500);
  //sets the framerate to be slower so the animation is
  //the correct speed and puts the images in the center
  frameRate(11)
  imageMode(CENTER)

}

function draw() {
  background(220);
  //draws the current frame
  image(img[frame],250,250,500,500);

  //selects the next frame to be drawn, resets to the first frame
  //if out of images
  frame ++
  if (frame > 5){
    frame = 0
  }
}

//plays a random meow sound from the 3 when the space bar is pressed
function keyPressed(){
  if (keyCode == 32){
    meowChoice = random(meow)
    meowChoice.play()   
  }
}

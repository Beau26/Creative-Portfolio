//setting the start positions and speed of the ball as well as the background and colour
let x = 50;
let y = 50;
let XIncrement = 5;
let YIncrement = 5;
let size = 100;
let backgroundColour = [0,0,0];
let ballColour = [75,75,75];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

}

function draw() {
  background(backgroundColour);

  //creates the ball
  noStroke();
  fill(ballColour);
  circle(x,y,size);

  //moves the ball
  moveCircle();
  
  //sets collisions so the ball bounces off of the walls, the ball gets a 
  //negative increment if it hits the bottom or right wall to make it go the right direction
  if (x > width-size/2){
    XIncrement = changeDirectionNegative(XIncrement);
  }
  if (x < size/2){
    XIncrement = random(0,10);
    changeColour();
  }
  

  if (y > height-size/2){
    YIncrement = changeDirectionNegative(YIncrement);
  }

  if (y < size/2){
    YIncrement = random(0,10);
    changeColour();
  }

  }

function moveCircle(){
  //moves the circle in the current increments for x and y
  x += XIncrement;
  y += YIncrement;

}

function changeDirectionNegative(Increment){
  changeColour();
  //makes the chosen increment negative
  Increment = Increment * -1;

  return Increment;

}

//randomly changes the colour of the background and makes the ball slightly 
//lighter than the background
function changeColour(){
  redValue = random(0,256);
  greenValue = random(0,256);
  blueValue = random(0,256);
  backgroundColour = [redValue,greenValue,blueValue];
  redValue += 75
  greenValue += 75
  blueValue += 75
  ballColour = [redValue,greenValue,blueValue]
}
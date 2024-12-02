//sets the starting pen to a black circle
let choice = 1
let size = 10
let opacity = 255
let red = 0
let green = 0
let blue = 0

function setup() {
  createCanvas(windowWidth, windowHeight);

}
 
function draw() {
  //creates a white border at the top stopping drawing
  stroke(0)
  fill(255,255,255)
  quad(0,0,windowWidth,0,windowWidth,110,0,110)

  //creates a white square along with a square
  //that shows the colour, size, and opacity that
  //is currently being used
  noStroke()
  fill(255,255,255)
  square(180,10,90)
  fill(red,green,blue,opacity)
  square(180,10,size)
  
  //puts text onto the gray rectangle showing the 
  //values of all the variables
  fill(0)
  textAlign(LEFT,TOP)
  textSize(12)
  strokeWeight(1)
  text(('Red: '+red+" Green: "+green+" Blue: "+blue+" Opacity: "+opacity+" Size: "+size),10,10,140)
  textAlign(RIGHT,TOP)
  text("Controls: Z - Adds to Red Value, X - Adds to Green Value, C - Adds to Blue Value, V - Adds to Opacity Value, B - Adds to Size Value. Holding control and pressing any previous button takes away from the corresponding value. Space - Resets the canvas",windowWidth-310,10,300)

}

function mouseDragged() {
  //Draws the current sape while the left mouse button is down
  noStroke();
  fill(red,green,blue,opacity);

  if (choice == 1) {
    circle(mouseX,mouseY,size);
  } else if ( choice == 2) {
    square(mouseX-size/2,mouseY-size/2,size);
  } else { 
    triangle(mouseX,mouseY-size/2,mouseX-size/2,mouseY+size/2,mouseX+size/2,mouseY+size/2);
  }

}

function keyPressed(){
  //depending on the key pressed, changes the current shape
  if (keyCode == 81){
    choice = 1
  } else if (keyCode == 87){
    choice = 2
  } else if (keyCode == 69){
    choice = 3
  // if space is pressed the canvas is cleared
  } else if (keyCode == 32){
    clear()
  //depending on what keys are pressed, changes the colour of the current shape
  } else if (keyCode == 90 && keyIsDown(17)){
    red -= 10
    if (red < 0){
      red = 0
    }
  } else if (keyCode == 90){
    red += 10
    if (red > 260){
      red = 260
    }
  } else if (keyCode == 88 && keyIsDown(17)){
    green -= 10
    if (green < 0){
      green = 0
    }
  } else if (keyCode == 88){
    green += 10
    if (green > 260){
      green = 260
    }
  } else if (keyCode == 67 && keyIsDown(17)){
    blue -= 10
    if (blue < 0){
      blue = 0
    }
  } else if (keyCode == 67){
    blue += 10
    if (blue > 260){
      blue = 260
    }
  //changes the opacity of the shape
  } else if (keyCode == 86 && keyIsDown(17)){
    opacity -= 10
    if (opacity < 0){
      opacity = 0
    }
  } else if (keyCode == 86){
    opacity += 10
    if (opacity > 260){
      opacity = 260
    }
  //changes the size of the shape
  } else if (keyCode == 66 && keyIsDown(17)){
    size -= 10
    if (size < 10){
      size = 10
    }
  } else if (keyCode == 66){
    size += 10
    if (size > 90){
      size = 90
    }
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  //makes background sections of pyramid
  stroke(255)
  fill(255,245,0,70)
  quad(200,150,385,250,200,350,15,250)
  fill(255,0,0,70)
  triangle(200,25,200,150,385,250)
  fill(255,139,56,70)
  triangle(200,25,200,150,15,250)

  // makes background sections of cube
  fill(38,89,255,70)
  quad(100,250,200,200,300,250,200,300)
  fill(255,55,207,70)
  quad(100,150,200,100,200,200,100,250)
  fill(152,56,255,70)
  quad(200,100,300,150,300,250,200,200)

  //makes circle
  fill(255,255,255)
  circle(200,200,160)

  //makes foreground sections of cube
  fill(38,89,255,70)
  quad(100,150,200,100,300,150,200,200)
  fill(255,55,207,70)
  quad(100,150,200,200,200,300,100,250)
  fill(152,56,255,70)
  quad(200,200,300,150,300,250,200,300)

  //makes foreground sections of pyramid
  fill(255,0,0,70)
  triangle(200,25,200,350,15,250)
  fill(255,139,56,70)
  triangle(200,25,200,350,385,250)
  fill(10,255,0,70)
}
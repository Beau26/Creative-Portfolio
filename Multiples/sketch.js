//sets a list of all circle positions
let xPosition = [200,290,325,290,200,110,75,110]
let yPosition = [75,110,200,290,325,290,200,110]
//sets a list of the circle sizes and opacity
let opacity = [0,35,70,105,140,175,215,255]
let outerCircleSize = [36,38,40,42,44,46,48,50]
//sets a list of colour values for each shape
let redValue = [11,56,113,148,187,244,255,255]
let greenValue = [0,0,0,0,0,10,23,29]
let blueValue = [223,243,241,255,255,255,198,167]
//sets values fot the size of the two centre circles and opacity
let centreSize = [25,50,75,100,125,145,165,175]
let blackSize = [15,40,65,90,120,141,162,172]
let centreOpacity = [255,255,255,200,150,100,50,0]
let currentCentre = 0

function setup() {
  createCanvas(400, 400);
  frameRate(15)
}

function draw() {
  background(0);

  //draws a frame of all of the outer circles
  for (let i=0; i<=7; i++) {
    stroke(255,255,255,opacity[i])
    fill(redValue[i],greenValue[i],blueValue[i],opacity[i])
    circle(xPosition[i],yPosition[i],outerCircleSize[i])
    
  }

  if (currentCentre > 7) {
    currentCentre = 0
  }

  //draws a frame of the coloured centre circle
  stroke(255,255,255,centreOpacity[currentCentre])
  fill(redValue[currentCentre],greenValue[currentCentre],blueValue[currentCentre],centreOpacity[currentCentre])
  circle(200,200,centreSize[0])
  //draws a frame of the black circle to make the centre look like a ring
  fill(0)
  circle(200,200,blackSize[currentCentre])
  //changes the opacity and colour of the centre ring
  currentCentre ++

  changeList(centreSize) 
  changeList(xPosition) 
  changeList(yPosition)

}

function changeList(list){
  //changes the position of each value in the called list to be pushed 
  //back by one place
  let firstIndex = list[0]
  for (let i=0; i<=6; i++){
    list[i] = list[i+1]
  }
  list[7] = firstIndex
}
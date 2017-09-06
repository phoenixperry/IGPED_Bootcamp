
var boxes = [];
var boxSize = 5;
function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,width,height,100);
}
function draw(){
frameRate(60);
for(var j = 0; j < windowHeight; j+= boxSize){

  console.log(j + " this is the height");
 for(var i=0; i < windowWidth/boxSize; i++){
     console.log(i + " this is the width");
   noStroke();
  // fill(random(0,mouseX),random(0,255),random(0,255))
   fill(i*boxSize,j,100);
   rect(i*boxSize,j,boxSize,boxSize);
  }
}
console.log(j);
}

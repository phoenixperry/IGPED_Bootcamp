var coswave = [];
var radius = 1;
function setup() {

  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, 2*PI*radius);
    coswave[i] = abs(cos(amount)*360);
    console.log(coswave[i]);
  }
  background(255);
  //noLoop();
  colorMode(HSB,360,1,1);
}

function draw() {
  var y1 = 0;
  var y2 = height;
  var mouseYMapped= map(mouseY, 0, height, 0,1);
  for (var i = 0; i < width; i+=1) {
    stroke(coswave[i],1,mouseYMapped);
    line(i, y1, i, y2);
  }

  // y1 = y2;
  // y2 = y1 + y1;
  // for (var i = 0; i < width; i+=3) {
  //   stroke(coswave[i]*255 / 4);
  //   line(i, y1, i, y2);
  // }
  //
  // y1 = y2;
  // y2 = height;
  // for (var i = 0; i < width; i+=3) {
  //   stroke(255 - coswave[i]*255);
  //   line(i, y1, i, y2);
  // }
}

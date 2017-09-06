var coswave = [];
var radius = 10;
function setup() {

  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, 2*PI*radius);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  colorMode(HSB,360,1,1);
  noLoop();

}

function draw() {
  var y1 = 0;
  var y2 = height;
  for (var i = 0; i < width; i++) {
    stroke(coswave[i]*360,1,1);
    line(i, y1, i, y2);
  }


}

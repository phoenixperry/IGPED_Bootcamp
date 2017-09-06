var users = [];

function User(firstName, lastName, born, xpos, ypos, c) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.born = born;
  this.xpos = xpos;
  this.ypos = ypos;
  this.c = c;
}

User.prototype.show = function(){
 textSize(32);
 fill(this.c);
 text(this.firstName, this.xpos, this.ypos);
};

var user1;
var user2;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  user1 = new User("Jake", "Chan", 1962,100,100,0);
  user2 = new User("Jane", "Lin", 1955,100,200,0);
  users.push(user1);
  users.push(user2);
}


function draw()
{
  user1.show();
  user2.show();
}














/*var p
//constructor object
function Particle (){
  this.x = 100;
  this.y = 200;
  this.show = function() {
    fill(0,255,0);
    point(this.x, this.y);
  };
}
//prototype
Particle.prototype.show = function() {
  this.show = function() {
    fill(0,255,0);
    point(this.x, this.y);
  };
};
/*prototype chain
_proto_ //reference up the prototype chain. Object.prototype
all objects have Object.prototype as their root object/
hasOwnProperty() -> lets you know if you has a property
*/
/*
function setup() {

  createCanvas(windowWidth, windowHeight);
  p = new Particle();
}

function draw(){

    p.show();
}
*/

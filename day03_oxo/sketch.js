var pieces =[];
var turn = ["O","X"];
var numPieces = 3;
var gameState = "play_game";
var winner;
 var winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function GamePiece(name, position, size, id) {
    this.name = name;
    this.position = position;//make sure to pass in width as x and height as y
    this.size = size;
    this.id = id;
}

GamePiece.prototype.display = function(c){

  if(mouseX > this.position.x && mouseX < this.position.x+this.size.x && mouseY > this.position.y && mouseY< this.position.y+this.size.y && mouseIsPressed) //this logic test if the player is over the button
  {
    if(this.name===" "){
      turn = turn.splice(1).concat(turn);
      this.name = turn[0];
    }
  }
  fill(c);
  rect(this.position.x,this.position.y,this.size.x,this.size.y);

  fill(255);
  // add the text
  textSize(50);
  textAlign(CENTER, CENTER);

  text(this.name,this.position.x,this.position.y, this.size.x, this.size.y);

};
function setup(){
  createCanvas(windowWidth,windowHeight);
for(var j = 0; j < numPieces; j++)
{
  for(var i = 0; i < numPieces; i++)
  {
      var position = createVector((width/numPieces)*i,(height/numPieces)*j);
      var size = createVector((width/3),(height/3));
      var id = pieces.length;
      var piece = new GamePiece(" ",position,size,id);
    //  console.log(piece.id);
      pieces.push(piece);
  }
}
}
function draw(){

  if(gameState==="play_game"){
    var c = color(255,0,0);
      for(var i = 0; i < pieces.length; i++)
      {
        pieces[i].display(c);
      }
    for(i = 0; i <winStates.length; i++){
      if(pieces[winStates[i][0]].name==="X" &&  pieces[winStates[i][1]].name==="X" &&
        pieces[winStates[i][2]].name==="X")
        {
          winner = "X";
          gameState = "end_game";
        }else if(pieces[winStates[i][0]].name==="O" &&  pieces[winStates[i][1]].name==="O" &&
        pieces[winStates[i][2]].name==="O")
        {
          winner = "O";
          gameState = "end_game";
        }
      }
}else if(gameState==="end_game"){
    background(0);
    fill(255);
    textSize(24);
    text( winner + " is the winner", width/2,height/2);
  }
}

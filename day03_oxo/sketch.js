var pieces =[];
var turn = "O";
var numPieces = 3;
function GamePiece(name, position, size) {
    this.name = name;
    this.position = position;//make sure to pass in width as x and height as y
    this.size = size;
}

GamePiece.prototype.display = function(c){

  if(mouseX > this.position.x && mouseX < this.position.x+this.size.x && mouseY > this.position.y && mouseY< this.position.y+this.size.y && mouseIsPressed) //this logic test if the player is over the button
  {
    this.name = turn;
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
for(var i = 0; i < numPieces; i++)
{
    var position = createVector((width/3)*i,(height/3));
    var size = createVector((width/3),(height/3));
    var piece = new GamePiece(" ",position,size);
    pieces.push(piece);
}

}
function draw(){
  var c = color(255,0,0);
  for(var i = 0; i < pieces.length; i++)
{
  pieces[i].display(c);
}


}










//
// /**
//  * sketch.js
//  * Created by Tim on 06/03/2017.
//  */
//
// var grid_x;// = window.innerWidth / 3.;
// var grid_y;// = window.innerHeight/ 6.;
// var noughtChoicesBoxX = [];
// var noughtChoicesBoxY = [];
// var crossChoicesBoxX = [];
// var crossChoicesBoxY = [];
//
//
// var holdDrawing = false;
// var hasWon = false;
// var playersTurn = 1;
// var loc1 = [];
// var loc2 = [];
// var timer = 0;
// var choice = 0;
// // if 0, unoccupied, if 1 : nought, if -1: cross
// var game = {
//     0: 0,
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//     7: 0,
//     8: 0
// };
//
// function setup() {
//     // we don't need a very high framerate
//     frameRate(10);
//     // setup a full screen canvas
//     createCanvas(screen.width, screen.height);
// }
//
//
// function draw() {
//     if (holdDrawing) {
//         if (hasWon) {
//             strokeWeight(10);
//             stroke(0, 255, 0);
//             line(loc1[0] + grid_x / 6., loc1[1] + grid_x / 6., loc2[0] + grid_x / 6., loc2[1] + grid_x / 6.);
//             messageBox("You lose", [255, 0, 0]);
//         } else {
//             messageBox("It's a draw!", [0, 0, 255]);
//         }
//         timer++;
//         if (timer > 10) {
//             timer = 0;
//             holdDrawing = false;
//         }
//         return;
//     }
//
//     grid_x = window.innerWidth / 3.;
//     grid_y = window.innerHeight / 6.;
//     background(95, 67, 165);
//
//     handleGame();
//     // Draw the tic tac toe grid
//     setupTicTacToeGrid();
//     if (playersTurn == 1) {
//         // Wherever the mouse hovers, offer the symbol there
//         drawObject(getMouseLocationQuadrant(mouseX, mouseY), choice, true);
//     }
//     // Draw the boardgame
//     drawBoard();
//
//     if (choice == 0) {
//         offerChoice();
//     }
//
// }
//
// function mouseReleased() {
//     if (holdDrawing) {
//         return;
//     }
//     if (choice !== 0) {
//         if (playersTurn == 1) {
//             quadrant = getMouseLocationQuadrant(mouseX, mouseY);
//             if (isQuadrantEmpty(quadrant)) {
//                 drawObject(quadrant, choice, false);
//                 game[quadrant] = choice;
//                 playersTurn = -1;
//             }
//         }
//     } else {
//         if (mouseX < noughtChoicesBoxX[1] && mouseX > noughtChoicesBoxX[0] &&
//             mouseY < noughtChoicesBoxY[1] && mouseY > noughtChoicesBoxY[0]) {
//             choice = 1;
//
//         }
//         if (mouseX < crossChoicesBoxX[1] && mouseX > crossChoicesBoxX[0] &&
//             mouseY < crossChoicesBoxY[1] && mouseY > crossChoicesBoxY[0]) {
//             choice = -1;
//         }
//     }
//
// }
//
// function messageBox(dispStr, text_colour) {
//     strokeWeight(1);
//     fill(255);
//     rect(1.25 * grid_x, 0.25 * grid_y, grid_x / 2., grid_y / 2.);
//     fill(text_colour[0], text_colour[1], text_colour[2]);
//     stroke(0);
//     textSize(30);
//     text(dispStr, 1.25 * grid_x + grid_x / 9., 0.25 * grid_y + grid_y / 3.);
// }
//
// function offerChoice() {
//     strokeWeight(1);
//     fill(255);
//     var innerX = 1.15 * grid_x;
//     var innerY = grid_y + grid_x / 6.;
//     var widthX = 2 * grid_x / 3;
//     var widthY = 2 * grid_x / 3;
//     rect(innerX, innerY, widthX, widthY);
//
//     noughtChoicesBoxX = [innerX + 0.1 * widthX, innerX + 0.1 * widthX + (widthX / 2 - 0.125 * widthX)];
//     noughtChoicesBoxY = [innerY + 0.1 * widthY, innerY + 0.1 * widthY + (0.8 * widthY)];
//
//     crossChoicesBoxX = [innerX + 0.5 * widthX, innerX + 0.5 * widthX + (widthX / 2 - 0.125 * widthX)];
//     crossChoicesBoxY = [innerY + 0.1 * widthY, innerY + 0.1 * widthY + (0.8 * widthY)];
//
//     ellipseMode(CORNER);
//     strokeWeight(10);
//     stroke(0, 122, 0);
//     noFill();
//     ellipse(noughtChoicesBoxX[0] + 10, noughtChoicesBoxY[0] + 0.25 * (noughtChoicesBoxY[1] - noughtChoicesBoxY[0]) + 10,
//         noughtChoicesBoxX[1] - noughtChoicesBoxX[0] - 20);
//
//     strokeWeight(10);
//     stroke(122, 0, 0);
//     line(crossChoicesBoxX[0] + 10, crossChoicesBoxY[0] + 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]) + 10,
//         crossChoicesBoxX[1] - 10, crossChoicesBoxY[1] - 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]) - 20);
//     line(crossChoicesBoxX[1] - 10, crossChoicesBoxY[0] + 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]) + 10,
//         crossChoicesBoxX[0] + 10, crossChoicesBoxY[1] - 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]) - 20);
//
//     if (mouseX < noughtChoicesBoxX[1] && mouseX > noughtChoicesBoxX[0] &&
//         mouseY < noughtChoicesBoxY[1] && mouseY > noughtChoicesBoxY[0]) {
//         noStroke();
//         fill(0, 255, 0, 130);
//         rect(noughtChoicesBoxX[0], noughtChoicesBoxY[0] + 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]),
//             noughtChoicesBoxX[1] - noughtChoicesBoxX[0], noughtChoicesBoxX[1] - noughtChoicesBoxX[0]);
//     }
//     if (mouseX < crossChoicesBoxX[1] && mouseX > crossChoicesBoxX[0] &&
//         mouseY < crossChoicesBoxY[1] && mouseY > crossChoicesBoxY[0]) {
//         noStroke();
//         fill(0, 255, 0, 130);
//         rect(crossChoicesBoxX[0], crossChoicesBoxY[0] + 0.25 * (crossChoicesBoxY[1] - crossChoicesBoxY[0]),
//             noughtChoicesBoxX[1] - noughtChoicesBoxX[0], noughtChoicesBoxX[1] - noughtChoicesBoxX[0]);
//     }
//     strokeWeight(1);
//     noStroke();
//     fill(0);
//     textSize(30);
//     text("Pick one!", innerX + widthX * 0.3, innerY + widthY * 0.15);
//     textSize(20);
//     //text("(you'll take turns going first)", innerX + widthX * 0.1, innerY + widthY * 0.15 + (crossChoicesBoxY[1] - crossChoicesBoxY[0]));
//
//
// }
//
// function getMouseLocationQuadrant(mouseX, mouseY) {
//     // check if actually inside the grid
//     if (mouseX < grid_x || mouseX > 2 * grid_x ||
//         mouseY < grid_y || mouseY > grid_x + grid_y) {
//         return -1;
//     }
//     var i = Math.floor(3 * (mouseX - grid_x) / grid_x);
//     var j = Math.floor(3 * (mouseY - grid_y) / grid_x);
//     return i + 3 * j;
// }
//
// function getQuadrantTopLeft(quadrant) {
//     var xLoc = grid_x + (quadrant % 3) * (grid_x / 3);
//     var yLoc = grid_y + Math.floor(quadrant / 3) * (grid_x / 3);
//     return [xLoc, yLoc];
// }
//
//
// //
// //
// //  The actual game logic
// //
// //
//
// function isQuadrantEmpty(quadrant) {
//     return game[quadrant] == 0;
// }
//
// function handleGame() {
//     if (playersTurn !== 1) {
//         messageBox("Thinking...", [0, 0, 155]);
//         if (timer > 5) {
//             getNextMove();
//             timer = 0;
//         } else {
//             timer++;
//         }
//     }
//
//     if (isFinished()) {
//         // if the game is in an end state, we should start a new game after some delay!
//         setTimeout(resetGame, 100);
//     }
// }
//
// function getNextMove() {
//     // Here is the AI
//
//     // First look at the game board
//     var potentialGame = getGameState();
//     // make the best move possible!
//     game[getBestMove(potentialGame)] = choice * -1;
//     playersTurn = 1;
// }
//
// function getGameState() {
//     var board = {};
//     for (var i = 0; i < 9; i++) {
//         // copies the state of the board to a new variable so we can recurse
//         board[i] = game[i];
//     }
//     // getGameState() is only ever for the AI, so it will be the AI's turn when getGameState is called.
//     // Therefore set turn to be the opposite of what player is playing at.
//     return {board: board, turn: choice * -1};
// }
//
// function scoreGame(potentialGame, depth) {
//     // One of the most important functions of the Minimax algorithm.
//
//     // This looks at a given board game (not necessarily the one in play)
//     // and returns how good that board is for the computer, as follows:
//
//     // The game is not finished             :   0
//     // The game is a tie                    :   0
//     // The computer player has 3 in a row   :  10
//     // The human player has 3 in a row      : -10
//
//     // The board is :
//     // 0 | 1 | 2
//     // ----------
//     // 3 | 4 | 5
//     // ----------
//     // 6 | 7 | 8
//     // So each of these arrays corresponds to either a row, col or diagonal.
//     var winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//
//     for (var i = 0; i < winStates.length; i++) {
//         // game.board[index] returns either 0 for currently empty, 1 for O and -1 for a X at location index, from the above board
//         var score = potentialGame.board[winStates[i][0]] + potentialGame.board[winStates[i][1]] + potentialGame.board[winStates[i][2]];
//
//         // Player can either be O's (+1) or X's (-1)
//         if (choice == -1) {
//             // Player is X
//             if (score === -3) {
//                 // Player has won
//                 return depth - 10;
//             } else if (score === 3) {
//                 // Computer has won
//                 return 10 - depth;
//             }
//         } else {
//             // Player is O
//             if (score === 3) {
//                 return depth - 10;
//             } else if (score === -3) {
//                 return 10 - depth;
//             }
//         }
//     }
//     return 0;
// }
//
// var scores = [];
// var moves = [];
//
// function getBestMove(potentialGame) {
//     // Returns what the computer should do next, given some potential game (not necessarily the one currently in play)
//     var best = -1;
//     var bestInd = -1;
//
//     // Get all valid moves the computer can do right
//     var availableMoves = getAvailableMoves(potentialGame);
//
//     for (var i = 0; i < availableMoves.length; i++) {
//         // For each possible move, create a new game board (possibleGame) to analyse.
//         var possibleGame = makeMove(potentialGame, availableMoves[i]);
//         // If this move leads to a game where the computer wins, immediately do it.
//         if (scoreGame(possibleGame, 0) === 10) {
//             print("We can win");
//             return availableMoves[i];
//         }
//         // Otherwise, compute the "value" of this move, using Minimax (recursive)
//         var reward = minimax(possibleGame, 0);
//         if (reward > best) {
//             best = reward;
//             bestInd = i;
//         }
//         console.log(availableMoves[i]);
//         console.log(reward);
//     }
//     return availableMoves[bestInd];
//
// }
//
// function minimax(potentialGame, depth) {
//     // This algorithm returns the "value" of a given move, such that good moves are likely to lead to
//     // game states that give a high score from scoreGame(potentialGame, depth)
//
//     var scores = [];
//     var moves = [];
//
//     // First, get all the moves we can do currently.
//     var availableMoves = getAvailableMoves(potentialGame);
//     if (availableMoves.length === 0) {
//         // If we can't do a move, the game must be in an end state and the value of this move is simply the
//         // value of the end state (0, +10 or -10). Depth allows prioritising moves that lead to earlier wins.
//         return scoreGame(potentialGame, depth);
//     }
//
//     // Otherwise, we need to loop through all potential moves and score them
//     for (var i = 0; i < availableMoves.length; i++) {
//         // Once again, construct a new game board, this board should be
//         // what the board will look like once the move is made.
//         var possibleGame = makeMove(potentialGame, availableMoves[i]);
//         // Calculate the value of minimax for that move and store that so we can check later what to do
//
//         // Note that since here we have the function minimax calling minimax, this is a recursive function.
//         // A good way of thinking about how recursion works is the factorial function
//         // n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
//         // we can solve this as:
//         // function factorial(n) {
//         //  if (n == 2) return 2;
//         //  return n * factorial(n - 1);
//         // }
//         // Lets consider what happens if we call factorial(5);
//         // n = 5, not 2, so we don't return 2
//         // instead, return n * factorial(4), but what is factorial(4)?
//         // For that we need factorial(3), and for that we need factorial(2)...
//         // When we get to factorial 2, we know that is 2, so it returns 2.
//         // Now factorial(3) knows what factorial(2) is, so factorial(3) returns 3 * 2;
//         // similarly factorial (4) now knows factorial(3) and itself can return 4 * 3 * 2;
//         // Finally, factorial(5) returns 5 * 4 * 3 * 2 * 1.
//
//         //In TicTacToe we take a similar approach, we construct a new game board from a possible move, and ask what
//         // that move is scored according to minimax. Minimax only knows a move gets +0, +10 or -10 if the game is currently
//         // in an end state, otherwise it needs to call minimax on this new board (which itself adds yet another move and recurses)
//         scores.push(minimax(possibleGame, depth + 1));
//         moves.push(availableMoves[i]);
//     }
//
//     // After all that recursion, we'll have figured out what each move is valued at by Minimax.
//
//     var index = -1;
//     //console.log(scores);
//     if (choice === potentialGame.turn) {
//         // If the move we just tested was for the human player, we want to minimise his score
//         // MINI
//         index = getMinIndex(scores);
//     } else {
//         // If the move to make was for the computer, we want to maximise that.
//         // MAX
//         index = getMaxIndex(scores);
//     }
//
//     // Finally return the score of this move.
//     return scores[index];
//
// }
//
// function makeMove(potentialGame, quadrant) {
//     // potential game is a {board: game, turn: +-1} object
//     // quadrant is the quadrant you want to make the move in
//     // returns a new potentialGame
//     var newBoard = {};
//     for (var i = 0; i < 9; i++) {
//         if (i == quadrant) {
//             newBoard[i] = potentialGame.turn
//         } else {
//             newBoard[i] = potentialGame.board[i];
//         }
//     }
//     return {board: newBoard, turn: potentialGame.turn * -1};
// }
//
// function getAvailableMoves(potentialGame) {
//     if (Math.abs(scoreGame(potentialGame, 0)) == 10) {
//         return [];
//     }
//     var moves = [];
//     for (var i = 0; i < 9; i++) {
//         if (potentialGame.board[i] === 0) {
//             moves.push(i);
//         }
//     }
//     return moves;
// }
//
//
// function resetGame() {
//     game = {
//         0: 0,
//         1: 0,
//         2: 0,
//         3: 0,
//         4: 0,
//         5: 0,
//         6: 0,
//         7: 0,
//         8: 0
//     };
// }
//
//
// function getMinIndex(arr) {
//     var currMin = 1e10;
//     var currIndex = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < currMin || currIndex === -1) {
//             currMin = arr[i];
//             currIndex = i;
//         }
//     }
//     return currIndex;
// }
//
// function getMaxIndex(arr) {
//     var currMax = -1e10;
//     var currIndex = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > currMax || currIndex === -1) {
//             currMax = arr[i];
//             currIndex = i;
//         }
//     }
//     return currIndex;
// }
//
// function isFinished() {
//     if (checkRows() || checkCols() || checkDiags()) {
//         holdDrawing = true;
//         hasWon = true;
//         return true;
//     }
//
//     hasWon = false;
//     var keys = Object.keys(game);
//     for (var quadCheck = 0; quadCheck < keys.length; quadCheck++) {
//         if (game[keys[quadCheck]] == 0) {
//             return false;
//         }
//     }
//     holdDrawing = true;
//     return true;
// }
//
// function checkRows() {
//     var locations = [0, 3, 6];
//     for (var i = 0; i < locations.length; i++) {
//         if (Math.abs(game[locations[i]] + game[locations[i] + 1] + game[locations[i] + 2]) == 3) {
//             loc1 = getQuadrantTopLeft(locations[i]);
//             loc2 = getQuadrantTopLeft(locations[i] + 2);
//             return true;
//         }
//     }
//     return false;
// }
//
// function checkCols() {
//     var locations = [0, 1, 2];
//     for (var i = 0; i < locations.length; i++) {
//         if (Math.abs(game[locations[i]] + game[locations[i] + 3] + game[locations[i] + 6]) == 3) {
//             loc1 = getQuadrantTopLeft(locations[i]);
//             loc2 = getQuadrantTopLeft(locations[i] + 6);
//             return true;
//         }
//     }
//     return false;
// }
//
// function checkDiags() {
//     var locations = [0, 2];
//     for (var i = 0; i < locations.length; i++) {
//         if (Math.abs(game[locations[i]] + game[4] + game[8 - locations[i]]) == 3) {
//             loc1 = getQuadrantTopLeft(locations[i]);
//             loc2 = getQuadrantTopLeft(8 - locations[i]);
//             return true;
//         }
//     }
//     return false;
// }
//
// function drawObject(quadrant, whichObject, checkOverlap) {
//     if (checkOverlap && !isQuadrantEmpty(quadrant)) {
//         return;
//     }
//     if (whichObject == 1) {
//         drawNought(quadrant);
//     } else if (whichObject == -1) {
//         drawCross(quadrant);
//     }
// }
//
// function drawCross(quadrant) {
//     if (quadrant !== -1) {
//         var crossTopLeft = getQuadrantTopLeft(quadrant);
//         var crossTopLeftX = crossTopLeft[0] + grid_x / 18.;
//         var crossTopLeftY = crossTopLeft[1] + grid_x / 18.;
//         var innerWidth = (grid_x / 3) * 4 / 6.;
//         strokeWeight(10);
//         stroke(122, 0, 0);
//         line(crossTopLeftX, crossTopLeftY + innerWidth, crossTopLeftX + innerWidth, crossTopLeftY);
//         line(crossTopLeftX, crossTopLeftY, crossTopLeftX + innerWidth, crossTopLeftY + innerWidth);
//     }
// }
//
// function drawNought(quadrant) {
//     if (quadrant !== -1) {
//         var crossTopLeft = getQuadrantTopLeft(quadrant);
//         var crossTopLeftX = crossTopLeft[0] + grid_x / 18.;
//         var crossTopLeftY = crossTopLeft[1] + grid_x / 18.;
//         var innerWidth = (grid_x / 3) * 4 / 6.;
//         ellipseMode(CORNER);
//         strokeWeight(10);
//         stroke(0, 122, 0);
//         noFill();
//         ellipse(crossTopLeftX, crossTopLeftY, innerWidth, innerWidth);
//     }
// }
//
// function setupTicTacToeGrid() {
//     strokeWeight(10);
//     stroke(0);
//     fill(55, 123, 152);
//     rect(grid_x, grid_y, grid_x, grid_x, grid_x / 8);
//     line(grid_x * (1 + 1. / 3.), grid_y, grid_x * (1 + 1. / 3.), grid_y + grid_x);
//     line(grid_x * (1 + 2. / 3.), grid_y, grid_x * (1 + 2. / 3.), grid_y + grid_x);
//     line(grid_x, grid_y + grid_x * (1. / 3.), 2 * grid_x, grid_y + grid_x * (1. / 3.));
//     line(grid_x, grid_y + grid_x * (2. / 3.), 2 * grid_x, grid_y + grid_x * (2. / 3.));
// }
//
// function drawBoard() {
//     var keys = Object.keys(game);
//     for (var i = 0; i < keys.length; i++) {
//         drawObject(keys[i], game[keys[i]], false);
//     }
// }

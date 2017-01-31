//Created by Zechariah Robinson
//Last updated 01/30/17
//This code creates the Rick and Morty gang. It starts them in the corners and moves them to the center.

var y = 250; // set the center y coordinate for everyone
var dir = 5; // set the speed with which everyone moves
// sets starting x position for each character
var xRick = 0;
var xMorty = 80;
var xSummer = 900;
var xJerry = 800;
var xBeth = 0;
// sets starting y position for each character
var yRick = 50; // same y position for Rick and Morty, as they stay together
var ySummer = 50;
var yJerry = 350;
var yBeth = 400;
  
function setup() {
  createCanvas(1000, 600); // creates a canvas on which to draw characters
  background(125, 208, 82); // set background to a dark green
  noStroke(); // removes the outline
}

function draw() {
  background(125, 208, 82); // resets the background each time draw is run, so there isn't a trail behind the characters as they move
  rick(xRick, yRick); // draws Rick and passes in the x and y parameters
  morty(xMorty, yRick); // draws Morty and passes in the x and y parameters (y parameter is the same as Rick's, as they stay together)
  summer(xSummer, ySummer); // draws Summer and passes in the x and y parameters
  jerry(xJerry, yJerry); // draws Jerry and passes in the x and y parameters
  beth(xBeth, yBeth); // draws Beth and passes in the x and y parameters
  
  //bring Rick and Morty to the center
  xRick = min(xRick + dir, 200); // moves Rick to center x position and stops
  xMorty = min(xMorty + dir, 280); // moves Rick and Morty to center y position and stops
  yRick = min(yRick + dir, y); // moves Morty to center x position and stops
  
  // bring Summer to the center
  xSummer = max(xSummer - dir, 360); // moves Summer to center x position and stops
  ySummer = min(ySummer + dir, y); // moves Summer to center y position and stops
  
  // bring Jerry to the center
  xJerry = max(xJerry - dir, 440); // moves Jerry to center x position and stops
  yJerry = max(yJerry - dir, y); // moves Jerry to center y position and stops
  
  // bring Beth to the center
  xBeth = min(xBeth + dir, 520); // moves Beth to center x position and stops
  yBeth = max(yBeth - dir, y); // moves Beth to center y position and stops
}

// draws Rick
function rick(x, y) {
  fill(171, 213, 236); // sets the color of the head
  // left hair triangles
  triangle(x, y, x, y + 16, x - 16, y + 8);
  triangle(x, y + 17, x, y + 33, x - 16, y + 25);
  // top hair triangles
  triangle(x, y, x + 16, y, x + 8, y - 16);
  triangle(x + 17, y, x + 33, y, x + 25, y - 16);
  triangle(x + 34, y, x + 50, y, x + 42, y - 16);
  // right hair triangles
  triangle(x + 50, y, x + 50, y + 16, x + 66, y + 8);
  triangle(x + 50, y + 17, x + 50, y + 33, x + 66, y + 25);
  // the rest of Rick
  rect(x, y, 50, 50); // head
  fill(155, 217, 219); // sets the color of the body
  rect(x, y + 50, 50, 50); // body
  fill(125, 100, 61); // sets the color of the legs
  rect(x, y + 100, 50, 50); // legs
  fill(255); // setst he color of his lab coat
  rect(x, y + 50, 15, 70); // lab coat left
  rect(x + 35, y + 50, 15, 70); // lab coat right
}

//draw Morty
function morty(x, y) {
  fill(137, 69, 3); // sets the color of the head
  rect(x, y + 40, 50, 35); // head
  fill(255, 251, 98); // sets the color of the body
  rect(x, y + 75, 50, 40); // body
  fill(26, 62, 107); // sets the color of the legs
  rect(x, y + 115, 50, 35); // legs
}

// draw Summer
function summer(x, y) {
  fill(218, 136, 51); // sets the color of the head
  rect(x + 35, y + 10, 15, 15);  // hairbun
  rect(x, y + 25, 50, 40); // head
  fill(214, 126, 181); // sets the color of the body
  rect(x, y + 65, 50, 40); // body
  fill(255); // sets the color of the legs
  rect(x, y + 105, 50, 45); // legs
}

// draw Jerry
function jerry(x, y) {
  fill(117, 89, 84); // sets the color of the head
  rect(x, y, 50, 50); // head
  fill(88, 106, 47); // sets the color of the body
  rect(x, y + 50, 50, 50); // body
  fill(157, 190, 222); // sets the color of the legs
  rect(x, y + 100, 50, 50); // legs
}

// draw Beth
function beth(x, y) {
  fill(249, 205, 117); // sets the color of the head
  rect(x, y, 50, 50); // head
  fill(240, 59, 83); // sets the color of the body
  rect(x, y + 50, 50, 50); // body
  fill(40, 58, 113); // sets the color of the legs
  rect(x, y + 100, 50, 50); // legs
}
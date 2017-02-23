// Created by Manny and Zack
// Last updated 01/30/17
// Makes a circle that follows the mouse and changes color on click.

// sets the starting color of the circle to white
var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(500, 500); // creates a canvas on which to draw
  background(255, 0, 0); // sets the background color to red
}

function draw() {
  fill(r, g, b); // sets the fill color based on the values of r, g, and b
  ellipse(mouseX, mouseY, 30, 30); // sets the position of the ellipse to the value of the mouse's x and y position
}

// randomized the r, g, and b variables on mouse click
function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
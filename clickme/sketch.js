// Created by Zechariah Robinson
// Last updated 02/11/17
// This program creates a button. The button's color changes to a "negative" effect when the mouse hovers over it.
// When the button is pressed, the background changes to a random color, then button moves to a random location. It's shape also switches randomly between 3 options.

var buttonColor = 0; // creates the initial button color
var textColor = 255; // creates the initial button color
var locX = 300; // creates the initial button x location
var locY = 200; // creates the initial button y location
var rand = 10; // creates a value to change the shape color and sets it to 10 so it starts on the square

function setup() {
  createCanvas(700, 500); // creates a canvas on which to draw
  noStroke(); // removes the outline of all shapes
  background(122, 0, 150); // sets the background to purple to start
}

function draw() {
  mouseStuff(locX, locY); // tracks the button so the mouse stuff still works only when on the button
  randButton(locX, locY); // runs the function to draw the button and change its shape
}

// draws a square button according to x and y specifications
function buttonSq(x, y) {
  fill(buttonColor);
  rect(x, y, 100, 45);
  fill(textColor);
  textStyle(BOLD);
  textSize(20);
  text("Click Me", x + 10, y + 30);
}

// draws a triangle button according to x and y specifications
function buttonTri(x, y) {
  fill(buttonColor);
  triangle(x - 20, y + 45, x + 120, y + 45, x + 50, y - 30);
  fill(textColor);
  textStyle(BOLD);
  textSize(20);
  text("Click Me", x + 10, y + 30);
}

// draws a circle button according to x and y specifications
function buttonCirc(x, y) {
  fill(buttonColor);
  ellipse(x + 50, y + 25, 110, 100);
  fill(textColor);
  textStyle(BOLD);
  textSize(20);
  text("Click Me", x + 10, y + 30);
}

// decides which button shape to show randomly
function randButton(x, y) {
  if (rand <= 10) {
    buttonSq(x, y);
  } else if (rand > 10 && rand < 20) {
    buttonTri(x, y);
  } else if (rand >= 20) {
    buttonCirc(x, y);
  }
}

// sets the specifications for what to happen when the mouse is hovering over the button, and when pressing the button
// changes the color of the button to a "negative" color effect
// randomly changes the location of the button, the background color, and the shape of the button
function mouseStuff(x, y) {
  if (mouseX > x && mouseX < x + 100 && mouseY > y && mouseY < y + 45) {
    buttonColor = 255;
    textColor = 0;
  } else {
    buttonColor = 0;
    textColor = 255;
  }
  
  if (mouseX > x && mouseX < x + 100 && mouseY > y && mouseY < y + 45 && mouseIsPressed) {
    locX = random(10, 590); // sets the x location of the button to a random place
    locY = random(10, 390); // sets the y location of the button to a random place
    background(random(255), random(255), random(255)); // changes the background to random color when the button is pressed
    rand = random(0, 30);
  }
}
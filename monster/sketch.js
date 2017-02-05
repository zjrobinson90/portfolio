// Created by Zechariah Robinson
// Last updated 02/04/17
// This code creates a monster and then makes him either jump or his eyes move based on whether you click your mouse

var page = 0;
var eyeDirection = 200;
var yPosition = 100;
var jumpDir = 1;

function setup() {
  createCanvas(400, 600);
}

// runs this function when the mouse is pressed
function mousePressed() { // switches page to switch between the monster states
  page = 1 - page; // sets page to either 1 or 0
}

// allows you to change the monster's state with a keypress as well as mouse press
function keyPressed() {
  mousePressed();
}

function draw() {
  background(100) // sets the background to a gray color and prevents there from being a blur/drag effect when the monster is drawn again
  noStroke(); // removes the outline from the shapes and prevents it from coming back when the legs function gets run
  monster(200, yPosition); // draws all the parts of the monster and sets his x and y coordinates

  // Tells the monster what state it needs to be in, either jumping or eye shifting
  if (page == 0) { // moves the monster's eyes when page is 0
    yPosition = 100; // resets the monster's position to 100
    if (mouseX < 135) { // moves the eye left if the mouse is left of the head
      eyeDirection = max(eyeDirection - 0.5, 160); // moves the eyes to the left of the head and stops
    } else if (mouseX > 265) { // moves the eye right if the mouse is right of the head
      eyeDirection = min(eyeDirection + 0.5, 240); // moves the eyes to the right of the head and stops
    } else { // runs this when the mouse is inside the head
      eyeDirection = 200; // sets the eyes back to centered
    }
  } else { // makes the monster jump when page is 1
    eyeDirection = 200; // sets the eyes back to centered
    yPosition = yPosition + jumpDir; // moves the monster by 1 either up or down
    if (yPosition > 200) { // when the monster gets to the bottom, it reverses direction
      jumpDir = jumpDir - 1; // reverses the direction of the monsters movement to up
    } else if (yPosition < 100) { // when the monster gets to the top, it reverses direction
      jumpDir = jumpDir + 1; // reverses the direction of the monsters movement to down
    }
  }
}

// draws the monster including his head, eyes, body, and legs
function monster(x, y) {
  head(x, y);
  mouth(x, y);
  eyes(eyeDirection, y);
  body(x, y);
  legs(x, y);
}

// draws the head
function head(x, y) {
  fill(92, 187, 205);
  ellipse(x, y, 130, 130);
  ellipse(x, y + 10, 115, 125);
}

function mouth(x, y) {
  fill(0);
  ellipse(x, y + 30, 40, 20);
}

// draws the eyes
function eyes(x, y) {
  // outer eyes
  fill(0);
  ellipse(x + 10, y - 10, 15, 15);
  ellipse(x - 10, y - 10, 15, 15);
  // pupils
  fill(255);
  ellipse(x + 10, y - 10, 5, 5);
  ellipse(x - 10, y - 10, 5, 5);
}

// draws the body
function body(x, y) {
  fill(92, 187, 205);
  ellipse(x, y + 195, 200, 250);
}

// draws the legs of the monster
function legs(x, y) {
  stroke(92, 187, 205);
  strokeWeight(3);
  line(x - 50, y + 300, x - 60, y + 350);
  line(x + 50, y + 300, x + 60, y + 350);
}
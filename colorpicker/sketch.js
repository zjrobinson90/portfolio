// Created by Zechariah Robinson
// Last updated 2/11/17
// This program allows the user to select which color they like the most, by pairing all colors with each other. 
// The user selects their preference, then the pair changes, and at the end the results are displayed.

var locX = 100; // creates a variable for the x location
var locY = 150; // creates a variable for the y location
var w = 255; // creates a variable set to the color white
var b = 0; // creates a variable set to the color black
var buttonColor = b; // creates the initial button color for the first button
var buttonColor2 = b; // creates the initial button color for the second button
var textColor = w; // creates the initial text color for the first button
var textColor2 = w; // creates the initial text color for the second button
var myColor = new Array("Red", "Green", "Blue", "Yellow", "Purple", "Done"); // creates a new array of 5 different colors to choose from as well as the term "Done"
var f = 0; // creates a new variable and sets it to 0. This will be used in switching item in the myColor array is displayed in the left button
var s = 0; // creates a new variable and sets it to 0. This will be used in switching item in the myColor array is displayed in the right button
var colorValue = []; // creates a new array to have values assigned to it later, this will be used to display the results

function setup() {
  createCanvas(700, 630); // creates a canvas on which to draw
  noStroke(); // removes the outline from all shapes
  for (i = 0; i < myColor.length; i++) { // runs a for-loop for the same number of times as the length of the array "myColor"
    append(colorValue, "v" + i); // appends the array colorValue with a new item starting with the letter "v" (representing "value"), followed by the current round of the for-loop (ex. v0, v1, v2, etc)
    colorValue[i] = 0; // when a new item in the array is created, it assigns the value of 0 to it
  }
}

function draw() {
  background(225); // sets the color of the background
  instructions(20, 50); // calls the function to show instructions
  buttonCreator(locX, locY); // calls the funtion to create the buttons
  if (f == myColor.length - 1) { // checks to see when all of the items have been selected so it can display the results
    displayResults(); // displays the results of the task
  }
}

// displays the instructions to the user
function instructions(x, y) {
  fill(0);
  textStyle(BOLD);
  textSize(40);
  text("Please select your prefered color.", x, y);
}

// creates two buttons, each with text representing an item in the myColor array to be cycled through later
function buttonCreator(x, y) {
  fill(buttonColor);
  rect(x, y, 175, 60);
  fill(buttonColor2);
  rect(x + 300, y, 175, 60);
  textSize(45);
  fill(textColor);
  text(myColor[f], x + 15, y + 45); // displays the text in the array according to the value of "f" which is altered below in the mouseReleased function
  fill(textColor2);
  text(myColor[s], x + 315, y + 45); // displays the color in the array according to the value of "s" which is altered below in the mouseReleased function
  buttonEffect(x, y);
}

// creates the "negative" color effect that happens to the buttons when the mouse hovers over it
function buttonEffect(x, y) {
  if (mouseX > x && mouseX < x + 175 && mouseY > y && mouseY < y + 60) {
    buttonColor = w;
    buttonColor2 = b;
    textColor = b;
    textColor2 = w;
  } else if (mouseX > x + 300 && mouseX < x + 475 && mouseY > y && mouseY < y + 60) {
    buttonColor = b;
    buttonColor2 = w;
    textColor = w;
    textColor2 = b;
  } else {
    buttonColor = b;
    buttonColor2 = b;
    textColor = w;
    textColor2 = w;
  }
}

// allows the buttons to cycle through displaying all items in the array myColor to pair them with each other
// also increments the value of selected items in the colorValue array according to what item in myColor is displayed
function mouseReleased() {
  if ((mouseX > locX && mouseX < locX + 175 && mouseY > locY && mouseY < locY + 60) || (mouseX > locX + 300 && mouseX < locX + 475 && mouseY > locY && mouseY < locY + 60)) {
    if (mouseX > locX && mouseX < locX + 175 && mouseY > locY && mouseY < locY + 60) {
      colorValue[f]++; // adds 1 to the value of the item in colorValue that was selected and is currently displayed
      colorValue[s]--; // subtracts 1 from the value of the item in colorValue that was NOT selected and is currently displayed
    } else if (mouseX > locX + 300 && mouseX < locX + 475 && mouseY > locY && mouseY < locY + 60) {
        colorValue[s]++; // adds 1 to the value of the item in colorValue that was selected and is currently displayed
        colorValue[f]--; // subtracts 1 from the value of the item in colorValue that was NOT selected and is currently displayed
    } 
    
    // this checks to see colors are currently being displayed, and makes sure to cycle through all possible pairings of them
    if (f < myColor.length - 1) {
      if (s < myColor.length - 2) {
        s++;
      } else {
        s = 0;
        f++;
        if (f == myColor.length - 1) {
          s = myColor.length - 1;
        }
      }
    }
  }
}

// shows the resulting data from the users selections
function displayResults() {
  fill(255);
  rect(150, 250, 400, 280);
  var drop = 0;
  fill(0);
  for (i = 0; i < myColor.length - 1; i++) {
    text(myColor[i], 200, 300 + drop);
    text(colorValue[i], 500, 300 + drop);
    drop = drop + 50;
  }
  text("Here are your results!", 100, 600);
}
function setup() {
  createCanvas(720, 480); //creates a canvas on which to draw
  smooth();
  strokeWeight(2); //sets thickness of lines to 2
}

function draw(){
  ///Because the draw fucntion is being repeated over and over, we see multiple robots being drawn with each new mouse movement, as it gets drawn in the new position.
  //With background initiated, the draw function starts by creating a new background, which covers the previously drawn robot, so we don't see any old ones as the new one is drawn.
  background(205); //creates a new background color
  translate(mouseX-276, mouseY-155); //displaces the position of the robot with the x, y coordinate value of the mouse position
  //I edited the initial code to take the mouse position minus the starting position of the robot's head, to take on the extra challenge of fixing why the robot was off from where the mouse was.
  //Now the mouse centers on the robot's head
  
  //Neck
  stroke(102); //sets the color of the lines
  line(266, 257, 266, 162); //draws the first line of the neck
  line(276, 257, 276, 162); //draws the second line of the neck
  line(286, 257, 286, 162); //draws the third line of the neck
  
  //Antennae
  line(276, 155, 246, 112); //draws the first antennae left and up
  line(276, 155, 306, 56); //draws the second antennae right and up
  line(276, 155, 342, 170); //draws the third antennae right and down
  
  //Arms
  line(219, 300, 139, 250); //draws the left arm
  line(299, 300, 389, 250); //draws the right arm
  
  //Body
  noStroke(); //removes the outline of the following shapes
  fill(255,102,0); //sets the color of the bottom ellipse
  ellipse(264, 377, 66, 66); //creates an ellipse on the bottom
  fill(102, 0, 0); //sets the color of the big rectangle
  rect(219, 257, 90, 120); //creates the big rectangle
  fill(255,102,0); //sets the color of the small rectangle
  rect(219, 274, 90, 6); //creates the small rectangle
  
  //Head
  fill(102, 0, 0); //sets the color of the head
  ellipse(276, 155, 90, 90); //creates the big circle head
  fill(147,167,179); //sets the color of the eye
  ellipse(288, 150, 28, 28); //creates the eye
  fill(0); //sets the color of the iris of the eye
  ellipse(288, 150, 6, 6); //creates the iris of the eye
  fill(255,102,0); //sets the color of the three surrounding circles
  ellipse(263, 148, 10, 10); //creates the left circle
  ellipse(296, 130, 8, 8); //creates the top circle
  ellipse(305, 162, 6, 6); //creates the right circle
}

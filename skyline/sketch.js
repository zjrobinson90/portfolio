function setup() {
  createCanvas(740, 480); //creates a canvas on which to draw
  background(255, 167, 150); //sets a background color
  
  //creates a the dots for a brick-like texture of the background
  for (var i = 0; i < 3000; i++){ //creates 3000 dots
  var h = random(1, 740); //sets "h" to a random number between 1 and the max height of the canvas
  var w = random(1, 480); //sets "w" to a random number between 1 and the max width of the canvas
  stroke(50); //sets the color of the dot
  strokeWeight(1); //sets the size of the dot
  point(h, w); //puts the dot in a random location within the canvas
  }

  stroke(50); //sets the color for the line
  strokeWeight(8); //sets the width of the lines below
  line(465, 80, 465, 40); //creates an antennae for the right tower
  strokeWeight(4); //sets the width of the lines below
  line(606, 300, 606, 310); //creates an antennae for the lower building to the right
  
  noStroke(); //removes the outline for the following shapes
  
  //buildings below and behind the towers
  fill(50); //sets the color of the building
  rect(110, 360, 650, 120); //creates a long building behind all the others
  rect(250, 270, 100, 210); //creates building to the left below the towers
  rect(280, 260, 70, 10); //creates the top of the building
  rect(580, 320, 30, 160); //creates the start of an antennae for the building to the right
  rect(600, 310, 10, 10); //creates a little more of the antennae referenced above
  rect(0, 430, 110, 50); //creates a long building to the left

  //two towers
  fill(40); //sets the color for the following shapes
  rect(300, 80, 90, 400); //creates the left tower
  rect(420, 80, 90, 400); //creates the right tower
  triangle(461, 40, 469, 40, 465, 25); //puts a point on the antennae
  
  //building below and on the same plane of the towers
  rect(520, 340, 90, 140); //creates a building further to the right
  rect(630, 280, 90, 200); //creates the building on the far right
  rect(70, 400, 60, 80); //creates a building further to the left
  
  //buildings below and in front of the towers
  fill(30); //sets the color of the building
  rect(345, 340, 100, 140); //creates the building centered below the towers
  rect(140, 320, 100, 160); //creates a building to the left of the towers
  triangle(140, 320, 240, 320, 190, 265); //puts a roof on building to the left
  quad(20, 480, 20, 390, 60, 350, 60, 480); //creates a building furthest to the left
  
  //FLOWER
  //outer flower
  fill(255, 220, 68); //sets the color of the petals
  arc(465, 180, 50, 50, 0, HALF_PI); //outer petal 1
  arc(465, 180, 50, 50, PI, PI+HALF_PI); //outer petal 2
  fill(255, 146, 68); //sets the color of the petals
  arc(465, 180, 50, 50, HALF_PI, PI); //outer petal 3
  arc(465, 180, 50, 50, PI+HALF_PI, 0); //outer petal 4
  
  //inner flower
  fill(255, 146, 68); //sets the color of the petals
  arc(465, 180, 30, 30, 0, HALF_PI); //innter petal 1
  arc(465, 180, 30, 30, PI, PI+HALF_PI); //innter petal 2
  fill(255, 220, 68); //sets the color of the petals
  arc(465, 180, 30, 30, HALF_PI, PI); //innter petal 3
  arc(465, 180, 30, 30, PI+HALF_PI, 0); //innter petal 4
  
  //center flower
  fill(229, 131, 61); //sets the color for the center of the flower
  ellipse(465, 180, 15, 15); //creates the center of the flower
}
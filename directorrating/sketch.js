var yearsMovies = [45, 49, 47, 23, 16, 28, 22, 38, 27, 43, 32, 24, 39, 46, 49, 39, 52, 48, 48, 40, 23, 30, 46, 51, 19, 31, 21, 34, 18, 30, 45, 31, 14, 41, 29, 18, 10, 29, 34, 9, 15, 44, 21, 9, 14, 11, 20, 15, 8, 8, 5, 19, 19, 6, 14, 13, 34, 9, 29, 23, 22, 13, 19, 19, 37, 22, 20, 24];
var score = [75, 72, 78, 80, 84, 73, 78, 67, 76, 69, 77, 68, 66, 83, 70, 80, 78, 66, 82, 77, 83, 80, 84, 75, 74, 68, 73, 70, 79, 78, 68, 65, 67, 70, 66, 80, 66, 70, 76, 79, 70, 65, 56, 65, 67, 61, 59, 76, 61, 49, 83, 63, 62, 80, 59, 66, 86, 59, 62, 68, 71, 71, 65, 47, 73, 58, 61, 52];
var director = ["Steven Spielberg", "Alfred Hitchcock", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "James Cameron", "David Fincher", "Ridley Scott", "Peter Jackson", "Clint Eastwood", "Joel Coen", "Steven Soderbergh", "Ron Howard", "Stanley Kubrick", "Woody Allen", "Billy Wilder", "Orson Welles", "Francis Ford Coppola", "Akira Kurosawa", "John Ford", "Sergio Leone", "Frank Capra", "Charles Chaplin", "Roman Polanski", "Ang Lee", "Kathryn Bigelow", "Danny Boyle", "Michael Mann", "Paul Thomas Anderson", "David Lynch", "David Cronenberg", "Oliver Stone", "Sofia Coppola", "Jonathan Demme", "Gus Van Sant", "Wes Anderson", "Judd Apatow", "Tim Burton", "George Lucas", "J.J. Abrams", "Christopher McQuarrie", "Brian De Palma", "Michael Bay", "Zack Snyder", "Anthony & Joe Russo", "David Ayer", "Todd Phillips", "Paul Greengrass", "Timur Bekmambetov", "Jon M. Chu", "Ben Affleck", "F. Gary Gray", "Justin Lin", "Denis Villeneuve", "Louis Leterrier", "Paul Feig", "Hayao Miyazaki", "Len Wiseman", "Luc Besson", "Bryan Singer", "Guillermo del Toro", "Mel Gibson", "Lana Wachowski", "Paul W.S. Anderson", "Robert Zemeckis", "Robert Rodriguez", "Bill Condon", "Roland Emmerich"];
var movieCount = [31, 50, 30, 12, 9, 10, 10, 23, 14, 33, 19, 26, 27, 13, 47, 25, 14, 24, 25, 33, 7, 14, 11, 21, 13, 9, 10, 11, 7, 12, 21, 20, 5, 25, 18, 8, 4, 17, 5, 5, 3, 23, 11, 6, 4, 6, 9, 7, 4, 7, 3, 6, 9, 5, 6, 6, 11, 4, 13, 10, 9, 4, 7, 10, 16, 18, 8, 11]
var borderSpace = 30;
var color1 = 0;
var color2 = 255;
var canvasWidth = 1300;
var canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight); // creates a canvas on which to draw
}

function draw() {
  background(142, 25, 25); // draws the background
  axis(borderSpace, color2); // draws the x-axis and y-axis and labels for everything
  directorViz(color1, color2); // draws the bubbles for each director
  displayLabels(color2); // displays the labels when the mouse hovers over a bubble
}

// shows the bubbles for each directors' respective x and y locations
function directorViz(c1, c2) {
  for (i = 0; i < score.length; i++) {
    var xPosition = yearsMovies[i] * (1.5 * (canvasWidth / 100));
    var yPosition = (100 - score[i]) * (1.5 * (canvasHeight / 100));
    var size = movieCount[i] * 2;
    fill(c1);
    stroke(c2);
    strokeWeight(1);
    ellipse(xPosition, yPosition, size);
  }
}

// shows the name, average score, and number of movies for each director
function displayLabels(c2) {
  for (i = 0; i < score.length; i++) {
    var xPosition = yearsMovies[i] * (1.5 * (canvasWidth / 100));
    var yPosition = (100 - score[i]) * (1.5 * (canvasHeight / 100));
    var size = movieCount[i] * 2;

    if (mouseX >= (xPosition - size / 2) && mouseX <= (xPosition + size / 2) && mouseY >= (yPosition - size / 2) && mouseY < (yPosition + size / 2)) {
      noStroke();
      fill(c2);
      textSize(30);
      text(director[i], xPosition, yPosition);
      textSize(15)
      text("Score: " + score[i] + "%", xPosition, yPosition + textSize())
      text(movieCount[i] + " Movies ", xPosition, yPosition + textSize() * 2)
    }
  }
}

// creates the x-axis and y-axis according to the size of the canvas
function axis(buffer, c2) {
  stroke(c2);
  strokeWeight(5);
  line(buffer, buffer, buffer, canvasHeight - buffer); // y-axis
  line(buffer, canvasHeight - buffer, canvasWidth - buffer, canvasHeight - buffer); // x-axis
  fill(c2);
  noStroke();
  textSize(30);
  textAlign(CENTER, BOTTOM);
  text("Years spent making movies", canvasWidth / 2, canvasHeight - buffer); // x-axis label
  textAlign(LEFT, BOTTOM);
  text("Average movie rating across all movies", buffer + 10, buffer + 10); // y-axis label
  text("Size = # of movies directed", canvasWidth - 400, buffer + 10); // size label
}
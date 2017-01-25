var mic;
var vol;

function setup() {
  createCanvas(1000, 500);
  background(100);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);
  vol = mic.getLevel();
  ears();
  head();
  mouth();
  eyes();
}

function head(s) {
  var newVol = map(vol, 0, 1, 0, 100);
  fill(255);
  rect(250, 50, 300, 250);
  fill(200);
  quad(250, 300, 550, 300, 450, 400, 350, 400);
}

function mouth() {
  var newVol = map(vol, 0, 1, 0, 50);
  fill(0);
  quad(350 - newVol, 330 - newVol, 450 + newVol, 330 - newVol, 425, 370 + newVol, 375, 370 + newVol);
}

function ears() {
  var newVol = map(vol, 0, 1, 0, 150);
  noStroke();
  fill(255);
  ellipse(250, 250, 100 + newVol, 100 + newVol);
  ellipse(550, 250, 100 + newVol, 100 + newVol);
  fill(0);
  // sets his inner ear to a random color. Thanks Susan for the code!
  if (newVol > 30) {
    fill(random(255), random(255), random(255));
  }
  ellipse(250, 250, 50 + newVol, 50 + newVol);
  ellipse(550, 250, 50 + newVol, 50 + newVol);
  
}

function eyes() {
  var newVol = map(vol, 0, 1, 0, 200);
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(30);
  line(300, 200, 380, 230 - newVol);
  line(500, 200, 420, 230 - newVol);
}
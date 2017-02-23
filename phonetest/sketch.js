var img;

function setup() {
  createCanvas(800, 700);
  img = loadImage("images/phone.jpg");
}

function draw() {
  image(img, -100, 0, img.width/2, img.height/2);
}
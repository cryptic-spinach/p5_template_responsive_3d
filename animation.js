let graphics;
let rotation = 0;

function setup() {
  if (windowWidth/windowHeight > 1.77) {
    createCanvas(windowHeight*1.77, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth/1.77);
  }
  
  graphics = createGraphics(width, height, WEBGL);
}

function draw() {
  background("#131626");
  graphics.clear();
  graphics.angleMode(DEGREES);

  graphics.camera(0, 0, 500)

  rotation += 1 % 360;

  graphics.normalMaterial();
  graphics.rotateY(rotation);
  graphics.torus(70, 20);

  image(graphics, 0, 0, width, height);
}

function windowResized() {
  if (windowWidth/windowHeight > 1.77) {
    resizeCanvas(windowHeight*1.77, windowHeight);
  }
  else {
    resizeCanvas(windowWidth, windowWidth/1.77);
  }
}
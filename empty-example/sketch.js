function setup() {
  var container = document.getElementById("myContainer");
  var myCanvas = createCanvas(500,500);
  myCanvas.parent(container);
}

function draw() {
  background('white');
  drawCircle(width/2, height/2, height);
}

function drawCircle(x, y, radius) {
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    radius *= 0.75;
    drawCircle(x, y, radius);
  }
}

function setup() {
  var container = document.getElementById("myContainer");
  var myCanvas = createCanvas(640,360);
  myCanvas.parent(container);
}

function draw() {
  background('white');
  drawCircle(width/2, height/2, 200);
}

function drawCircle(x, y, radius) {
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
  }
}

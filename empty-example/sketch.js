function setup() {
  var container = document.getElementById("myContainer");
  var myCanvas = createCanvas(600,600);
  myCanvas.parent(container);
}

function draw() {
  background('white');
  stroke(0);
  noFill();
  panashe_fractal(width/2,height/2,width/4,height/4);
}

function panashe_fractal(x, y,xlen, ylen) {
  line(x-xlen/2,y,x+xlen/2,y);
  line(x-xlen,y-ylen/2,x-xlen,y+ylen/2);
  line(x+xlen,y-ylen/2,x+xlen,y+ylen/2);
  if (xlen > 2) {
    panashe_fractal(x+xlen/2,y,xlen/2,ylen/2);
    panashe_fractal(x-xlen/2,y,xlen/2,ylen/2);
    panashe_fractal(x+xlen/2,y,xlen/2,ylen/2);
    panashe_fractal(x,y-ylen/2,xlen/2,ylen/2);
  }
}

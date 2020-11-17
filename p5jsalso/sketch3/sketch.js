function setup() {
    createCanvas(480, 520);
    background(40,100,150,150)
  }
  
  function draw() {
  
    if (mouseIsPressed) {
      if (mouseButton === LEFT) {
        ellipse(mouseX,mouseY,80,80) 
        fill(255,255,0,255);
      }
      if (mouseButton === CENTER) {
        rect(mouseX,mouseY,120,120)
        fill(100,155,0,255);
      }
      if (mouseButton === RIGHT) {
        triangle(mouseX,mouseY,80,80)
        fill(255);
      }
    }
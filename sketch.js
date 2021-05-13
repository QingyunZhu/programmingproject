var jim=0;
    seethru=255;
    
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250, 200, 255);
  fill(142, 46, 178,255);//purple
  stroke(130,40, 130);
  strokeWeight(18); 
  ellipse (250, 250, jim, jim); 
  jim=jim+5;
  fill(250, 18, 250); 

  rect (mouseX, mouseY, 60, 60);
  stroke(180, 224, 198);
  
  stroke(255,178,102); // an RGB color for the circle's border 
  strokeWeight(5);
  fill(102,178,255); // an RGB color for the inside of circle
  ellipse(mouseX,height/2,100,seethru); // center of canvas 20px dia
  fill(255,0,127);
  rect (mouseX,mouseY,50,50);
  fill(255, 255, 251,seethru);
  fill(0,255,0);
  triangle(100,75,58,120,186,175);
  fill(0,0,102);
  textFont('helvetica');
  textSize(80);
  textStyle(BOLD);
  text('welcome!',200,200);
  textAlign(CENTER,CENTER);
  
}
  
  function mousePressed(){ 

    if (seethru<0) 

        {seethru=255;

        }else{ 

    seethru=seethru-10;}




}

var seethru=255 
//The setup function only happens once 
function setup(){
    createCanvas(500,500); //create 500px X 500px canvas
    background(250,200,255); 
}

//The draw function happens over and over again 
function draw() { 
  //the background is purple
  //circle 
  stroke(255,178,102); // an RGB color for the circle's border 
  strokeWeight(5);
  fill(102,178,255); // an RGB color for the inside of circle
  ellipse(mouseX,height/2,100,seethru); // center of canvas 20px dia
  fill(255,255,251, seethru);

  fill(0,255,0);
  triangle(100,75,58,120,186,175);
  fill(0,0,102);
  textFont('Helvetic');
  textSize(80);
  textStyle(BOLD);
  text('welcome!',200,200);
  textAlign(CENTER,CENTER);

  fill(255,0,127);
  rect (mouseX,mouseY,50,50);

}
  
  function mousePressed(){ 

    if (seethru<0) 

        {seethru=255;

        }else{ 

    seethru=seethru-10;}

}
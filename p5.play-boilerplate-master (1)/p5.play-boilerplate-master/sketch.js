var fixedRect,movingRect;

function setup() {
 
createCanvas(1000,800);
 fixedRect = createSprite(400,350,50,20);
 movingRect = createSprite(600,550,30,15);
fixedRect.shapeColor ="green";
movingRect.shapeColor = "green";

}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    &&fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    &&movingRect.y- fixedRect.y < movingRect.height/2 + fixedRect.height/2
    &&fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }



  drawSprites();
}
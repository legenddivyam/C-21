
var fixedRect, movingRect,shaugtaug
var gameObject1, gameObject2;

function setup() {
  createCanvas(1600,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  shaugtaug=createSprite(600,200,50,50)
  shaugtaug.shapeColor="green";
}

function draw() {
  background("cyan");

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
else if(isTouching(movingRect,shaugtaug)) {
  movingRect.shapeColor = "blue";
    shaugtaug.shapeColor = "blue"; 
    
} 
  else {
    shaugtaug.shapeColor = "green"
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(noob,pro){
  if (noob.x - pro.x < pro.width/2 + noob.width/2
    && pro.x - noob.x < pro.width/2 + noob.width/2
    && noob.y - pro.y < pro.height/2 + noob.height/2
    && pro.y - noob.y < pro.height/2 + noob.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



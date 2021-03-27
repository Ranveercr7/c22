var rect1,rect2;
var r1,r2,r3,r4,r5,r6;


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(700, 200, 50, 50);
  rect1.shapeColor = "red";
  rect1.debug = true;
  
  rect2 = createSprite(300,200,70,100);
  rect2.shapeColor = "green";
  rect2.debug = true;

  r1 = createSprite(100,100,50,50);
  r1.shapeColor = "yellow";

  r2 = createSprite(200,100,50,50);
  r2.shapeColor = "pink";

  r3 = createSprite(300,100,50,50);
  r3.shapeColor = "grey";

  r4 = createSprite(400,100,50,50);
  r4.shapeColor = "orange";

  r5 = createSprite(200,300,50,50);
  r5.shapeColor = "white";
r5.velocityX = 5;

  r6 = createSprite(600,300,50,50);
  r6.shapeColor = "purple";
  r6.velocityX = -5;
}

function draw() {
  background(0); 
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;
  
 if(isTouching(r1,rect1)){
   r1.shapeColor = "blue";
   rect1.shapeColor = "blue";
 } 
else{
  r1.shapeColor = "orange";
  rect1.shapeColor = "orange";
}


bounceOff(r5,r6);
  drawSprites();
}


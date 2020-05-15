var ball,ballimg;
var paddle,paddleimg;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX= 3;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]); 
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  
  if(keyWentDown(UP_ARROW)){
    paddle.velocityY = -3;
  }
    
  
  if(keyWentDown(DOWN_ARROW)){
    paddle.velocityY = 3;
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}


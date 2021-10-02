var snow2,ship;
var snowImg,shipImg;

function preload(){
 

  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-2.png","ship-2.png","ship-2.png","ship-2.png");

  
  snowImg = loadImage("snow2.jpg");
}

function setup(){
  createCanvas(400,400);
  background("blue");


  snow2=createSprite(400,200);
  snow2.addImage(snowImg);
  snow2.velocityX = -5;
  snow2.scale=1.5;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  snow2.velocityX = -3;


  if(snow2.x < 0){

    snow2.x = snow2.width/1.5;
    snow2.y = height/2;
  }

 
  drawSprites();
}
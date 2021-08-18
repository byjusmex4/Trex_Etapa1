var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //crear sprite del t-rex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //Agregar escala y posición al t-rex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite suelo.
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
}

function draw() {
  background(220);
  
  ground.velocityX = -2
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //Hacer saltar al t-rex con la tecla espacio.
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //Detener la caída del t-rex
  trex.collide(ground);
  drawSprites();
}
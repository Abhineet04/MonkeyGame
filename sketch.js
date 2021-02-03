var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var ground;

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400, 400);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(60, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
}

function draw() {
  background(255);
  
  //console.log(monkey.y)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -16.8;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  if(frameCount % 110 === 0) {
    
    spawnBanana();
    
    banana.y = Math.round(random(120,225))

  }
  
  if(frameCount % 300 === 0) {
    
    spawnObstacles();

  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 130, 24);
  
  drawSprites();
}

function spawnBanana(){
  banana = createSprite(400,200);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX = -4;
  banana.lifetime = 120;
  
  bananaGroup.add(banana);
}

function spawnObstacles(){
  obstacle = createSprite(420,315,20,20);
  obstacle.addImage("o",obstacleImage);
  obstacle.scale = 0.16
  obstacle.velocityX = -4;
  obstacle.lifetime = 120;
  
  obstacleGroup.add(obstacle);
}
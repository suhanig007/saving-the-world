var bender
var garbagegroup, wastegroup
var invisibleGround;
var backgroundimg;
var count = 0;

function preload() {
  bender = loadAnimation("frame_00_delay-0.1s-removebg-preview.png","frame_01_delay-0.1s-removebg-preview.png","frame_02_delay-0.1s-removebg-preview.png","frame_03_delay-0.1s-removebg-preview.png",
  "frame_04_delay-0.1s-removebg-preview.png","frame_05_delay-0.1s-removebg-preview.png","frame_06_delay-0.1s-removebg-preview.png",
  "frame_07_delay-0.1s-removebg-preview.png","frame_08_delay-0.1s-removebg-preview.png","frame_09_delay-0.1s-removebg-preview.png","frame_10_delay-0.1s-removebg-preview.png",
  "frame_12_delay-0.1s-removebg-preview.png","frame_13_delay-0.1s-removebg-preview.png","frame_14_delay-0.1s-removebg-preview.png","frame_15_delay-0.1s-removebg-preview.png",
  "frame_16_delay-0.1s-removebg-preview.png","frame_17_delay-0.1s-removebg-preview.png","frame_18_delay-0.1s-removebg-preview.png","frame_19_delay-0.1s-removebg-preview.png",
  "frame_21_delay-0.1s-removebg-preview.png")
  
  background = loadImage("background.jpeg")
  garbagegroup=loadImage("garbageimg-removebg-preview.png")
  wastegroup = loadImage("wasteimg-removebg-preview.png")
}

function setup() {
  createCanvas(600, 400);
  //creating the variables 
   
  background.velocityX = -2;
  background.x = background.width / 2;
  bender1.createSprite(200,200)
  bender1.addImage(bender)
  
  bender1.scale = 0.1;
  

 
  invisibleGround = createSprite(0, 400, 400, 10);
  invisibleGround.visible = false;
  garbagegroup = new Group();
  wastegroup = new Group();
}

function draw() {
  background(250);

  if (background.x < 400) 
  {
    background.x = background.width / 2
  }

  if (keyDown("space")) 
  {
    bender1.velocityY = -12
  }

  //add gravity
  bender1.velocityY = bender1.velocityY + 0.8;

  //stop trex from falling down
  bender1.collide(invisibleGround);
  
 if (bender1.isTouching(garbagegroup)) {
    bender1.scale = 0.2;
    count=count+2;
    garbagegroup.destroyEach()
  }
if (bender1.isTouching(wastegroup)) {
    bender1.scale=0.1;

}
  
  switch (count) {
    case 10:
      bender1.scale = 0.12;
      break;
    case 20:
      bender1.scale = 0.14;
      break;
    case 30:
      bender1.scale = 0.16;
      break;
    case 40:
      monkey1.scale = 0.18
      break;
    default:
      break;
  }

 
  waste();
  obstacle();

  drawSprites();
  textSize(20);
  fill("pink");
   text("Score: " + count, 340, 15);
}

function banana() {
  if (frameCount % 80 === 0) {
    var waste1 = createSprite(600, 250, 40, 10)
    waste1.addImage("Waste",waste)
    waste1.scale = 0.05;
    waste1.velocityX = -5
    //assign lifetime to the variable
    waste1.lifetime = 300;
    waste1.y = random(50, 250);
    wastegroup.add(waste1);
    
  }


}

function obstacle() {
  if (frameCount % 80 === 0) {
    var obstacle1 = createSprite(800, 350, 10, 40);
    obstacle1.addImage("garbage", garbage)
    obstacle1.scale = 0.15;
    obstacle1.velocityX = -6
    obstacle1.lifetime = 300;
    garbage.add(obstacle1);
   
  }
}

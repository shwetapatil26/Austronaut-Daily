var astronaut, astronaut_bathing, astronaut_drinking, astronaut_working_out, astronaut_moving, astronaut_sleeping, astronaut_brushing;
var astronaut_eating, astronaut_drinking;
var backgroundImg;
var invisibleWall1, invisibleWall2, invisibleWall3, invisibleWall4;

function preload(){
  
  //Add animation for the astronauts actions
  astronaut_sleeping = loadAnimation("images/sleep.png");
  astronaut_bathing = loadAnimation("images/bath1.png", "images/bath2.png");
  astronaut_moving = loadAnimation("images/move1.png", "images/move2.png");
  astronaut_sleeping = loadAnimation("images/sleep.png");
  astronaut_working_out = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
  astronaut_brushing = loadAnimation("images/brush.png");
  astronaut_eating = loadAnimation("images/eat1.png", "images/eat2.png", "images/drink1.png", "images/drink2.png");

  //Add background images
  backgroundImg = loadImage("images/iss.png");
}

function setup() {
  createCanvas(400, 400);

astronaut = createSprite(200,200);
astronaut.addAnimation("sleeping", astronaut_sleeping);
astronaut.scale = 0.1;
astronaut.velocityX = 0;
astronaut.velocityY = 0;

//Left Wall
invisibleWall1 = createSprite(0,0,5,400);
invisibleWall1.depth = backgroundImg.depth;
invisibleWall1.depth = invisibleWall1.depth + 1;
invisibleWall1.visible = false;

//Right Wall
invisibleWall2 = createSprite(400,0,5,400);
invisibleWall2.depth = backgroundImg.depth;
invisibleWall2.depth + 2;
invisibleWall2.visible = false;

//Top Wall
invisibleWall3 = createSprite(0,0,400,5);
invisibleWall3.depth = backgroundImg.depth;
invisibleWall3.depth + 1;
invisibleWall3.visible = false;

//Bottom Wall
invisibleWall4 = createSprite(0,400,400,5);
invisibleWall4.depth = backgroundImg.depth;
invisibleWall4.depth + 1;
invisibleWall4.visible = false;
}

function draw() {
  background(backgroundImg);

  fill("white");
  text("Instructions:", 10, 40);
  text("Up Arrow Key = Brushing", 10, 55);
  text("Down Arrow Key = Working Out", 10, 70);
  text("Left Arrow Key = Eating", 10, 85);
  text("Right Arrow Key = Bathing", 10, 100);
  text("Space Key = Moving", 10, 115);

  if(astronaut.x === 400){
    astronaut.velocityX = -1;
    astronaut.velocityY = 1;
  }

  if(astronaut.x === 0){
    astronaut.velocityX = 1;
    astronaut.velocityY = -1
  }

  if(astronaut.y === 0){
    astronaut.velocityY = -1;
    astronaut.velocityX = 1;
  }
   
  if(astronaut.y === 400){
    astronaut.velocityY = 1;
    astronaut.velocityX = -1;
  }

   keyMovement();

  drawSprites();
}

function keyMovement(){
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", astronaut_brushing);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.x = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("workingOut", astronaut_working_out);
    astronaut.changeAnimation("workingOut");
    astronaut.y = 250;
    astronaut.x = 200;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.frameDelay = 17;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", astronaut_bathing);
    astronaut.changeAnimation("bathing");
    astronaut.x = 350;
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.frameDelay = 17;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", astronaut_eating);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.frameDelay = 15;
  }

  if(keyDown("space")){
    astronaut.addAnimation("moving", astronaut_moving);
    astronaut.changeAnimation("moving");
    //astronaut.x = 200;
    //astronaut.y = 200;
    //astronaut.frameDelay = 15;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}
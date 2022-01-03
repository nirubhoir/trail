var space, obstacles, ship, obstaclesGroup
var niru1, niru2, niru3, niru4, niru5


function preload(){

ship=loadImage("assets/Innocent.png")
space=loadImage("assets/redspace.jpg")
obstacle1=loadImage("assets/asteroid1.png")
obstacle2=loadImage("assets/asteroid2.png")
obstacle3=loadImage("assets/asteroid3.png")
obstacle4=loadImage("assets/asteroid4.png")
obstacle5=loadImage("assets/asteroid5.png")
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-100);

  spaceship = createSprite(600, 500, 50, 10)
  spaceship.addImage(ship)
  spaceship.scale=0.3

  obstaclesGroup = createGroup()
  
}



function draw() {

  spawnObstacles()

 spaceship.x=mouseX

  background(space);  
  drawSprites();
}

function spawnObstacles(){

  if(frameCount% 30 === 0){

    var obstacle = createSprite(200,100,40,10);
    obstacle.velocityY = +6;

    var rand = Math.round(random(1,5))
    switch(rand){

    case 1:niru1.addImage(obstacle1);
      break;
    case 2:niru2.addImage(obstacle2);
           break;       
    case 3:niru3.addImage(obstacle3);
           break;
    case 4:niru4.addImage(obstacle4);
           break;
    case 5:niru5.addImage(obstacle5);
           break;
      default:break;
    
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;

      obstaclesGroup.add(obstacle);




    }
  }



}
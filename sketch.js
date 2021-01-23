var fixedBlock, movingBlock;
var car, wall;

function setup() {

  createCanvas(600,600);

  fixedBlock=createSprite(300, 300, 50,80);
  fixedBlock.shapeColor='green';
  movingBlock= createSprite(100,100, 50,30);
  movingBlock.shapeColor='green';

  car= createSprite(100,200,70,30);
  car.shapeColor='red';
  car.velocityX=5;

  wall= createSprite(500,250,30,200);
  wall.shapeColor='grey';

}

function draw() {

  background(255,255,255); 
  movingBlock.x=mouseX;
  movingBlock.y=mouseY; 

  console.log(movingBlock.y-fixedBlock.y);
  
  if(touching(car,wall)){

    car.shapeColor='black';
    wall.shapeColor='black';
  }
  else{
    car.shapeColour='green';
    wall.shapeColor='green';
  }

  
  
  if(touching(movingBlock,fixedBlock)){

    movingBlock.shapeColor='black';
    fixedBlock.shapeColor='black';
  }
  else{
    movingBlock.shapeColour='green';
    fixedBlock.shapeColor='green';
  }

  bouncingOff(car,wall)
   
  
  drawSprites();
}



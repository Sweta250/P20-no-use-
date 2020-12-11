/*var car,wall;
var speed,weight;

*/





function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
weight=random(400,1500);

  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background("pink"); 
  
  if(wall.x-car<(car.width+wall.width)/2){
    car.velocity=0;
    var deformation=0.5*wieght*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation>180&&deformation>100){
      car.shapeColor="yellow"
    }

    if(deformation>100){
      car.shapeColor="green"
    }

  }
  drawSprites();
}
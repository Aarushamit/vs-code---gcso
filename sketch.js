var car;
var wall;
var speed, weight;
function setup() {
  createCanvas(1200,1200);
  speed=random(55, 90);
  weight=random(400, 1500);   
  car = createSprite(50, 200, 50, 50);
    wall = createSprite(1000, 200, 30, 100);
  }

function draw() {
  background("black");
  car.velocityX = speed; 
  car.weight = weight;
isTouching();

 drawSprites();
}

function isTouching() {
  car.isTouching(wall);
  if(car.isTouching(wall))  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation>180) {
  car.shapeColor = color(255, 0, 0);
}

if(deformation<180 && deformation>100) {
  car.shapeColor = color(230, 230, 0);
}

if(deformation< 100) {
  car.shapeColor = color(0, 255, 0);
}
  }
    }

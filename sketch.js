var bullet, speed, weight;
var wall, thickness;




function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(100,200,30,10);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {

  background("black");  

  bullet.velocityX = speed;

   if(hasCollided(wall,bullet)){

   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
     bullet.velocityX = 0;

   } else{

    wall.shapeColor = color(80,80,80);

   }
   
        
     
  drawSprites();
      }
    

    function hasCollided(Vwall, Vbullet){

      
      if(Vwall.x - Vbullet.x < Vbullet.width/2 + Vwall.width/2){   

      return true;
      }
      else{
        
        return false;

      }
      
    }
var bullet , wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,84);
  
  speed = random(223,321);
  weight = random(30,52);
  
bullet=createSprite(502,200,50,50);
wall=createSprite(1200,200,thickness,height/2);

bullet.velocityX=5;



}



function draw() {
  background("black");  

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 *weight * speed*speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  
  
  drawSprites();

  hasCollided(bullet,wall);
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
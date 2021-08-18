var space, spaceImg
var iss, spacecraft
var hasDocked

var spacecraft1
var spacecraft2
var spacecraft3
var spacecraft4
 
var sprite 
var hasDocked = false;

function preload(){

 spaceImg = loadImage("Docking-undocking/spacebg.jpg");
 issImg = loadImage("Docking-undocking/iss.png");

 spacecraft1Img = loadAnimation("Docking-undocking/spacecraft1.png");
 spacecraft2Img = loadAnimation("Docking-undocking/spacecraft2.png");
 spacecraft3Img = loadAnimation("Docking-undocking/spacecraft3.png");
 spacecraft4Img = loadAnimation("Docking-undocking/spacecraft4.png");

 
}
function setup() {
  createCanvas(1300,600);

  space = createSprite(900, 150, 50, 50);
  space.addImage("space", spaceImg);
  space.scale = 3

  //sprite = createSprite(585 ,270, 50,50)
  //sprite.scale = 0.3

spacecraft1 = createSprite( 650, 400,50,50);
 spacecraft1.addAnimation("spacecraft", spacecraft1Img)
  spacecraft1.scale = 0.2;
 
  iss = createSprite(650 ,250, 50,50);
  iss.addImage("iss",issImg);
  iss.scale = 1;
  
 
  
 
}

function draw() {
  background(255,255,255);  
 fill("yellow")
  text(mouseX + "," + mouseY,mouseX,mouseY)
console.log(spacecraft1.x, spacecraft1.y)
 if (!hasDocked){
   spacecraft1.x = spacecraft1.x + random(-1,1);

   if(keyDown("UP_ARROW")){
     spacecraft1.y = spacecraft1.y-2;
   }

   if(keyDown("DOWN_ARROW")){
    spacecraft1.addAnimation("spacecraft2Img",spacecraft2Img)
    spacecraft1.changeAnimation("spacecraft2Img")
    spacecraft1.y = spacecraft1.y+2;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft1.addAnimation("spacecraft4Img",spacecraft4Img)
    spacecraft1.changeAnimation("spacecraft4Img")
    spacecraft1.x = spacecraft1.x+2;
  }
 
  if(keyDown("LEFT_ARROW")){
    spacecraft1.addAnimation("spacecraft3Img",spacecraft3Img)
    spacecraft1.changeAnimation("spacecraft3Img")
    spacecraft1.x = spacecraft1.x-2;
  }
   
 }
``

// && spacecraft1.x-10 - iss.x-30 > spacecraft1.y - iss.y+10
//>spacecraft1.y - iss.x-30 

  drawSprites();

  if(spacecraft1.x <= iss.x-10 && spacecraft1.y <= iss.y+100 && spacecraft1.x > iss.x-30 && spacecraft1 > iss.y+90){
    hasDocked = true 
    textSize(50)
    fill("white");
    text("Docking Successful!",500,500)
   }
}
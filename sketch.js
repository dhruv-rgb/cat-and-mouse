var BG;
var cat;
var mouse;
var mouses;
var cats;
var cat2;
var mouse2;
var mouse4;
var cat4;

function preload() {
    //load the images here
BG=loadImage("images/garden.png")

cat=loadAnimation("images/cat1.png")
mouse=loadAnimation("images/mouse1.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png")
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")

cat4=loadAnimation("images/cat4.png")
mouse4=loadAnimation("images/mouse4.png")
}



function setup(){
    createCanvas(1000,550);
    //create tom and jerry sprites here
    cats=createSprite(795,480)
    cats.addAnimation("cats",cat)
     cats.scale=0.15;
     
     mouses=createSprite(200,450)
     mouses.addAnimation("mouse",mouse)
     mouses.scale=0.12
}
     
function draw() {

    background(BG);    //Write condition here to evalute if tom and jerry collide

if(cats.x - mouses.x<(cats.width-mouses.width)/2){
    cats.velocityX=0;
    cats.addAnimation("happy",cat4)
    cats.x=300;
    mouses.addAnimation("happymouse",mouse4)

    cats.changeAnimation("happy")
    mouses.changeAnimation("happymouse")
}
    drawSprites();
}


function keyPressed(){
if(keyCode=== LEFT_ARROW){
    mouses.addAnimation("mouseTeasing",mouse2)
    mouses.changeAnimation("mouseTeasing");
    mouses.framedelay=25;

    cats.velocityX=-5;
    cats.addAnimation("catMoving",cat2)
    cats.changeAnimation("catMoving")

}
  


}

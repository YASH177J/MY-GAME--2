
var titleScreen,bg1
var brotherIMG1,brotherIMG2
var title,Start,startButton
var bgIMG2,bg2;
var Brother;
var image,image2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
 
  bg1=loadImage("BG IMAGE1 (2).png")
  startButton=loadImage("startButton.jpg")
  LoadingIMG=loadImage("Loading.jpg")
  bg2=loadImage("bg2 (2).jpg")
  brotherIMG1=loadAnimation("big bro 1.png","walking IMG2.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2+30,displayHeight/2-130)
    bg.addImage(bg1)
    bg.scale=0.3/1.12
    //bg.addAnimation("image2",bg2)
    

    Start=createSprite(displayWidth/2,displayHeight/2+50)
    Start.addImage(startButton)
    Start.scale=0.8
   Start.visible = true;
}

function draw(){


   if(mousePressedOver(Start)){
    
   
    
    Start.visible=false

    bg1=createSprite(displayWidth/2+10,displayHeight/2-130)
    bg1.addImage(bg2)
    bg1.scale=0.5
    
     bro=createSprite(displayWidth/6+80,displayHeight/1-150)
     bro.addAnimation("brothers",brotherIMG1)
     bro.scale=0.6
   }
  
   drawSprites();
  

}


  

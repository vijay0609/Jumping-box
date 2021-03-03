var canvas;
var music;
var sur1;
var sur2;
var sur3;
var sur4;
var ball;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,800);
    
    //create 4 different surfaces

    ball = createSprite(250,400,30,30);
    ball.shapeColor = "white";
    ball.velocityY  = 5;
    ball.velocityX  = 6;

    

    sur1 = createSprite(90,750,80,10)
    sur1.scale = 2;
    sur1.shapeColor = "black"

    sur2 = createSprite(260,750,80,10)
    sur2.scale = 2;
    sur2.shapeColor = "yellow"
    
    sur3 = createSprite(430,750,80,10)
    sur3.scale = 2;
    sur3.shapeColor = "cyan"

    sur4 = createSprite(600,750,80,10)
    sur4.scale = 2;
    sur4.shapeColor = "lime"

   
    

    //create box sprite and give velocity

}

function draw() {
    background("violet");
    //create edgeSprite
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    
if (ball.isTouching(sur1)){
    ball.bounceOff(sur1)
    ball.shapeColor="black";
    music.play();
    
}

if (ball.isTouching(sur3)){
    ball.bounceOff(sur3)
    ball.shapeColor="cyan";
}

if (ball.isTouching(sur4)){
    ball.bounceOff(sur4)
    ball.shapeColor="lime";
}

if(ball.isTouching(sur2)){
ball.shapeColor = "yellow";
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();
}
    drawSprites();
    //add condition to check if box touching surface and make it box
}

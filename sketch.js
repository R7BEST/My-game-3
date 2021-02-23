const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload()
{
    bgImage=loadImage("desert.png")
    boy=loadImage("Solider.png")
    bullet=loadImage("Bullet.png")
    bottleImg=loadImage("bottle.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(displayWidth/2,displayHeight-10,displayWidth, 20)
    alien1=new Alien(900,500,200,200)
    //bullet1=new Bullet(100,300,5);
    
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    ground.display();
    image(boy,100,500,200,200)
    alien1.display();
    createBottles();
    drawSprites();

    //bullet1.display();
    
} 

function keyPressed()
{
    if(keyCode ===32)
    {
        createBullet();
    }
}


function createBullet()
{
    var bullet1 = createSprite(100,600,50,50);
    bullet1.addImage(bullet)
    bullet1.velocityX=5;
    bullet1.scale=0.03;
}

function createBottles()
{
    for (var i =100;i<=200; i=i+100)
    {
        for (var j =500; j<=1000; j=j+100)
        {
            var bottle = createSprite(j,50+i,40,40);
            bottle.addImage(bottleImg);
            bottle.scale= 0.05
        }
   
    }
}

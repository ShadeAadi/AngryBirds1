const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
    var canvas = createCanvas(1525,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,600,70,70);
    box2 = new Box(1200,600,70,70);
    box3 = new Box(1200,500,70,70);
    box4 = new Box(1000,500,70,70);
    box5 = new Box(1100,400,70,70);
    pig1 = new Pig(1100, 600, 30);
    pig2 = new Pig(1100, 500, 30);
    log1 = new Log(1100, 550, 270, 0);
    log2 = new Log(1100, 450, 270, 0);
    log3 = new Log(1175, 300, 150, PI/4);
    log4 = new Log(1025, 300, 150, -PI/4);
    bird1 = new BIRD(200, 200, 27)
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(600,300);
    pig2= new Pig(650,350);
    bird1 = new Bird(200,200);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    ground.display();
    pig2.display();
    bird1.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var tennis;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var tennis_options ={
        restitution: 1.0
    }

    tennis = Bodies.circle(200,100,20, tennis_options);
    World.add(world, tennis);
    console.log(tennis);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("limegreen")
    ellipseMode(RADIUS);
    ellipse(tennis.position.x,tennis.position.y, 20,20);
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1;
var bird;
var world, engine;
var mConstraint;
var slingshot;
var T;
var box;
var ball;
var tank;

var gameState = "onSling";

function preload(){
    tankImg = loadImage("images/tank.jpg");
}

function setup() {
  var canvas = createCanvas(1450, 620);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  box = new Pig(900,55, 80,80);
  box1 = new Pig(900,95,80,80);
  box2 = new Pig(900,30, 80,80);
  bird = new Bird(100,0, 23);

  tank = new Tank(240, 330, 150, 150);

  slingshot = new SlingShot(bird.body,{x:230, y:390});
  }

  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(bird.body,{x:200,y:567});
      slingshot.attach(bird.body);
    }
}

  
  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }

  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function draw() {
  background(255);
  Engine.update(engine);

  fill(255);
  textSize(17);
  text("press space to bring back the bird",100,100);
  text("dragg the mouse by preesing on the bird and Release the mouse ",100,130);

  box.show();
  box1.show();
  box2.show();
  slingshot.display();

  bird.show();
  ground.show();
  tank.show();

  fill(255);
  textSize(17);
  text("press space to bring back the bird",100,100);
  text("dragg the mouse by preesing on the bird and Release the mouse ",100,130);
  
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbin, crushed_paper;

function preload(){
crushed_paper = loadImage("Crushed_Paper.png");
}

function setup() {
	createCanvas(1600, 700);
  background("black");
  
	engine = Engine.create();
	world = engine.world;

  paper = new Paper();

  ground = new Ground();
  dustbin = new Dustbin();
	Engine.run(engine);
  
}
//test

function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  dustbin.display();
  
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position,{x:20, y:-40})
  }
  
  
  drawSprites();
}

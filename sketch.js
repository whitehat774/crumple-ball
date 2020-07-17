var paper, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(width/2, 680, 200, 20)
	box1.shapeColor = "white"
	box2 = createSprite(300, 640, 20, 100)
	box2.shapeColor = "white"
	box3 = createSprite(500, 640, 20, 100)
	box3.shapeColor = "white"
	
	ground = new Ground(600, height ,1200 ,20)
	paper = Bodies.circle(200, 100, 20, options)
	World.add(world,paper)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed()
  drawSprites();
 
}
function keyPressed() {
	Matter.Body.applyForce(paper.Body, paper.Body.position, { x: 400, y: 680 });
}

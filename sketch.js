const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, slingShot;
var backgroundImg, platform;

function preload() {
  backgroundImg = loadImage("bg.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  platform = new Ground(150, 305, 300, 170);

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);

  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);

  box5 = new Box(810, 160, 70, 70);

  ball = new Ball(100, 100);

  slingShot = new SlingShot(ball.body, { x: 200, y: 50 });
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  box1.display();
  box2.display();
  ground.display();
  
  box3.display();
  box4.display();
  

  box5.display();
  

  ball.display();
  platform.display();
  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}

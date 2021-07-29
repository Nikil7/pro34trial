
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var ground;
var rope;
var roof;

function setup() {
  createCanvas(1500,800);

  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
  }

  ground = new Ground(200,390,400,20);
  
  ball = Bodies.circle(500,50,75,ball_options);
  World.add(world,ball);
  
  rope = new Rope(ball.body,{x:500,y:50});
  
}


function draw() 
{
  ground.show();
  rope.display();
  ellipse(ball.position.x,ball.position.y,75,75);

  background("blue");
  Engine.update(engine);
  
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin1, dustBin2, dustBin3;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustBin1=createSprite(600,680,150,20);
	dustBin1.shapeColor=color("yellow");

	dustBin2=createSprite(525,630,20,120)
	dustBin2.shapeColor=color("yellow");
	
	dustBin3=createSprite(670,630,20,120)
	dustBin3.shapeColor=color("yellow");

	//ground = new Ground(750,700,800,10);

	paper = new Paper(100,100,10); 

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
   
  function keyPressed(){
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	  }
  }

  drawSprites();
 
 paper.display();
 //ground.display();
}




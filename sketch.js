var ground,box1,box2,box3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
}

function setup() {
	createCanvas(1000, 500);
	background("white");

	paperSprite=createSprite(200,630,10);
	paperSprite.shapeColor=color("pink");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	World.add(world, ground);

	b1 = Bodies.rectangle(880, 460, 200,10 , {isStatic:true} ); 
    World.add(world, b1);

    b2 = Bodies.rectangle(975, 400, 10,100 , {isStatic:true} ); 
    World.add(world, b2);

    b3 = Bodies.rectangle(785, 400, 10,100 , {isStatic:true} ); 
    World.add(world, b3);

    box1 = createSprite(880, 450, 200,10);
    box1.shapeColor=("red");

    box2 = createSprite(975, 400, 10,100);
    box2.shapeColor=("red");

    box3 = createSprite(785, 400, 10,100);
    box3.shapeColor=("red");
	
	paper = new Paper(200,130,40);
	World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

	paper.display();
  
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50}); 
	   }
}

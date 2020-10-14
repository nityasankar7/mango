
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var tree2;
var stone2;
var boyIMG,boy;
var mango2,mango3,mango4,mango5,mango6;
var sling1;
var mangoBodyPosition=lmangoBodyPosition; 
var stone2BodyPosition=lstone2BodyPosition;

function preload()
{
	boyIMG=loadImage("boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Constraint=Matter.Constraint

	//Create the Bodies Here.
	 ground1= new Ground(400,690,800,20)
	 tree2= new Tree1(580,500,400,400)
	 stone2= new Stone1(150,550,50,50)
	 mango2= new mango1(580,350,50)
	 mango3= new mango1(640,410,50)
	 mango4= new mango1(510,420,50)
	 mango5= new mango1(600,350,50)
	 mango6= new mango1(705,400,50)
	 sling1= new slingshot(stone2.body,{x:200,y:100})

	
	
	 boy=createSprite(400, 780, 10,10);
	boy.addImage(boyIMG)
	boy.scale=0.1
	boyBody = Bodies.rectangle(200,620,100,100);
	Matter.Body.setStatic(boyBody,true)
	World.add(world, boyBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 boy.x= boyBody.position.x 
  boy.y= boyBody.position.y 
  detectCollision(stone2,mango2);
  detectCollision(stone2,mango3);
  detectCollision(stone2,mango4);
  detectCollision(stone2,mango5);
  detectCollision(stone2,mango6);
  

	
  
  drawSprites();
 ground1.display();
 tree2.display();
 stone2.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
}
function mouseDragged(){
	Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	sling1.fly()
	
	}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone2.body,{x:150,y:550})
sling.attach(stone2.body)
}

}
function detectCollision(lstone2,lmango){
mangoBodyPosition=lmangoBodyPosition;
stone2BodyPosition=lstone2BodyPosition;

var distance=dist(stone2BodyPosition.x,stone2BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone2.r){
	Matter.Body.setStatic(lmango.body,false)

}
}



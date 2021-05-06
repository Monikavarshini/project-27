
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roofobject;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofobject=new roof(385,150,400,50)

    bob1=new bob(215,450,85)
    bob2=new bob(300,450,85)
    bob3=new bob(385,450,85)
    bob4=new bob(470,450,85)
    bob5=new bob(555,450,85)

  rope1 = new rope(bob1.body, roofobject.body,-175, 20);
	rope2 = new rope(bob2.body, roofobject.body,-90, 20);
	rope3 = new rope(bob3.body, roofobject.body,-5, 20);
	rope4 = new rope(bob4.body, roofobject.body,80, 20);
	rope5 = new rope(bob5.body, roofobject.body,165, 20);

      


	Engine.run(engine);
  
}


function draw() {
  
  background(255);

  text("Press Space key!",55,243)

  

  roofobject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
 
}


function keyPressed(){
   if (keyCode === 32){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300})
   }
}




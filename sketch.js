const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ground;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,75,500,35);
 ball1=new Balls(500,375,"pink")
 ball2=new Balls(570,375,"pink")
 ball3=new Balls(640,375,"pink")
 ball4=new Balls(710,375,"pink")

 chain=new Chain(ball1.body,ground.body,-100,0);
 chain1=new Chain(ball2.body,ground.body,-30,0);
 chain2=new Chain(ball3.body,ground.body,40,0);
chain3=new Chain(ball4.body,ground.body,110,0);

}
function draw(){
    background(120);
    Engine.update(engine);
    keyPressed();
    chain.display();
   chain1.display();
    chain2.display();
    chain3.display();
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
  
}
function keyPressed(){
    if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-0.23,y:-0.0017});
    }
}

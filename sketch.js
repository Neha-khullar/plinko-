const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division,ground,particle,plinko;

function setup() {
   var canvas=(800,400);
   engine = Engine.create();
    world = engine.world;

  //createSprite(400, 200, 50, 50);
}
// arrays 
var particle =[];
var plinkos=[];
var division = [];
// height 
var divisionHeight=300;

function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var j=0;j < particles.length; j ++){
particles[j].display();
}
for (var k=0;k < divisions.length; k ++){
  divisions[k].display();
  }
  for(var j= 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for(var j= 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  if(frameCount%60===0){
    particles.push (new Particles(random(width/2-10,width/2+10),10,10));
           }











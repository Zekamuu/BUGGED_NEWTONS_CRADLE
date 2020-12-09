var Bar;
var Bob1constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	Bob1 = new Bob();
	console.log(Bob1);
	Bar = Bodies.rectangle(width / 2, 150, 500, 50, { isStatic: true });
	console.log(Bar)
	Bob1constraint = new TheBobsConstraints(Bob1.body, Bar.body, -Bob1.diameter*2, 0);

	Engine.run(userEngine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	Bob1.display()
	rect(Bar.position.x, Bar.position.y, 500, 50);
	Bob1constraint.display();
	drawSprites();

}

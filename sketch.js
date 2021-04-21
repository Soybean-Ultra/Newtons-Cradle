
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
}

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixeldensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint)

	function mouseDragged() {
		Matter.Body.setPosition(pendulum.body, { x: mouseX, y: mouseY
		});
		pendelum1 = new Pendulum(100, 400)
		pendelum2 = new Pendulum(150, 400)
		pendelum3 = new Pendulum(200, 400)
		pendelum4 = new Pendulum(250, 400)
		pendelum5 = new Pendulum(300, 400)
	}

	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
pendelum1.display();
pendelum2.display();
pendelum3.display();
pendelum4.display();
pendelum5.display();
  Engine.update(engine);
}




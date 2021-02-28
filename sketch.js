/* Before using any of the matter.js modules, we should first namespace
them like this OR write them fully like Matter.Bodies.circle(x, y, 5, options); */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//created variables for the physics engine and world
var engine, world;

//created a variable to store maximum number of drops
var raindrop = 100;
//created an array to store all the rain drop objects
var drops = [];

function setup() {
    createCanvas(1300, 600);
//created physics engine
    engine = Engine.create(engine);
    //assigned world to a variable
    world = engine.world;

/* based on frameCount, drop objects were created at random x and y positions 
and pushed into an array */
    if (frameCount % 150 === 0) {

        for (var i = 0; i < raindrop; i++) {
            drops.push(new Drop(random(0, 1300), random(0, 400)));
        }

    }
}

function draw() {
    background(0);
    //updating the engine
    Engine.update(engine);
    //displaying and updating each drop object by iterating through the array 
    for (var i = 0; i < raindrop; i++) {
        drops[i].display();
        drops[i].update();
    }
}


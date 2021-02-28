class Drop {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.01,
        }
        //Bodies will have a capital B
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        //World is written with a capital W
        World.add(world, this.body)
    }
    update() {
        if (this.body.position.y > height) {
            //Changed the random x value of the raindrop to fit our canvas size
            Matter.Body.setPosition(this.body, { x: random(0, 1300), y: random(0, 400) })
        }
    }

    display() {
        noStroke();
        fill(0, 0, 225);
        //RADIUS should be written in all caps
        ellipseMode(RADIUS);
        //Changed this.position.y to this.body.position.y
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}
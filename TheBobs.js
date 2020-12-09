class Bob {
    constructor() {
        var options = {
            'restitution': 0.4,
            'friction': 0.3,
            'density': 0.5
        }

        this.body = Bodies.circle(100, 50, 25, options);
        World.add(userWorld, this.body);
    }


    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, 50, 50);
        pop();
    }
}
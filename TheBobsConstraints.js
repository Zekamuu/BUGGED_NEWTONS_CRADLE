class TheBobsConstraints{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
        }
        
        this.string = Constraint.create(options);
        console.log(bodyA);
        console.log(bodyB);
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        World.add(userWorld, this.string);
    }
    display(){
        var bodyA = this.bodyA.position;
        console.log(bodyA);
        console.log(this.bodyB)
        var bodyB = this.bodyB.position;
        line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
    }
}
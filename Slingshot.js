class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
        }
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    display(){

        if(this.sling.bodyA){

        push();
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        fill("cyan");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }
    }
    
}
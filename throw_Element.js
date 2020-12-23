class Poly {
    constructor(x, y, radius){
        var options = {isStatic : false, restitution : 0.5, mass : 3, density : 0.5}
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(myWorld, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}
class Bottom {
    constructor(x, y, width, height){
        var options = {isStatic : true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);

    }
    display(){
        //var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

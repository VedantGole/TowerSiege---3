class Cube{
    constructor(x, y, width, height){
        var options = {isStatic : false};
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = width;
        World.add(myWorld, this.body);
        

    }
    score(){
        if(this.Visiblity < 0 && this.Visiblity > -105){
            score++;
        }
    }

    display(){
        
        //console.log(this.body.speed);
        
        if(this.body.speed < 4){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("gray");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height)
        pop();

    }else{
        World.remove(myWorld, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visiblity);
        pop();

    }
    }
}
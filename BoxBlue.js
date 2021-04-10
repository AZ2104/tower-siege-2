class BoxBlue {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 1.5,
            //density:1.2

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility= 255;
    }
    display() {
        if(this.body.speed<5){

        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("turquoise");
        fill("lightblue");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
        }

        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
          }

    }
}
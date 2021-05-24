class Bob{
    constructor(x,y,radius){
        
        var options = {
            isStatic: false,
            'restitution':1,
            'friction':0,
            'density':0.6
        }

        this.radius = radius;
        this.x = x;
        this.y = y;

        this.body = Matter.Bodies.circle(x,y,(this.radius)/2,options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(rgb(93,93,105));
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
}
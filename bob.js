class bob{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:1.5
        }

        this.x=x
        this.y=y
        
        this.body = Bodies.circle(x, y, diameter/2, options);

        this.diameter = diameter;

        World.add(world,this.body)

    

    }

    display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("pink");
			ellipse(0,0,this.diameter);
			pop()
			
	}

}
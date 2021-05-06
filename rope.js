class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options ={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offsetX,y:this.offsetY}
         

        }

        this.rope=Matter.Constraint.create(options);
        
        World.add(world,this.rope);

        }

       display(){
        console.log("hello")
        var pointA=this.rope.bodyA.position;
        //var pointB=this.rope.bodyB.position;
        
       console.log(pointA)
       var pointB= this.rope.bodyB.position
        push();
        strokeWeight(10);
        stroke("black");

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
 
        var Anchor2X = this.rope.bodyB.position.x + this.offsetX;
        var Anchor2Y = this.rope.bodyB.position.y + this.offsetY;

        

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop();
    }

}

       
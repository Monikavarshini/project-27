class roof
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:true
            			
            }
            
		
            this.h=h
            this.w=w
            
            
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

    }
    
	display(){
			
			var Pos=this.body.position;		

			push()
			//translate(Pos.x, Pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("pink")
			rect(Pos.x,Pos.y,this.w, this.h);
			pop()
			
     } 
    }
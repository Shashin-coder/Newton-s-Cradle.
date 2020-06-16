class Balls {
    constructor(x, y,colour) {
      var options = {
        'restitution':0.8,
        'friction':3,
      'density':0.5,
      'mass':10,
        
          
      }
      this.body = Bodies.circle (x, y,35, options);
      //this.width = 30;
      //this.height = 30;
      Bodies.circle.x=this.body.position.x;
      Bodies.circle.y=this.body.position.y;

     this.colour=colour;
    
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      
    ellipseMode(CENTER);
      
      fill(this.colour);
      ellipse(0, 0,70);
      pop();
    }
  };
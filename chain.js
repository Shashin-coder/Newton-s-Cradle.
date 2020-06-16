
class Chain{
  constructor(bodyA, bodyB,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;

      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          pointB:{x:this.offsetX,y:this.offsetY},
         
          
        }
          
      
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }

  display(){
      var pointA=this.chain.bodyA.position
      var pointB=this.chain.bodyB.position
      strokeWeight=3;
      var a1x=pointA.x;
      var a1y=pointA.y;
      var a2x=pointB.x+ this.offsetX;
      var a2y=pointB.y+this.offsetY;
      line (a1x,a1y,a2x,a2y);
      
  }
  
}
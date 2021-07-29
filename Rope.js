class Rope
{
    constructor(bodyA,pointB)
    {
       this.pointB=pointB

       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.5,
           length:250
       }
        
       this.rope = Constraint.create(options)
       World.add(world,this.rope)

      }

      display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2)
        line(pointB.x,pointB.y,pointA.x,pointA.y);
      }

}        
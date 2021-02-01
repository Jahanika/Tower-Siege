class Slingshot{
    constructor(b1,b2){
        var options = {
            length: 10,
            stiffness: 0.08,
            bodyA: b1,
            pointB: b2
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
        var p1=this.sling.bodyA.position
        var p2=this.sling.pointB
        push()
        stroke("#312217")
        line(p1.x,p1.y,p2.x,p2.y)
        pop()
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attatch(body){
        this.sling.bodyA=body
    }
}
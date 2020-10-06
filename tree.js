class Tree1{
    constructor(x, y,width,height) {
        var options = {
          isStatic:true,
            'friction':0.5,
            'density':1.2
            
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width =width; 
        this.height =height; 
        World.add(world, this.body);
        this.image = loadImage("tree.png")
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
        
      }


}
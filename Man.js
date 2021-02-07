class Man {
    constructor(x,y){
      var options = {
          isStatic:true
      }

      this.body = Bodies.rectangle(x,y,50,50,options);
      this.image1 = loadImage("images/man.png");
      this.image2 = loadImage("images/fallingman.png");
      World.add(world,this.body);

   }

   display(){
       push();
       translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
       image(this.image1,0,0,50,50);
       pop();

       
   }
}
class Money{
    constructor(x,y){
      var options = {
          isStatic:false
      }

      this.body =  this.body = Bodies.rectangle(x, y, 20,20, options);
      this.image = loadImage("images/money.png");
      World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 20,20);
        pop();
    }
}
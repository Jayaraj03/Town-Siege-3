class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    score() {
      if(this.Visiblity<0 && this.Visiblity>-1005){
        score++
      }
    }
   
  }
  display(){
  
    if(this.body.speed < 3){
      block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
    }
    else{
      World.remove(world, this.body);
      push();
      console.log(this.Visiblity)
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
    
  };
 
    
       
     


 

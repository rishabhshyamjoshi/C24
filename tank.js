class Tank {
    constructor(x, y, w, h) {
      const options = {
        'isStatic':true
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      World.add(world, this.body);
      this.w = w;
      this.h = h;
      this.z = 0;
    }
  
    show() {
        if(this.z===0){
            World.remove(world, this.body);
           
        }
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);

      image( tankImg, 0, 0, this.w, this.h);
      pop();
    }
  }
  
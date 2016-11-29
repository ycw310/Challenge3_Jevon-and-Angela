function Block() {

  this.left = random(width / 2);
  this.right = random(width / 2);
  this.y = height; //original x position of block i.e. rightmost
  this.t = 20; //thichkness of each block
  this.speed = 2; //speed of blocks rising
  
  this.highlight = false; //if HIT

  this.show = function() {
    fill(255); //white default
    if(this.highlight){ //if HIT
      fill(255, 0, 0); //turns RED
    }
    
    rect(0,this.y,this.left,this.t);
    rect(width-this.right,this.y,this.right,this.t);
    
    //rect(this.x, 0, this.w, this.top); 
    //rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.y -= this.speed;
  }

  this.offscreen = function() {
    if (this.y < -this.t) { 
      return true;
    } else {
      return false;
    }
  }

  this.hits = function(bird) {
    if (bird.x < this.left || bird.x > height - this.right) {
      if (bird .y > this.y && bird.y < this.y + this.t) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

}
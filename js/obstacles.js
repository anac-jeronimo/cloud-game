class Obstacle {
    constructor(x, game, image, isDog) {
        this.x = x;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.game = game;
        this.image = new Image()
        this.image.src = image;
        this.isDog = isDog
    }
    getPositionX(){
        return this.x;
    }
    getPositionY(){
        return this.y;
    }
    drawObstacle() {       
        let image = this.image;
        image.src = this.image.src;

        this.game.ctx.drawImage(image, this.x, this.y, this.width, this.height)
        
      //  this.game.ctx.fillStyle = 'red';
       // this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
}
    /*removeObstacle() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        //ctx.clearRect(20, 20, 100, 50); #image top left width height
        
    } 
}
   
    moveLeft() {
        if (this.x -25 > 0) {
            this.x -= 25;
        }
        //let previousX = this.getPositionX();
        //let previousY = this.getPositionY();
        
        //this.updateCanvas(previousX,previousY);
    
    refreshObstacle() {
        console.log('objecto');
        
            obstacle.moveLeft();
            console.log('objecto');
        } 
} */
    //crashWith(obstacle) {
       // return !(this.bottom() < obstacle.top() ||
       // this.top() > obstacle.bottom() || 
       // this.right() < obstacle.left() || 
       // this.left() > obstacle.right())
   // }
//} 












      
 
class Obstacle {
    constructor(x, game, image, removePoints) {
        this.x = x;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.game = game;
        this.image = new Image()
        this.image.src = image;
        this.removePoints = removePoints;
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
        
    }
}
   









      
 
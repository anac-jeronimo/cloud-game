
class Cat {
    constructor(game) {
        this.x = 100;
        this.y= 540;
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.game = game;
        this.image.src = "images/pixelcloud.png";
        
        //this.image.src = 'images/freya.jpg';  
        //image.addEventListener('load', () => {
            //this.image = image;
            //this.draw();
        //});
        //image.src = 'images/freya.jpg'; 
    }
    getPositionX(){
        return this.x;
    }
    getPositionY(){
        return this.y;
    }
    moveUp() {
        this.y -= 25;    
    }
    moveDown() {
        this.y += 25;
    }
    moveLeft() {
        this.x -= 25;
    }
    moveRight() {
        this.x += 25;
    }
    draw() {
        this.game.ctx.drawImage(this.image,this.x,this.y,50,50);
    }

 
}





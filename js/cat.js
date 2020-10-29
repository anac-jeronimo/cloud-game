
let miau = new Audio("images/meow_short.wav");
let newmiau = new Audio("images/Cat.wav-8970-Free-Loops.com.mp3");
let miau1 = new Audio(" images/meow1.wav");
let miau2 = new Audio(" images/cat13.wav");
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
        newmiau.play(); 
    }
    moveDown() {
        this.y += 25;
       miau.play(); 
    }
    moveLeft() {
        this.x -= 25;
        miau1.play(); 
    }
    moveRight() {
        this.x += 25;
        miau2.play(); 
    }
    draw() {
        this.game.ctx.drawImage(this.image,this.x,this.y,50,50);
    }

 
}





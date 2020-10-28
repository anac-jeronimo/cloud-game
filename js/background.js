
/*let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');

class backgroundImage {
    constructor() {
        //debugger;
        const image = new Image();
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
        image.src ="images/simple_but_beautiful_by_xflutt_de4lmm9.png"; 
    };
    
    
    draw () {
        ctx.drawImage(this.image, this.x,0);
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height,     // source rectangle
            0, 0, myCanvas.width, myCanvas.height); // destination rectangle
    }
    
}
let background = new backgroundImage();



 function updateCanvas() {
    //backgroundImage.move();
    //ctx.clearRect(0, 0,  canvas.width, canvas.height);
    //backgroundImage.draw();
    //ctx.drawImage(image,700,700);
    

    requestAnimationFrame(updateCanvas);
}

updateCanvas();
*/

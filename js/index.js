let currentGame;
let obstacles = [];
let isOver = false;
let obstacle;
let player;
  

document.getElementById('start-button').addEventListener("click", () => {
    startGame();
}) ;
    
    

function startGame() {
    currentGame = new Game();
    player = new Cat(currentGame);
    currentGame.player = player;
    currentGame.obstacles = obstacles;
    currentGame.isRunning = true;
    currentGame.mainImage.className = 'background';
    refreshObj();
    updateCanvas();
   
}  
    

function refreshObj()
    {   


        setInterval(function()
        { 
            let dogAndFoodArray = [ "images/browndog.png" , "images/canPixel.png", 
            "images/catfoodpixel.png ",  "images/dog-pixel-art_2021081.png", " images/owl1.png", " images/owlpixel.png"];
            let randomElement = dogAndFoodArray[Math.floor(Math.random() * dogAndFoodArray.length)];
            let removePoints = randomElement.includes('dog') || randomElement.includes('owl');
            let randmX = Math.floor(Math.random()*700);
            
            currentGame.obstacles.push(new Obstacle(randmX, currentGame, randomElement, removePoints))
        }, 1000);
 
}


function updateCanvas() {
    currentGame.ctx.clearRect(0, 0, 900, 600);
    currentGame.checkGameOver();
    currentGame.player.draw();
    currentGame.obstacles.forEach((obstacle, index) => {
        currentGame.colision(obstacle, index)
        obstacle.y += 1;
        obstacle.drawObstacle();
        
    });
    
    if(currentGame.isRunning) {
        requestAnimationFrame(updateCanvas);
    }

} 


    document.addEventListener('keydown', e => {
  
    switch(e.keyCode) {
        case 38:
            if(currentGame.player.y - 25 > 0) {
                currentGame.player.moveUp();
                //console.log("jhg");
            }   
        break;
        case 40:
            if(currentGame.player.y - 25 < 500) {
                currentGame.player.moveDown();
            }       
        break;
        case 37: 
        if (currentGame.player.x -25 > 0) {
            currentGame.player.moveLeft();
        }
        break;
        case 39:
            if(currentGame.player.x - 25 < 800) {
                currentGame.player.moveRight();
            }               
        break;
    }   
});

console.log(startGame);
console.log(updateCanvas);
 
    

let currentGame;
let isOver = false;
let obstacle;
let player;
currentGame = new Game();

  

document.getElementById('start-button').addEventListener("click", () => {
    if(!currentGame.isRunning) {
        startGame(1); 
    } else {
        currentGame.reset()
    }
}) ;

 
document.getElementById('easy-button').addEventListener("click", () => {
    if(!currentGame.isRunning) {
        startGame(2); 
    }
 
}) ;

document.getElementById('medium-button').addEventListener("click", () => {
    if(!currentGame.isRunning) {
        startGame(3); 
    }
}) ;


function startGame(difficulty) { 

    currentGame.setDifficulty(difficulty);
    player = new Cat(currentGame);
    currentGame.player = player;
    currentGame.isRunning = true;
    //currentGame.mainImage.className = 'background'; //
    refreshObj();
    updateCanvas();
    currentGame.checkButtons();
    document.getElementById('easy-button').style.display = 'none';
    document.getElementById('medium-button').style.display = 'none';
    currentGame.mainImage.className = 'giphy';
    currentGame.playSound();
    
}  
    

function refreshObj()
    {   
        if(currentGame.getDifficulty()===1)
        {
            setInterval(function()
            {
                let dogAndFoodArray = [ "images/browndog.png" , "images/canPixefood.png", 
                "images/catfoodpixel.png ",  " images/owl1.png", ];
                let randomElement = dogAndFoodArray[Math.floor(Math.random() * dogAndFoodArray.length)];
                let removePoints = randomElement.includes('dog') || randomElement.includes('owl') ;
                let randmX = Math.floor(Math.random()*700);
                
                currentGame.obstacles.push(new Obstacle(randmX, currentGame, randomElement, removePoints))
            }, 2000);
        }
        if(currentGame.getDifficulty()===2)
        {
            setInterval(function()
            {    
                let dogAndFoodArray = [ "images/browndog.png" , "images/canPixefood.png", 
                "images/catfoodpixel.png ",  "images/dog-pixel-art_2021081.png", " images/owl1.png", " images/owlpixel.png"];
                let randomElement = dogAndFoodArray[Math.floor(Math.random() * dogAndFoodArray.length)];
                let removePoints = randomElement.includes('dog') || randomElement.includes('owl');
                let randmX = Math.floor(Math.random()*700);
                
                currentGame.obstacles.push(new Obstacle(randmX, currentGame, randomElement, removePoints))
            }, 1000);
        }
        if(currentGame.getDifficulty()===3)
        {
            setInterval(function()
            {   
                let dogAndFoodArray = [ " images/canPixefood.png", "images/dog-pixel-art_2021081.png", " images/owl1.png", 
                "images/browndog.png",  "images/catfoodpixel.png" , "images/owl2.png ",
               " images/ramenfood.png", "images/owlpixel.png", "images/superhero-dog.png" ];
                let randomElement = dogAndFoodArray[Math.floor(Math.random() * dogAndFoodArray.length)];
                let removePoints = randomElement.includes('dog') || randomElement.includes('owl');
                let randmX = Math.floor(Math.random()*700);
                
                currentGame.obstacles.push(new Obstacle(randmX, currentGame, randomElement, removePoints))
            }, 700);
        }
        
}


function updateCanvas() {
    currentGame.ctx.clearRect(0, 0, 900, 700);
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
 
    

let owlSound =  new Audio("images/owlsound.wav"); ///////
let dogSound = new Audio("images/bark.wav");    ///////
let crunchSound = new Audio("images/Bite-SoundBible.com-2056759375.wav");   ///////


class Game {
  constructor(difficulty) 
  {
      this.player = {},
      this.obstacles = [];
      this.score = 0;
      this.myCanvas = document.getElementById('canvas');
      this.ctx = this.myCanvas.getContext('2d');
      this.mainImage = document.getElementById('main-image');
      this.isRunning = false;
      this.difficulty = difficulty; 
  }

    getDifficulty()
    { 
        return this.difficulty;
    }
  
    setDifficulty(difficulty)
    { 
      this.difficulty = difficulty;
    }

  colision(obstacle, index) 
  {
  
      if(this.player.x + this.player.width > obstacle.x &&
          this.player.x < obstacle.x + obstacle.width &&
          this.player.y + this.player.height > obstacle.y &&
          this.player.y < obstacle.y + obstacle.height) {
              console.log(obstacle)
             if(obstacle.removePoints) {
                currentGame.obstacles.splice(index, 1)
                this.score -=1;
                document.getElementById('score').innerHTML = this.score;
                currentGame.obstacle.includes('owl').owlSound.play();
                currentGame.obstacle.isdog('dog').dogSound.play();

              }  else {
                currentGame.obstacles.splice(index, 1)
                this.score +=1;
                document.getElementById('score').innerHTML = this.score;
                currentGame.obstacle.includes('food').crunchSound.play();
              }
            }
             
              }
          
      checkGameOver() {
        if(this.score < 0) {
          this.reset();
          this.ctx.clearRect(0, 0, 900, 700);
          this.isRunning = false;
          this.mainImage.className = 'gameOver';
          
        }
        else if(this.score >= 20) {
          this.reset();
          this.ctx.clearRect(0, 0, 900, 700);
          this.isRunning = false;
          this.mainImage.className = 'youWon'; 
        }
      }
      reset() {
        this.isRunning = false;
        this.obstacles = [];
        this.score = 0;
        this.player = {};
        this.checkButtons();
        document.getElementById('easy-button').style.display = 'block';
        document.getElementById('medium-button').style.display = 'block';
      }    
      checkButtons() {
        if(currentGame.isRunning) {
          document.getElementById('start-button').innerHTML = 'Stop Game';
        } else {
          document.getElementById('start-button').innerHTML = 'Start Game';
        }
      } 
      playSound () {
        let sound = new Audio("images/leap.WAV"); 
          sound.play();
      }
}





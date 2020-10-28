class Game {
  constructor() {
      this.player = {},
      this.obstacles = [];
      this.score = 0;
      this.myCanvas = document.getElementById('canvas');
      this.ctx = this.myCanvas.getContext('2d');
      this.mainImage = document.getElementById('main-image');
      this.isRunning = false;
     
  }
  colision(obstacle, index) {
  
      if(this.player.x + this.player.width > obstacle.x &&
          this.player.x < obstacle.x + obstacle.width &&
          this.player.y + this.player.height > obstacle.y &&
          this.player.y < obstacle.y + obstacle.height) {
              console.log(obstacle)
             if(obstacle.removePoints) {
                currentGame.obstacles.splice(index, 1)
                this.score -=1;
                document.getElementById('score').innerHTML = this.score;
                
              } else {
                currentGame.obstacles.splice(index, 1)
                this.score +=1;
                document.getElementById('score').innerHTML = this.score;
                
              }
             
              }
          }
      checkGameOver() {
        if(this.score < 0) {
          this.reset();
          this.ctx.clearRect(0, 0, 900, 600);
          this.isRunning = false;
          this.mainImage.className = 'gameOver';
          
        }
        else if(this.score >= 30) {
          this.reset();
          this.ctx.clearRect(0, 0, 900, 600);
          this.isRunning = false;
          this.mainImage.className = 'youWon'; //
        }
      }
      reset() {
        this.obstacles = [];
        this.score = 0;
        this.player = {};
      }
      
      }





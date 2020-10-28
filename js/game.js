class Game {
  constructor() {
      this.player = {},
      this.obstacles = [];
      this.score = 0;
      this.myCanvas = document.getElementById('canvas');
      this.ctx = this.myCanvas.getContext('2d');
  }
  colision(obstacle, index) {
  
      if(this.player.x + this.player.width > obstacle.x &&
          this.player.x < obstacle.x + obstacle.width &&
          this.player.y + this.player.height > obstacle.y &&
          this.player.y < obstacle.y + obstacle.height) {
              console.log(obstacle)
             // alert ("Meowwwww");
             if(obstacle.isDog) {
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

}




"use strict";
// game.js

import Ship from './ship.js';
import Enemy from './enemy.js';
import Bullet from './bullet.js';

export default class Game {
  // Private static variables for score and enemy count
  static #score = 0;
  static #enemy = 0;

  constructor(options, gameBox) {
    this.gameBox = gameBox;
    this.options = options;
    this.winner = false;
    this.bullet = null;
    this.enemyObj = null;
    this.spaceShip = new Ship(this.gameBox, 'images/ship.png');
    this.enemyImages = ['images/mon1.png', 'images/mon2.png', 'images/mon3.png'];
    this.lastScore = document.querySelector(".lastScore");
    
    // Creation Of Enemies Container
    this.enemiesContainer = document.createElement("div");
    this.enemiesContainer.classList.add("enemies");
    this.gameBox.appendChild(this.enemiesContainer);
    
    this.enemyDim = this.enemyDimCreation(this.enemiesContainer);
    
    this.gameUser();
    this.createEnemies();
    
    setTimeout(()=> {
      this.gameTimer(this.options.timeInMiutes);
      this.enemyMovement(this.options.gameLevel);
    }, 3200);
  }

  // Displaing User Info On Screen
  gameUser() {
    new Audio("sound/countdown.wav").play();
    document.querySelector(".user-name").textContent = localStorage.getItem("username");
    const lastScoreValue = localStorage.getItem(`score_${localStorage.getItem('username')}`);
    this.lastScore.textContent = (lastScoreValue !== null && lastScoreValue !== undefined) ? lastScoreValue : 0;
  }

  // Sound Of Game
  playSound(src) {
    const audio = new Audio(`sound/${src}`);
    audio.play();
  }

  // Setting Number Of Enemies According To Window Width
  enemyDimCreation() {
    const netWidth = (Math.floor(this.enemiesContainer.clientWidth / 100) * 100) - 50;
    this.enemiesContainer.style.width = (`${netWidth}px`);
    const netHeight = (Math.floor(this.enemiesContainer.clientHeight / 100) * 120) - 80;
    this.enemiesContainer.style.height = (`${netHeight}px`);
    this.enemiesContainer.style.top = `${-netHeight / 2}px`;
    return { height: netHeight, width: netWidth, container: this.enemiesContainer };
  }

  // Create Enemies And Append To Game
  createEnemies() {
    // Set Rows & Cols
    const numRows = this.enemyDim.height / 40;
    const numCols = this.enemyDim.width / 50;

    // Setting Random Images
    let yellowCount = 0, redCount = 0;
    
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        let enemyImageSrc = this.enemyImages[0];
        // Random Positions For Red & Yellow Enemy
        if (Math.ceil(Math.random() * numCols) === col
          || Math.ceil(Math.random() * numRows) === row) {
          if (yellowCount < 6) { // For Yellow Enemy
            enemyImageSrc = this.enemyImages[1];
            yellowCount++;
          } else if (redCount < 4) { // For Red Enemy
            enemyImageSrc = this.enemyImages[2];
            redCount++;
          }
        }
        this.enemyObj = new Enemy(enemyImageSrc, this.enemyDim.container, row, col);
        Game.#enemy++;
      }
    }
  }

  // Movement OF Enemy Up To Down
  enemyMovement(speed) {
    this.shootBullet();
    if(speed === 1) {speed = this.options.easySpeed;}
    else {speed = this.options.hardSpeed;}

    this.moveTime = setInterval(() => {
      const currentTop = parseInt(this.enemiesContainer.style.top) || 0;
      this.enemiesContainer.style.top = `${currentTop + speed}px`;
      this.enemyCrash();
    }, 500);
  }

  // Crashing Enemy With Ship OR With Bottom
  enemyCrash() {
    const shipBoundry = this.spaceShip.spaceShip.getBoundingClientRect();
    const allEnemies = document.querySelectorAll('.enemy');

    allEnemies.forEach((enemy) => {
      const enemyBoundry = enemy.getBoundingClientRect();
      if (
        enemyBoundry.bottom > shipBoundry.top &&
        enemyBoundry.top < shipBoundry.bottom &&
        enemyBoundry.left < shipBoundry.right &&
        enemyBoundry.right > shipBoundry.left ||
        enemyBoundry.bottom >= (this.gameBox.clientHeight - 10)
      ) {
        this.gameOver();
      }
    });
  }

  // Creating Bullet
  createBullet() {
    this.bullet = new Bullet(this.gameBox, this, (this.spaceShip.spaceShip.getBoundingClientRect().x + this.spaceShip.spaceShip.width / 2), this.spaceShip.spaceShip.getBoundingClientRect().y);
  }

  // Shooting Bullet
  shootBullet() {
    document.addEventListener('keyup', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        this.playSound("fire.mp3");
        this.createBullet();
      }
    });
  }

  // Crashing Enemies With Bullet
  enemyBulletCrash(bullet) {
    // Check Winning
    if (this.winner) {
      bullet.destroy();
      return;
    } else if (Game.#score >= this.options.winScore || Game.#enemy === 0) {
      this.winner = true;
      this.gameOver();
      return;
    }
  
    const bulletRect = bullet.bullet.getBoundingClientRect();
    const enemies = document.querySelectorAll('.enemy');
  
    enemies.forEach((enemy) => {
      const enemyRect = enemy.getBoundingClientRect();
      // Check Crashing With Enemy
      if (
        bulletRect.bottom > enemyRect.top &&
        bulletRect.top < enemyRect.bottom &&
        bulletRect.left < enemyRect.right &&
        bulletRect.right > enemyRect.left
      ) {
        bullet.destroy();
        enemy.remove();
        Game.#enemy--;
      
        if (enemy.src.includes('mon3.png')) {
          this.redEnemyCollision(enemyRect);
        } else if (enemy.src.includes('mon2.png')) {
          Game.#score += 2;
          this.playSound("catch.wav");
        } else {
          Game.#score++;
          this.playSound("catch.wav");
        }
      
        document.getElementById('liveScore').textContent = Game.#score;
      }
    });
  }
  
  // Check If Red Enemy Crashed
  redEnemyCollision(enemyRect) {
    const positions = [-15, 15];

    // Loop For Removing Enemies At All Positions
    positions.forEach((x) => {
      positions.forEach((y) => {
        const leftPos = document.elementFromPoint(enemyRect.left + x, enemyRect.top + y);
        const rightPos = document.elementFromPoint(enemyRect.right + x, enemyRect.top + y);
        if (leftPos?.classList.contains('enemy')) {
          leftPos.remove();
          Game.#enemy--;
        }
        if (rightPos?.classList.contains('enemy')) {
          rightPos.remove();
          Game.#enemy--;
        }
      });
    });

    Game.#score += 15;
    this.playSound("red.mp3");
  }

  // Setting Game Timer
  gameTimer(duration) {
    let timeLeft = duration * 60;
    this.timer = setInterval(() => {
      let minutes = Math.floor(timeLeft / 60);
      document.querySelector(".min").textContent = minutes.toString().padStart(2, '0');
      let seconds = Math.floor(timeLeft % 60);
      document.querySelector(".sec").textContent = seconds.toString().padStart(2, '0');
      timeLeft--;
      if (timeLeft < 0) {
        this.gameOver();
      }
    }, 1000);
  }

  // End Of Game
  gameOver() {
    clearInterval(this.moveTime);
    clearInterval(this.timer);

    setTimeout(()=> {
      localStorage.setItem(`score_${localStorage.getItem('username')}`, Game.#score);
      this.lastScore.textContent = Game.#score;
      if (this.winner) {
        popup("You Won The Game", "images/winner.png");
        this.playSound("win.mp3");
      } else {
        popup("Better Luck Next Time", "images/loser.png");
        this.playSound("lose.wav");
      }
    }, 1000);
  }
};
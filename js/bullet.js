"use strict";
// bullet.js file

export default class Bullet {
  constructor(gameBox, game, x, y, imgSrc = 'images/bullet.png', speed = 5) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.game = game;

    this.bullet = document.createElement('img');
    this.bullet.classList.add('bullet');
    this.bullet.src = imgSrc;
    gameBox.appendChild(this.bullet);
    
    this.moveBullet();
    this.bulletPositioning();
  }

  bulletPositioning() {
    this.bullet.style.left = `${this.x - this.bullet.width / 2}px`;
    this.bullet.style.top = `${this.y}px`;
  }

  moveBullet() {
    this.bulletTime = setInterval(() => {
      const currentTop = parseInt(this.bullet.style.top);
      this.bullet.style.top = `${currentTop - this.speed}px`;
      if (currentTop <= 0) {
        this.destroy();
      } else {
        this.game.enemyBulletCrash(this);
      }
    }, 20);
  }

  destroy() {
    clearInterval(this.interval);
    this.bullet.remove();
  }
};
"use strict";
// Enemy.js file

export default class Enemy {
  constructor(imgSrc, container, row, col) {
    this.enemy = document.createElement('img'); 
    this.enemy.classList.add('enemy');
    this.enemy.src = imgSrc;
    container.appendChild(this.enemy);

    this.setPosition(row, col);
  }

  setPosition(row, col) {
    this.enemy.style.left = `${(this.enemy.width + 10)  * col}px`;
    this.enemy.style.top = `${(this.enemy.height + 10) * row}px`;
  }

  destroy() {
    this.enemy.remove();
  }
};



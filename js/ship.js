"use strict";
// ship.js file

export default class Ship {
  constructor(gameBox, imgSrc, width = 50, height = 50, step = 40) {
    // Creating Only One Instance Of Ship
    if (Ship.instance) {
      return Ship.instance;
    }
    
    Ship.instance = this;
    this.gameBox = gameBox;
    // Creating Ship Image
    this.spaceShip = document.createElement('img');
    this.spaceShip.classList.add('ship');
    this.spaceShip.src = imgSrc;
    this.spaceShip.style.position = 'absolute';
    this.spaceShip.style.width = `${width}px`;
    this.spaceShip.style.height = `${height}px`;
    
    // Add Ship To Game 
    this.gameBox.appendChild(this.spaceShip);

    // Centering Ship
    this.shipPositioning();
    this.shipMovement(step);
  }

  // Moving Ship
  shipMovement(step) {
    document.addEventListener("keydown", (event)=>{
      const currentPos = parseFloat(this.spaceShip.style.left);
      if (event.key === "ArrowLeft") {
          this.spaceShip.style.left = `${Math.max(0, currentPos - step)}px`
        } else if (event.key === "ArrowRight") {
          this.spaceShip.style.left  = `${Math.min((this.gameBox.clientWidth - this.spaceShip.width), (currentPos + step))}px`;
        }
    });
  }

  shipPositioning() {
    this.spaceShip.style.left = `${this.gameBox.clientWidth / 2 - this.spaceShip.width / 2}px`;
    this.spaceShip.style.bottom = `${this.spaceShip.height}px`;
  }

};
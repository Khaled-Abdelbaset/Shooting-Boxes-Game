"use strict";
// startGame.js

import Game from './game.js';

const gameBox = document.querySelector('.game-box');

// Set the game options
const options = {
  gameLevel: parseInt(localStorage.getItem("selectedLevel")),
  timeInMiutes: 1.5,
  shipSpeed: 10,
  winScore: 150,
};
options.easySpeed = options.gameLevel * 6;
options.hardSpeed = options.gameLevel * 6;

// Start the game
const game = new Game(options, gameBox);
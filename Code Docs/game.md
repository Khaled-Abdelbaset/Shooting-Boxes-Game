# Game Logic Documentation

The `game.js` file contains the primary logic for the Space Shooter Game. This class manages the overall game flow, including player input, enemy generation, collision detection, scoring, and game over scenarios.

## Class: Game

### Properties
- `options`: Configuration options for the game.
- `endGame`: Flag indicating whether the game has ended.
- `winner`: Flag indicating if the player has won.
- `myBullet`: Reference to the player's bullet.
- `myShip`: Instance of the player's spaceship.
- `enemiesContainer`: DOM element containing enemy elements.
- `enemyImages`: Array of enemy image sources.
- `enemyDim`: Dimensions of the enemy container.
- `lastScore`: DOM element displaying the last score.

### Methods
- `gameUser()`: Displays user information on the screen.
- `enemyDimCreation()`: Sets the dimensions of the enemy container.
- `createEnemies()`: Generates enemies at random positions.
- `enemyMovement(speed)`: Handles the movement of enemies.
- `enemyCrash()`: Detects collisions between the ship and enemies.
- `createBullet()`: Creates a bullet fired by the ship.
- `enemyBulletCrash(bullet)`: Handles collisions between bullets and enemies.
- `gameTimer(duration)`: Sets the game timer.
- `gameOver()`: Handles the end of the game.

## Usage
Instantiate the `Game` class with the desired configuration options to start the game.

Example:
```javascript
const options = {
  enemySpeed: 1,
  timeInMiutes: 2,
  shipSpeed: 15,
  winScore: 10,
};

const game = new Game(options);

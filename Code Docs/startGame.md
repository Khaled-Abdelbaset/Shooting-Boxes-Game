
### `startGame.js` - Game Initialization
```markdown
# Game Initialization Documentation

The `startGame.js` file is responsible for setting up the game by instantiating the `Game` class with specific configuration options.

## Configuration Options
- `enemySpeed`: Speed of enemy movement.
- `timeInMinutes`: Duration of the game in minutes.
- `shipSpeed`: Speed of the player's spaceship.
- `winScore`: Score required to win the game.

## Usage
Set the game configuration options and create an instance of the `Game` class.

Example:
```javascript
const options = {
  enemySpeed: 1,
  timeInMiutes: 2,
  shipSpeed: 15,
  winScore: 10,
};

const game = new Game(options);

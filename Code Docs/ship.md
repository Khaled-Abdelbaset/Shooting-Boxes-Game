
### `ship.js` - Player's Spaceship
```markdown
# Spaceship Documentation

The `ship.js` file defines the `Ship` class, representing the player-controlled spaceship. It handles ship movement, ensures only one instance of the ship is created, and centers the ship within the game box.

## Class: Ship

### Properties
- `ship`: DOM element representing the spaceship.
- `gameBox`: DOM element representing the game box.

### Methods
- `constructor(imgSrc, width, height)`: Initializes the ship.
- `move(direction, step)`: Moves the ship left or right.
- `shipPositioning()`: Centers the ship within the game box.

## Usage
Create an instance of the `Ship` class to manage the player's spaceship.

Example:
```javascript
const spaceship = new Ship('images/ship.png');

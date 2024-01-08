
### `enemy.js` - Enemy Generation
```markdown
# Enemy Generation Documentation

The `enemy.js` file defines the `Enemy` class responsible for creating enemy instances, setting their positions, and providing a method to destroy enemies.

## Class: Enemy

### Properties
- `enemy`: DOM element representing an enemy.

### Methods
- `constructor(imgSrc, container, row, col)`: Initializes an enemy.
- `setPosition(row, col)`: Sets the position of the enemy.
- `destroy()`: Removes the enemy from the DOM.

## Usage
Create instances of the `Enemy` class to generate enemies within the game.

Example:
```javascript
const enemy = new Enemy('images/mon1.png', enemyContainer, 0, 0);


### `popup.js` - Popup Messages
```markdown
# Popup Messages Documentation

The `popup.js` file defines functions for displaying popup messages using SweetAlert (Swal). It includes messages for invalid input, game over scenarios, and level information.

## Functions
- `noNameMessage(message)`: Displays an error message for invalid input.
- `noLevelMessage(message)`: Displays a message for invalid difficulty levels.
- `gameOverMessage(message, imgSrc, action)`: Displays a game over message with options to play again or exit.

## Usage
Call the relevant functions to display popup messages.

Example:
```javascript
noNameMessage("Invalid Name!");

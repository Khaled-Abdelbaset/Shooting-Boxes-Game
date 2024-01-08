# Shooting Boxes Game

Welcome to the Shooting Boxes Game! This simple and entertaining game allows you to control a spaceship, shoot down enemies, and aim for the highest score. The game features customizable options, a scoring system, and visually appealing popups using SweetAlert (Swal).

## Getting Started

To play the game, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/khaled-abdelbaset/Shooting-Boxes.git
    ```

2. Open the project folder:

    ```bash
    cd Shooting-Boxes
    ```

3. Open the `index.html` file in your preferred web browser.

4. Enter your username and choose a difficulty level.

5. Use the arrow keys to move your spaceship (left and right).

6. Press the spacebar to shoot bullets at the enemies.

7. Try to achieve the winning score before the timer runs out!

## Game Controls

- **Arrow Left**: Move spaceship left.
- **Arrow Right**: Move spaceship right.
- **Spacebar**: Shoot bullets.

## Game Features

- User-friendly interface with customizable options.
- Responsive ship movement and bullet shooting.
- Visually appealing popups using SweetAlert.
- Dynamic enemy generation and movement.
- Scoring system with a timer.

## Configuration

You can customize the game by adjusting the options in the `startGame.js` file:

```javascript
// startGame.js

// Set the game options
const options = {
  enemySpeed: parseInt(localStorage.getItem("selectedLevel")),
  timeInMinutes: 1.5,
  shipSpeed: 10,
  winScore: 150,
};

// Start the game
const game = new Game(options);
```

Modify the `enemySpeed`, `timeInMinutes`, `shipSpeed`, and `winScore` properties to tailor the game to your preferences.

## Dependencies

- SweetAlert (Swal): Used for visually appealing popups.

## Acknowledgments

Special thanks to the developers and contributors who provided inspiration and resources for creating this game.

Enjoy the Shooting Boxes Game! If you have any questions or feedback, feel free to contact us: khaledabdelbaset98@gmail.com

document.addEventListener('DOMContentLoaded', function () {
  const welcomeMessage = document.querySelector('.welcome');
  const scoreMessage = document.querySelector('.score');
  const startGameBtn = document.getElementById('startGameBtn');

  function searchInLoc(name) {
    return localStorage.getItem(name) !== null;
  }

  // Retrieve user information from query
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  if (!username) {
    // If username is missing, redirect to the login page
    window.location.href = "index.html";
  }
  
  if (searchInLoc(username)) {
    // User exists in localStorage
    welcomeMessage.textContent = `Welcome Back, ${username}`;
    const lastScoreValue = localStorage.getItem(`score_${username}`);
    scoreMessage.textContent = `Your Last Score, ${(lastScoreValue !== null && lastScoreValue !== undefined) ? lastScoreValue : 0}`;
  } else {
    // User does not exist in localStorage
    localStorage.setItem(username, '');
    welcomeMessage.textContent = `Welcome, ${username}`;
    localStorage.setItem(`score_${username}`, 0);
    scoreMessage.textContent = "Let's Make A Score!";
  }

  startGameBtn.addEventListener('click', function () {
    const selectedLevel =  document.getElementById('selectLv').value;
    if (selectedLevel !== "Level") {
      // Set the chosen level in local storage
      localStorage.setItem('selectedLevel', selectedLevel);
      localStorage.setItem('username', username);

      // Redirect to the game page
      window.location.href = `game.html`;
    } else {
      noLevelMessage("You Must Choose A Level");
      new Audio("sound/error.mp3").play();
    }
  });
});

turnAudio();
document.getElementById("gameForm").addEventListener('submit', function (event) {
  event.preventDefault();
  
  const form = event.target;
  const username = form.elements['username'].value;
  
  if (username.trim() === "") {
    new Audio("sound/error.mp3").play();
    noNameMessage();
  } else {
    window.location.href = `userInfo.html?username=${username}`;
  }
});

// Audio On And Off
turnAudio();
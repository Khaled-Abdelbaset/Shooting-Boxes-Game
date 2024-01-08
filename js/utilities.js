// Message Of Winning And Loosing
const popup = function(message, imgSrc) {
	Swal.fire({
		title: message,
		background: "url(images/popup.jpg)",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#303030",
		cancelButtonText: "Exit Game",
		confirmButtonText: "Play Again",
		imageUrl: imgSrc,
		imageWidth: 600,
		imageHeight: 300,
		imageAlt: "Custom image",
	}).then((result) => {
		if (result.isConfirmed) {
			location.reload();
		} else if (!result.isConfirmed) {
			window.location.href = "index.html";
		}
	});
}

// Message To Chosse Level
const noLevelMessage = function(message) {
	Swal.fire({
		title: message,
    background: "url(images/popup.jpg)",
  }); 
};

// Message To Enter User Name
const noNameMessage = function(message = "Name Must Be Entered") {
  Swal.fire({
    icon: 'error',
    title: 'Invalid Name!',
    text: message,
    background: "url(images/popup.jpg)",
  });
}

// Turning Audio On And Off 
const turnAudio = function() {
	let audio = document.getElementById('playSound');
	const sound = document.querySelector('.sound');
	sound.addEventListener('click', function() {
		if (audio.paused) {
			document.querySelector("img").src = "images/sound-on.png";
			sound.style.backgroundColor = "#5abeff";
			audio.play();
		} else {
			document.querySelector("img").src = "images/sound-off.png";
			sound.style.backgroundColor = "#d30000";
			audio.pause();
		}
	});
	
}



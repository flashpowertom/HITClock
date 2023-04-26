var minutes = 0;
var seconds = 0;
var timer;
var cycleDuration = 30; // in seconds
var phaseDuration = 10; // in seconds
var currentCycle = 1;
var currentPhase = 1;
var alertSound = document.getElementById("alert");

function startTimer() {
	clearInterval(timer);
	timer = setInterval(displayTimer, 1000);
}

function pauseTimer() {
	clearInterval(timer);
}

function resetTimer() {
	clearInterval(timer);
	minutes = 0;
	seconds = 0;
	currentCycle = 1;
	currentPhase = 1;
	displayTimer();
}

function displayTimer() {
	if (seconds < 59) {
		seconds++;
	} else {
		minutes++;
		seconds = 0;
	}

	if (minutes*60+seconds >= cycleDuration*currentCycle) {
		currentCycle++;
		currentPhase = 1;
		alertSound.play();
	} else if (seconds%phaseDuration == 0) {
		currentPhase++;
		alertSound.play();
	}

	var displayMinutes = minutes < 10 ? "0"+minutes : minutes;
	var displaySeconds = seconds < 10 ? "0"+seconds : seconds;

	document.getElementById("minutes").innerHTML = displayMinutes;
	document.getElementById("seconds").innerHTML = displaySeconds;
}

function setCycle() {
	cycleDuration = parseInt(document.getElementById("cycleDuration").value);
	phaseDuration = parseInt(document.getElementById("phaseDuration").value);
	resetTimer();
}

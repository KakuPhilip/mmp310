const c1Btn = document.getElementById('cOneBtn');

c1Btn.onclick = function() {
	const answer = document.getElementById('cOne').value;

	if (answer == "Police office") {
		document.getElementById('conditionTwo').style.display = "block";
	} else {
		document.getElementById('conditionThree').style.display = "block";
	}
	document.getElementById('conditionOne').style.display = "none";
};

const c2Btn = document.getElementById('cTwoBtn');

c2Btn.onclick = function() {
	const answer = document.getElementById('cTwo').value;

	if (answer == "try to enter the building by the center door") {
		document.getElementById('conditionFour').style.display = "block";
	} else {
		document.getElementById('conditionFive').style.display = "block";
	}
	document.getElementById('conditionTwo').style.display = "none";
};

const c3Btn = document.getElementById('cThreeBtn');

c3Btn.onclick = function() {
	const answer = document.getElementById('cThree').value;

	if (answer == "You think you need food to eat and convenience store is a good choice.") {
		document.getElementById('conditionSix').style.display = "block";
	} else {
		document.getElementById('conditionSeven').style.display = "block";
	}
	document.getElementById('conditionThree').style.display = "none";
};

const c4Btn = document.getElementById('cFourBtn');

c4Btn.onclick = function() {
	const answer = document.getElementById('cFour').value;

	if (answer == "ignore it and keep going") {
		document.getElementById('endingOne').style.display = "block";
	} else {
		document.getElementById('endingTwo').style.display = "block";
	}
	document.getElementById('conditionFour').style.display = "none";
};

const c5Btn = document.getElementById('cFiveBtn');

c5Btn.onclick = function() {
	const answer = document.getElementById('cFive').value;

	if (answer == "shooting it!!") {
		document.getElementById('endingThree').style.display = "block";
	} else {
		document.getElementById('endingFour').style.display = "block";
	}
	document.getElementById('conditionFive').style.display = "none";
};

const c6Btn = document.getElementById('cSixBtn');

c6Btn.onclick = function() {
	const answer = document.getElementById('cSix').value;

	if (answer == "Cry out lustily for help") {
		document.getElementById('endingFive').style.display = "block";
	} else {
		document.getElementById('endingSix').style.display = "block";
	}
	document.getElementById('conditionSix').style.display = "none";
};

const c7Btn = document.getElementById('cSevenBtn');

c7Btn.onclick = function() {
	const answer = document.getElementById('cSeven').value;

	if (answer == "Cry out lustily for help") {
		document.getElementById('endingSeven').style.display = "block";
	} else {
		document.getElementById('endingEight').style.display = "block";
	}
	document.getElementById('conditionSeven').style.display = "none";
};

const e1Btn = document.getElementById('eOneBtn');
e1Btn.onclick = function() {
	const answer = document.getElementById('end1').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e2Btn = document.getElementById('eTwoBtn');
e2Btn.onclick = function() {
	const answer = document.getElementById('end2').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e3Btn = document.getElementById('eThreeBtn');
e3Btn.onclick = function() {
	const answer = document.getElementById('end3').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e4Btn = document.getElementById('eFourBtn');
e4Btn.onclick = function() {
	const answer = document.getElementById('end4').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "Thanks for your particpation!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e5Btn = document.getElementById('eFiveBtn');
e5Btn.onclick = function() {
	const answer = document.getElementById('end5').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e6Btn = document.getElementById('eSixBtn');
e6Btn.onclick = function() {
	const answer = document.getElementById('end6').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e7Btn = document.getElementById('eSevenBtn');
e7Btn.onclick = function() {
	const answer = document.getElementById('end7').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "Thanks for your particpation!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}

const e8Btn = document.getElementById('eEightBtn');
e8Btn.onclick = function() {
	const answer = document.getElementById('end8').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "good luck next time!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}
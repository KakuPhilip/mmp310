const c1Btn = document.getElementById('cOneBtn');

c1Btn.onclick = function() {
	const answer = document.getElementById('cOne').value;

	if (answer == "Yes") {
		document.getElementById('conditionTwo').style.display = "block";
	} else {
		document.getElementById('conditionThree').style.display = "block";
	}
	document.getElementById('conditionOne').style.display = "none";
};

const c2Btn = document.getElementById('cTwoBtn');

c2Btn.onclick = function() {
	const answer = document.getElementById('cTwo').value;

	if (answer == "Yes") {
		document.getElementById('conditionFour').style.display = "block";
	} else {
		document.getElementById('conditionFive').style.display = "block";
	}
	document.getElementById('conditionTwo').style.display = "none";
};

const c3Btn = document.getElementById('cThreeBtn');

c3Btn.onclick = function() {
	const answer = document.getElementById('cThree').value;

	if (answer == "Yes") {
		document.getElementById('conditionSix').style.display = "block";
	} else {
		document.getElementById('conditionSeven').style.display = "block";
	}
	document.getElementById('conditionThree').style.display = "none";
};

const c4Btn = document.getElementById('cFourBtn');

c4Btn.onclick = function() {
	const answer = document.getElementById('cFour').value;

	if (answer == "Yes") {
		document.getElementById('goodEnd').style.display = "block";
	} else {
		document.getElementById('badEnd').style.display = "block";
	}
	document.getElementById('conditionFour').style.display = "none";
};

const c5Btn = document.getElementById('cFiveBtn');

c5Btn.onclick = function() {
	const answer = document.getElementById('cFive').value;

	if (answer == "Yes") {
		document.getElementById('goodEnd').style.display = "block";
	} else {
		document.getElementById('badEnd').style.display = "block";
	}
	document.getElementById('conditionFive').style.display = "none";
};

const c6Btn = document.getElementById('cSixBtn');

c6Btn.onclick = function() {
	const answer = document.getElementById('cSix').value;

	if (answer == "Yes") {
		document.getElementById('goodEnd').style.display = "block";
	} else {
		document.getElementById('badEnd').style.display = "block";
	}
	document.getElementById('conditionSix').style.display = "none";
};

const c7Btn = document.getElementById('cSevenBtn');

c7Btn.onclick = function() {
	const answer = document.getElementById('cSeven').value;

	if (answer == "Yes") {
		document.getElementById('goodEnd').style.display = "block";
	} else {
		document.getElementById('badEnd').style.display = "block";
	}
	document.getElementById('conditionSeven').style.display = "none";
};
const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');
const adjectiveInput = document.getElementById('adjective');
const placeInput = document.getElementById('place');

const nounError = document.getElementById('noun-error');
const verbError = document.getElementById('verb-error');
const adjectiveError = document.getElementById('adjective-error');
const placeError = document.getElementById('place-error');

submitButton.onclick = function() {
	
	// check to make sure user input a noun
	if (!nounInput.value) {
		nounError.textContent = "Please enter a noun.";
	} else if (!verbInput.value) {
		verbError.textContent = "Please enter a verb.";
	} else if (!adjectiveInput.value) {
		adjectiveError.textContent = "Please enter a adjective.";
	} else if (!placeInput.value) {
		placeError.textContent = "Please enter a place.";
	} else {
		const story = "Once there was a " + nounInput.value + " named Jerry. And it lives in " + placeInput.value + ". One day, Jerry trys to " + verbInput.value + " a " + adjectiveInput.value + " " + nounInput.value +".";
		storyP.textContent = story;	
	}
	
	

	
};
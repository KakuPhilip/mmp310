const quiz = [
	{
		question: "Which browser are you?",
		answers: [
			{ src: "images/chrome.jpg", score: 2 },
			{ src: "images/ie.jpg", score: -2 },
			{ src: "images/fox.jpg", score: 0 },
			{ src: "images/safari.jpg", score: 1 }
		] 
	}, 
	{
		question: "What is your favorite system?",
		answers: [
			{ src: "images/10.jpg", score: 1 }, 
			{ src: "images/os.jpg", score: 2 }, 
			{ src: "images/dos.jpg", score: -1 }, 
			{ src: "images/xp.jpg", score: 0 }
		]
	},
	{
		question: "What is your favorite phone?", 
		answers:[
			{ src: "images/iphone.jpg", score: 2 },
			{ src: "images/old.jpg", score: -2 },
			{ src: "images/sam.jpg", score: 0 },
			{ src: "images/nokia.jpg", score: -1 }
		]
	}
];



const container = document.getElementById('quiz');

// build quiz HTML
for (let i = 0; i < quiz.length; i++) {
	const q = quiz[i];
	
	// create question container 
	const questionDiv = document.createElement('div');
	questionDiv.classList.add('question');
	
	// add question
	const p = document.createElement('p');
	p.textContent = q.question;
	questionDiv.appendChild(p);
	
	
	// option div
	const options = document.createElement('div');
	options.classList.add('options');
	questionDiv.appendChild(options);
	
	// add answers
	for (let j = 0; j < q.answers.length; j++) {
		const a = q.answers[j];
		const img = new Image();
		img.src = a.src;
		options.appendChild(img);
		
		img.onclick = function() {
			q.score = a.score;
		};
	}
	// add to container
	container.appendChild(questionDiv);
}



// < 0 introvert - > 0 extrovert

const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += quiz[i].score;
	}
	const response = document.getElementById('response');
	if (score > 0) {
		response.textContent = "You are stylish.";
	} else {
		response.textContent = "You are retro.";
	}
};












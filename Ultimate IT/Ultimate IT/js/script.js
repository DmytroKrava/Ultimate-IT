function hideAnswer(element) {
	let parts = element.id.split("-");
	let number = parts[parts.length-1];
	let answer = document.getElementById("answer-" + number);
	let answers = document.querySelectorAll(".answer");
	let question__button = document.querySelectorAll(".question__button");

	for (let i = 0;		i < answers.length;		i++) {
		if (answers[i].id != "answer-" + number) {
			answers[i].style.display = 'none';
			question__button[i].style.color = "#969499";
		}
	}

	if (answer.style.display == 'none' || !answer.style.display) {
		answer.style.display = 'block';
		element.style.color = 'white';
	}
	else {
		answer.style.display = 'none';
		element.style.color = '#969499';
	}
}

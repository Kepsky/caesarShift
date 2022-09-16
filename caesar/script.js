const lowerCaseAlphabet = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function stringToAlphabetIndexes(userInput) {
	const stringToLowerCase = userInput.toLowerCase();

	const inputIndexes = [];

	for (let i = 0; i < userInput.length; i++) {
		for (let j = 0; j < lowerCaseAlphabet.length; j++) {
			if (stringToLowerCase[i] === lowerCaseAlphabet[j]) {
				inputIndexes.push(j);
			}
		}
	};
	return inputIndexes;
}



function shiftInputIndexes (inputIndexes, number) {
	const movedInputIndexes = [];

	for (let i = 0; i < inputIndexes.length; i++) {
		movedInputIndexes.push(inputIndexes[i] + number);
	}
	return movedInputIndexes;
}
 
function generateStringFromIndexes (movedInputIndexes) {
	const arrayWithNewLetters = [];

	for (let i = 0; i < movedInputIndexes.length; i++) {
		for (let j = 0; j < lowerCaseAlphabet.length; j++) {
			if (movedInputIndexes[i] === j) {
				arrayWithNewLetters.push(lowerCaseAlphabet[j]);
			}
		}
	}

	return arrayWithNewLetters;

}

function caesarShift (userInput, number) {

	if (typeof userInput != 'string') {
		return 'User input should be a string.';
	}
	if (typeof number != 'number') {
		return 'The number should be a number';
	}

	if (number > 26 || number < 0) {
		return 'The number should be not less than 0 and not more than 26.';
	}

	const inputIndexes = stringToAlphabetIndexes(userInput);

	const shiftedInputIndexes = shiftInputIndexes(inputIndexes, number);

	const arrayWithNewLetters = generateStringFromIndexes(shiftedInputIndexes);

	const stringWithCommas = arrayWithNewLetters.toString();

	const removedCommas = stringWithCommas.split(',').join('');

	return removedCommas;
}


window.onload = function() {
	const input = document.getElementById('caesar_text_input');
	const output = document.getElementById('caesar_output');
	input.onchange = function() {
		output.innerText = caesarShift(input.value, 2);
	}
}



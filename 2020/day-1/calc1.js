const fs = require("fs");
const path = require("path");

const calc = function (input) {
	const formattedInput = input.split("\n").map((x) => parseInt(x));
	const sum = 2020;

	for (i = 0; i < formattedInput.length; i++) {
		for (j = 0; j < formattedInput.length; j++) {
			if (formattedInput[i] + formattedInput[j] === sum) {
				console.log(formattedInput[i] * formattedInput[j]);
				return formattedInput[i] * formattedInput[j];
			}
		}
	}
};

module.exports = calc;

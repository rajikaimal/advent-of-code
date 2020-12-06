const fs = require("fs");
const path = require("path");

const calc = function (input) {
	const formattedInput = input.split("\n").map((x) => parseInt(x));
	const sum = 2020;

	for (i = 0; i < formattedInput.length; i++) {
		for (j = 0; j < formattedInput.length; j++) {
			for (k = 0; k < formattedInput.length; k++) {
				if (formattedInput[i] + formattedInput[j] + formattedInput[k] === sum) {
					return formattedInput[i] * formattedInput[j] * formattedInput[k];
				}
			}
		}
	}
};

module.exports = calc;

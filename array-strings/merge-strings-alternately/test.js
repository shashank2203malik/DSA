const {mergeAlternately} = require('./solution.js');

function driver() {
	const testCase1 = mergeAlternately("abc", "pqr");
	const testCase2 = mergeAlternately("manchester", "united");
	const testCase3 = mergeAlternately("123", "789");

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

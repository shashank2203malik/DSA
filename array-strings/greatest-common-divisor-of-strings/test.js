const solution = require('./solution.js');

function driver () {
	const testCase1 = solution("ABCABC", "ABC");
	const testCase2 = solution("ABABAB", "ABAB");
	const testCase3 = solution("HELLO", "WORLD");

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

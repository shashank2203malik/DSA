const solution = require('./solution');

function driver() {
	const testCase1 = solution("the sky is blue");
	const testCase2 = solution("  the sky is blue   ");
	const testCase3 = solution("  Cristiano Ronaldo   wears  no. 7 & adidas   ");

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

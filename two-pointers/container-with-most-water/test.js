const solution = require ('./solution.js');

function driver () {
	const testCase1 = solution([1,8,6,2,5,4,8,3,7]);
	const testCase2 = solution([1,1]);

	console.log(testCase1);
	console.log(testCase2);
}

driver();

const solution = require('./solution.js');

function driver() {
	const testCase1 = solution([1,2,3], [2,4,6]);
	const testCase2 = solution([1,1,3,3], [1,3,6,6]);

	console.log(testCase1);
	console.log(testCase2);
}

driver();

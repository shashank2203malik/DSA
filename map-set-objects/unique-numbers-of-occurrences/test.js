const solution = require('./solution.js');

function driver() {
	const testCase1 = solution([1,2,2,1,1,3]);
	const testCase2 = solution([1,2,2,1,1,3,2]);
	const testCase3 = solution([1,2,2,1,1,3,3,1,3,2,1,3]);

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

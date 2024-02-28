const solution = require('./solution.js');

function driver() {
	const testCase1 = solution([2,3,5,1,3], 3);
	const testCase2 = solution([4,2,1,1,2], 1);
	const testCase3 = solution([12,1,12], 10);

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

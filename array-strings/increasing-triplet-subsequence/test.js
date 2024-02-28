const solution = require('./solution.js');

function driver() {
	const testCase1 = solution([1,2,3,4,5]);
	const testCase2 = solution([5,4,3,2,1]);
	const testCase3 = solution([2,1,5,0,4,6]);

	console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver();

const solution = require('./solution.js');

function driver() {
	const testCase1 = solution([1,2,3,4]);
	const testCase2 = solution([-1,1,0,-3,3]);

	console.log(testCase1);
	console.log(testCase2);
}

driver();

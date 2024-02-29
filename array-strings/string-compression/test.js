const solution = require('./solution.js');

function driver() {
	const testCase1 = solution(["a","a","b","b","c","c","c"]);
	console.log(testCase1);
	const testCase2 = solution(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
	console.log(testCase2);

}

driver();

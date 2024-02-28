const {pivotIndex} = require ("./solution.js");

function driver () {
    const testCase1 = pivotIndex([1,7,3,6,5,6]);
	const testCase2 = pivotIndex([1,2,3]);
	const testCase3 = pivotIndex([2,1,-1]);

    console.log(testCase1);
	console.log(testCase2);
	console.log(testCase3);
}

driver ();

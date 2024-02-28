const {canPlaceFlowers} = require ("./solution.js");

function driver () {
	const testCase1 = canPlaceFlowers([1,0,0,0,1], 1);
	const testCase2 = canPlaceFlowers([1,0,0,0,1], 2);

	console.log(testCase1);
	console.log(testCase2);
}

driver ();

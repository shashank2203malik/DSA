/* Check README for problem statement */

var productExceptSelf = function(nums) {
	const result = [];
	let multiplier = 1;

	for(let i = 0; i < nums.length; i++) {
		result[i] = multiplier;
		multiplier = multiplier * nums[i];
	}

	multiplier = 1;
	for(let i = nums.length - 1; i >= 0; i--) {
		result[i] = result[i] * multiplier;
		multiplier = multiplier * nums[i];
	}
	return result;
};
module.exports = productExceptSelf;

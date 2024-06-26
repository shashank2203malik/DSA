/* Check README for problem statement */

var increasingTriplet = function(nums) {
    let firstNumber = Number.MAX_VALUE;
    let secondNumber = Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > firstNumber && nums[i] <= secondNumber) {
            secondNumber = nums[i];
        }
        else if(nums[i] > firstNumber && nums[i] > secondNumber) {
            return true;
        }
        else {
            firstNumber = nums[i];
        }
    }
    return false;
};

module.exports = increasingTriplet;

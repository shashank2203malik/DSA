/* Check README for problem statement */

var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < nums.length; i++) {
        leftSum = leftSum + nums[i];
    }

    for(let i = 0; i < nums.length; i++) {
        leftSum = leftSum - nums[i];
        if(leftSum === rightSum) {
            return i;
        }
        rightSum = rightSum + nums[i];
    }
    return -1;
};

module.exports = {pivotIndex};

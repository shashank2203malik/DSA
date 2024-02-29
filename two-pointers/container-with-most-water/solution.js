/* Check README for problem statement */

var maxArea = function(height) {
    let lo = 0;
    let hi = height.length - 1;
    let areaOfWater = 0;
    let max = 0;

    while(lo < hi) {
        areaOfWater = Math.min(height[lo], height[hi]) * (hi - lo);
        max = Math.max(areaOfWater, max);

        if(height[lo] > height[hi]) {
            hi--;
        }
        else {
            lo++;
        }
    }
    return max;
};

module.exports = maxArea;

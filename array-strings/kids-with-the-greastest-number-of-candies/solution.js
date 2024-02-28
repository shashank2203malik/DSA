/* Check README for problem statement */

var kidsWithCandies = function(candies, extraCandies) {
    let greatestCandies = candies[0];
    const result = [];
    for(let i = 1; i < candies.length; i++) {
        if(candies[i] > greatestCandies) {
            greatestCandies = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= greatestCandies) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};

module.exports = kidsWithCandies;

/* Check README for problem statement */

var largestAltitude = function(gain) {
    let sum = 0;
    let answer = 0;
    for(let i = 0; i < gain.length; i++) {
        sum = sum + gain[i];
        answer = Math.max(sum, answer);
    }
    return answer;
};

module.exports = largestAltitude;

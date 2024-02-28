/* Check README for problem statement */

var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) {
        return "";
    }

    let gcd = Math.min(str1.length, str2.length);
    
    for(let i = gcd; i > 0 ; i--) {
        if(str1.length % i === 0 && str2.length % i === 0) {
            return str1.substring(0, i);
        }
    }
};

module.exports = gcdOfStrings;

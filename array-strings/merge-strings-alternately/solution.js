/* Check README for problem statement */

var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let minLength = Math.min(word1.length, word2.length);
    for(let i = 0; i < minLength; i++) {
        mergedString = mergedString + word1[i] + word2[i];
    }
    mergedString = mergedString + word1.substring(minLength, word1.length) + word2.substring(minLength , word2.length);
    return mergedString;
};

module.exports = {mergeAlternately};

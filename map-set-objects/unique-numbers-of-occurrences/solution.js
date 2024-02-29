/* Check README for problem statement */

var uniqueOccurrences = function(arr) {
    let arrObj = {};

    for(let i = 0; i < arr.length; i++) {
        arrObj[arr[i]] = (arrObj[arr[i]] || 0) + 1;
    }

    let values = Object.values(arrObj);
    let set = new Set(values);
    return (set.size === values.length);
};

module.exports = uniqueOccurrences;

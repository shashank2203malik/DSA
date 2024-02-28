/* Check README for problem statement */

var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arrString = s.split('');
    let lo = 0;
    let hi = s.length - 1;

    while(lo < hi) {
        if(vowels.includes(arrString[lo]) && vowels.includes(arrString[hi])) {
            temp = arrString[lo];
            arrString[lo] = arrString[hi];
            arrString[hi] = temp;
            hi--;
            lo++; 
        }
        else if(vowels.includes(arrString[lo]) && !vowels.includes(arrString[hi])) {
            hi--;
        }
        else if(!vowels.includes(arrString[lo]) && vowels.includes(arrString[hi])) {
            lo++;
        }
        else {
            hi--;
            lo++;
        }
    }
    return arrString.join('');
};

module.exports = reverseVowels;

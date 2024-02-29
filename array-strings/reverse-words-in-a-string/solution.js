/* Check README for problem statement */

var reverseWords = function(s) {
	let resultArr = [];
	let arrString = s.split(' ');
	for(let i = arrString.length - 1; i >= 0; i--) {
		if(arrString[i] !== '') {
			resultArr.push(arrString[i]);
		}
	}
	return resultArr.join(" ");
};

module.exports = reverseWords;

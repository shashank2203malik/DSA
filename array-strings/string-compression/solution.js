/* Check README for problem statement */

var compress = function(chars) {
    let compress = 0;
    let i = 0;

    while(i < chars.length) {
        let counter = 0;
        let flag = chars[i];
        while(chars[i] === flag) {
            counter++;
            i++;
        }
        chars[compress] = flag;
        compress++;
        if(counter > 1) {
            for(let digit of counter.toString()) {
                chars[compress] = digit;
                compress++;
            }
        }
	}
	const result = chars.slice(0, compress);
	console.log(result);
    return compress;
};

module.exports = compress;

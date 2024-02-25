/* Check README for problem statement */

var canPlaceFlowers = function(flowerbed, n) {
    flowerbed = [0, ...flowerbed,0];
    for(let i = 1; i < flowerbed.length - 1; i++) {
        if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            n = n-1;
        }
        if(n === 0) {
            return true;
        }
    }
    return n <= 0;
};

module.exports = canPlaceFlowers;

/* Check README for problem statement */

var findDifference = function(nums1, nums2) {
    let objOfNums1 = {};
    let objOfNums2 = {};
    let arr1 = [];
    let arr2 = [];

    for(let i = 0; i < nums1.length; i++) {
        objOfNums1[nums1[i]] = (objOfNums1[nums1[i]] || 0) + 1;
    }

    for(let i = 0; i < nums2.length; i++) {
        objOfNums2[nums2[i]] = (objOfNums2[nums2[i]] || 0) + 1;
    }

    for(let i = 0; i < nums2.length; i++) {
        if(nums2[i] in objOfNums1) {
            delete objOfNums1[nums2[i]];
            delete objOfNums2[nums2[i]];
        }
    }
    arr1 = Object.keys(objOfNums1);
    arr2 = Object.keys(objOfNums2);
    return[arr1, arr2];
};

module.exports = findDifference;

// Find missing number

// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.

// Examples:
// Input: nums = [0, 2, 3, 1, 4]
// Output: 5
// Explanation:
// nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

// Input: nums = [0, 1, 2, 4, 5, 6]
// Output: 3
// Explanation:
// nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]

// BRUTE FORCE WAY
const findMissingNumBrute = ( nums ) => {
    for(let i = 0; i <= nums.length; i++ ) {
        let flag = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] === i) {
                flag = 1;
                break;
            }
        }
        if(flag === 0) {
            return i
        }
    }
}

// OPTIMAL WAY
const findMissingNumOptimal = ( nums ) => {
    let sumOfNElems = ( nums.length * (nums.length + 1) ) / 2;
    let sumArr = 0;
    for(let i = 0; i < nums.length; i++ ) {
        sumArr += nums[i];
    }
    return sumOfNElems - sumArr
}
console.time("timeOptimal")
console.log(findMissingNumOptimal([0, 1, 2, 4, 5, 3]))
console.timeEnd("timeOptimal")

console.time("timeBrute");
console.log(findMissingNumBrute([0, 1, 2, 4, 5, 3]))
console.timeEnd("timeBrute")


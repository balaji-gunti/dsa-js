// Find the repeating and missing number
// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.

// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.
// Note: You are not allowed to modify the original array.

// Examples:
// Input: nums = [3, 5, 4, 1, 1]
// Output: [1, 2]
// Explanation:
// 1 appears two times in the array and 2 is missing from nums

// Input: nums = [1, 2, 3, 6, 7, 5, 7]
// Output: [7, 4]
// Explanation:
// 7 appears two times in the array and 4 is missing from nums.

const missingAndRepeatingNoBrute = (nums) => {
    let repeating = 0, missing = 0;
    let countArr = new Array(nums.length + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        countArr[nums[i]] += 1;
    }
    for(let i = 1; i < countArr.length; i++) {
        if(countArr[i] === 0) missing = i;
        else if(countArr[i] === 2) repeating = i;
    }
    return [repeating, missing]
    
}
console.log(missingAndRepeatingNoBrute([3, 5, 4, 1, 1]))  // TC: O(2n) SC: O(n)
console.log(missingAndRepeatingNoBrute([1, 2, 3, 6, 7, 5, 7]))

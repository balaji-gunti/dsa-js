// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

const findSingleNumBrute = (nums) => {
    // for every element of array do a linear search and get the count
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        let num = nums[i];
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] === num) {
                count += 1;
            }
        }
        if(count === 1) {
            return num
        }
    }
}

const findSingleNumOptimal = (nums) => {
    let xor;
    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor
}
console.log(findSingleNumBrute([4,1,2,1,2])) // TC: O(n^2) SC: O(1)
console.log(findSingleNumOptimal([4,1,2,1,2])) // TC: O(n) SC: O(1)
 

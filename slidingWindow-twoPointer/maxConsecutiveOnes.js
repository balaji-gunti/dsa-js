// 1004. Max Consecutive Ones III
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 
// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// TC: O(n^2)
const maxConsecutiveOnesBrute = (nums, k) => {
    let maxLen = ""
    for(let i = 0; i < nums.length; i++) { // O(n)
        let zeroes = 0;
        for(let j = i; j < nums.length; j++) { // O(n)
            if(nums[j] === 0) {
                zeroes++;
            }
            if(zeroes > k) break;
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen
}

// TC: O(2n)
const maxConsecutiveOnesBetter = (nums, k) => {
    let left = 0, right = 0, maxLen = 0, zeroes = 0;
    while( right < nums.length ) { // TC: O(n)
        if(nums[right] === 0) {
            zeroes++;
        }
        while(zeroes > k) {
            if(nums[left] === 0) {
                zeroes--;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
}

// TC: O(n)
const maxConsecutiveOnesOptimal = (nums, k) => {
    let l = 0, r = 0, maxLen = 0, zeroes = 0;
    while( r < nums.length ) {
        if(nums[r] === 0) {
            zeroes++;
        }
        if(zeroes > k) {
            if(nums[l] === 0) {
                zeroes--;
            }
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
}

// console.log({ maxConsecutiveOnesBrute: maxConsecutiveOnesBrute( [1,1,1,0,0,0,1,1,1,1,0], 2 ) }) // TC: O(n^2)
console.log({ maxConsecutiveOnesBetter: maxConsecutiveOnesBetter( [1,1,1,0,0,0,1,1,1,1,0], 2 ) }) // TC: O(2n) outer while + worst case inner while
console.log({ maxConsecutiveOnesOptimal: maxConsecutiveOnesOptimal( [1,1,1,0,0,0,1,1,1,1,0], 2 ) }) // TC: O(n)

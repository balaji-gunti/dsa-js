// 992. Subarrays with K Different Integers
// Given an integer array nums and an integer k, return the number of good subarrays of nums.
// A good array is an array where the number of different integers in that array is exactly k.
// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

// Example 2:
// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 
// Constraints:
// 1 <= nums.length <= 2 * 104
// 1 <= nums[i], k <= nums.length

// TC: O(n^2)
const subArrWithKDiffIntegersBrute = (nums, k) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        const set = new Set();
        for(let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            if(set.size > k) break
            if(set.size === k) count++;
        }
    }
    return count;
}

const subArrWithKDiffIntegers = (nums, k) => {
    const atMost = (k) => {
        let l = 0, r = 0, count = 0;
        const map = new Map();
        while( r < nums.length ) {
            map.set(nums[r], (map.get(nums[r]) || 0) + 1 );
            while(map.size > k) {
                map.set(nums[l], map.get(nums[l]) - 1);
                if(map.get(nums[l]) === 0) map.delete(nums[l]);
                l++;
            }
            count = count + r - l + 1;
            r++;
        }
        return count;
    }
    return atMost(k) - atMost(k - 1);
}

console.log({ subArrWithKDiffIntegers: subArrWithKDiffIntegers( [1,2,1,2,3], 2 ) })
console.log({ subArrWithKDiffIntegers: subArrWithKDiffIntegers( [1,2,1,3,4], 3 ) })

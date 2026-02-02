// 930. Binary Subarrays With Sum
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
// A subarray is a contiguous part of the array.

// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1]
// [1,0,1,0]
// [0,1,0,1]
// [1,0,1]

// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
 
// Constraints:
// 1 <= nums.length <= 3 * 104
// nums[i] is either 0 or 1.
// 0 <= goal <= nums.length

// TC: O(n^2)
const binarySubArrWithSumKBrute = (nums, goal) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === goal) {
                count += 1;
            }
        }
    }
    return count;
}

const binarySubArrWithSumK = (nums, goal) => {
    // TC: O(2n)
    const atMost = (k) => {
        if(k < 0) return 0;
        let left = 0, right = 0, count = 0, sum = 0;
        while( right < nums.length ) { // O(n)
            sum += nums[right];
            while(sum > k) { // O(n)
                sum -= nums[left];
                left++;
            }
            count = count + (right - left + 1);
            right++;
        }
        return count;
    }
    return atMost(goal) - atMost(goal - 1); // TC: O(2 * 2n), SC: O(1)
}

console.log({ binarySubArrWithSumK: binarySubArrWithSumK( [1,0,1,0,1], 2 ) })
console.log({ binarySubArrWithSumK: binarySubArrWithSumK( [0,0,0,0,0], 0 ) })

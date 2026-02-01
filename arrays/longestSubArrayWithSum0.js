// Largest Subarray with Sum 0
// You are given an integer array arr of size n which contains both positive and negative integers. Your task is to find the length of the longest contiguous subarray with sum equal to 0.

// Return the length of such a subarray. If no such subarray exists, return 0.

// Examples:

// Input: arr = [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5
// Explanation:
// The subarray [-2, 2, -8, 1, 7] sums up to 0 and has the maximum length among all such subarrays.

// Input: arr = [2, 10, 4]
// Output: 0
// Explanation:
// There is no subarray whose elements sum to 0.

const longestSubArrayWithSum0Brute = (nums) => {
    let maxLen = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === 0) {
                maxLen = Math.max(maxLen, j - i + 1)
            }
        }
    }
    return maxLen;
}

const longestSubArrayWithSum0Better = (nums) => {
    let prefixSum = 0, maxLen = 0;
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if(prefixSum === 0) {
            maxLen = Math.max(maxLen, i + 1);
        }
        if(map.has(prefixSum)) {
            maxLen = Math.max(maxLen, i - map.get(prefixSum))
        }
        if(!map.has(prefixSum)) {
            map.set(prefixSum, i)
        }
    }
    return maxLen;
}
console.log(longestSubArrayWithSum0Brute([15, -2, 2, -8, 1, 7, 10, 23]))
console.log(longestSubArrayWithSum0Better([2, 10, 4]))

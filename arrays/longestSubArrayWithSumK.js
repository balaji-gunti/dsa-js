// Longest Subarray with given Sum K(Positives)

// Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Examples
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

const longestSubArrWithSumKBrute = (nums, target) => {
    let maxLen = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === target) {
                maxLen = Math.max(maxLen, j - i + 1)     
            }
        }
    }
    return maxLen
}

// Better way --> Use Prefix Sum (This is applicable for arrays with both positive and negative values)
const longestSubArrWithSumKBetter = (nums, target) => {
    const map = new Map();
    let prefixSum = 0;
    let maxLen = 0;
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if(prefixSum === target) {
            maxLen = Math.max(maxLen, i + 1);
        }
        if(map.has(prefixSum - target)) {
            maxLen = Math.max(maxLen, i - map.get(prefixSum - target));
        }
        if(!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }
    return maxLen
}

// Optimal way --> Use Sliding Window(Two pointers) This is only applicable if the array has only positive elements
const longestSubArrWithSumKOptimal = (nums, target) => {
    let left = 0, right = 0, maxLen = 0;
    let sum = nums[0]; 
    while(right < nums.length) {
        while(sum > target && left <= right) {
            sum -= nums[left];
            left++;
        }
        if(sum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
        right++;
        if(right < nums.length) {
            sum += nums[right]
        }
    }
    return maxLen
}

// console.log(longestSubArrWithSumKBrute([2,3,5,1,9], 10)) // TC: O(n^2) SC: O(1)
console.log(longestSubArrWithSumKBetter([2,3,5,1,9], 10)) // TC: O(n) SC: O(n)
// console.log(longestSubArrWithSumKOptimal([2,3,5,1,9], 10)) // TC: O(n) SC: O(1)

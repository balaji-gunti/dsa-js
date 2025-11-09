// Count Subarray sum Equals K

// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Pre-requisite: Longest subarray with given sum

// Examples
// Example 1:
// Input Format: N = 4, array[] = {3, 1, 2, 4}, k = 6
// Result: 2
// Explanation: The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

// Example 2:
// Input Format: N = 3, array[] = {1,2,3}, k = 3
// Result: 2
// Explanation: The subarrays that sum up to 3 are [1, 2], and [3].

// Loop through the array for each element, loop the subsequent elemnts while mainting the sum
// when the sum is equal to k, increment the count
const countSubArrSumEqualsKBrute = (nums, k) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if(sum === k) {
                count++;
            }
        }
    }
    return count
}

const countSubArrSumEqualsK = (nums, k) => {
    const map = new Map();
    let sum = 0, count = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum , (map.get(sum) || 0) + 1)
        console.log({map})
    }
    return count
}

// input --> 3, 1, 2, 4
// map ----> 3, 4, 6, 10

console.log(countSubArrSumEqualsKBrute([3, 1, 2, 4], 6)) // TC: O(n^2), SC: O(1)
console.log(countSubArrSumEqualsK([3, 1, 2, 4], 6))

// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Optimal Way --> kadane's algorithm
const maximumSubarraySum = (nums) => {
    // Initialize sum to track current subarray sum, maxSum to the first element
    let sum = 0, maxSum = nums[0];
    let start = -1, tempStart = -1, end = -1;
    for(let i = 0; i < nums.length; i++) {
        // Add current element to sum
        sum += nums[i];
        // Update maxSum if sum is greater
        if(sum > maxSum) {
            maxSum = sum;
            start = tempStart;
            end = i;
        } 
        // Resrt sum to 0 if it becomes negative (start new subarray)
        if(sum < 0) {
            sum = 0;
            tempStart = i + 1
        }
    }
    console.log({subarray: nums.slice(start, end + 1)})
    return maxSum
}
console.log(maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4])) // TC: O(n), SC: O(1)

const kadanesAlgo = (nums) => {
   let sum = 0, maxSum = nums[0];
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum
}
console.log(kadanesAlgo([-2,1,-3,4,-1,2,1,-5,4])) // TC: O(n), SC: O(1)

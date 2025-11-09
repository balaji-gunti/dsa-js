// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 
// Follow-up: Could you solve the problem in linear time and in O(1) space?


const majorityElementBrute = (nums) => {
    // For each element loop through the whole array and get the count
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] === nums[i]) {
                count++;
            }
        }
        // if the count is greater than n/2 then return that element
        if(count > (nums.length / 2)){
            return nums[i]
        }
    }
}

// OPTIMAL: Boyer-Moore voting algorithm
const majorityElementOptimal = (nums) => {
    // Initialize count and candidate for majority element
    let count = 0, majorityElement;
    // First pass: Find candidate using Boyer-Moore voting algorithm
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            // set new candidate when the count reaches 0
            count = 1;
            majorityElement = nums[i]
        } else if( nums[i] === majorityElement ) {
            // Increment the count if matches the candidate
            count++;
        } else {
            // Decrement count if different
            count--;
        }
    }
    // Second Pass: Verify if candidate appears more than n/2 times
    let majorityElementCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] = majorityElement) majorityElementCount++
    }
    return (majorityElementCount > (nums.length/2)) ? majorityElement : -1;
}

console.log(majorityElementBrute([2,2,1,1,1,2,2])) // TC: O(n^2) SC: O(1)
console.log(majorityElementOptimal([2,2,1,1,1,2,2])) // TC: O(n) SC: O(1)



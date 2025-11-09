// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?



// Optimal approach: Dutch National Flag algorithm - one-pass, constant extra space.
// Use three pointers: low for 0s, mid for 1s, high for 2s.
// Swap elements to place 0s at the beginning, 2s at the end, 1s in the middle.
const sortColorsOptimal = (nums) => {
    let low = 0, mid = 0, high = nums.length - 1;
    // Traverse the array until mid meets high
    while( mid <= high) {
        if(nums[mid] === 0) {
            // Swap with low pointer and move both pointers forward
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            mid++;
            low++;
        } else if(nums[mid] === 2) {
            // Swap with high pointer and move high backward, but keep mid for next check
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--;
        } else {
            // If 1, just move mid forward
            mid++
        }
    }
    return nums
}
console.log(sortColorsOptimal([2,0,2,1,1,0])) // TC: O(n), SC: O(1)
console.log(sortColorsOptimal([1,2,0])) // TC: O(n), SC: O(1)

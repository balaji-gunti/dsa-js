// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.


// Examples:
// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation:

// The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation:

// The only value in nums is 10, so there is no second largest value, thus -1 is returned

const secondLargest = (nums) => {
    let largest = nums[0];
    let secondLargest = -1;
    for(let i = 1; i < nums.length; i++ ) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if(nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
    }
    return secondLargest;
}
console.log(secondLargest([10, 10, 10, 10, 10]))
console.log(secondLargest([8, 8, 7, 6, 5]))

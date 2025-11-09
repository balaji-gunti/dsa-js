// Rotate Array

// Given an integer array nums, rotate the array to the left by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [4,5,6,7,1,2,3]
// Explanation:
// rotate 1 steps to the left: [2,3,4,5,6,7,1]
// rotate 2 steps to the left: [3,4,5,6,7,1,2]
// rotate 3 steps to the left: [4,5,6,7,1,2,3]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the left: [-100,3,99,-1]
// rotate 2 steps to the left: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

function leftRotate( nums, k ) {
    const n = nums.length;
    if( k > n ) {
        k = k % n;
    }
    reverse(nums, 0, n-1 );
    reverse( nums, 0, n-k-1 );
    reverse( nums, n-k, n-1 );
    return nums
}
function reverse(nums, start, end) {
    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
console.log( leftRotate([1,2,3,4,5,6,7], 3) )
console.log( leftRotate([-1,-100,3,99], 2) )

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function rightRotate( nums, k ) {
    const n = nums.length;
    reverse(nums, 0, n-1 );
    reverse( nums, 0, k-1 );
    reverse( nums, k, n-1 );
    return nums
}
console.log( rightRotate([1,2,3,4,5,6,7], 3) )

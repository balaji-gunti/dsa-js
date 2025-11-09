// Find out how many times the array is rotated

// Given an integer array nums of size n, sorted in ascending order with distinct values. The array has been right rotated an unknown number of times, between 0 and n-1 (including). Determine the number of rotations performed on the array.

// Examples:
// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]
// Output: 4
// Explanation: The original array should be [0, 1, 2, 3, 4, 5, 6, 7]. So, we can notice that the array has been rotated 4 times.

// Input: nums = [3, 4, 5, 1, 2]
// Output: 3
// Explanation: The original array should be [1, 2, 3, 4, 5]. So, we can notice that the array has been rotated 3 times.

const noOfTimesArrRotated = (nums) => {
    let low = 0, high = nums.length - 1;
    let min = Infinity, index = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        // If the Search space is already sorted then nums[low] will be smaller always
        if(nums[low] <= nums[high]) {
            if(nums[low] < min) {
                min = nums[low];
                index = low;
            }
            break;
        }
        // If left half is sorted, the minimum is either at low or in right half
        if(nums[low] <= nums[mid]) {
            // Update minimum with leftmost element
            if(nums[low] < min) {
                min = nums[low];
                index = low;
            }
            low = mid + 1;                  // Search in right half
        } else {
            // Right half is sorted, minimum must be in left half including mid
            // Update minimum with mid element
            if(nums[mid] < min) {
                min = nums[mid];
                index = mid;
            }
            high = mid - 1;                 // Search in left half
        }
    }
    
    return index;
}

console.log(noOfTimesArrRotated([4, 5, 6, 7, 0, 1, 2, 3]))
console.log(noOfTimesArrRotated([3, 4, 5, 1, 2]))

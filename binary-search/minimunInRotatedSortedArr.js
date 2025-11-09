// 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

 
// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 
// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

const minimumInRotatedSortedArr = (nums) => {
    let low = 0, high = nums.length - 1;
    let min = Infinity;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        // If the Search space is already sorted then nums[low] will be smaller always
        if(nums[low] <= nums[high]) {
            min = Math.min(min, nums[low]);
            break;
        }
        // If left half is sorted, the minimum is either at low or in right half
        if(nums[low] <= nums[mid]) {
            min = Math.min(min, nums[low])  // Update minimum with leftmost element
            low = mid + 1;                  // Search in right half
        } else {
            // Right half is sorted, minimum must be in left half including mid
            min = Math.min(min, nums[mid])  // Update minimum with mid element
            high = mid - 1;                 // Search in left half
        }
    }
    return min;
}

console.log(minimumInRotatedSortedArr([3,4,5,1,2])) // TC: O(n)
console.log(minimumInRotatedSortedArr([4,5,6,7,0,1,2]))
console.log(minimumInRotatedSortedArr([11,13,15,17]))

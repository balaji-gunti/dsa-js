// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
 
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
 
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

const searchInsertPosition = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        if(nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

console.log(searchInsertPosition( [1,3,5,6], 5 )) // TC: O(log n)
console.log(searchInsertPosition( [1,3,5,6], 2 ))
console.log(searchInsertPosition( [1,3,5,6], 7 ))

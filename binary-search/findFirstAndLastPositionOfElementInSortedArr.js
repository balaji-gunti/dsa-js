// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

const firstAndLastPosBrute = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let output = [-1, -1];
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2);
        if(nums[mid] === target) {
            let left = mid - 1, right = mid + 1;
            while(left >= 0 && nums[left] === target ) {
                left--;
            }
            while(right < nums.length && nums[right] === target) {
                right++;
            }
            output = [left + 1, right - 1]
            break;
        } else if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return output;
}

console.log( firstAndLastPosBrute( [5,7,7,8,8,10], 8 )) // TC: O(log n) + O(k) --> this can go upto n if all elements are same

// One binary search to find first occurance
// And one binary search to find last occurance --> O(log n) + O(log n)
const firstOccurance = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let first = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        if(nums[mid] === target) {
            first = mid;
            high = mid - 1;
        } else if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return first;
}

const lastOccurance = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let last = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2);
        if(nums[mid] === target) {
            last = mid;
            low = mid + 1;
        } else if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return last;
}

const firstAndLastPosOptimal = (nums, target) => {
    const first = firstOccurance(nums, target);
    if(first === -1) return [ -1, - 1 ];
    const last = lastOccurance(nums, target)
    return [first, last];
}
console.log( firstAndLastPosOptimal( [5,7,7,8,8,10], 8 ) ) // TC: O(log n) + O(log n)

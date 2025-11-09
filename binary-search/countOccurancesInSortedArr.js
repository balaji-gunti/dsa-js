// Count Occurrences in a Sorted Array
// You are given a sorted array of integers arr and an integer target. Your task is to determine how many times target appears in arr.

// Return the count of occurrences of target in the array.

// Examples:
// Input: arr = [0, 0, 1, 1, 1, 2, 3], target = 1
// Output: 3
// Explanation: The number 1 appears 3 times in the array.

// Input: arr = [5, 5, 5, 5, 5, 5], target = 5
// Output: 6
// Explanation: All elements in the array are 5, so the target appears 6 times.

// One binary search to find first occurance
// And one binary search to find last occurance --> O(log n) + O(log n)
const countOccuranes = (nums, target) => {
    const first = firstOccurance(nums, target);
    if(first === -1) return [-1, -1]
    const last = lastOccurance(nums, target);
    return last - first + 1; // count will be the last occurance - first occurance + 1
}

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
console.log(countOccuranes( [0, 0, 1, 1, 1, 2, 3], 1 )) // TC: O(log n) + O(log n)
console.log(countOccuranes( [5, 5, 5, 5, 5, 5], 5 ))

// Upper Bound

// Given a sorted array of nums and an integer x, write a program to find the upper bound of x.
// The upper bound of x is defined as the smallest index i such that nums[i] > x.
// If no such index is found, return the size of the array.

// Examples:
// Input : n= 4, nums = [1,2,2,3], x = 2
// Output:3
// Explanation:
// Index 3 is the smallest index such that arr[3] > x.

// Input : n = 5, nums = [3,5,8,15,19], x = 9
// Output: 3
// Explanation:
// Index 3 is the smallest index such that arr[3] > x.

const upperBound = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
console.log(upperBound( [3,5,8,15,19], 9 ))
console.log(upperBound( [1,2,2,3], 2 ))

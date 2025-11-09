// Floor and Ceil in Sorted Array

// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums.
// The floor of x is the largest element in the array which is smaller than or equal to x.
// The ceiling of x is the smallest element in the array greater than or equal to x.
// If no floor or ceil exists, output -1.

// Examples:
// Input : nums =[3, 4, 4, 7, 8, 10], x= 5
// Output: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

// Input : nums =[3, 4, 4, 7, 8, 10], x= 8
// Output: 8 8
// Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.

const ceilInArr = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let ans = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2);
        if(nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}


const floorInArr = (nums, target) => {
    let low = 0, high = nums.length - 1;
    let ans = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2);
        if(nums[mid] <= target) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

const floorAndCeil = (nums, target) => {
    const floor = floorInArr(nums, target);
    if(!floor) return -1;
    const ceil = ceilInArr(nums, target);
    return [nums[floor], nums[ceil]]
}

console.log(floorAndCeil( [3, 4, 4, 7, 8, 10], 5 ))

// Move Zeros to End

// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.
// This must be done in place, without making a copy of the array.
// Example 1:
// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0]
// Explanation:
// Both the zeroes are moved to the end and the order of the other elements stay the same

// Example 2:
// Input: nums = [0, 0, 0, 1, 3, -2]
// Output: [1, 3, -2, 0, 0, 0]
// Explanation:
// All 3 zeroes are moved to the end and the order of the other elements stay the same
const moveZeros = (nums) => {
    let j = -1;
    for( let i = 0; i < nums.length; i++ ) {
        if( nums[i] === 0 ) {
            j = i;
            break;
        }
    }
    for( let i = j+1; i < nums.length; i++ ) {
        if( nums[i] != 0 ) {
            let temp = nums[i];
            nums[j] = temp;
            nums[i] = 0;
            j++;
        }
    }
    return nums
} 
const moveZerosNew = (nums) => {
    let j = 0; // position to place the next non-zero
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // swap only if i != j
            if (i !== j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            j++;
        }
    }
    return nums;
}
console.log( moveZerosNew([0, 1, 4, 0, 5, 2]))

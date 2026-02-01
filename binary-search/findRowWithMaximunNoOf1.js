// Find row with maximum 1's

// Given a non-empty grid mat consisting of only 0s and 1s, where all the rows are sorted in ascending order, find the index of the row with the maximum number of ones.

// If two rows have the same number of ones, consider the one with a smaller index. If no 1 exists in the matrix, return -1.


// Examples:
// Input : mat = [ [1, 1, 1], [0, 0, 1], [0, 0, 0] ]
// Output: 0
// Explanation: The row with the maximum number of ones is 0 (0 - indexed).

// Input: mat = [ [0, 0], [0, 0] ]
// Output: -1
// Explanation: The matrix does not contain any 1. So, -1 is the answer.

const rowWithMax1Brute = (matrix) => {
    let maxCount = 0, index = -1;
    for(let i = 0; i < matrix.length; i++) {
        let count = 0; // to hold the count of 1's in a row
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 1) {
                count++;
            }
        }
        if(count > maxCount) {
            maxCount = count;
            index = i;
        }
    }
    return index;
}

const rowWithMax1Optimal = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;
    let maxCount = 0, index = -1;
    for(let i = 0; i < n; i++) {
        const count = countOf1InRow(matrix[i], 1);
        if(count > maxCount) {
            maxCount = count;
            index = i
        }
    }
    return index;
}
// binary search for the first occurance index of 1, and subtract from the length of row to get the count
const countOf1InRow = (nums, target) => {
    let low = 0, high = nums.length - 1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        if(nums[mid] === target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    // instead of returning low which is the 1st occurance of 1, return nums.length - low which is nothing but the count of 1's
    return nums.length - low;
}

console.log(rowWithMax1Brute([ [1, 1, 1], [0, 0, 1], [0, 0, 0] ])) // TC: O(n * m)
console.log(rowWithMax1Brute([ [0, 0], [0, 0] ]))
console.log(rowWithMax1Optimal([ [1, 1, 1], [0, 0, 1], [0, 0, 0] ])) // TC: O(n * log m)

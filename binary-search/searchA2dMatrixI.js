// 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// TC: O(n * log m)
const searchBetter = (matrix, target) => {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        if(matrix[i][0] <= target && target <= matrix[i][matrix[i].length - 1]) {
            if(findForTargetInRow( matrix[i], target )) return true;
        }
    }
    return false;
}
const findForTargetInRow = (nums, target) => {
    let low = 0, high = nums.length - 1;
    if(nums[high] < target) return false; // return false becuase target wouldnt exist in the row
    while(low <= high) {
        const mid = Math.floor( ( low + high ) / 2 );
        if(nums[mid] === target) {
            return true
        }
        else if(nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false
}
// console.log( searchBetter( [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 ) )

// Core Intuition
// The function treats the 2D matrix as a flattened 1D sorted array and performs binary search on it.
// Key Insights
// 1. Matrix Properties: Since each row is sorted and the first element of each row is greater than the last element of the previous row, the entire matrix can be viewed as one continuous sorted array.
// 2. Index Mapping: 
//    - Total elements = n * m (rows × columns)
//    - For any index mid in the virtual 1D array:
//      - row = Math.floor(mid / m) - which row this element belongs to
//      - col = mid % m - which column in that row
// 3. Binary Search Logic:
//    - low = 0, high = n * m - 1 (full range)
//    - Compare matrix[row][col] with target
//    - Adjust low/high based on comparison
// Example Walkthrough
// For matrix [[1,3,5,7],[10,11,16,20]] (2×4):
// - Virtual array: [1,3,5,7,10,11,16,20]
// - Index 5 → row = 5/4 = 1, col = 5%4 = 1 → element = matrix[1][1] = 11
// Time Complexity
// O(log(n*m)) - true binary search on the entire matrix space, achieving the required optimal complexity.

const searchOptimal = (matrix, target) => {
    const n = matrix.length;
    const m = matrix[0].length;
    let low = 0, high = n * m - 1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        const row = Math.floor(mid / m);
        const col = mid % m;
        if(matrix[row][col] === target) {
            return true;
        } else if(matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
console.log( searchOptimal( [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 ) )
console.log( searchOptimal( [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13 ) )
console.log( searchOptimal( [[1,4],[2,5]], 2 ) )


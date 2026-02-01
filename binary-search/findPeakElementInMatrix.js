// 1901. Find a Peak Element II
// A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

 
// Example 1:
// Input: mat = [[1,4],[3,2]]
// Output: [0,1]
// Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.


// Example 2:
// Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
// Output: [1,1]
// Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
 
// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 500
// 1 <= mat[i][j] <= 105
// No two adjacent cells are equal.

// TC: O(n log m): Each binary search step takes O(n) to find max in a column, and we do log(m) steps
const findPeakInMatrix = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;
    // binary search on columns
    let low = 0, high = m - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        // find max element's index in the middle column of matrix
        const maxEleIndexInMidCol = findMax(matrix, n, m, mid);
        // get the left and right elements
        const left = mid - 1 >= 0 ? matrix[maxEleIndexInMidCol][mid - 1] : -1;
        const right = mid + 1 < m ? matrix[maxEleIndexInMidCol][mid + 1] : -1;
        // if currnet element is > left and right, we found the peak
        if(matrix[maxEleIndexInMidCol][mid] > left && matrix[maxEleIndexInMidCol][mid] > right) {
            return [maxEleIndexInMidCol, mid];
        } else if(matrix[maxEleIndexInMidCol][mid] < left) { // peak must be in left half
            high = mid - 1;
        } else { // peak must be in right half
            low = mid + 1;
        }
    }
    return [-1, -1]
}

const findMax = (matrix, n, m , col) => {
    let max = -1, index = -1;
    for(let i = 0; i < n; i++) {
        if(matrix[i][col] > max) {
            max = matrix[i][col];
            index = i;
        }
    }
    return index;
}

console.log( findPeakInMatrix( [[10,20,15],[21,3,14],[7,16,32]] ) )
console.log( findPeakInMatrix( [[1,4],[3,2]] ) )

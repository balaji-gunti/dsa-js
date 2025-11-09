// Rotate Image by 90 degree

// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Note: Rotate matrix 90 degrees anticlockwise

// Examples

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

// Example 2:
// Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

// ------------------------------------------------------------
// Syntax to create array => new Array(size).fill(value), 
// ------------------------------------------------------------

const rotateMatrix90AntiClockWiseBrute = (matrix) => {
    const n = matrix.length;
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(new Array(n).fill(0))
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            arr[j][n - 1 - i] = matrix[i][j]
        }
    }
    return arr
}

const rotateMatrix90AntiClockWiseOptimal = (matrix) => {
    const n = matrix.length;
    // Transpose the matrix(col becomes row, row becomes col)
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            console.log({ij: matrix[i][j], ji: matrix[j][i]})
        }
    }

    // Reverse each row
    for(let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix
}
console.log(rotateMatrix90AntiClockWiseBrute([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])) // TC: O(n^2), SC: O(n^2)
console.log(rotateMatrix90AntiClockWiseOptimal([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])) // TC: O(n^2) SC: O(1)

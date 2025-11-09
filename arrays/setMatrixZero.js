// Set Matrix Zero
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples

// Examples 1:
// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
// Examples 2:
// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

const setMatrixZeroBrute = (matrix) => {
    const n = matrix.length; // No of rows
    const m = matrix[0].length; // No of columns

    // Arrays to mark which rows and columns should be set to 0
    let rowArr = new Array(n).fill(0);
    let colArr = new Array(m).fill(0);

    // First pass: identify all rows and columns that contain at least one 0, O(n * m)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                rowArr[i] = 1; // Mark the row i
                colArr[j] = 1; // Mark the column j
            }
        }
    }

    // Second pass: update the matrix based on the row and column markers, O(n * m)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // If this row or column was marked, set the element to 0
            if(rowArr[i] || colArr[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix
}

// Instead of using rowArr and colArr as markers to mark which row and column as zeros
// Use the first row and column of the matrix itself as markers to mark which rows and column should be marked as zeros
const setMatrixZeroOptimal = (matrix) => {
    const n = matrix.length; // No of rows
    const m = matrix[0].length; // No of columns

    let markFirstRowAsZeros = false; // If the first row itself has 0 then we should mark the whole row as 0
    let markFirstColumnAsZeros = false; // If the first row itself has 0 then we should mark the whole row as 0

    // check if the first row has any 0s
    for(let i = 0; i < n; i++) {
        if(matrix[i][0] === 0) {
            markFirstRowAsZeros = true;
            break;
        }
    }

    // check if the first column has any 0s
    for(let j = 0; j < m; j++) {
        if(matrix[0][j] === 0) {
            markFirstColumnAsZeros = true;
            break;
        }
    }

    // Use first row and column as markers for other rows/columns
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set all the cells of marked rows and colums to 0
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log({ markFirstRowAsZeros, markFirstColumnAsZeros })

    // Set all cells in first row to 0 if needed
    if(markFirstRowAsZeros) {
        for(let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    // Set all cells in first column to 0 if needed
    if(markFirstColumnAsZeros) {
        for(let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    return matrix
}
console.log(setMatrixZeroBrute([[0,1,2,0],[3,4,5,2],[1,3,1,5]])) // TC: O(n * m) + O(n * m) = O(n * m), SC: O(n + m)
console.log(setMatrixZeroOptimal([[1,0,3]])) // TC: O(n * m), SC: O(1)

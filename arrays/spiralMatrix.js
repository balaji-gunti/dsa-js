// 54. Spiral Matrix
// Given an m x n matrixrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrixrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrixrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
// Constraints:
// m == matrixrix.length
// n == matrixrix[i].length
// 1 <= m, n <= 10
// -100 <= matrixrix[i][j] <= 100

const spiralMatrix = (matrix) => {
    const ans = [];
    const n = matrix.length, m = matrix[0].length;
    let left = 0, top = 0, right = m - 1, bottom = n - 1;

    while ( left <= right && top <= bottom ) {
        for(let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i])
            }
            bottom--;
        }
        
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left])
            }
            left++;
        }
    }
    return ans
}

console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))


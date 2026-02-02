// 51. N-Queens
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Example 2:
// Input: n = 1
// Output: [["Q"]]
 
const nQueens = (n) => {
    const board = [];
    const res = [];
    const leftRow = new Array(n).fill(0);
    const upperDiagonal = new Array(2 * n - 1).fill(0);
    const lowerDiagonal = new Array(2 * n - 1).fill(0);
    for(let i = 0; i < n; i++) {
        board.push(new Array(n).fill("."))
    }
    fn(0, board, res, n, leftRow, upperDiagonal, lowerDiagonal);
    return res;
}

const fn = (column, board, res, n, leftRow, upperDiagonal, lowerDiagonal) => {
    if(column === n) {
        res.push(board.map(row => row.join("") ));
        return;
    }

    for(let row = 0; row < n; row++) {
        // if(leftRow[row] === 0 && upperDiagonal[n - 1 + column - row] === 0 && lowerDiagonal[column + row] === 0) {
        //     // place Q and mark the left row, lower & upper diagonals
        //     board[row][column] = "Q";
        //     leftRow[row] = 1;
        //     upperDiagonal[n - 1 + column - row] = 1;
        //     lowerDiagonal[column + row] = 1;

        //     // Recurse to the next column
        //     fn(column + 1, board, res, n, leftRow, upperDiagonal, lowerDiagonal);

        //     // Backtrack and unmark the left row, lower & upper diagonals
        //     board[row][column] = ".";
        //     leftRow[row] = 0;
        //     upperDiagonal[n - 1 + column - row] = 0;
        //     lowerDiagonal[column + row] = 0;
        // }
        if(canPlaceQueen(row, column, board, n)) {
            board[row][column] = "Q"; // Place queen
            fn(column + 1, board, res, n); // Recurse to next column
            board[row][column] = "."; // Backtrack: remove queen
        }
    }
}

const canPlaceQueen = (row, column, board, n) => {
    let dupRow = row, dupCol = column;
    // TC: O(n)
    while(row >= 0 && column >= 0) {
        if(board[row][column] === "Q") return false;
        row--;
        column--;
    }

    row = dupRow;
    column = dupCol;

    // TC: O(n)
    while(column >= 0) {
        if(board[row][column] === "Q") return false;
        column--;
    }

    row = dupRow;
    column = dupCol;

    // TC: O(n)
    while(row < n && column >=0) {
        if(board[row][column] === "Q") return false;
        row++;
        column--;
    }

    return true
}
console.log({ nQueens: nQueens(4) })// TC: O(n!) since it explores factorial permutations of queen placements

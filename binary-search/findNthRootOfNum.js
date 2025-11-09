// Find Nth root of a number

// Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.

// Examples:
// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// Input: N = 4, M = 69
// Output:-1
// Explanation: The 4th root of 69 does not exist. So, the answer is -1.

const power = (num, n) => {
    if(n === 0) return 1;
    let result = 1;
    let base = num;
    let exponent = Math.abs(n);

    while(exponent > 0) {
        if(exponent % 2 === 1) result *= base;
        base *= base;
        exponent = Math.floor(exponent / 2);
    }
    return n < 0 ? ( 1 / result ) : result;
}
const nthRoot = (n, m) => {
    if(m === 0) return 0;
    if(m === 1) return 1;
    // Binary search between 1 and m
    let low = 1, high = m;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2);
        const midPower = power(mid, n);
        if( midPower  === m ) return mid; // Fount exact nth root
        else if( midPower < m ) {
            low = mid + 1;  // Root must be larger
        } else {
            high = mid - 1  // Root must be smaller
        }
    }
    return -1;
}
console.log( nthRoot( 3, 27 ) )
console.log( nthRoot( 4, 69 ) )

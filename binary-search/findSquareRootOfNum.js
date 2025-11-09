// Find square root of a number

// Given a positive integer n. Find and return its square root. If n is not a perfect square, then return the floor value of sqrt(n).

// Examples:
// Input: n = 36
// Output: 6
// Explanation: 6 is the square root of 36.

// Input: n = 28
// Output: 5
// Explanation: The square root of 28 is approximately 5.292. So, the floor value will be 5.

const findSquareRoot = (n) => {
    if( n === 0 ) return 0;
    if( n === 1 ) return 1;
    // Binary search between 1 and n
    let low = 1, high = n;
    let ans = -1;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        // If mid^2 exceeds n, search in left half
        if( (mid * mid) > n ) {
            high = mid - 1;
        } else {
            // mid^2 <= n, so mid is a potential answer
            ans = Math.max(ans, mid); // Store the largest valid mid
            low = mid + 1; 
        }
    }
    return ans;
}

console.log( findSquareRoot(36) ); // TC: O(log n)
console.log( findSquareRoot(28) );

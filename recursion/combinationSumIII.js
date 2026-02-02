// 216. Combination Sum III
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.

// Example 3:
// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 
// Constraints:
// 2 <= k <= 9
// 1 <= n <= 60

// Time Complexity Analysis:
// - We're choosing k numbers from 1-9 without repetition
// - In worst case, we explore all combinations: C(n, k) = n!/(k!(n-k)!)
// - Each valid combination requires O(k) work to copy
// Space Complexity Analysis:
// - Recursion depth: at most k
// - Current combination array: at most k elements
// - Result storage: O(number of solutions * k)
// - Call stack: O(k)
const combinationSumIII = (k, n) => {
    const res = [], curr = [];
    fn(1, k, n, curr, res);
    return res;
}

function fn(ind, k, n, curr, res) {
    if(n < 0 || curr.length > k) return;
    if(n === 0 && curr.length === k) {
        res.push([...curr]);
        return;
    }

    // Try each possible number till 9
    for(let i = ind; i <= 9; i++) {
        curr.push(i); // choose current number
        fn(i + 1, k, n - i, curr, res); // Recurse with next number
        curr.pop(); // remove current number
    }
}


console.log({ combinationSumIII: combinationSumIII( 3, 7 ) })
console.log({ combinationSumIII: combinationSumIII( 3, 9 ) })
console.log({ combinationSumIII: combinationSumIII( 4, 1 ) })

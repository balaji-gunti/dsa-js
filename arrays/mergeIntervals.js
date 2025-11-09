// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Example 3:
// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 
// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

const mergeIntervalsBetter = (intervals) => {
    // Sort the intervals first
    intervals.sort((a, b) => a[0] - b[0]); // O(n logn) for sorting
    const ans = [];
    ans.push(intervals[0])
    for(let i = 1; i < intervals.length; i++) { // O(n)
        const last = ans[ans.length - 1];
        const curr = intervals[i];
        if(curr[0] <= last[1]) {
            curr[1] = Math.max(curr[1], last[1]);
        } else {
            ans.push(curr)
        }
    }
    return ans
}
console.log(mergeIntervalsBetter([[1,3],[2,6],[8,10],[15,18]])) // TC: O(n logn) + O(n), SC: O(n) --> for ans list
console.log(mergeIntervalsBetter([[1,4],[4,5]]))
console.log(mergeIntervalsBetter([[4,7],[1,4]]))

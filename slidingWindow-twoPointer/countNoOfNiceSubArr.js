// 1248. Count Number of Nice Subarrays
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.

// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.

// Example 3:
// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16
 
// Constraints:
// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length

const countNoOfNiceSubArr = (nums, k) => {
    // TC: (2n)
    const atMost = (k) => {
        if(k < 0) return 0;
        let left = 0, right = 0, count = 0, sum = 0;
        while( right < nums.length ) { // O(n)
            sum += (nums[right] % 2);
            while(sum > k) { // O(n)
                sum -= (nums[left] % 2);
                left++;
            }
            count = count + (right - left + 1);
            right++;
        }
        return count;
    }
    return atMost(k) - atMost(k - 1); // TC: O(2 * 2n), SC: O(1)
}

console.log({ countNoOfNiceSubArr: countNoOfNiceSubArr( [1,1,2,1,1], 3 ) })
console.log({ countNoOfNiceSubArr: countNoOfNiceSubArr( [2,4,6], 1 ) })
console.log({ countNoOfNiceSubArr: countNoOfNiceSubArr( [2,2,2,1,2,2,1,2,2,2], 2 ) })

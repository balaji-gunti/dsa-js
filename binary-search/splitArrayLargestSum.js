// 410. Split Array Largest Sum
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

// Example 1:
// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

// Example 2:
// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
 

// Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 106
// 1 <= k <= min(50, nums.length)

const splitArrLargestSum = (nums, k) => {
    
    let [ low, high ]  = maxAndsum(nums);

    // O(log (sum - max)) - Binary search space
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );

        let subArrSum = 0, noOfSubArrs = 1;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] + subArrSum <= mid) {
                subArrSum += nums[i];
            } else {
                subArrSum = nums[i];
                noOfSubArrs += 1;
            }
        }

        if(noOfSubArrs <= k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

const maxAndsum = (nums) => {
    let max = sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        sum += nums[i]
    }
    return [max, sum];
}

console.log( splitArrLargestSum( [7,2,5,10,8], 2 ) ) // TC: O(n log(sum(nums) - max(nums)))
console.log( splitArrLargestSum( [1,2,3,4,5], 2 ) )
console.log( splitArrLargestSum( [1,4,4], 3 ) )

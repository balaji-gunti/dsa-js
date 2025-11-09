// 229. Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]
 
// Constraints:
// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// There can only be (k - 1) majority elements (elemCount > n / k) in an array  --> INTUITION
const majorityElementIIOptimal = (nums) => {
    // handle edge cases first
    if(nums.length === 2) {
        if(nums[0] === nums[1]) return [nums[1]]
        return nums
    }
    let count1 = 0, count2 = 0, elm1 = -Infinity, elm2 = -Infinity;
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        if(count1 === 0 && nums[i] !== elm2) {
            count1 = 1;
            elm1 = nums[i];
        }
        else if(count2 === 0 && nums[i] !== elm1) {
            count2 = 1;
            elm2 = nums[i];
        }
        else if(nums[i] === elm1) count1++;
        else if(nums[i] === elm2) count2++;
        else count1--, count2--;
    }
    count1 = count2 = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === elm1) count1++;
        else if(nums[i] === elm2) count2++;
    }
    if(count1 > Math.floor(nums.length / 3)) {
        ans.push(elm1)
    }
    if(count2 > Math.floor(nums.length / 3)) {
        ans.push(elm2)
    }
    return ans
}
console.log(majorityElementIIOptimal([3, 2, 3]))
console.log(majorityElementIIOptimal([2, 2, 1, 3, 1, 1, 3, 1, 1])) // TC: O(n) SC: O(1)
console.log(majorityElementIIOptimal([1, 2]))
console.log(majorityElementIIOptimal([2, 2]))

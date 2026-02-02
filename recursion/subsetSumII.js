// 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

const subsetSumII = (nums) => {
    const res = [], seq = [];
    fn(0, nums, seq, res);
    return res;
}

const fn = (ind, nums, seq, res) => {
    res.push([...seq]);
    for(let i = ind; i < nums.length; i++) {
        if( i !== ind && nums[i] === nums[i - 1]) continue;
        seq.push(nums[i]);
        fn(i + 1, nums, seq, res);
        seq.pop();
    }
}

console.log({ subsetSumII: subsetSumII([1,2,2]) })
console.log({ subsetSumII: subsetSumII([0]) })

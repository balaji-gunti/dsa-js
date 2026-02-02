// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

const combinationSumII = (nums, target) => {
    nums.sort((a, b) => a - b)
    const sequence = [], res = [];
    fn(0, nums, sequence, res, target)
    return res;
}

const fn = (ind, nums, sequence, res, target) => {
    if(target === 0) {
        res.push([...sequence]);
        return;
    }
    for(let i = ind; i < nums.length; i++) {
        if(nums[i] > target) break;
        if(i > ind && nums[i] === nums[i - 1]) continue;

        sequence.push(nums[i]);
        fn(i + 1, nums, sequence, res, target - nums[i]);
        sequence.pop();
    }
}

console.log({ combinationSumII: combinationSumII( [10,1,2,7,6,1,5], 8 ) })
console.log({ combinationSumII: combinationSumII( [2,5,2,1,2], 5 ) })

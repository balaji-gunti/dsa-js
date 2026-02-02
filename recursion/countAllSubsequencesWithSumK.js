// Count all subsequences with sum K

// Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.


// Examples:
// Input : nums = [4, 9, 2, 5, 1] , k = 10
// Output : 2
// Explanation : The possible subsets with sum k are [9, 1] , [4, 5, 1].

// Input : nums = [4, 2, 10, 5, 1, 3] , k = 5
// Output : 3
// Explanation : The possible subsets with sum k are [4, 1] , [2, 3] , [5].

/*
 * Time Complexity: O(2^n) - Each element has 2 choices (include/exclude)
 * Space Complexity: O(n) - Recursion stack depth + current subsequence storage
 * 
 * Intuition: Use recursive backtracking with "take it or leave it" approach.
 * At each index, we make two recursive calls - one including the current
 * element and one excluding it. We track the running sum and build subsequences
 * incrementally, counting only those that reach the target sum.
 */
const printAllSubsequencesWithTargetSum = (nums, target) => {
    const res = [], currSubSeq = [];
    let sum = 0;
    fn(0, nums, target, sum, currSubSeq, res);
    return res
}

const fn = (ind, nums, target, sum, currSubSeq, res) => {
    // Base case: When we've processed all elements
    if(ind === nums.length) {
        // Count subsequence only if sum matches target
        if(sum === target){
            res.push([...currSubSeq]);
        }
        return;
    }

    //INCLUDE current element
    sum += nums[ind];
    currSubSeq.push(nums[ind]);
    fn(ind + 1, nums, target, sum, currSubSeq, res)

    // Backtrack: Remove current element before exploring exclude path
    sum -= nums[ind];
    currSubSeq.pop();
    //EXCLUDE current element
    fn(ind + 1, nums, target, sum, currSubSeq, res)
}

console.log({ countAllSubsequences: printAllSubsequencesWithTargetSum([4, 9, 2, 5, 1], 10) })
console.log({ countAllSubsequences: printAllSubsequencesWithTargetSum([4, 2, 10, 5, 1, 3], 5) })

// Count all subsequences whose sum equals a given target
const countSubseq = (nums, target) => {
    const sum = 0; // current sum starts at 0
    const res = countRecursive(0, nums, target, sum); // start recursion from index 0
    return res;
};

const countRecursive = (ind, nums, target, sum) => {
    // BASE CASE: If we reach the end of the array
    if (ind === nums.length) {
        // If current sum equals target → valid subsequence found
        if (sum === target) {
            return 1;  // return 1 count
        }
        // Otherwise not valid → return 0
        else {
            return 0;
        }
    }

    // PICK the current element (add nums[ind] to sum)
    sum += nums[ind];
    const left = countRecursive(ind + 1, nums, target, sum); // move to next index with updated sum

    // NOT PICK the current element (undo the add and continue)
    sum -= nums[ind];  // undo the previous addition (backtrack)
    const right = countRecursive(ind + 1, nums, target, sum); // move to next index keeping sum unchanged

    // Total valid subsequences = valid subsequences from PICK + NOT PICK choices
    return left + right;
};

console.log({ countSubseq: countSubseq([4, 9, 2, 5, 1], 10) }); // Expected: 2
console.log({ countSubseq: countSubseq([4, 2, 10, 5, 1, 3], 5) }); // Expected: 3

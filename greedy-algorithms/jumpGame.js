// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 
// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

const jumpGame = (nums) => {
    let maxReach = 0; // to keep track of max ind we can reach
    for(let i = 0; i < nums.length; i++) {
        // If current position is beyond our max reachable position,
        // we cannot proceed further (stuck at a zero or insufficient jump)
        if(i > maxReach) {
            return false;
        }

        // Update maxReach to the furthest position we can reach from current index
        // Either keep existing maxReach or jump from current position (i + nums[i])
        maxReach = Math.max(maxReach, i + nums[i]); 
    }
    return true;
}

console.log({ jumpGame: jumpGame([2,3,1,1,4]) })
console.log({ jumpGame: jumpGame([3,2,1,0,4]) })

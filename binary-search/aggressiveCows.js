// Aggressive Cows

// Given an array nums of size n, which denotes the positions of stalls, and an integer k, which denotes the number of aggressive cows, assign stalls to k cows such that the minimum distance between any two cows is the maximum possible. Find the maximum possible minimum distance.


// Examples:
// Input: n = 6, k = 4, nums = [0, 3, 4, 7, 10, 9]
// Output: 3
// Explanation: The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions [0, 3, 7, 10]. Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

// Input : n = 5, k = 2, nums = [4, 2, 1, 3, 6]
// Output: 5
// Explanation: The maximum possible minimum distance between any two cows will be 5 when 2 cows are placed at positions [1, 6]. 

const aggressiveCows = (nums, k) => {
    nums.sort((a, b) => a - b)
    let low = 1; // minimum possible distance
    let high = nums[nums.length - 1] - nums[0]; // maximum possible distance
    let ans = 0;
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        let lastPlacedCowPosition = nums[0], noOfCowsPlaced = 1;

        // Try to place cows with atlease "mid" distance
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] - lastPlacedCowPosition >= mid) {
                noOfCowsPlaced += 1;
                lastPlacedCowPosition = nums[i];
            }
        }

        if(noOfCowsPlaced === k) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

console.log( aggressiveCows( [0, 3, 4, 7, 10, 9], 4 ) ) // TC: O(n log( max(stall) - min(stall) ))
console.log( aggressiveCows( [4, 2, 1, 3, 6], 2 ) )

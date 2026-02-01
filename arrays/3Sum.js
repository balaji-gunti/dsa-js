// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 
// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

const threeSumBrute = (nums) => {
    const ans = [];
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(i !== j && j !== k) {
                    if(nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        const key = triplet.join(",");
                        if(!set.has(key)) {
                            ans.push(triplet);
                            set.add(key)
                        }
                    }
                }
            }
        }
    }
    return ans;
}

const threeSumBetter = (nums) => {
   const ans = [];
    const tripletsSet = new Set();
    for(let i = 0; i < nums.length; i++) {
        const thirdElemSet = new Set();
        for(let j = i + 1; j < nums.length; j++) {
            const thirdElm = -( nums[i] + nums[j] );
            if(thirdElemSet.has(thirdElm)) {
                const triplet = [ nums[i], nums[j], thirdElm ].sort((a, b) => a - b)
                const key = triplet.join(",")
                if(!tripletsSet.has(key)) {
                    ans.push(triplet)
                    tripletsSet.add(key)
                }
            }
            thirdElemSet.add(nums[j])
            
        }
    }
    return ans
}

const threeSumOptimal = (nums) => {
    const ans = [];
    const n = nums.length;
    const set = new Set();
    // Sort the array for two pointer approach
    nums.sort((a, b) => a - b)

    for(let i = 0; i < n; i++) {
        // Skip duplicates for 'i' to avoid repeating the same starting element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1, k = n -1;
        // Use two pointers to find valid triplets
        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if(sum < 0) {
                j++; 
            } else if( sum > 0 ) {
                k--;
            } else {
                // Found a triplet
                const triplet = [ nums[i], nums[j], nums[k] ].sort((a, b) => a - b);
                const key = triplet.join(",");
                if(!set.has(key)) {
                    ans.push(triplet);
                }
                set.add(key)
                // move the triplets
                j++;
                k--;
                // skip duplicates for both sides
                while(j < k && nums[j] === nums[j - 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return ans;
}

console.log(threeSumBrute([0,1,1]))
console.log(threeSumBetter([-1,0,1,2,-1,-4])) // TC: O(n^3), SC: O(n)
console.log(threeSumOptimal([-1,0,1,2,-1,-4])) // TC: O(n^2) SC: O(k) --> for the set

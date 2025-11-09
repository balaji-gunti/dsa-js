// 18. 4Sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 
// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 
// Constraints:
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

const fourSumBrute = (nums, target) => {
    const ans = [], n = nums.length;
    const set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                for(let l = k + 1; l < n; l++) {
                    if(nums[i] + nums[j] + nums[k] + nums[l] === target) {
                        const quadruplet = [nums[i] , nums[j] , nums[k] , nums[l]].sort((a, b) => a - b);
                        const key = quadruplet.join(",");
                        if(!set.has(key)) {
                            ans.push(quadruplet)
                        }
                        set.add(key);
                    }
                }
            }
        }
    }
    return ans
}

const fourSumBetter = (nums, target) => {
    const ans = [], n = nums.length;
    const uniqueQuadrupletsSet = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const numsSet = new Set();
            for(let k = j + 1; k < n; k++) {
                const fourthElement = target - (nums[i]+ nums[j]+ nums[k]);
                numsSet.add(nums[k])
                if(numsSet.has(fourthElement)) {
                    const quadruplet = [nums[i] , nums[j] , nums[k] , fourthElement ].sort((a, b) => a - b);
                    const key = quadruplet.join(",");
                    if(!uniqueQuadrupletsSet.has(key)) {
                        ans.push(quadruplet);
                    }
                    uniqueQuadrupletsSet.add(key)
                }
            }
        }
    }
    return ans;
}

const fourSumOptimal = (nums, target) => {
    const ans = [], n = nums.length;
    const set = new Set();
    nums.sort((a, b) => a - b)
    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue

        for(let j = i + 1; j < n; j++) {
            if(j !== i + 1  && nums[j] === nums[j - 1]) continue

            let k = j + 1, l = n - 1;

            while(k < l) {
               const sum = nums[i] + nums[j] + nums[k] + nums[l];
                if(sum > target) {
                    l--;
                } else if (sum < target) {
                    k++;
                } else {
                    const quadruplet = [ nums[i] , nums[j] , nums[k] , nums[l] ].sort((a, b) => a - b);
                    const key = quadruplet.join(",");
                    if(!set.has(key)) {
                        ans.push(quadruplet);
                        set.add(key);
                    }

                    k++;
                    l--;
                    // Skip duplicates
                    while(k < l && nums[k] === nums[k + 1]) k++;
                    while(k < l && nums[l] === nums[l - 1]) l--;
                }
            }
        }
    }
    return ans;
}
console.log(fourSumBrute([1,0,-1,0,-2,2], 0)) // TC: O(n^4) SC: O(n^4)
console.log(fourSumBetter([1,0,-1,0,-2,2], 0)) // TC: O(n^3) SC: O(n)
console.log(fourSumOptimal([1,0,-1,0,-2,2], 0)) // TC: O(n^3) SC: O(1)

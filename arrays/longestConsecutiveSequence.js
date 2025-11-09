// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3
 
// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

const longestConsecutiveSequeneceBrute = (nums) => {
    if(nums.length === 0) return 0;
    nums.sort((a, b) => a - b)
    let longest = 1, count = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) continue;
        if(nums[i] === nums[i - 1] + 1) {
            count += 1
        } else {
            count = 0
        }
        longest = Math.max(longest, count)
    }
    return longest
}

const longestConsecutiveSequeneceOptimal = (nums) => {
    if(nums.length === 0) return 0;
    const set = new Set(nums)

    let longest = 0;
    for(const num of set.values()) {
        // If the set doesnt have num - 1, it means that num is the start of the sequence
        if(!set.has(num - 1)) {
            let currentNum = num, count = 1;

            // continue counting while the consecutive number exists
            while(set.has(currentNum + 1)) {
                count += 1;
                currentNum += 1;
            }
            longest = Math.max(longest, count)
        }
    }
    return longest
}

const longestConsecutive = function(nums) {
      const map = new Map(); // stores length of sequences
    let longest = 0;

    for (const num of nums) {
        if (map.has(num)) continue; // already processed

        const left = map.get(num - 1) || 0;
        const right = map.get(num + 1) || 0;

        const sum = left + 1 + right;
        map.set(num, sum);

        // update the boundary lengths
        if (left > 0) map.set(num - left, sum);
        if (right > 0) map.set(num + right, sum);
        console.log({ num, left, right, longest })
        console.log({ map })

        longest = Math.max(longest, sum);
    }

    return longest;
};
console.log(longestConsecutive([100,4,200,1,3,2])) // TC: O(nlogn) + O(n) = O(nlogn), SC: O(1)
console.log(longestConsecutiveSequeneceOptimal([1,0,1,2])) // TC: O(n), SC: O(n)

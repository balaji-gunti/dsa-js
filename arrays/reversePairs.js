// 493. Reverse Pairs
// Given an integer array nums, return the number of reverse pairs in the array.
// A reverse pair is a pair (i, j) where:
// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
 

// Example 1:
// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1

// Example 2:
// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1
 
// Constraints:
// 1 <= nums.length <= 5 * 104
// -231 <= nums[i] <= 231 - 1

const reversePairsBrute = (nums) => {
    let count = 0, ans = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] > 2 * nums[j]) {
                count++;
                ans.push([i, j])
            }
        }
    }
    console.log(ans)
    return count
}
console.log(reversePairsBrute([1,3,2,3,1])) // TC: O(n^2) SC: O(1)

const reversePairsOptimal = (nums) => {
    const low = 0, high = nums.length - 1;
    mergeSort(nums, low, high);
    return nums;
}

const mergeSort = (nums, low, high) => {
    if(low >= high) return
    const mid = Math.floor( (low+ high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    merge(nums, low, mid, high);
    return nums;
}
const merge = (nums, low, mid, high) => {
    const temp = [];
    let left = low; // pointer at the start of left arr
    let right = mid + 1; // pointer at the start of right arr
    
    // store elements from left and right arrays in sorted manner
    while(left <= mid && right <= high) {
        if(nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    // if elements on the left arr are still left
    while(left <= mid) {
        temp.push(nums[left]);
        left++;
    }

    // if elements on the right arr are still left
    while(right <= high) {
        temp.push(nums[right]);
        right++;
    }

    // transfer all elements from temp arr to nums arr
    for(let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }
}

console.log(reversePairsOptimal([1,3,2,3,1]))

// Count subarrays with given xor K

// Given an array of integers nums and an integer k, return the total number of subarrays whose XOR equals to k.

// Examples:
// Input : nums = [4, 2, 2, 6, 4], k = 6
// Output : 4
// Explanation : The subarrays having XOR of their elements as 6 are [4, 2],  [4, 2, 2, 6, 4], [2, 2, 6], and [6]

// Input :nums = [5, 6, 7, 8, 9], k = 5
// Output : 2
// Explanation : The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

const countSubArrXorK = (nums, k) => {
    let xor = 0, count = 0;
    let map = new Map();
    map.set(0, 1);
    for(let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
        const x = xor ^ k;
        count += map.get(x) || 0;
        map.set(xor, (map.get(xor) || 0) + 1)
    }
    return count
}
// 100 ^ 010 ==> 110
console.log(countSubArrXorK([4, 2, 2, 6, 4], 6))
console.log(countSubArrXorK([5, 6, 7, 8, 9], 5))


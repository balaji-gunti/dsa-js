// Subsets I
// Given an array nums of n integers. Return array of sum of all subsets of the array nums.
// Output can be returned in any order.

// Example 1
// Input : nums = [2, 3]
// Output : [0, 2, 3, 5]
// Explanation :
// When no elements is taken then Sum = 0.
// When only 2 is taken then Sum = 2.
// When only 3 is taken then Sum = 3.
// When element 2 and 3 are taken then sum = 2+3 = 5.

// Example 2
// Input : nums = [5, 2, 1]
// Output : [0, 1, 2, 3, 5, 6, 7, 8]
// Explanation :
// When no elements is taken then Sum = 0.
// When only 5 is taken then Sum = 5.
// When only 2 is taken then Sum = 2.
// When only 1 is taken then Sum = 1.
// When element 2 and 1 are taken then sum = 2+1 = 3.

const subsetSum = (nums) => {
    const res = [];
    fn(0, nums, 0, res );
    return res; 
}

const fn = (ind, nums, sum, res) => {
    if(ind === nums.length) {
        res.push(sum);
        return;
    }

    sum += nums[ind];
    fn(ind + 1, nums, sum, res);
    
    sum -= nums[ind];
    fn(ind + 1, nums, sum, res);
}

console.log({ subsetSum: subsetSum( [2, 3] ) }) // TC: O(2^n), if asked to sort then TC: O(2^n + log(2^n)), log(2^n) is for sorting the array of size 2^n, SC: O(2^n)
console.log({ subsetSum: subsetSum( [5, 2, 1] ) })

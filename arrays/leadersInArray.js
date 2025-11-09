// Leaders in an Array

// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

// Examples

// Example 1:
// Input:
//  arr = [4, 7, 1, 0]
// Output:
//  7 1 0
// Explanation:
//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

// Example 2:
// Input:
//  arr = [10, 22, 12, 3, 0, 6]
// Output:
//  22 12 6
// Explanation:
//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.

// Brute force way 
const leadersInArrayBrute = (nums) => {
    let res = [];
    // For every element, do a linear search to its right and check if there is any element that is greater than it
    for(let i = 0; i < nums.length; i++) {
        let leader = true;
        for(let j = i + 1; j < nums.length; j++) {
            // If there is an element that is greater than itself then it is not a leader element
            if(nums[j] > nums[i]) {
                leader = false
            }
        }
        if(leader === true) {
            res.push(nums[i]);
        }
    }
    return res
}

// Intution: If the current element is greater than the maximum element to its right, it means it is greater than all the 
// elements to its right, so its a leader element
// Optimal way: Iterate from the end of array for every element check if it is greater than the maxEle to its right
const leadersInArrayOptimal = (nums) => {
    const n = nums.length;
    // Initialize maxEle to negative infinity and result array
    let maxEle = -Infinity, res = [];
    // Traverse from the end of array
    for(let i = n - 1; i >= 0; i--) {
        // If current element is greater than the maxEle, its a leader
        if(nums[i] > maxEle) {
            res.push(nums[i]);
            // Update maxEle to current element
            maxEle = nums[i]
        }
    }
    return res
}
console.log(leadersInArrayBrute([10, 22, 12, 3, 0, 6])) // TC: O(n^2), SC: O(n)
console.log(leadersInArrayOptimal([4, 7, 1, 0])) // TC: O(n), SC: O(1)

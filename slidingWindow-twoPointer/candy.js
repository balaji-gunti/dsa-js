// 135. Candy
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// Constraints:
// n == ratings.length
// 1 <= n <= 2 * 104
// 0 <= ratings[i] <= 2 * 104

// TC: O(3n), SC: O(2n)
const candy = (ratings) => {
    const n = ratings.length;
    const left = new Array(n);
    const right = new Array(n);
    let count = 0;

    left[0] = 1, right[n - 1] = 1;
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        } else {
            right[i] = 1;
        }
    }
    
    for(let i = 0; i < n; i++) {
        count += Math.max(left[i], right[i]);
    }
    return count; 
}

// TC: O(2n) SC: O(n)
const candyBetter = (ratings) => {
    const n = ratings.length;
    const left = new Array(n);
    left[0] = 1;
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    let right = 1, count = Math.max(1, left[n - 1]);
    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            right = right + 1;
        } else {
            right = 1;
        }
        count = count + Math.max(right, left[i]);
    }
    return count;
}

console.log({ candy: candyBetter( [1,0,2] )})
console.log({ candy: candyBetter( [1,2,2] )})

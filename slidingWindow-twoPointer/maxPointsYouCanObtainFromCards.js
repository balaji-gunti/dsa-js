// 1423. Maximum Points You Can Obtain from Cards
// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Example 1:
// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

// Example 2:
// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.

// Example 3:
// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 
// Constraints:
// 1 <= cardPoints.length <= 105
// 1 <= cardPoints[i] <= 104
// 1 <= k <= cardPoints.length

const main = (cardPoints, k) => {
    const n = cardPoints.length;
    let lsum = 0, rsum = 0, maxPoints = 0;
    // First pick all k cards from the left - TC: O(k)
    for(let i = 0; i < k; i++) {
        lsum += cardPoints[i];
    }
    // set maxPoints to the sum of points
    maxPoints = lsum;

    // have a pointer at the end element
    let rIndex = n - 1;
    // while subtracting one element at a time from lsum, keep adding element from the end(rIndex)
    // and keep updating maxPoints
    for(let i = k - 1; i >= 0; i--) {
        lsum -=  cardPoints[i];
        rsum += cardPoints[rIndex];
        rIndex--;
        maxPoints = Math.max(maxPoints, lsum + rsum);
    }
    return maxPoints;
}

console.log({ main: main( [1,2,3,4,5,6,1], 3 )}) // TC: O(2 * k), SC: O(1)
console.log({ main: main( [2,2,2], 2 )}) // TC: O(2 * k), SC: O(1)
console.log({ main: main( [9,7,7,9,7,7,9], 7 )}) // TC: O(2 * k), SC: O(1)

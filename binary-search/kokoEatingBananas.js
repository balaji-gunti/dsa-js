// Koko eating bananas

// A monkey is given n piles of bananas, where the 'ith' pile has piles[i] bananas. An integer h represents the total time in hours to eat all the bananas.

// Each hour, the monkey chooses a non-empty pile of bananas and eats k bananas. If the pile contains fewer than k bananas, the monkey eats all the bananas in that pile and does not consume any more bananas in that hour.

// Determine the minimum number of bananas the monkey must eat per hour to finish all the bananas within h hours.

// Examples:
// Input: n = 4, piles = [7, 15, 6, 3], h = 8
// Output: 5
// Explanation: If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.  

// Input: n = 5, piles = [25, 12, 8, 14, 19], h = 5
// Output: 25
// Explanation: If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles.

const minEatingSpeed = (piles, hours) => {
    // Binary search between minimum no of bananas can be eaten and max pile size is the max koko can eat
    let low = 1, high = max(piles);
    let ans = 0;
    // O(log max(piles)) - Becuase binary search happens between 1 to max(piles)  and not 1 to n
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        let timeTaken = 0;

        // O(n) - Calculate total hours need if koko eats "mid" no of bananas per hour
        for(let i = 0; i < piles.length; i++) {
            timeTaken += Math.ceil(piles[i] / mid);
        }
        // If koko finish wihtin hours, try to find if the next lower no in which koko can finish all the piles
        if(timeTaken <= hours) {
           ans = mid;  // store current valid no of bananas can be eaten
            high = mid - 1; // Try to find even lower no
        } else {
            low = mid + 1;
        }
    }
    return ans
}

const max = (piles) => {  // TC: O(n)
    let res = piles[0];
    for(let i = 1; i < piles.length; i++) {
        res = Math.max(res, piles[i]);
    }
    return res;
}
console.log( minEatingSpeed( [25, 12, 8, 14, 19], 5 ) ) // TC: O(n log max(piles))
console.log( minEatingSpeed( [7, 15, 6, 3], 8 ) )


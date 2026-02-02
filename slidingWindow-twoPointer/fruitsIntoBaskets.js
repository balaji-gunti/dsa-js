// Fruit Into Baskets
// Problem Statement: There is only one row of fruit trees on the farm, oriented left to right. An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.
// The goal is to gather as much fruit as possible, adhering to the owner's stringent rules :

// There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.
// Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.
// Once reaching a tree with fruit that cannot fit into any basket, stop.
// Return the maximum number of fruits that can be picked.

// Examples
// Input :fruits = [1, 2, 1]
// Output :3
// Explanation : We will start from first tree.
// The first tree produces the fruit of kind '1' and we will put that in the first basket.
// The second tree produces the fruit of kind '2' and we will put that in the second basket.
// The third tree produces the fruit of kind '1' and we have first basket that is already holding fruit of kind '1'. So we will put it in first basket.
// Hence we were able to collect total of 3 fruits.

// Input : fruits = [1, 2, 3, 2, 2]
// Output : 4
// Explanation : we will start from second tree.
// The first basket contains fruits from second , fourth and fifth.
// The second basket will contain fruit from third tree.
// Hence we collected total of 4 fruits.

// TC: O(n^2), SC: O(3) -- set will have at max 3 elements
const fruitsIntoBasketsBrute = (fruits) => {
    let maxLen = 0;
    for(let i = 0; i < fruits.length; i++ ) {
        const set = new Set();
        for(let j = i; j < fruits.length; j++) {
            set.add(fruits[j]);
            if(set.size > 2) break;
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

// TC: O(n), SC: O(3)
const fruitsIntoBasketsBetter = (fruits) => {
    let maxLen = 0, left = 0, right = 0;
    const map = new Map();
    while(right < fruits.length) {
        map.set(fruits[right], ( map.get(fruits[right]) || 0 ) + 1) 
        if(map.size > 2) {
            map.set(fruits[left], (map.get(fruits[left]) - 1 ) || 0);
            if(map.get(fruits[left]) === 0) map.delete(fruits[left]);
            left++;
        }
        maxLen = Math.max(right - left + 1);
        right++;
    }
    return maxLen;
}
console.log({ fruitsIntoBaskets: fruitsIntoBasketsBrute( [1, 2, 1] ) })
console.log({ fruitsIntoBaskets: fruitsIntoBasketsBetter( [1, 2, 3, 2, 2] ) })

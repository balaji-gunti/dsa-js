// Longest Substring With At Most K Distinct Characters
// Given a string s and an integer k.Find the length of the longest substring with at most k distinct characters.

// Example 1
// Input : s = "aababbcaacc" , k = 2
// Output : 6
// Explanation : The longest substring with at most two distinct characters is "aababb".
// The length of the string 6.

// Example 2
// Input : s = "abcddefg" , k = 3
// Output : 4
// Explanation : The longest substring with at most three distinct characters is "bcdd".
// The length of the string 4.

// TC: O(n^2), SC: O(k)
const longestSubstrWithKDistincCharsBrute = (s, k) => {
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        const set = new Set();
        for(let j = i; j < s.length; j++) {
            set.add(s[j]);
            if(set.size > k) break;
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

const longestSubstrWithKDistincCharsOptimal = (s, k) => {
    let l = 0, r = 0, maxLen = 0;
    const map = new Map();
    while( r < s.length ) {
        map.set( s[r], (map.get(s[r]) || 0) + 1 );
        if(map.size > k) {
            map.set(s[l], map.get(s[l]) - 1);
            if(map.get(s[l]) === 0) {
                map.delete(s[l]);
            }
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen
}

console.log({ longestSubstrWithKDistincCharsOptimal: longestSubstrWithKDistincCharsOptimal( "aababbcaacc", 2 ) })
console.log({ longestSubstrWithKDistincCharsOptimal: longestSubstrWithKDistincCharsOptimal( "abcddefg" , 3 ) })

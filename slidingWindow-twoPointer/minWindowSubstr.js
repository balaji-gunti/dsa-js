// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 
// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

/**
 * Sliding Window: Find minimum window containing all chars from t
 * Intuition: Expand right pointer to include chars, contract left to minimize
 * Time: O(m + n), Space: O(k) where k = unique chars in t
 */
const minWindowSubstr = (s, t) => {
    // Frequency map of required characters from t
    const map = new Map();
    for(let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1 );
    }
    // Count of unique characters still needed
    let count = map.size;
    let l = 0, r = 0, len = Infinity;
    let minWindow = "";

   // Expand window: move right pointer to include characters
    while( r < s.length ) {
        // If current char is needed, decrement its required count
        if(map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1);
            // When we have enough of this char in the window, reduce unique count
            if(map.get(s[r]) === 0) count--;
        }
        r++;
        // Contract window: when valid, try to minimize from left
        while(count === 0) {
            // Update minimum window if current is smaller
            if(r - l < len) {
                len = r - l;
                minWindow = s.slice(l, r);
            }
            // Remove leftmost char and update requirements
            if(map.has(s[l])) {
                map.set(s[l], map.get(s[l]) + 1);
                // If we need this char again, window becomes invalid
                if(map.get(s[l]) > 0) count++;
            }
            l++;
        }
    }
    return minWindow;
}

console.log({ minWindowSubstr: minWindowSubstr( "ADOBECODEBANC", "ABC" ) })
console.log({ minWindowSubstr: minWindowSubstr( "a", "a" ) })
console.log({ minWindowSubstr: minWindowSubstr( "a", "aa" ) })

// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const longestSubstrWithoutRepeatingCharsBrute = (s) => {
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        let str = "";
        for(let j = i; j < s.length; j++) {
            if(str.indexOf(s[j]) !== -1) break;
            str += s[j];
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

const longestSubstrWithoutRepeatingChars = (s) => {
    let l = r = 0, maxLen = 0, str = "";
    const map = new Map();
    while(r < s.length) {
        if (map.has(s[r])) {
            l = Math.max(l, map.get(s[r]) + 1);
        }

        map.set(s[r], r);
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
}

console.log({ longestSubstrWithoutRepeatingChars: longestSubstrWithoutRepeatingChars( "abcabcbb" ) })
console.log({ longestSubstrWithoutRepeatingChars: longestSubstrWithoutRepeatingChars( "bbbbb" ) })
console.log({ longestSubstrWithoutRepeatingChars: longestSubstrWithoutRepeatingChars( "pwwkew" ) })


// 1358. Number of Substrings Containing All Three Characters
// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

// Example 3:
// Input: s = "abc"
// Output: 1

// Constraints:
// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

// TC: O(n^2), SC: O(4)
const noOfSubStrBrute = (s) => {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        const set = new Set();
        for(let j = i; j < s.length; j++) {
            set.add(s[j]);
            if(set.size >= 3) {
                count++;
            }
        }
    }
    return count;
}

// TC: O(n)
const noOfSubStrOptimal = (s) => {
    let a_lastSeen = -1, b_lastSeen = -1, c_lastSeen = -1;
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "a") {
            a_lastSeen = i
        } else if(s[i] === "b") {
            b_lastSeen = i
        } else {
            c_lastSeen = i
        }
        if(a_lastSeen !== -1 && b_lastSeen !== -1 && c_lastSeen !== -1) {
            count = count + ( 1 + Math.min(a_lastSeen, b_lastSeen, c_lastSeen));
        }
    }
    return count;
}

console.log({ noOfSubStr: noOfSubStrOptimal( "abcabc" ) })
console.log({ noOfSubStr: noOfSubStrOptimal( "aaacb" ) })
console.log({ noOfSubStr: noOfSubStrOptimal( "abc" ) })

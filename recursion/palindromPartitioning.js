// 131. Palindrome Partitioning
// Given a path s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]
 
// Constraints:
// 1 <= s.length <= 16
// s contains only lowercase English letters.

const palindromePartition = (str) => {
    const path = [], res = [];
    fn(0, str, path, res);
    return res;
}

const fn = (ind, str, path, res) => {
    if(ind === str.length) {
       res.push([...path]);
        return;
    }

    for(let i = ind; i < str.length; i++) {
        if(isPalindrome(str, ind, i)) {
            path.push(str.slice(ind, i + 1));
            fn(i + 1, str, path, res);
            path.pop();
        }
    }

}

const isPalindrome = (str, start, end) => {
    while(start <= end) {
       if(str.charAt(start++) !== str.charAt(end--)) {
            return false
        }
    }
    return true;
}
console.log({ palindromePartition: palindromePartition("aab") })
console.log({ palindromePartition: palindromePartition("a") })

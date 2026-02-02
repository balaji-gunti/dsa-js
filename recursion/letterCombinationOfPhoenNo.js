// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = "2"
// Output: ["a","b","c"]
 
// Constraints:
// 1 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

const letterCombinations = (digits) => {
    const mapping = {
       "2": "abc",
       "3": "def",
       "4": "ghi",
       "5": "jkl",
       "6": "mno",
       "7": "pqrs",
       "8": "tuv",
       "9": "wxyz",
    }
    const res = [];

    if(digits) {
        fn(0, "", digits, mapping, res);
    }
    return res;
}

const fn = (ind, currStr, digits, mapping, res) => {
    if(currStr.length === digits.length) {
        res.push(currStr);
        return;
    }
    for(let s of mapping[digits[ind]]) {
        console.log({s})
        fn(ind + 1, currStr + s, digits, mapping, res);
    }
}

console.log({ letterCombinations: letterCombinations("23") })
console.log({ letterCombinations: letterCombinations("2") })

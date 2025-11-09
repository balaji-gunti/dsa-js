// Interview Question: Happy Numbers

// A happy number is defined as follows:
// Start with any positive integer.
// Replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it stays), or it loops endlessly in a cycle that does not include 1.
// Numbers that end in 1 are called happy numbers, and others are unhappy numbers.when the sum of squares of its digits 

// Examples:
//     Input: 19
//     1² + 9² = 82
//     8² + 2² = 68
//     6² + 8² = 100
//     1² + 0² + 0² = 1 → 19 is a happy number

//     Input: 4
//     4² = 16
//     1² + 6² = 37
//     3² + 7² = 58
//     5² + 8² = 89
//     8² + 9² = 145
//     1² + 4² + 5² = 42
//     4² + 2² = 20
//     2² + 0² = 4 (loop!) → 4 is not a happy number

const sumOfSquaresOfDigits = (num) => {
  let sum = 0;
  while(num > 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit * lastDigit;
    num = Math.floor(num / 10);
    console.log({ sum, num })
  }
  return sum
}

const isHappy = (num) => {
  let result = num;
  while( result % 10 !== result ) {
    result = sumOfSquaresOfDigits(result)
  }
  return result === 1 ? true : false
}

console.log(isHappy(4))

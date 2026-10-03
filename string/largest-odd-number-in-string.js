// LeetCode/Problem: 1903. Largest Odd Number in String
// Link: https://leetcode.com/problems/largest-odd-number-in-string/
// Date: 2026-10-03

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - An integer is odd if its last digit is odd.
//
// - So we need to find the rightmost odd digit in the string.
//
// - We can iterate through the string from the end because the rightmost odd
//   digit will give us the largest possible odd substring.
//
// - Once we find an odd digit, we can return everything from the beginning of
//   the string up to that digit.
//
// - We can use `charCodeAt()` to get the character code and check whether it
//   is odd. or convert to Number
//
// - If we reach the beginning without finding an odd digit, there is no odd
//   number, so we return an empty string.

// ============================================
// SOLUTION
// ============================================

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i].charCodeAt(0) % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }

  return "";
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// The returned substring can contain up to `n` characters, so the output
// itself requires O(n) space.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The entire number is already odd.
//   - The last digit is even, but there is an odd digit before it.
//   - There are no odd digits → return `""`.
//   - The first digit is the only odd digit.
//
// - Pattern this belongs to:
//   - String Traversal
//   - Reverse Traversal
//   - Digit / Number Properties
//
// - Mistake pattern (things to keep forgetting):
//   - An integer is odd based only on its last digit.
//   - Start searching from the end because we want the rightmost odd digit.
//   - Return `num.slice(0, i + 1)` because `slice` excludes the ending index.
//   - Do not convert the whole string to a number because the number can be
//     very large.
//   - If there is no odd digit, return an empty string.

// ============================================
// TESTS
// ============================================

// Basic case
let result = largestOddNumber("52");
console.log(result === "5");

// No odd number
result = largestOddNumber("4206");
console.log(result === "");

// Entire number is odd
result = largestOddNumber("35427");
console.log(result === "35427");

// Last digit is even
result = largestOddNumber("123456");
console.log(result === "12345");

// Only first digit is odd
result = largestOddNumber("1000");
console.log(result === "1");

// Single odd digit
result = largestOddNumber("7");
console.log(result === "7");

// Single even digit
result = largestOddNumber("8");
console.log(result === "");

// Multiple even digits after the last odd digit
result = largestOddNumber("246813200");
console.log(result === "246813");

// Odd digit at the end
result = largestOddNumber("12345");
console.log(result === "12345");

// All digits are even
result = largestOddNumber("2468");
console.log(result === "");

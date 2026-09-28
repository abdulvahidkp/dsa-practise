// LeetCode/Problem: 1221. Split a String in Balanced Strings
// Link: https://leetcode.com/problems/split-a-string-in-balanced-strings/
// Date: 2026-09-28

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can keep track of the balance between `L` and `R` while traversing
//   the string.
// - We can use a `balance` variable. When we see an `R`, we decrease the
//   balance by 1, and when we see an `L`, we increase the balance by 1.
// - Whenever the balance becomes `0`, we know that the current substring has
//   the same number of `L` and `R` characters, so it is balanced.
// - At that point, we increment the `count` because we found one balanced
//   substring.
// - We continue this until we reach the end of the string.
// - Since we always split as soon as the balance becomes `0`, we get the
//   maximum number of balanced substrings.

// ============================================
// SOLUTION
// ============================================

var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") --balance;
    else ++balance;

    if (balance === 0) ++count;
  }

  return count;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(1)

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The string is already one balanced substring.
//   - The string can be split into many small balanced substrings.
//   - Multiple `L` or `R` characters can appear before the balance becomes 0.
//
// - Pattern this belongs to:
//   - Greedy (is a problem-solving approach where, at each step, you make the best decision you can right now, without going back and changing that decision later)
//   - Running Balance
//   - String Traversal
//   - Counting / Prefix Balance
//
// - Mistake pattern (things to keep forgetting):
//   - `balance === 0` means the current substring has equal `L` and `R`.
//   - We don't need to actually create or store the substrings.

// ============================================
// TESTS
// ============================================

// Basic case
let result = balancedStringSplit("RLRRLLRLRL");
console.log(result === 4);

// Multiple characters before becoming balanced
result = balancedStringSplit("RLRRRLLRLL");
console.log(result === 2);

// One balanced substring
result = balancedStringSplit("LLLLRRRR");
console.log(result === 1);

// Every pair is balanced
result = balancedStringSplit("RLRLRL");
console.log(result === 3);

// Two balanced substrings
result = balancedStringSplit("RRLL");
console.log(result === 1);

// Smallest balanced string
result = balancedStringSplit("RL");
console.log(result === 1);

// Reverse order
result = balancedStringSplit("LR");
console.log(result === 1);

// Multiple balanced sections
result = balancedStringSplit("LRLRLRLR");
console.log(result === 4);

// Larger balanced groups
result = balancedStringSplit("LLRRLLRR");
console.log(result === 2);

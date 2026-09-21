// LeetCode/Problem: Length of Last Word
// Link: https://leetcode.com/problems/length-of-last-word/description/
// Date: 2026-09-21

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Since we have to find the length of the last word, we can start iterating
//   from the end of the string.
// - Outside the loop, we create a variable to track the length of the last
//   word, with a default value of `0`.
// - The initial value of the loop will be `s.length - 1`, which is the last
//   position of the string.
// - The loop should continue while the index is greater than or equal to `0`,
//   and we decrease the index after each iteration.
// - Inside the loop, if the current value is not a space, we increase the
//   count.
// - If the current value is a space and the count is already greater than `0`,
//   we break the loop because this means we have already passed the last word
//   and reached the space before it.
// - Finally, we return the count.

// ============================================
// SOLUTION
// ============================================

var solve = function (s) {
  let sizeOfLastWord = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      ++sizeOfLastWord;
    } else if (sizeOfLastWord > 0) {
      break;
    }
  }

  return sizeOfLastWord;
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
//   - The string can have spaces at the end.
//   - The string can have spaces at the beginning.
//   - There can be multiple spaces between words.
//   - The string can contain only one word.
//
// - Pattern this belongs to:
//   - String
//   - Reverse Traversal
//   - Boundary Detection
//
// - Mistake pattern (things to keep forgetting):
//   - Start from `s.length - 1` because we need to find the last word.
//   - Don't stop when we find the first space, because there can be trailing
//     spaces after the last word.
//   - Only break when we find a space AND `sizeOfLastWord > 0`. This means
//     we have already counted the last word.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve("Hello World");
console.log(result === 5);

// Leading and trailing spaces
result = solve("   fly me   to   the moon  ");
console.log(result === 4);

// Multiple words without extra spaces
result = solve("luffy is still joyboy");
console.log(result === 6);

// Single word
result = solve("Hello");
console.log(result === 5);

// Single word with trailing spaces
result = solve("Hello   ");
console.log(result === 5);

// Single word with leading spaces
result = solve("   Hello");
console.log(result === 5);

// Multiple spaces between words
result = solve("Hello     World");
console.log(result === 5);

// One-character word
result = solve("a");
console.log(result === 1);

// Spaces after the last word
result = solve("Hello World   ");
console.log(result === 5);

// LeetCode/Problem: 2942. Find Words Containing Character
// Link: https://leetcode.com/problems/find-words-containing-character/description
// Date: 2026-09-21

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Create an empty array `indexes` to store the indices of words containing
//   the character.
// - Use an outer loop to go through each word.
// - Use an inner loop to check each character of the current word.
// - If the current character is equal to `x`, add the word's index to
//   `indexes` and break the inner loop.
// - We use `break` because we only need to add the index once, even if `x`
//   appears multiple times in the same word.
// - Return `indexes`.

// ============================================
// SOLUTION
// ============================================

var findWordsContaining = function (words, x) {
  const indexes = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        indexes.push(i);
        break;
      }
    }
  }

  return indexes;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n * m)
// Space Complexity: O(k)
//
// Where:
// - `n` = number of words
// - `m` = maximum length of a word
// - `k` = number of words containing `x` (output array)

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - `x` appears multiple times in the same word.
//
// - Pattern this belongs to:
//   - Traverse an array and search inside each element.
//
// - Mistake pattern (things to keep forgetting):
//   - Once `x` is found, use `break` so the same word's index is not added
//     multiple times.

// ============================================
// TESTS
// ============================================

// Basic case
let result = findWordsContaining(["leet", "code"], "e");
console.log(JSON.stringify(result) === JSON.stringify([0, 1]));

// Character appears in some words
result = findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
console.log(JSON.stringify(result) === JSON.stringify([0, 2]));

// Character does not exist
result = findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z");
console.log(JSON.stringify(result) === JSON.stringify([]));

// Character appears multiple times in a word
result = findWordsContaining(["apple", "banana", "cat"], "a");
console.log(JSON.stringify(result) === JSON.stringify([0, 1, 2]));

// Character appears in every word
result = findWordsContaining(["abc", "bac", "cab"], "a");
console.log(JSON.stringify(result) === JSON.stringify([0, 1, 2]));

// Single-character words
result = findWordsContaining(["a", "b", "a"], "a");
console.log(JSON.stringify(result) === JSON.stringify([0, 2]));

// Character appears at the end
result = findWordsContaining(["hello", "world", "test"], "o");
console.log(JSON.stringify(result) === JSON.stringify([0, 1]));

// Character appears at the beginning
result = findWordsContaining(["apple", "banana", "cat"], "a");
console.log(JSON.stringify(result) === JSON.stringify([0, 1, 2]));

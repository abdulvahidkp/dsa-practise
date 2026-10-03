// LeetCode/Problem: 14. Longest Common Prefix
// Link: https://leetcode.com/problems/longest-common-prefix/
// Date: 2026-10-03

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can compare the characters at the same index across all the strings.
// - We will use the first string as the reference string because the common
//   prefix cannot be longer than the first string.
// - We will iterate through every character of the first string.
// - For each character, we will check the character at the same index in all
//   the remaining strings.
// - If the character is different in any string, we have reached the end of
//   the common prefix, so we return the prefix from the first string.
// - If the character matches in every string, we increase `prefixLength` and
//   continue checking the next character.
// - If we finish checking the entire first string, then the first string
//   itself is the common prefix, so we return it.

// ============================================
// SOLUTION
// ============================================

var longestCommonPrefix = function (strs) {
  let prefixLength = 0;

  for (let i = 0; i < strs[0].length; i++) {
    const currLetter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      const currWordLetter = strs[j][i];

      if (currLetter !== currWordLetter) {
        return strs[0].substring(0, prefixLength);
      }
    }

    ++prefixLength;
  }

  return strs[0];
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n * m)
// Space Complexity: O(1)
//
// Where:
// - `n` = number of strings
// - `m` = length of the shortest string
//
// We only compare characters up to the length of the shortest string.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Only one string → return that string.
//   - The first string is empty → return `""`.
//   - One of the other strings is empty → return `""`.
//   - There is no common prefix → return `""`.
//   - All strings are identical → return the entire string.
//   - One string is a prefix of all the others.
//   - The first string (referecing) can higher character length, and following may have lesser length
//
// - Pattern this belongs to:
//   - Vertical Scanning
//   - String Traversal
//   - Array Traversal
//   - Prefix Matching
//
// - Mistake pattern (things to keep forgetting):
//   - Use the first string as the reference string.
//   - Start the inner loop from index `1` because the first string is already
//     the reference.
//   - Compare characters at the same index, not the whole strings.
//   - The common prefix cannot be longer than the shortest string.
//   - Return the prefix immediately when a mismatch is found.
//   - `substring(0, prefixLength)` excludes `prefixLength` itself.

// ============================================
// TESTS
// ============================================

// Basic case
let result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(result === "fl");

// No common prefix
result = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(result === "");

// All strings are identical
result = longestCommonPrefix(["test", "test", "test"]);
console.log(result === "test");

// One string
result = longestCommonPrefix(["hello"]);
console.log(result === "hello");

// One string is a prefix of the others
result = longestCommonPrefix(["flower", "flow", "flowing"]);
console.log(result === "flow");

// Empty string
result = longestCommonPrefix(["", "flower", "flow"]);
console.log(result === "");

// First two characters are common
result = longestCommonPrefix(["abc", "abd", "abe"]);
console.log(result === "ab");

// Only one common character
result = longestCommonPrefix(["apple", "ape", "april"]);
console.log(result === "ap");

// No common characters
result = longestCommonPrefix(["cat", "dog", "fish"]);
console.log(result === "");

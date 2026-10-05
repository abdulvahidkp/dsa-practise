// LeetCode/Problem: Valid Anagram
// Link: https://leetcode.com/problems/valid-anagram/
// Date: 2026-10-05

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - First, if the lengths of `s` and `t` are different, they cannot be
//   anagrams, so we can immediately return `false`.
// - We can use an object to store the frequency of each character in `s`.
// - We will iterate through `s` and increase the frequency of each character.
// - Then we will iterate through `t` and check whether each character exists
//   in the frequency object.
// - If the character does not exist or its remaining frequency is `0`, then
//   `t` cannot be an anagram of `s`, so we return `false`.
// - Otherwise, we decrease the frequency of that character because we have
//   now used one occurrence of it from `s`.
// - If we successfully process the entire string `t`, then both strings have
//   the same characters with the same frequencies, so we return `true`.

// ============================================
// SOLUTION
// ============================================

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const letters = {};

  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i];
    letters[currLetter] = (letters[currLetter] ?? 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const currLetter = t[i];
    const existingLetter = letters[currLetter];

    // Either undefined or 0.
    if (!existingLetter) return false;

    --letters[currLetter];
  }

  return true;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Since the strings contain only lowercase English letters, there can be at
// most 26 unique characters. Therefore, the frequency object has a fixed
// maximum size.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Different string lengths → immediately return false.
//   - Both strings contain the same characters in a different order.
//   - One character has a different frequency.
//   - A character exists in `t` but not in `s`.
//   - A character is used more times in `t` than it appears in `s`. and opposite as well
//
// - Pattern this belongs to:
//   - Frequency Counting
//   - Hash Map / Object
//   - String Traversal
//   - Character Frequency Matching
//
// - Mistake pattern (things to keep forgetting):
//   - Different lengths mean the strings cannot be anagrams.
//   - We need to compare frequencies, not just whether characters exist.
//   - When processing `t`, decrease the frequency after using a character.
//   - `!existingLetter` catches both `undefined` and `0`.
//   - The strings can have the same characters but still not be anagrams if
//     their frequencies are different.
//   - Since the input contains only lowercase English letters, the frequency
//     map has at most 26 keys. which makes the problem o(1) space complexity

// ============================================
// TESTS
// ============================================

// Basic case
let result = isAnagram("anagram", "nagaram");
console.log(result === true);

// Not an anagram
result = isAnagram("rat", "car");
console.log(result === false);

// Same characters, different order

result = isAnagram("listen", "silent");
console.log(result === true);

// Different lengths
result = isAnagram("hello", "hell");
console.log(result === false);

// Same characters but different frequency
result = isAnagram("aabb", "abab");
console.log(result === true);

// Different frequency
result = isAnagram("aabb", "abbb");
console.log(result === false);

// Single character
result = isAnagram("a", "a");
console.log(result === true);

// Single different character
result = isAnagram("a", "b");
console.log(result === false);

// Repeated characters
result = isAnagram("aaaabb", "bbaaaa");
console.log(result === true);

// Character exists in t but not enough occurrences in s
result = isAnagram("aabb", "aaab");
console.log(result === false);

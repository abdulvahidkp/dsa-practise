// LeetCode/Problem: 541. Reverse String II
// Link: https://leetcode.com/problems/reverse-string-ii/
// Date: 2026-09-30

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Since strings are immutable in JavaScript, first convert the string into
//   an array so we can modify individual characters.
// - We need to process the string in groups of `2k` characters, so the outer
//   loop moves forward by `2 * k` each time.
// - For each group, we need to find how many characters should actually be
//   reversed.
// - We can use `Math.min(k, s.length - i)` so that:
//   - If there are at least `k` characters remaining, we reverse `k`.
//   - If fewer than `k` characters remain, we reverse all remaining characters.
// - Once we know the length of the part to reverse, we only need to iterate
//   through half of it because we swap the characters from both ends.
// - For each position, swap the character at the beginning with the
//   corresponding character at the end.
// - Finally, convert the array back into a string and return it.

// ============================================
// SOLUTION
// ============================================

var reverseStr = function (s, k) {
  s = s.split("");

  for (let i = 0; i < s.length; i = i + k * 2) {
    const reverseLength = Math.min(k, s.length - i);
    const halfLength = Math.floor(reverseLength / 2);

    for (let j = 0; j < halfLength; j++) {
      [s[j + i], s[i + reverseLength - 1 - j]] = [
        s[i + reverseLength - 1 - j],
        s[j + i],
      ];
    }
  }

  return s.join("");
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n) - even though there is nester loop, if we check how it's processing the data, we can see it's going like one loop way
// Space Complexity: O(n) - since we're using an array, but some language string are mutable, at that case this will be o(1)
//
// We convert the string into an array, which requires O(n) space.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - `s.length <= k` → reverse the entire string.
//   - `k < s.length < 2k` → reverse the first `k` characters only.
//   - `s.length` is exactly a multiple of `2k`.
//   - `k = 1` → only the first character of every `2k` block is reversed,
//     which doesn't change anything.
//   - The 2nd or 3rd or nth `2k` group may have fewer than `k` characters remaining;
//     in that case, reverse all the remaining characters in that group.
//
// - Pattern this belongs to:
//   - Fixed-size Groups / Blocks
//
// - Mistake pattern (things to keep forgetting):
//   - The outer loop moves by `2 * k`, not by `k`.
//   - Only the first `k` characters of every `2k` block are reversed.
//   - `Math.min(k, s.length - i)` handles the case where fewer than `k`
//     characters remain.
//   - We only need to iterate through half of the section being reversed
//     because each iteration swaps two characters.
//   - The right-side index is `i + reverseLength - 1 - j`.
//   - The time complexity is o(n), not o(n^2)

// ============================================
// TESTS
// ============================================

// Basic case
let result = reverseStr("abcdefg", 2);
console.log(result === "bacdfeg");

// Exactly 2k characters
result = reverseStr("abcd", 2);
console.log(result === "bacd");

// Less than k characters
result = reverseStr("abc", 5);
console.log(result === "cba");

// Between k and 2k characters
result = reverseStr("abcdef", 4);
console.log(result === "dcbaef");

// k = 1
result = reverseStr("abcdef", 1);
console.log(result === "abcdef");

// k equals string length
result = reverseStr("hello", 5);
console.log(result === "olleh");

// Single character
result = reverseStr("a", 1);
console.log(result === "a");

// Multiple groups
result = reverseStr("abcdefghij", 3);
console.log(result === "cbadefihgj");

// Odd length
result = reverseStr("abcdefgh", 3);
console.log(result === "cbadefhg");

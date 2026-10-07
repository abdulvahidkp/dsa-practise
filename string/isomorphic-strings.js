// LeetCode/Problem: Isomorphic Strings
// Link: https://leetcode.com/problems/isomorphic-strings/
// Date: 2026-10-07

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We need to keep track of the mapping between characters in both strings.
//
// - We can create two objects:
//   - `mappedStoT` → stores the mapping from `s` to `t`.
//   - `mappedTtoS` → stores the mapping from `t` to `s`.
//
// - We iterate through both strings at the same index.
//
// - For every pair of characters, we check whether a mapping already exists.
//
// - If a character from `s` was already mapped, it must map to the same
//   character in `t`. Otherwise, the strings are not isomorphic.
//
// - We also need to check the reverse mapping. If a character from `t` was
//   already mapped to a different character in `s`, the strings are not
//   isomorphic.
//
// - If neither mapping exists, we create both mappings.
//
// - At the end, if no conflict was found, the strings are isomorphic.

// ============================================
// SOLUTION
// ============================================

var isIsomorphic = function (s, t) {
  const sToT = {};
  const tToS = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    const mappedTChar = sToT[sChar];
    const mappedSChar = tToS[tChar];

    if (mappedTChar && mappedTChar !== tChar) return false;
    if (mappedSChar && mappedSChar !== sChar) return false;

    if (!mappedTChar && !mappedSChar) {
      sToT[sChar] = tChar;
      tToS[tChar] = sChar;
    }
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
// Since the strings contain valid ASCII characters, there are only a fixed
// number of possible characters. Therefore, the two mappings can only contain
// a constant number of entries.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - A character in `s` maps to the same character in `t` every time.
//   - Two different characters in `s` cannot map to the same character in `t`.
//   - The reverse mapping must also be unique.
//
//   - Example:
//       s = "foo"
//       t = "bar"
//     Here, `f -> b` and `o -> a` at first, but the second `o` would need
//     to map to `r`, so this is not isomorphic.
//
//   - This is why we need both mappings:
//       `s -> t` and `t -> s`.
//
//   - A character can map to itself, for example:
//       s = "paper"
//       t = "title"

// - Pattern this belongs to:
//   - Hash Map / Object
//   - Two-Way Mapping
//   - String Traversal
//   - Character Mapping

// - Mistake pattern (things to keep forgetting):
//   - Checking only `s -> t` is not enough.
//   - We also need to check `t -> s` because two different characters cannot
//     map to the same character.
//
//   - Once a mapping is created, it cannot change later.
//
//   - Compare characters at the same index.
//
//   - If an existing mapping conflicts with the current character, return
//     `false` immediately.
//
//   - Do not confuse "character exists" with "character has a mapping."
//     An object lookup can return `undefined` when no mapping exists.

// ============================================
// TESTS
// ============================================

// Basic case
let result = isIsomorphic("egg", "add");
console.log(result === true);

// Not isomorphic
result = isIsomorphic("foo", "bar");
console.log(result === false);

// Valid mapping
result = isIsomorphic("paper", "title");
console.log(result === true);

// Same characters
result = isIsomorphic("abc", "abc");
console.log(result === true);

// Different characters with same pattern
result = isIsomorphic("abc", "def");
console.log(result === true);

// Same character maps to different characters
result = isIsomorphic("f11", "b23");
console.log(result === false);

// Two characters cannot map to the same character
result = isIsomorphic("ab", "cc");
console.log(result === false);

// Repeated pattern
result = isIsomorphic("abab", "cdcd");
console.log(result === true);

// Different pattern
result = isIsomorphic("abab", "cddc");
console.log(result === false);

// Single character
result = isIsomorphic("a", "b");
console.log(result === true);

// Same single character
result = isIsomorphic("a", "a");
console.log(result === true);

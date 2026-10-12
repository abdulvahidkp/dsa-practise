// LeetCode/Problem: 49. Group Anagrams
// Link: https://leetcode.com/problems/group-anagrams/
// Date: 2026-10-12

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We need some way to identify whether two words are anagrams.
// - Since anagrams have the same characters with the same frequencies, we can
//   create a frequency pattern for every word.
// - We can create an array of size 26 because the input contains only
//   lowercase English letters.
// - For each word, we will count how many times each letter appears.
// - We can find the index of each letter using its ASCII value:
//   `currLetter.charCodeAt(0) - "a".charCodeAt(0)`.
// - For example, for `"abb"` the frequency array will represent:
//     a -> 1
//     b -> 2
//     c -> 0
//     ...
// - Two anagrams will always produce the same frequency array.
// - We can convert the frequency array into a string and use it as the key
//   in an object.
// - If the key already exists, the current word belongs to that anagram
//   group, so we push it into the existing array.
// - Otherwise, we create a new group for that key.
// - At the end, we return all the values from the object.

// ============================================
// SOLUTION
// ============================================

var groupAnagrams = function (strs) {
  const anagramMap = {};

  for (let i = 0; i < strs.length; i++) {
    const currentWord = strs[i];

    let letterFrequency = new Array(26).fill(0);

    for (let j = 0; j < currentWord.length; j++) {
      const letterIndex = currentWord.charCodeAt(j) - "a".charCodeAt(0);

      ++letterFrequency[letterIndex];
    }

    const frequencyKey = letterFrequency.join("#");

    if (anagramMap[frequencyKey]) {
      anagramMap[frequencyKey].push(currentWord);
    } else {
      anagramMap[frequencyKey] = [currentWord];
    }
  }

  return Object.values(anagramMap);
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach without sorting each word.
//
// Time Complexity: O(n * k)
// Space Complexity: O(n * k)
//
// Where:
// - `n` = number of strings
// - `k` = maximum length of a string
//
// We count the characters of every word in O(k) time.
//
// The output itself can contain all `n * k` characters, so the result requires
// O(n * k) space.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Empty string → `[""]`.
//   - Single string → one group.
//   - All strings are anagrams.
//   - No strings are anagrams.
//   - Strings can have repeated characters.
//   - Different words can produce the same frequency pattern.
//
// - Pattern this belongs to:
//   - Hash Map / Object
//   - Frequency Counting
//   - Grouping by Signature
//   - String Traversal
//   - Character Frequency Pattern
//
// - Mistake pattern (things to keep forgetting):
//   - Anagrams must have the same character frequencies, not just the same
//     characters.
//   - The frequency array must contain all 26 lowercase letters so that two
//     words produce the same key regardless of character order.
//   - Reset the frequency array for every new word.
//   - Use the frequency pattern as the map key.
//   - The `#` separator makes the frequency array values unambiguous when
//     converting it into a string key.
//   - Since the input contains only lowercase English letters, the frequency
//     array always has a fixed size of 26.

// ============================================
// TESTS
// ============================================

// Basic case

let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

console.log(
  JSON.stringify(result) ===
    JSON.stringify([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]),
);

// Single empty string

result = groupAnagrams([""]);

console.log(JSON.stringify(result) === JSON.stringify([[""]]));

// Single character

result = groupAnagrams(["a"]);

console.log(JSON.stringify(result) === JSON.stringify([["a"]]));

// All strings are anagrams

result = groupAnagrams(["eat", "tea", "ate"]);

console.log(JSON.stringify(result) === JSON.stringify([["eat", "tea", "ate"]]));

// No anagrams

result = groupAnagrams(["abc", "def", "ghi"]);

console.log(
  JSON.stringify(result) === JSON.stringify([["abc"], ["def"], ["ghi"]]),
);

// Repeated characters

result = groupAnagrams(["aabb", "bbaa", "abab", "abba"]);

console.log(
  JSON.stringify(result) === JSON.stringify([["aabb", "bbaa", "abab", "abba"]]),
);

// Different groups with repeated characters

result = groupAnagrams(["abc", "bca", "abb", "bab"]);

console.log(
  JSON.stringify(result) ===
    JSON.stringify([
      ["abc", "bca"],
      ["abb", "bab"],
    ]),
);

// Same letters but different frequencies

result = groupAnagrams(["aab", "abb", "baa"]);

console.log(
  JSON.stringify(result) === JSON.stringify([["aab", "baa"], ["abb"]]),
);

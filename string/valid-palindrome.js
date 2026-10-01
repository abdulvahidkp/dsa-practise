// LeetCode/Problem: 125. Valid Palindrome
// Link: https://leetcode.com/problems/valid-palindrome/
// Date: 2026-10-01

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can use two pointers, one starting from the beginning and one from
//   the end of the string.
// - `left` starts at index 0 and `right` starts at the last index.
// - We need to ignore non-alphanumeric characters. So if the character at
//   `left` is not alphanumeric, we move `left` forward.
// - Similarly, if the character at `right` is not alphanumeric, we move
//   `right` backward.
// - Once both pointers are pointing to alphanumeric characters, we compare
//   them after converting both characters to lowercase.
// - If they are different, the string cannot be a palindrome, so we return
//   `false`.
// - If they are equal, we move both pointers towards the center.
// - If the pointers meet or cross without finding a mismatch, the string is
//   a palindrome, so we return `true`.
// - We use a helper function `isAlphanumeric()` to check whether a character
//   is a letter or a number.

// ============================================
// SOLUTION
// ============================================

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      ++left;
      continue;
    } else if (!isAlphanumeric(s[right])) {
      --right;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    ++left;
    --right;
  }

  return true;
};

function isAlphanumeric(char) {
  if (!char || char.length !== 1) return false;

  const code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// We don't create another string or array. We only use two pointers and a
// few variables.

// ============================================
// PATTERN THIS BELONGS TO
// ============================================
// - Two Pointers
//
// - String Traversal
//
// - Palindrome
//
// - Character Validation
//
// - In-place / Constant Space Processing

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Empty string after removing non-alphanumeric characters → true.
//   - String containing only spaces or symbols → true.
//   - Single alphanumeric character → true.
//   - Uppercase and lowercase letters should be treated as the same.
//   - Numbers are also alphanumeric and must be compared.
//   - Non-alphanumeric characters can appear anywhere in the string.
//
// - Pattern this belongs to:
//   - Two pointers moving towards each other from both ends.
//
// - Mistake pattern (things to keep forgetting):
//   - Skip non-alphanumeric characters before comparing.
//   - Move only the pointer pointing to the non-alphanumeric character.
//   - Convert both characters to lowercase before comparing.
//   - Compare characters from both ends, not adjacent characters.
//   - Return `false` immediately when a mismatch is found.
//   - If the pointers meet or cross without a mismatch, return `true`.

// ============================================
// TESTS
// ============================================

// Basic palindrome
let result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result === true);

// Not a palindrome
result = isPalindrome("race a car");
console.log(result === false);

// Only spaces
result = isPalindrome(" ");
console.log(result === true);

// Empty string
result = isPalindrome("");
console.log(result === true);

// Single character
result = isPalindrome("a");
console.log(result === true);

// Uppercase and lowercase
result = isPalindrome("Aa");
console.log(result === true);

// Numbers
result = isPalindrome("12321");
console.log(result === true);

// Letters and numbers
result = isPalindrome("A1b2b1a");
console.log(result === true);

// Non-alphanumeric characters between characters
result = isPalindrome("a!b!a");
console.log(result === true);

// Non-alphanumeric characters make it empty
result = isPalindrome(".,!?");
console.log(result === true);

// Palindrome with numbers and symbols
result = isPalindrome("1A2@2a1");
console.log(result === true);

// Mismatch
result = isPalindrome("ab");
console.log(result === false);

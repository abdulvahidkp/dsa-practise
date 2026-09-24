// LeetCode/Problem: 3541. Find Most Frequent Vowel and Consonant
// Link: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description
// Date: 2026-09-24

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We have to count the frequency of each letter first. For that, we can
//   create an object to store each letter and its frequency.
// - We will iterate through each letter in the given string and store the
//   letter in the object and increase its count.
// - Then we need two variables to track the maximum frequency of vowels and
//   consonants.
// - Once we have all the frequencies, we will run another loop over the
//   frequency object to find the maximum frequency among vowels and
//   consonants.
// - For that, we need to define which letters are vowels, so we can create a
//   Set containing `a`, `e`, `i`, `o`, and `u`.
// - Inside the loop, we check whether the current letter is a vowel. If it is,
//   we compare its frequency with the current maximum vowel frequency and
//   update it if necessary.
// - Otherwise, it is a consonant, so we do the same for the maximum
//   consonant frequency.
// - At the end, we add the maximum vowel frequency and maximum consonant
//   frequency and return the result.

// ============================================
// SOLUTION
// ============================================

var maxFreqSum = function (s) {
  const lettersWithFrequency = {};

  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i];
    const currFrequency = lettersWithFrequency[currLetter];

    lettersWithFrequency[currLetter] = currFrequency ? currFrequency + 1 : 1;
  }

  const vowels = new Set("aeiou");

  let maxFreqVowel = 0;
  let maxFreqConsonant = 0;

  for (const [key, value] of Object.entries(lettersWithFrequency)) {
    if (vowels.has(key)) {
      maxFreqVowel = Math.max(maxFreqVowel, value);
    } else {
      maxFreqConsonant = Math.max(maxFreqConsonant, value);
    }
  }

  return maxFreqVowel + maxFreqConsonant;
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
// Since `s` contains only lowercase English letters, there can be at most
// 26 unique characters. Therefore, the frequency object can contain at most
// 26 entries, which is a constant amount of space.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - There are no vowels.
//   - There are no consonants.
//   - The string contains only one unique letter.
//   - Multiple consonants/vowels have the same maximum frequency.
//
// - Pattern this belongs to:
//   - Frequency Counting
//   - Hash Map / Object
//   - Set
//   - String Traversal
//
// - Mistake pattern (things to keep forgetting):
//   - Initialize both maximum frequencies to `0` because one category may not
//     exist.
//   - Use a Set to check whether a character is a vowel.

// ============================================
// TESTS
// ============================================

// Basic case
let result = maxFreqSum("successes");
console.log(result === 6);

// Only vowels
result = maxFreqSum("aeiaeia");
console.log(result === 3);

// Only consonants
result = maxFreqSum("bbbbcc");
console.log(result === 4);

// One vowel and one consonant
result = maxFreqSum("ab");
console.log(result === 2);

// One unique vowel
result = maxFreqSum("aaaa");
console.log(result === 4);

// One unique consonant
result = maxFreqSum("zzzz");
console.log(result === 4);

// Equal frequency vowels and consonants
result = maxFreqSum("aabbcc");
console.log(result === 4);

// All 26 letters
result = maxFreqSum("abcdefghijklmnopqrstuvwxyz");
console.log(result === 2);

// Single character vowel
result = maxFreqSum("a");
console.log(result === 1);

// Single character consonant
result = maxFreqSum("b");
console.log(result === 1);

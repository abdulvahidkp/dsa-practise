// LeetCode/Problem: 771. Jewels and Stones
// Link: https://leetcode.com/problems/jewels-and-stones/
// Date: 2026-09-24

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We might think we have to use a nested loop where the outer loop points
//   to one character in `jewels`, and the inner loop checks each character in
//   `stones` to see if it matches the jewel.
// - But this would give us O(n * m) time complexity.
//
// - So there is another way. We can use a Set data structure, which allows
//   us to check whether an element exists in the jewels in O(1) average time.
//
// - I will create a variable for the Set and initialize it with `new Set()`
//   and pass `jewels` to it. In JavaScript, when we pass a string to `Set`,
//   each character is stored as a separate value, and duplicate characters
//   are removed. The problem also guarantees that all characters in `jewels`
//   are unique.
//
// - Then we need a variable to store the count. We can create a variable
//   with a default value of 0 outside the loop.
//
// - Then we will loop through `stones` and check whether each character exists
//   in the jewels Set. If it exists, we increment the count.
//
// - Once the loop ends, we return the count.

// ============================================
// SOLUTION
// ============================================

var numJewelsInStones = function (jewels, stones) {
  let jewelsSet = new Set(jewels);
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) ++count;
  }

  return count;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n + m)
// Space Complexity: O(1)
//
// Since `jewels` contains only English letters, there can be at most
// 52 unique characters (26 lowercase + 26 uppercase), so the Set has
// a fixed maximum size.
//
// Where:
// - `n` = length of `jewels`
// - `m` = length of `stones`

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The same jewel appears multiple times in `stones`.
//   - Uppercase and lowercase characters are different.
//   - `jewels` contains only unique characters.
//
// - Pattern this belongs to:
//   - Use a Set when we repeatedly need to check whether an element exists
//     in a collection.
//   - Set
//   - Hash Set / Hashing
//   - String Traversal
//   - Frequency / Membership Checking
//
// - Mistake pattern (things to keep forgetting):
//   - A nested loop works, but it gives O(n * m) time complexity.
//   - We need to count every matching stone, not just every unique stone.
//   - Do not create a Set from `stones`, because duplicate stones still need
//     to be counted.

// ============================================
// TESTS
// ============================================

// Basic case
let result = numJewelsInStones("aA", "aAAbbbb");
console.log(result === 3);

// No matching jewels
result = numJewelsInStones("z", "ZZ");
console.log(result === 0);

// All stones are jewels
result = numJewelsInStones("abc", "abcabc");
console.log(result === 6);

// Only some stones are jewels
result = numJewelsInStones("a", "aabbcc");
console.log(result === 2);

// Case-sensitive
result = numJewelsInStones("a", "Aaa");
console.log(result === 2);

// Jewel appears multiple times in stones
result = numJewelsInStones("ab", "aaaaabbbb");
console.log(result === 9);

// One jewel and one stone
result = numJewelsInStones("a", "a");
console.log(result === 1);

// No matching characters
result = numJewelsInStones("abc", "xyz");
console.log(result === 0);

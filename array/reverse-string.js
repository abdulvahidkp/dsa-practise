// LeetCode/Problem: Reverse String
// Link: https://leetcode.com/problems/reverse-string/description/
// Date: 2026-07-27

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// CONSTRAINTS
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
//  - Since we have to reverse the array of characters, I am running a for loop only until half of the array because each iteration swaps one character from the left side with one character from the right side.
//  - We will start iterating from the 0th index and calculate the right-side index by subtracting the current index from the last index of the array, then swap both characters in place.
//  - Once the iteration is over, we'll return the array.
// Time: O(n)  Space: O(1)

function solve(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const leftIdx = i;
    const rightIdx = s.length - 1 - i;

    [s[leftIdx], s[rightIdx]] = [s[rightIdx], s[leftIdx]];
  }

  return s;
}

// ============================================
// OPTIMAL SOLUTION — same as mine ✅
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(n) time, O(1) space, single pass). No changes needed.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Single character
//   - Even length array
//   - Odd length array
//
// - Pattern this belongs to:
//   - Two pointers
//   - In-place array modification
//
// - Mistake pattern (things to keep forgetting):
//   - The last index is `length - 1`, not `length`.
//   - Iterate only until half of the array, otherwise you'll swap the characters back.

// ============================================
// TESTS
// ============================================
// Example 1
let s = ["h", "e", "l", "l", "o"];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify(["o", "l", "l", "e", "h"]));

// Example 2
s = ["H", "a", "n", "n", "a", "h"];
solve(s);
console.log(
  JSON.stringify(s) === JSON.stringify(["h", "a", "n", "n", "a", "H"]),
);

// Single character
s = ["a"];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify(["a"]));

// Two characters
s = ["a", "b"];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify(["b", "a"]));

// Even length
s = ["a", "b", "c", "d"];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify(["d", "c", "b", "a"]));

// Odd length
s = ["a", "b", "c", "d", "e"];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify(["e", "d", "c", "b", "a"]));

// Numbers (works for any array)
s = [1, 2, 3, 4];
solve(s);
console.log(JSON.stringify(s) === JSON.stringify([4, 3, 2, 1]));

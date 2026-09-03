// LeetCode/Problem: Sum of all numbers in array
// Link: <problem URL>
// Date: 2026-09-03

// ============================================
// PROBLEM
// ============================================
// - This problem is for finding the sum of all numbers in the passed array.
// - Fix it with recursion.

// ============================================
// CONSTRAINTS
// ============================================
// 0 <= nums.length <= 1000

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - I am going to use a recursive approach, so initially I will write what should be our base case. Since we don't want to continue the function once the array doesn't have any value, I will return 0 once the array length becomes 0.
// - Then I will return the zero-th index value by adding it with recursively calling the same function but without the first index value as parameter.
// Time: O(n)  Space: O(n)

function solve(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + solve(nums.slice(1));
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same recursive approach, but there is a better implementation.
// `slice(1)` creates a new array on every recursive call.
// Using an index avoids creating new arrays.
//
// Time: O(n)  Space: O(n)

function solveOptimal(nums, index = 0) {
  if (index === nums.length) return 0;
  return nums[index] + solveOptimal(nums, index + 1);
}

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - array length can have 0
//
// - Pattern this belongs to:
//   - Single pass
//   - or Recursion
//
// - Mistake pattern (if any) — things you keep forgetting:
//   - `slice(1)` creates a new array on every recursive call, so avoid it when possible.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve([1, 2, 3, 4, 1, 0]);
console.log(result === 11);

// Larger number
result = solve([3, 41, 3, 3, 1, 10]);
console.log(result === 61);

// Edge case: single zero
result = solve([0]);
console.log(result === 0);

// Edge case: single value
result = solve([1]);
console.log(result === 1);

// Edge case: empty array / base case
result = solve([]);
console.log(result === 0);

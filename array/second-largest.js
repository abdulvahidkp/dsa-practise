// LeetCode/Problem: Second Largest
// Link: <problem URL>
// Date: 2026-07-19

// ============================================
// PROBLEM
// ============================================
// Given an array of numbers `nums`, return the second largest
// DISTINCT value in the array.
//
// If a second distinct largest value does not exist, return `null`.
//
// Examples:
// Input: [4, 1, 7, 3]
// Output: 4
//
// Input: [5, 5, 5]
// Output: null
//
// Input: [9]
// Output: null

// ============================================
// CONSTRAINTS
// ============================================
// - The function parameter is ALWAYS an array.
// - The array may be empty.
// - Every element in the array is a valid JavaScript number.
// - Duplicate values are allowed.
// - Numbers may be positive, negative, integers, or floating-point.
// - Extra space should be O(1).

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
//  - I will assume the value at the 0th index of the array is the largest value and store it in a variable named `largest`.
//  - I will also create another variable and initialize it with `-Infinity`. IMPORTANT: we can't initialize it with `null` since a greater-than comparison happens during iteration. If the iterating value is negative, the comparison will always be false.
//  - Then I will iterate through the array starting from the 1st index and check:
//    - Whether the current value in the iteration is greater than the value in the `largest` variable. If yes, we will assign the current `largest` value to `secondLargest`, and then update `largest` with the current value.
//    - If not, then we will check whether the current value is greater than the current `secondLargest` and less than `largest`. IMPORTANT: this check is necessary because if the current value is the same as `largest`, then both `largest` and `secondLargest` would end up having the same value. We want to prevent that.
//  - Once the iteration completes, we'll return `null` if `secondLargest` is still equal to its initial value. otherwise, we'll return `secondLargest`.
// Time: O(n)  Space: O(1)

function solve(nums) {
  let largest = nums[0];
  let secondLargest = -Infinity;
  let initialSecondLargest = secondLargest;

  for (let i = 1; i < nums.length; i++) {
    const currVal = nums[i];

    if (currVal > largest) {
      secondLargest = largest;
      largest = currVal;
    } else if (currVal > secondLargest && currVal < largest) {
      secondLargest = currVal;
    }
  }

  return secondLargest === initialSecondLargest ? null : secondLargest;
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
//   - All elements are the same return null (no second DISTINCT largest).
//   - Duplicate largest values should not become the second largest.
//   - Works with negative numbers as well.
//
// - Pattern this belongs to:
//   - Top-2 tracking (single pass)
//
// - Mistake pattern (things to keep forgetting):
//   - Initialize tracking variables correctly (e.g. `secondLargest = -Infinity`, not `undefined` since comparisons are involved).
//   - Don't initialize with `null` if comparisons (`>`) are involved and negative numbers are possible.
//   - Always check `currVal < largest` before updating `secondLargest`; otherwise duplicate largest values will be considered the second largest.

// ============================================
// TESTS
// ============================================

// Basic case
console.log(solve([4, 1, 7, 3]) === 4);

// Largest appears first
console.log(solve([10, 8, 5, 2]) === 8);

// Largest appears last
console.log(solve([1, 3, 5, 9]) === 5);

// Mixed order
console.log(solve([7, 2, 9, 4, 8]) === 8);

// Duplicate largest
console.log(solve([5, 5, 4]) === 4);

// Multiple duplicate largest
console.log(solve([8, 8, 8, 7]) === 7);

// Duplicate second largest
console.log(solve([10, 8, 8, 5]) === 8);

// All duplicates
console.log(solve([5, 5, 5, 5]) === null);

// Single element
console.log(solve([42]) === null);

// Empty array
console.log(solve([]) === null);

// Two elements increasing
console.log(solve([1, 2]) === 1);

// Two elements decreasing
console.log(solve([2, 1]) === 1);

// Two equal elements
console.log(solve([7, 7]) === null);

// Negative numbers
console.log(solve([-5, -2, -10]) === -5);

// All negative duplicates
console.log(solve([-3, -3, -3]) === null);

// Mix of negative and positive
console.log(solve([-10, 5, 3, -2]) === 3);

// Contains zero
console.log(solve([0, -1, -2]) === -1);

// Zero as second largest
console.log(solve([-5, 10, 0]) === 0);

// Floating-point numbers
console.log(solve([1.2, 5.8, 3.4]) === 3.4);

// Floating-point duplicates
console.log(solve([2.5, 2.5, 1.5]) === 1.5);

// Very large values
console.log(solve([Number.MAX_SAFE_INTEGER, 100, 50]) === 100);

// Very small values
console.log(solve([Number.MIN_SAFE_INTEGER, -10, -5]) === -10);

// Infinity
console.log(solve([Infinity, 5, 10]) === 10);

// -Infinity
console.log(solve([-Infinity, -5, -10]) === -10);

// Second largest after many duplicates
console.log(solve([9, 9, 9, 8, 8, 7]) === 8);

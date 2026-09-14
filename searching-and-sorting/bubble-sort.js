// LeetCode/Problem: Bubble Sort
// Link: <problem URL>
// Date: 2026-09-08

// ============================================
// PROBLEM
// ============================================
// - Given an array of numbers, sort the array in ascending order using Bubble Sort.
// - You should modify the given array in-place.
// - Do not use JavaScript's built-in `.sort()` method.
// - Return the sorted array.

// Example 1:
// Input:  [5, 3, 8, 4, 2]
// Output: [2, 3, 4, 5, 8]

// Example 2:
// Input:  [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// ============================================
// CONSTRAINTS
// ============================================
// - 0 <= nums.length <= 1000
// - -10^4 <= nums[i] <= 10^4

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - Bubble Sort repeatedly compares adjacent elements.
// - If the current element is greater than the next element, swap them.
// - After one full pass, the largest element moves to the last position.
// - Repeat for the remaining unsorted part of the array.
// - Use an `isSwapped` flag to stop early if no swaps happen in a pass.
//
// Time: Best case: O(n) and average or worst case: O(n^2),  Space: O(1)

function solve(nums) {
  let isSwapped = true;

  for (let i = nums.length - 1; i > 0 && isSwapped; i--) {
    isSwapped = false;

    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
  }

  return nums;
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(n^2) time, O(1) space). No changes needed.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   -
//
// - Pattern this belongs to:
//   - Bubble sort
//   - Adjacent element swapping.
//
// - Mistake pattern (if any) — things to keep forgetting:
//   - Forgetting to reduce the inner loop range.
//   - Forgetting the `isSwapped` optimization.
//   - Forgetting the condition for swapping values: nums[j] > nums[j + 1]

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve([5, 3, 8, 4, 2]);
console.log(JSON.stringify(result) === JSON.stringify([2, 3, 4, 5, 8]));

// Already sorted
result = solve([1, 2, 3, 4, 5]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5]));

// Reverse sorted
result = solve([5, 4, 3, 2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5]));

// Duplicate values
result = solve([4, 2, 4, 1, 2]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 2, 4, 4]));

// Negative values
result = solve([3, -1, 5, -4, 2]);
console.log(JSON.stringify(result) === JSON.stringify([-4, -1, 2, 3, 5]));

// All same values
result = solve([7, 7, 7, 7]);
console.log(JSON.stringify(result) === JSON.stringify([7, 7, 7, 7]));

// Single element
result = solve([10]);
console.log(JSON.stringify(result) === JSON.stringify([10]));

// Empty array
result = solve([]);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Two elements
result = solve([2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2]));

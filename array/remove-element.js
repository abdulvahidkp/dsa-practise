// LeetCode/Problem: Remove Element
// Link: https://leetcode.com/problems/remove-element/description/
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
//  - For tracking the index where the next non-matching value should be placed, I will create a variable named `currIdx` and initialize it to 0 because it's the position where the first non-matching value should be placed initially.
//  - We will start iterating from the 0th index and check whether the value in `val` matches the current iterating value.
//    - If yes, we will continue the iteration without doing anything.
//    - If no, we will place (or assign) the current iterating value at the position stored in `currIdx`, and then increment `currIdx` by 1.
//  - Once the iteration is over, we'll return `currIdx` because the problem asks us to return the number of elements in the array that do not match the passed value.
//  - I am keeping the remaining part of the array as it is because the problem statement says that portion is ignored.
// Time: O(n)  Space: O(1)

function solve(nums, val) {
  let currIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    if (currVal === val) continue;

    nums[currIdx] = currVal;
    ++currIdx;
  }

  return currIdx;
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
//   - val appears at beginning/end
//
// - Pattern this belongs to:
//   - Two pointers
//   - Read Pointer + Write Pointer
//
// - Mistake pattern (things to keep forgetting):

// ============================================
// TESTS
// ============================================
// Example 1
let nums = [3, 2, 2, 3];
let k = solve(nums, 3);
console.log(k === 2);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([2, 2]));

// Example 2
nums = [0, 1, 2, 2, 3, 0, 4, 2];
k = solve(nums, 2);
console.log(k === 5);
const result = nums.slice(0, k).sort((a, b) => a - b);
console.log(JSON.stringify(result) === JSON.stringify([0, 0, 1, 3, 4]));

// Empty array
nums = [];
k = solve(nums, 5);
console.log(k === 0);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([]));

// All removed
nums = [2, 2, 2];
k = solve(nums, 2);
console.log(k === 0);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([]));

// Nothing removed
nums = [1, 3, 4];
k = solve(nums, 2);
console.log(k === 3);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([1, 3, 4]));

// Single element removed
nums = [5];
k = solve(nums, 5);
console.log(k === 0);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([]));

// Single element kept
nums = [5];
k = solve(nums, 2);
console.log(k === 1);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([5]));

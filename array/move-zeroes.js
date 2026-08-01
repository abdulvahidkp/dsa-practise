// LeetCode/Problem: Move Zeroes
// Link: https://leetcode.com/problems/move-zeroes/description/
// Date: 2026-08-01

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
//  - I'll keep a pointer to track where the next non-zero value should be placed. For that, I'll create a variable named `pointer` and initialize it to 0.
//  - Then, I'll iterate through the array and check whether the current value is zero or not. If it's not zero, I'll place that value at the index stored in `pointer` and increment `pointer`.
//  - Once the iteration is over, `pointer` will point to the position after the last non-zero value. So, I'll run another loop from `pointer` until the end of the array and replace all the remaining values with 0.
//  - Since the problem statement doesn't ask us to return the array, we won't return anything.
// Time: O(n)  Space: O(1)

function solve(nums) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    if (currVal !== 0) {
      nums[pointer] = currVal;
      pointer++;
    }
  }

  while (pointer < nums.length) {
    nums[pointer] = 0;
    pointer++;
  }
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Time: O(n)  Space: O(1)
// What I missed:
// - We don't need another loop to place the zeroes.
// - Whenever we move a non-zero value to an earlier position, we can immediately replace its old position with 0.
// - This reduces the total number of write operations while keeping the same time complexity.
function solveOptimal(nums) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    if (currVal === 0) continue;

    if (i !== pointer) {
      nums[pointer] = currVal;
      nums[i] = 0;
    }

    pointer++;
  }
}

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Array contains only zeroes.
//   - Array contains no zeroes.
//   - Zeroes are already at the end.
//   - Zeroes are at the beginning.
//
// - Pattern this belongs to:
//   - Two pointers
//   - In-place array modification
//
// - Mistake pattern (things to keep forgetting):
//   - Don't increment the write pointer when the current value is 0.
//   - The optimized solution avoids another pass by setting the current position to 0 immediately after moving a non-zero value.

// ============================================
// TESTS
// ============================================

// Example 1
let nums = [0, 1, 0, 3, 12];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([1, 3, 12, 0, 0]));

// Example 2
nums = [0];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([0]));

// No zeroes
nums = [1, 2, 3];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 3]));

// All zeroes
nums = [0, 0, 0];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([0, 0, 0]));

// Zeroes at the end
nums = [1, 2, 0, 0];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 0, 0]));

// Zeroes at the beginning
nums = [0, 0, 1, 2];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 0, 0]));

// Alternate zeroes
nums = [0, 1, 0, 2, 0, 3];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 3, 0, 0, 0]));

// Single non-zero
nums = [5];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([5]));

// Negative numbers
nums = [0, -1, 0, -2, 3];
solve(nums);
console.log(JSON.stringify(nums) === JSON.stringify([-1, -2, 3, 0, 0]));

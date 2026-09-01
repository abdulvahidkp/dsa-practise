// LeetCode/Problem: Missing Number
// Link: https://leetcode.com/problems/missing-number/description/
// Date: 2026-09-01

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
//  - I already know there is a way to find the sum of all whole numbers from 1 up to a target number (\(n\)). using that way i will intially find the sum
//  - then i will initialize a variable with 0 to track the sum of gotten numbers
//  - then i will run a loop and sum that value to the tracking variable.
//  - once the loop ends, i will return the result of subtraction from total sum expected and total sum gotten.
// Time: O(n)  Space: O(1)

function solve(nums) {
  const numsLength = nums.length;
  const totalSumExpected = (numsLength * (numsLength + 1)) / 2;

  let totalSumGotten = 0;

  for (let i = 0; i < numsLength; i++) {
    totalSumGotten += nums[i];
  }

  return totalSumExpected - totalSumGotten;
}

// ============================================
// OPTIMAL SOLUTION — same as mine ✅
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(n) time, O(1) space). No changes needed.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//
// - Pattern this belongs:
//   - single pass
//   - Mathematical formula
//
// - Mistake pattern (if any) — things you keep forgetting:

// ============================================
// TESTS
// ============================================

// Example 1
let nums = [3, 0, 1];
let result = solve(nums);
console.log(result === 2);

// Example 2
nums = [0, 1];
result = solve(nums);
console.log(result === 2);

// Example 3
nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
result = solve(nums);
console.log(result === 8);

// Missing number is 0
nums = [1, 2, 3, 4];
result = solve(nums);
console.log(result === 0);

// Missing number is the last number
nums = [0, 1, 2, 3];
result = solve(nums);
console.log(result === 4);

// Single element - missing 0
nums = [1];
result = solve(nums);
console.log(result === 0);

// Single element - missing 1
nums = [0];
result = solve(nums);
console.log(result === 1);

// Two elements - missing middle number
nums = [0, 2];
result = solve(nums);
console.log(result === 1);

// Larger unsorted array
nums = [6, 0, 3, 1, 4, 5, 2];
result = solve(nums);
console.log(result === 7);

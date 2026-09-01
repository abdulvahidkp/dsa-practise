// LeetCode/Problem: Missing Number
// Link: https://leetcode.com/problems/single-number/description/
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
//  - I already know there is a way to find the single number when every other number appears twice in the same array, using XOR.
//  - So, I will initialize a variable with 0 to track the XOR of all the values in the array.
//  - Then I will run a loop and XOR each value with the variable.
//  - Once the loop ends, I will return the value in that variable, which will be the single value because all the duplicate numbers will be eliminated.
// Time: O(n)  Space: O(1)

function solve(nums) {
  let xorSum = 0;

  for (let i = 0; i < nums.length; i++) {
    xorSum ^= nums[i];
  }

  return xorSum;
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
//   - Logical Gate: XOR
//
// - Mistake pattern (if any) — things you keep forgetting:

// ============================================
// TESTS
// ============================================

// Example 1
let nums = [2, 2, 1];
let result = solve(nums);
console.log(result === 1);

// Example 2
nums = [4, 1, 2, 1, 2];
result = solve(nums);
console.log(result === 4);

// Example 3
nums = [1];
result = solve(nums);
console.log(result === 1);

// Single number at the beginning
nums = [7, 2, 2, 3, 3];
result = solve(nums);
console.log(result === 7);

// Single number at the end
nums = [5, 1, 1, 2, 2];
result = solve(nums);
console.log(result === 5);

// Negative numbers
nums = [-1, 2, 2, -1, -3];
result = solve(nums);
console.log(result === -3);

// Duplicate numbers with single number in the middle
nums = [9, 4, 9, 4, 7];
result = solve(nums);
console.log(result === 7);

// Larger values
nums = [100, 200, 100, 300, 300];
result = solve(nums);
console.log(result === 200);

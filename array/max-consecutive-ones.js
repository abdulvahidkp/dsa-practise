// LeetCode/Problem: Max Consecutive Ones
// Link: https://leetcode.com/problems/max-consecutive-ones/description/
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
//  - I'll keep two variables: one to store the maximum consecutive 1's found so far (`maxConsecutiveOnes`) and another to store the current consecutive 1's (`currConsecutiveOnes`).
//  - Then, I'll iterate through the array.
//    - If the current value is 1, I'll increment `currConsecutiveOnes`.
//    - If the current value is 0, I'll update `maxConsecutiveOnes` using `Math.max()` by comparing the current maximum and the current consecutive count. Then I'll reset `currConsecutiveOnes` to 0.
//  - Once the iteration is over, I'll return `Math.max(maxConsecutiveOnes, currConsecutiveOnes)` because the array may end with consecutive 1's, so `maxConsecutiveOnes` might not have been updated inside the loop.
// Time: O(n)  Space: O(1)

function solve(nums) {
  let maxConsecutiveOnes = 0;
  let currConsecutiveOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    const isCurrOne = nums[i] === 1;

    if (isCurrOne) {
      currConsecutiveOnes++;
    } else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currConsecutiveOnes);
      currConsecutiveOnes = 0;
    }
  }

  return Math.max(maxConsecutiveOnes, currConsecutiveOnes);
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
//   - The array may end with the longest consecutive sequence of 1's.
//
// - Pattern this belongs to:
//   - Single pass
//
// - Mistake pattern (things to keep forgetting):
//   - Reset the current count whenever a 0 is found.
//   - Compare the maximum count again after the loop because the array may end with consecutive 1's.

// ============================================
// TESTS
// ============================================

// Example 1
let nums = [1, 1, 0, 1, 1, 1];
let ans = solve(nums);
console.log(ans === 3);

// Example 2
nums = [1, 0, 1, 1, 0, 1];
ans = solve(nums);
console.log(ans === 2);

// All ones
nums = [1, 1, 1, 1];
ans = solve(nums);
console.log(ans === 4);

// All zeroes
nums = [0, 0, 0];
ans = solve(nums);
console.log(ans === 0);

// Single one
nums = [1];
ans = solve(nums);
console.log(ans === 1);

// Single zero
nums = [0];
ans = solve(nums);
console.log(ans === 0);

// Consecutive ones at the end
nums = [0, 1, 1, 1];
ans = solve(nums);
console.log(ans === 3);

// Consecutive ones at the beginning
nums = [1, 1, 0, 0];
ans = solve(nums);
console.log(ans === 2);

// Alternating values
nums = [1, 0, 1, 0, 1, 0];
ans = solve(nums);
console.log(ans === 1);

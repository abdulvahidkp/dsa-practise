// LeetCode/Problem: Remove Duplicates from Sorted Array
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Date: 2026-07-19

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
//  - For tracking unique values, I will create a variable named `currUniqueIdx` and initialize it with 0 because we can consider the first element as the first unique value.
//  - We will start iterating from the 1st index and check whether the value at `currUniqueIdx` matches the current iterating value.
//    - If yes, we will continue the iteration without doing anything.
//    - If no, we will increment `currUniqueIdx` by 1 and assign the current value to that position.
//  - Once the iteration is over, we'll return `currUniqueIdx + 1` because indices start at 0, and the problem asks us to return the number of unique elements.
//  - I am keeping the remaining part of the array as it is because the problem statement says that portion is ignored.
// Time: O(n)  Space: O(1)

function solve(nums) {
  let currUniqueIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    const currVal = nums[i];
    if (nums[currUniqueIdx] === currVal) continue;

    nums[++currUniqueIdx] = currVal;
  }

  return currUniqueIdx + 1;
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
//
// - Pattern this belongs to:
//   - Two pointers
//   - Slow & Fast pointers
//
// - Mistake pattern (things to keep forgetting):
//   - The array is already sorted, so duplicates will always be adjacent.
//   - Update the slow pointer only when a new unique value is found.
//   - `currUniqueIdx` is an index, not the count of unique elements. Return `currUniqueIdx + 1`, not `currUniqueIdx`.

// ============================================
// TESTS
// ============================================
// Basic case
let nums = [1, 1, 2];
let k = solve(nums);
console.log(k === 2);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([1, 2]));

// Example 2
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
k = solve(nums);
console.log(k === 5);
console.log(
  JSON.stringify(nums.slice(0, k)) === JSON.stringify([0, 1, 2, 3, 4]),
);

// Single element
nums = [5];
k = solve(nums);
console.log(k === 1);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([5]));

// All duplicates
nums = [7, 7, 7, 7];
k = solve(nums);
console.log(k === 1);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([7]));

// All unique
nums = [1, 2, 3, 4];
k = solve(nums);
console.log(k === 4);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([1, 2, 3, 4]));

// Negative numbers
nums = [-3, -3, -2, -1, -1];
k = solve(nums);
console.log(k === 3);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([-3, -2, -1]));

// Two elements (same)
nums = [8, 8];
k = solve(nums);
console.log(k === 1);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([8]));

// Two elements (different)
nums = [8, 9];
k = solve(nums);
console.log(k === 2);
console.log(JSON.stringify(nums.slice(0, k)) === JSON.stringify([8, 9]));

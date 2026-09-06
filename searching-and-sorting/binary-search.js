// LeetCode/Problem: Binary Search
// Link: https://leetcode.com/problems/binary-search/description/
// Date: 2026-09-06

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// CONSTRAINTS
// ============================================

// Refer to the LeetCode problem.

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
//  - Since it's a sorted array, it's possible to apply binary search for this problem.
//  - So I will create two variables, `leftIdx` with value 0 and `rightIdx` with value array length - 1.
//  - Since I am not sure how many times the loop will run, or the way it's running, it's better to use a while loop here.
//  - Then we will write the condition for the while loop, which is if the leftIdx is passed the rightIdx, which means there is no matching value for the target, so the loop will end, and return -1 in that case.
//  - Otherwise, it will get inside the loop, and then we will find the center position of the array by adding leftIdx and rightIdx and then dividing by 2.
//  - Then we will check whether the center position value is matching with the target. If yes, we will return that position.
//  - If not, we will check if it's less than the target, then we will change the leftIdx value to the center position + 1. If not, then it means the center value is greater than the target, so we will change the rightIdx value to the center position - 1.
// Time: O(log n)  Space: O(1)

function solve(nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const center = Math.floor((leftIdx + rightIdx) / 2);
    const centerVal = nums[center];

    if (centerVal === target) return center;
    else if (centerVal < target) leftIdx = center + 1;
    else rightIdx = center - 1;
  }

  return -1;
}

// ============================================
// OPTIMAL SOLUTION — same as mine ✅
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(log n) time, O(1) space). No changes needed.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Array can be odd length or even length.
//   - Array can contain only one element.
//   - The array must be sorted for this binary search approach.
//
// - Pattern this belongs to:
//   - Binary search
//
// - Mistake pattern (things to keep forgetting):
//   - After knowing the center position is not matching with the target, the
//     leftIdx or rightIdx should be reassigned with center + 1 or center - 1,
//     not just leftIdx++ or rightIdx--.
//   - Use `leftIdx <= rightIdx` so the case where both point to the same
//     element is also checked.
//   - While finding the center position index, make sure to use Math.floor to avoid getting fraction number.

// ============================================
// TESTS
// ============================================

// Example 1
let result = solve([-1, 0, 3, 5, 9, 12], 9);
console.log(result === 4);

// Example 2
result = solve([-1, 0, 3, 5, 9, 12], 2);
console.log(result === -1);

// Target at beginning
result = solve([1, 3, 5, 7, 9], 1);
console.log(result === 0);

// Target at end
result = solve([1, 3, 5, 7, 9], 9);
console.log(result === 4);

// Single element — found
result = solve([5], 5);
console.log(result === 0);

// Single element — not found
result = solve([5], 3);
console.log(result === -1);

// Target smaller than every value
result = solve([10, 20, 30, 40], 5);
console.log(result === -1);

// Target greater than every value
result = solve([10, 20, 30, 40], 50);
console.log(result === -1);

// Target in the middle
result = solve([1, 2, 3, 4, 5], 3);
console.log(result === 2);

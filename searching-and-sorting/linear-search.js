// LeetCode/Problem: Linear Search
// Link: <problem URL>
// Date: 2026-09-06

// ============================================
// PROBLEM
// ============================================
// - Given an array of nums, and an int number, find the index of the passed number in that array.
// - If that int number has duplicates, the first occurrence index should be returned.
// - If that int number does not exist, return -1.

// ============================================
// CONSTRAINTS
// ============================================
// 0 <= nums.length <= 1000
// -2^31 <= num <= 2^31 - 1

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - We need a loop to iterate through the array, and in the loop we can check if any iterating element is matching with the passed number. If matched, return that index (loop iteration i), so we can stop the loop right at that time.
// - If the loop ends, then it means that the number is not present, so we can return -1 in that case.
// Time: O(n)  Space: O(1)

function solve(nums, num) {
  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    if (currVal === num) return i;
  }

  return -1;
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — this is the optimal approach for an unsorted array.
// We need to check each element until we find the passed number.
// Since we return immediately after finding the first match, duplicates are
// automatically handled.
// Time: O(n)  Space: O(1)

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//
// - Pattern this belongs to:
//   - Single pass
//   - Linear Search
//
// - Mistake pattern (if any) — things you keep forgetting:
//   - Return immediately when the first matching value is found.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve([10, 20, 30, 40], 30);
console.log(result === 2);

// Number at the beginning
result = solve([10, 20, 30, 40], 10);
console.log(result === 0);

// Number at the end
result = solve([10, 20, 30, 40], 40);
console.log(result === 3);

// Number does not exist
result = solve([10, 20, 30, 40], 50);
console.log(result === -1);

// Duplicate values — should return first occurrence
result = solve([10, 20, 30, 20, 40], 20);
console.log(result === 1);

// Empty array
result = solve([], 10);
console.log(result === -1);

// Single element — found
result = solve([10], 10);
console.log(result === 0);

// Single element — not found
result = solve([10], 20);
console.log(result === -1);

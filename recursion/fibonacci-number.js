// LeetCode/Problem: Fibonacci Number
// Link: https://leetcode.com/problems/fibonacci-number/description/
// Date: 2026-09-05

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// CONSTRAINTS
// ============================================

// 0 <= n <= 30

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
//  - Using recursion is best for Fibonacci, since we can break it down into smaller pieces easily using recursion.
//  - In the problem description it's saying that it will pass a number, and we've to return the Fibonacci value in that position.
//  - So to get that, we need to add n - 1 and n - 2 of the position. For that, we've to find the Fibonacci value of those two positions.
//  - So first of all let's write the base case. We have to stop the fn from continuing once n reaches 1, but since the constraint is saying 0 is also expected as a parameter value, we can return if the value is less than or equal to 1, then return the passed value.
//  - Now we can write the rest in the function, which will return the n - 1 and n - 2 values by adding both and passing them as params to the same fn or recursive call. So we will get the result.
// Time: O(2^n)  Space: O(n)

function solve(n) {
  if (n <= 1) return n;

  return solve(n - 1) + solve(n - 2);
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// My recursive approach is not the optimal solution (but this problem is for getting knowledge in recursion, in that way, this is fine).
// The recursive approach has O(2^n) time because the same Fibonacci values
// are calculated multiple times.
// An iterative approach can solve this in O(n) time and O(1) space.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - `0` as parameter should return 0.
//   - `1` as parameter should return 1.
//
// - Pattern this belongs to:
//   - Recursion
//   - Multiple recursive calls
//
// - Mistake pattern (things to keep forgetting):
//   - Fibonacci has two recursive calls: `n - 1` and `n - 2`.
//   - The base case should handle both `0` and `1`.
//   - The simple recursive approach recalculates the same values multiple times.
//   - Because of the repeated calculations, the time complexity is O(2^n).
//   - The recursion call stack goes at most n levels deep, so the space complexity is O(n).

// ============================================
// TESTS
// ============================================

// Example 1
let result = solve(2);
console.log(result === 1);

// Example 2
result = solve(3);
console.log(result === 2);

// Example 3
result = solve(4);
console.log(result === 3);

// Edge case: 0
result = solve(0);
console.log(result === 0);

// Edge case: 1
result = solve(1);
console.log(result === 1);

// Larger value
result = solve(10);
console.log(result === 55);

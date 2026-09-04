// LeetCode/Problem: Factorial of n
// Link: <problem URL>
// Date: 2026-09-03

// ============================================
// PROBLEM
// ============================================
// - Find the factorial of n using recursion

// ============================================
// CONSTRAINTS
// ============================================
// 1 <= num <= 1000

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - I am going to use a recursive approach, so initially I will write what should be our base case. Since we don't want to continue the function once the num value is 1, I will return 1 in that case.
// - Then I will return the curr value by multiplying it with the curr value - 1 passed as a parameter to the same function.
// Time: O(n)  Space: O(n)

function solve(num) {
  if (num === 1) return 1;

  return num * solve(num - 1);
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — checked the recursive approach.
// The recursive approach is O(n) time and O(n) space because of the recursion call stack.
// An iterative solution would use O(n) time and O(1) space, but that is not the purpose of this exercise.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//
// - Pattern this belongs to:
//   - Recursion
//   - Base case + recursive case
//
// - Mistake pattern (if any) — things you keep forgetting:
//   - Recursion uses the call stack, so recursive solutions can have O(n) space.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve(5);
console.log(result === 120);

// Larger number
result = solve(6);
console.log(result === 720);

// Edge case: 1
result = solve(1);
console.log(result === 1);

// Edge case: 2
result = solve(2);
console.log(result === 2);

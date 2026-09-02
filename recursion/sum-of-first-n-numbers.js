// LeetCode/Problem: Sum of first N numbers
// Link: <problem URL>
// Date: 2026-09-02

// ============================================
// PROBLEM
// ============================================
// - This problem is for finding the sum of the first n numbers of the passed number, just for studying recursion.
// - We already know there is a solution with O(1) time complexity, so this problem is just for recursion.

// ============================================
// CONSTRAINTS
// ============================================
// 0 <= num <= 10000

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - I am going to use a recursive approach, so initially I will write what should be our base case. Since we don't want to go back once the value reaches less than one, I will give it as the base case.
// - Then I will return the current `num` by adding it with recursively calling the same function by subtracting 1.
// Time: O(n)  Space: O(n)

function solve(num) {
  if (num < 1) return num;

  return num + solve(num - 1);
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — checked editorial/discussion for the recursive approach.
// The recursive approach is O(n) time and O(n) space because of the recursion call stack.
// The mathematical solution would be O(1) time and O(1) space, but that is not the purpose of this exercise.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - `num = 0` should return 0.
//   - `num = 1` should return 1.
//
// - Pattern this belongs to:
//   - Real: Mathematic equation, but for recursion exercise, Recursion
//
// - Mistake pattern (if any) — things you keep forgetting:
//   - Always define a base case, otherwise recursion will continue indefinitely.
//   - Each recursive call must move closer to the base case.
//   - Recursion uses the call stack, so recursive solutions can have O(n) space.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve(5);
console.log(result === 15);

// Larger number
result = solve(10);
console.log(result === 55);

// Edge case: 1
result = solve(1);
console.log(result === 1);

// Edge case: 0
result = solve(0);
console.log(result === 0);

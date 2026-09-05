// LeetCode/Problem: Factorial of n
// Link: <problem URL>
// Date: 2026-09-04

// ============================================
// PROBLEM
// ============================================
// - Find the factorial of n using recursion
/* 
The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 

Formula:
n! = n × (n - 1) × (n - 2) × ... × 1

Examples:
• 5! = 5 × 4 × 3 × 2 × 1 = 120
• 3! = 3 × 2 × 1 = 6

What if n = 0?
By mathematical definition, 0! = 1. 

Why does 0! = 1?
1. Combinatorics: The factorial of n represents the number of ways to arrange n objects. There is exactly 1 way to arrange 0 objects (an empty set).
2. Pattern/Logic: We can write n! as n! = (n+1)! / (n+1). If we substitute n = 0, we get 0! = 1! / 1 = 1.
*/

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

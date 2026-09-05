// LeetCode/Problem: Power of Two
// Link: <problem URL>
// Date: 2026-09-04

// ============================================
// PROBLEM
// ============================================
// - Find the passed value power of two or not
/* 

Given an integer 'n', return true if it is a power of two. Otherwise, 
return false.

An integer n is a power of two if there exists an integer x such that:
n == 2^x


----------------------------------------------------------------------
2. MATHEMATICAL UNDERSTANDING & EDGE CASES
----------------------------------------------------------------------
To build a correct solution, you must account for all domains of n:

• Positive Values (n > 1): 
  Standard powers of two. Numbers like 2, 4, 8, 16, 32, 64 can be 
  divided by 2 repeatedly until they reach 1.

• The Case of 1 (n == 1):
  1 IS a power of two because 2^0 = 1. Your function must return true 
  for n = 1.

• The Case of 0 (n == 0):
  0 IS NOT a power of two. There is no integer x where 2^x = 0. Your 
  function must return false.

• Negative Values (n < 0):
  Negative numbers ARE NEVER powers of two. 
  - Why? While negative exponents exist (e.g., 2^-1 = 0.5), they 
    produce fractional values approaching zero, never negative integers 
    like -2, -4, or -8. 
  - Therefore, any input where n <= 0 must immediately return false.
  
*/

// ============================================
// CONSTRAINTS
// ============================================
// - -2^31 <= n <= 2^31 - 1

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - I am going to use a recursive approach,
// - so initially I will write what should be our base case. This fn return value is expecting a boolean, so it should return the bool value from the base case.
// - We know any value that reaches 1 is a power of two. And any value which is less than 1, and if the value becomes an odd number, we know it's not a power of two. So these will be my base cases.
// - Then I will return the same fn by dividing by 2.
// Time: O(log n)  Space: O(log n)

function solve(num) {
  if (num === 1) return true;
  if (num <= 0 || num % 2) return false;

  return solve(num / 2);
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — checked editorial/discussion, no changes needed.
//
// Time: O(log n)  Space: O(log n)
//
// There is also a bit manipulation solution:
// `num > 0 && (num & (num - 1)) === 0`
// which runs in O(1) time and O(1) space.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - `num = 1` should return true because 1 = 2^0.
//   - `num = 0` & negative numbers should return false.
//   - Any odd number greater than 1 should return false.
//
// - Pattern this belongs to:
//   - Recursion
//   - Divide by 2
//   - Mathematical property
//
// - Mistake pattern (if any) — things you keep forgetting:
//   - Check `num === 1` before checking odd numbers.
//   - Dividing by 2 each time gives O(log n), not O(n).
//   - Recursion uses the call stack, so space complexity is O(log n).

// ============================================
// TESTS
// ============================================

// Power of two
let result = solve(1);
console.log(result === true);

result = solve(2);
console.log(result === true);

result = solve(4);
console.log(result === true);

result = solve(8);
console.log(result === true);

result = solve(16);
console.log(result === true);

result = solve(1024);
console.log(result === true);

// Not a power of two
result = solve(3);
console.log(result === false);

result = solve(6);
console.log(result === false);

result = solve(12);
console.log(result === false);

// Edge cases
result = solve(0);
console.log(result === false);

result = solve(-1);
console.log(result === false);

result = solve(-8);
console.log(result === false);

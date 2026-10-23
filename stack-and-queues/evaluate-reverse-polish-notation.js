// LeetCode/Problem: 150. Evaluate Reverse Polish Notation
// Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Date: 2026-10-23

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Use a stack to store operands and intermediate results.
// - Traverse the tokens from left to right.
// - If the current token is a number:
//   - Convert it to a number and push it onto the stack.
// - If the current token is an operator:
//   - Pop the first operand (a) from the stack.
//   - Pop the second operand (b) from the stack.
//   - Apply the operator as b operator a.
//   - Push the result back onto the stack.
// - After processing all tokens, the stack contains the final result.
// - Return the top element of the stack.
//
// Important:
// - The first popped value is the right operand.
// - The second popped value is the left operand.
// - Use Math.trunc() for division because the result must truncate toward zero.

// ============================================
// SOLUTION
// ============================================

var evalRPN = function (tokens) {
  const stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    const currVal = tokens[i];
    const operator = operators[currVal];

    if (operator) {
      const a = stack.pop();
      const b = stack.pop();

      const result = operator(b, a);

      stack.push(result);
    } else {
      stack.push(Number(currVal));
    }
  }

  return stack.pop();
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal solution.
//
// Time Complexity: O(n), where n is the number of tokens.
// Space Complexity: O(n) in the worst case for the stack.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - A single number, such as ["42"], returns 42.
//   - Negative numbers must be handled correctly.
//   - Division truncates toward zero, not toward negative infinity.
//   - Subtraction and division require the correct operand order.
//   - Intermediate results are pushed back onto the stack for later operations.

// - Pattern this belongs to:
//   - Stack
//   - Expression evaluation
//   - Reverse Polish Notation (postfix notation)

// - Mistake pattern (things to keep forgetting):
//   - Do not calculate a - b or a / b when a is the first value popped.
//     The correct order is b - a or b / a.
//   - Do not use Math.floor() for division because negative results
//     would be rounded in the wrong direction.
//   - Convert numeric strings to numbers before pushing them onto the stack.

// ============================================
// TESTS
// ============================================

let result = evalRPN(["2", "1", "+", "3", "*"]);
console.log(result === 9);

result = evalRPN(["4", "13", "5", "/", "+"]);
console.log(result === 6);

result = evalRPN([
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
]);
console.log(result === 22);

result = evalRPN(["42"]);
console.log(result === 42);

result = evalRPN(["7", "-3", "/"]);
console.log(result === -2);

result = evalRPN(["4", "7", "-"]);
console.log(result === -3);

result = evalRPN(["-7", "2", "/"]);
console.log(result === -3);

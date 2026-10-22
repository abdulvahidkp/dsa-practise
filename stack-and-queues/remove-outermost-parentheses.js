// LeetCode/Problem: 1021. Remove Outermost Parentheses
// Link: https://leetcode.com/problems/remove-outermost-parentheses/
// Date: 2026-10-21

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================

// - This problem can solve using without stack, but just with only a counter. but for stack studying purpose just solving using stack.
// - Use a stack to track the opening parentheses.
// - Traverse the string character by character.
// - When the current character is "(":
//   - Push it onto the stack.
//   - If the stack length is 1, it is an outermost opening parenthesis,
//     so do not add it to the result.
//   - Otherwise, add it to the result.
// - When the current character is ")":
//   - Pop an opening parenthesis from the stack.
//   - If the stack is not empty after popping, this is not an outermost
//     closing parenthesis, so add it to the result.
//   - If the stack is empty, it is an outermost closing parenthesis,
//     so do not add it to the result.
// - Return the resulting string.

// ============================================
// SOLUTION
// ============================================

var removeOuterParentheses = function (s) {
  let removed = "";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === "(") {
      stack.push(curr);
      // If length is 1, this is an outermost opening parenthesis.
      if (stack.length !== 1) removed += curr;
    } else {
      stack.pop();
      // If the stack is not empty, this is not an outermost closing parenthesis.
      if (stack.length) removed += curr;
    }
  }

  return removed;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — the stack-based solution is
// correct, but a depth counter can solve this without storing stack elements.
//
// Time Complexity: O(n), where n is the length of s.
// Space Complexity: O(n) for the stack and the resulting string.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - "()": removing the outermost parentheses gives "".
//   - "()()": each pair is a separate primitive, so the result is "".
//   - "(())": removing the outermost pair gives "()".
//   - Multiple primitive strings are processed independently.

// - Pattern this belongs to:
//   - The stack length represents the current nesting depth.
//   - The first opening parenthesis of a primitive is the outermost one.
//   - When the stack becomes empty after popping, the closing parenthesis
//     is the outermost one.

// - Mistake pattern (things to keep forgetting):
//   - For an opening parenthesis, check the stack length after pushing.
//   - For a closing parenthesis, check the stack length after popping.
//   - Do not remove every adjacent pair; remove only the outermost pair
//     of each primitive string.

// ============================================
// TESTS
// ============================================

let result = removeOuterParentheses("(()())(())");
console.log(result === "()()()");

result = removeOuterParentheses("(()())(())(()(()))");
console.log(result === "()()()()(())");

result = removeOuterParentheses("()()");
console.log(result === "");

result = removeOuterParentheses("(())");
console.log(result === "()");

result = removeOuterParentheses("((()))");
console.log(result === "(())");

result = removeOuterParentheses("()(())");
console.log(result === "()");

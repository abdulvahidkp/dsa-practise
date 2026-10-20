// LeetCode/Problem: 20. Valid Parentheses
// Link: https://leetcode.com/problems/valid-parentheses/
// Date: 2026-10-21

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can use a Stack to keep track of opening brackets.
//
// - Create a Set containing all opening brackets so we can check whether
//   the current character is an opening bracket.
//
// - Create an object that maps each opening bracket to its matching
//   closing bracket.
//
// - Iterate through each character in the string.
//
// - If the current character is an opening bracket, push it onto the stack.
//
// - Otherwise, the current character is a closing bracket:
//   - Pop the most recent opening bracket from the stack.
//   - If the stack is empty, there is no matching opening bracket, so
//     return false.
//   - Find the expected closing bracket for the opening bracket.
//   - If it does not match the current closing bracket, return false.
//
// - After processing the entire string, check whether the stack is empty.
//   If it is not empty, some opening brackets were never closed.
//
// - If no mismatch was found and the stack is empty, return true.

// ============================================
// SOLUTION
// ============================================

var isValid = function (s) {
  const stack = [];

  const openingBrackets = new Set(["(", "{", "["]);

  const matchingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (openingBrackets.has(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const lastOpeningBracket = stack.pop();

      if (!lastOpeningBracket) return false;

      const expectedClosingBracket = matchingBrackets[lastOpeningBracket];

      if (expectedClosingBracket !== currentBracket) return false;
    }
  }

  if (stack.length) return false;

  return true;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Where:
// - n = length of the string
//
// In the worst case, the stack stores all opening brackets.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - A valid pair: "()"
//   - Multiple valid pairs: "()[]{}"
//   - Wrong bracket type: "(]"
//   - Incorrect nesting: "([)]"
//   - Correct nesting: "([])"
//   - A closing bracket appears before any opening bracket: ")("
//   - Only opening brackets: "((("
//   - Only closing brackets: ")))"
//   - An opening bracket is never closed: "(()"

// - Pattern this belongs to:
//   - Stack
//   - Use a Stack when the most recently opened item must be handled first.
//
// - Mistake pattern (things to keep forgetting):
//   - Opening brackets must be pushed onto the stack.
//   - A closing bracket must match the most recent opening bracket.
//   - Pop the stack when processing a closing bracket.
//   - If the stack is empty when a closing bracket appears, return false.
//   - Matching the bracket type is not enough; the order must also be correct.
//   - After the loop, the stack must be empty.
//   - Do not simply check whether the string contains matching bracket types;
//     nesting order matters.

// ============================================
// TESTS
// ============================================

// Basic pair
let result = isValid("()");
console.log(result === true);

// Multiple valid pairs
result = isValid("()[]{}");
console.log(result === true);

// Mismatched bracket types
result = isValid("(]");
console.log(result === false);

// Correctly nested brackets
result = isValid("([])");
console.log(result === true);

// Incorrect nesting order
result = isValid("([)]");
console.log(result === false);

// Closing bracket without an opening bracket
result = isValid(")");
console.log(result === false);

// Opening brackets are not closed
result = isValid("(((");
console.log(result === false);

// Only closing brackets
result = isValid(")))");
console.log(result === false);

// Nested brackets
result = isValid("{[()]}");
console.log(result === true);

// Extra opening bracket
result = isValid("(()");
console.log(result === false);

// Extra closing bracket
result = isValid("())");
console.log(result === false);

// Different bracket types nested incorrectly
result = isValid("{[(])}");
console.log(result === false);

// Repeated valid pairs
result = isValid("((()))");
console.log(result === true);

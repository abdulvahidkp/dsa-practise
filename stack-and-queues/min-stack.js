// LeetCode/Problem: 155. Min Stack
// Link: https://leetcode.com/problems/min-stack/
// Date: 2026-10-21

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Store each element as an array: [value, minimumValue].
// - The first value represents the actual element.
// - The second value represents the minimum element in the stack
//   from the bottom up to that element.
// - When pushing a value:
//   - If the stack is empty, store [value, value].
//   - Otherwise, get the minimum value stored at the top.
//   - Compare the new value with the current minimum using Math.min().
//   - Push [value, newMinimum] onto the stack.
// - When popping, remove the top pair.
// - For top(), return the actual value from the top pair.
// - For getMin(), return the minimum value from the top pair.
//
// This way, the minimum is already available at the top of the stack.
// We do not need to traverse the stack to find it.

// ============================================
// SOLUTION
// ============================================

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (value) {
  if (!this.stack.length) {
    this.stack.push([value, value]);
  } else {
    const currentMinimum = this.stack[this.stack.length - 1][1];
    const newMinimum = Math.min(value, currentMinimum);
    this.stack.push([value, newMinimum]);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this approach is optimal.
//
// Time Complexity:
// - push: O(1)
// - pop: O(1)
// - top: O(1)
// - getMin: O(1)
//
// Space Complexity: O(n), where n is the number of elements in the stack.
// Each element stores its value and the minimum value at that position.

// ============================================
// PATTERN THIS BELONGS TO
// ============================================
// - Stack
// - Tracking additional information with each element
// - Maintaining a running minimum

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - A stack with one element: that element is also the minimum.
//   - Pushing a smaller value updates the minimum.
//   - Pushing a larger value keeps the previous minimum.
//   - Popping the current minimum restores the minimum stored
//     in the new top pair.
//   - Duplicate minimum values are handled correctly.

// - Pattern this belongs to:
//   - Store extra information alongside each stack element.
//   - Instead of recalculating the minimum, maintain it as values are pushed.

// - Mistake pattern (things to keep forgetting):
//   - Do not calculate the minimum by traversing the entire stack.
//   - Do not store only the current minimum in a single variable.
//     If that minimum is popped, its previous value would be lost.
//   - Store the minimum for every stack position so popping automatically
//     restores the correct minimum.
//   - The first value in each pair is the actual value;
//     the second value is the minimum up to that position.

// ============================================
// TESTS
// ============================================

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin() === -3);
minStack.pop();
console.log(minStack.top() === 0);
console.log(minStack.getMin() === -2);

minStack = new MinStack();
minStack.push(5);
console.log(minStack.top() === 5);
console.log(minStack.getMin() === 5);

minStack = new MinStack();
minStack.push(3);
minStack.push(1);
minStack.push(1);
minStack.push(2);
console.log(minStack.getMin() === 1);
minStack.pop();
console.log(minStack.getMin() === 1);
minStack.pop();
console.log(minStack.getMin() === 1);
minStack.pop();
console.log(minStack.getMin() === 3);

minStack = new MinStack();
minStack.push(4);
minStack.push(7);
minStack.push(2);
minStack.push(9);
console.log(minStack.getMin() === 2);
minStack.pop();
console.log(minStack.getMin() === 2);
minStack.pop();
console.log(minStack.getMin() === 4);

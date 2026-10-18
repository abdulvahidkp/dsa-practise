// LeetCode/Problem: 225. Implement Stack using Queues
// Link: https://leetcode.com/problems/implement-stack-using-queues/
// Date: 2026-10-18

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can use one queue to implement the stack.
// - The problem is that a queue gives us the oldest element first, while a
//   stack needs the newest element first.
// - We can solve this during `pop()` by moving all elements except the last
//   element from the front of the queue to the back.
// - For example:
//     Queue: [1, 2, 3]
//   Move `1` to the back:
//     [2, 3, 1]
//   Move `2` to the back:
//     [3, 1, 2]
//   Now `3` is at the front, which is the top of our stack.
// - We can then remove `3` using `shift()`.
// - For `top()`, we can use the same `pop()` operation to get the top element,
//   then push that element back into the queue so the stack remains unchanged.
// - `empty()` only needs to check whether the queue contains any elements.

// ============================================
// SOLUTION
// ============================================

var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const length = this.q.length - 1;

  for (let i = 0; i < length; i++) {
    this.q.push(this.q.shift());
  }

  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const topValue = this.pop();

  this.q.push(topValue);

  return topValue;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already an optimal
// solution for the one-queue approach.
//
// Time Complexity:
// - push(): O(1)
// - pop(): O(n)
// - top(): O(n)
// - empty(): O(1)
//
// Space Complexity: O(n)

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Call `top()` without removing the element.
//   - Empty stack.
//   - Push after popping elements.
//
// - Pattern this belongs to:
//   - When implementing one data structure using another, we may need to
//     rearrange the elements to reproduce the required behavior.
//
// - Mistake pattern (things to keep forgetting):
//   - Queue = FIFO, while Stack = LIFO.
//   - Before popping, move all elements except the last one to the back of
//     the queue.
//   - The last pushed element will then be at the front and can be removed.
//   - `top()` must not permanently remove the element, so put the popped
//     element back into the queue.

// ============================================
// TESTS
// ============================================

// Basic case

let stack = new MyStack();

stack.push(1);
stack.push(2);

console.log(stack.top() === 2);

console.log(stack.pop() === 2);

console.log(stack.empty() === false);

// Pop in LIFO order

stack = new MyStack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop() === 3);
console.log(stack.pop() === 2);
console.log(stack.pop() === 1);

console.log(stack.empty() === true);

// Top should not remove the element

stack = new MyStack();

stack.push(10);
stack.push(20);

console.log(stack.top() === 20);
console.log(stack.top() === 20);
console.log(stack.pop() === 20);
console.log(stack.pop() === 10);

console.log(stack.empty() === true);

// Push after pop

stack = new MyStack();

stack.push(1);
stack.push(2);

console.log(stack.pop() === 2);

stack.push(3);

console.log(stack.pop() === 3);
console.log(stack.pop() === 1);

console.log(stack.empty() === true);

// Single element

stack = new MyStack();

stack.push(5);

console.log(stack.top() === 5);
console.log(stack.pop() === 5);
console.log(stack.empty() === true);

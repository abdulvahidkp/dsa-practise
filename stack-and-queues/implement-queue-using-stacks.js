// LeetCode/Problem: 232. Implement Queue using Stacks
// Link: https://leetcode.com/problems/implement-queue-using-stacks/
// Date: 2026-10-19

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can use two stacks, `s1` and `s2`, to implement the queue.
//
// - New elements are pushed into `s1`.
//
// - We use `s2` to remove elements in FIFO order.
//
// - When `s2` is not empty, its top element is the front of the queue,
//   so we can directly pop from `s2`.
//
// - If `s2` is empty, we move all elements from `s1` to `s2`.
//   This reverses their order, making the oldest element the top element
//   of `s2`.
//
// - For `pop()`, we transfer elements only when `s2` is empty, then
//   remove and return the top element of `s2`.
//
// - For `peek()`, we can call `pop()` to get the front element, then
//   push it back into `s2` so the queue remains unchanged.
//
// - For `empty()`, we check whether both stacks are empty.
//
// - Amortized complexity:
//   - A single `pop()` or `peek()` may take O(n) time when elements
//     need to be transferred from `s1` to `s2`.
//   - However, each element is transferred from `s1` to `s2` only once.
//   - Therefore, over a sequence of operations, the average cost per
//     operation is O(1). This is called amortized O(1).

// ============================================
// SOLUTION
// ============================================

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.s2.length) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }

  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const peekVal = this.pop();

  this.s2.push(peekVal);

  return peekVal;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !Boolean(this.s1.length || this.s2.length);
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal
// approach using two stacks and achieving amortized O(1) operations.
//
// Time Complexity:
// - push(): O(1)
// - pop(): O(1) amortized, O(n) worst case
// - peek(): O(1) amortized, O(n) worst case
// - empty(): O(1)
//
// Space Complexity: O(n)
//
// Where:
// - n = number of elements stored in the queue.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Push one element and pop it.
//   - Push multiple elements and remove them in FIFO order.
//   - Push new elements while s2 still contains elements.
//   - Push new elements after s2 becomes empty.
//   - Check whether the queue is empty after removing all elements.
//
// - Pattern this belongs to:
//   - Use two stacks to reverse element order and simulate FIFO behavior.
//   - Amortized Analysis
//   - Reversing Element Order
//
// - Mistake pattern (things to keep forgetting):
//   - New elements always enter s1.
//   - Transfer elements from s1 to s2 only when s2 is empty.
//   - Do not transfer elements back from s2 to s1.
//   - The top of s2 represents the front of the queue.
//   - A single pop() or peek() can take O(n) time.
//   - Each element moves from s1 to s2 at most once.
//   - Because each element is transferred at most once, pop() and peek()
//     are O(1) amortized, even though their worst-case time is O(n).
//
// - Amortized complexity:
//   - Amortized O(1) means that the total work across a sequence of
//     operations is O(n), giving O(1) average cost per operation.
//   - It does not mean every individual operation takes O(1) time.

// ============================================
// TESTS
// ============================================

// Basic case

let queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.peek() === 1);
console.log(queue.pop() === 1);
console.log(queue.empty() === false);

// FIFO order

queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.pop() === 1);
console.log(queue.pop() === 2);
console.log(queue.pop() === 3);

console.log(queue.empty() === true);

// Peek multiple times

queue = new MyQueue();

queue.push(10);
queue.push(20);

console.log(queue.peek() === 10);
console.log(queue.peek() === 10);
console.log(queue.pop() === 10);
console.log(queue.pop() === 20);

console.log(queue.empty() === true);

// Push while s2 still contains elements

queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.pop() === 1);

queue.push(3);

console.log(queue.pop() === 2);
console.log(queue.pop() === 3);

console.log(queue.empty() === true);

// Transfer elements again after s2 becomes empty

queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.pop() === 1);
console.log(queue.pop() === 2);

queue.push(3);
queue.push(4);

console.log(queue.pop() === 3);
console.log(queue.pop() === 4);

console.log(queue.empty() === true);

// Single element

queue = new MyQueue();

queue.push(5);

console.log(queue.peek() === 5);
console.log(queue.pop() === 5);
console.log(queue.empty() === true);

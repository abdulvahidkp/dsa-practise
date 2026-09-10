// LeetCode/Problem: Design Linked List
// Link: https://leetcode.com/problems/design-linked-list/description/
// Date: 2026-09-10

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// CONSTRAINTS
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// -
//
// Time Complexity
// - get(index): O(n)
// - addAtHead(val): O(1)
// - addAtTail(val): O(n) - if we keep a pointer to tail as well, we can reduce this to O(1)
// - addAtIndex(index, val): O(n)
// - deleteAtIndex(index): O(n)

// Space Complexity
// - O(n)

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index > this.size - 1) return -1;

  let currNode = this.head;
  for (let i = 1; i <= index; i++) {
    currNode = currNode.next;
  }

  return currNode.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  ++this.size;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) {
    this.addAtHead(val);
    return;
  } else {
    const newNode = new Node(val);
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
    ++this.size;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let currNode = this.head;
  for (let i = 1; i < index; i++) {
    currNode = currNode.next;
  }

  const newNode = new Node(val);
  newNode.next = currNode.next;
  currNode.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.size - 1) return;

  if (index === 0) {
    this.head = this.head.next;

    this.size--;
    return;
  }

  let currNode = this.head;

  for (let i = 1; i < index; i++) {
    currNode = currNode.next;
  }

  currNode.next = currNode.next.next;

  this.size--;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
//

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   -
//
// - Pattern this belongs to:
//   -
//
// - Mistake pattern (if any) — things to keep forgetting:
//   -

// ============================================
// TESTS
// ============================================

// Test 1: Add at head + get
const list1 = new MyLinkedList();

list1.addAtHead(10);
list1.addAtHead(20);
list1.addAtHead(30);

console.log(list1.get(0)); // 30
console.log(list1.get(1)); // 20
console.log(list1.get(2)); // 10

// Test 2: Add at tail
const list2 = new MyLinkedList();

list2.addAtTail(10);
list2.addAtTail(20);
list2.addAtTail(30);

console.log(list2.get(0)); // 10
console.log(list2.get(1)); // 20
console.log(list2.get(2)); // 30

// Test 3: Add at index
const list3 = new MyLinkedList();

list3.addAtHead(10);
list3.addAtTail(30);
list3.addAtIndex(1, 20);

console.log(list3.get(0)); // 10
console.log(list3.get(1)); // 20
console.log(list3.get(2)); // 30

// Test 4: Add at index 0
const list4 = new MyLinkedList();

list4.addAtIndex(0, 10);
list4.addAtIndex(0, 20);

console.log(list4.get(0)); // 20
console.log(list4.get(1)); // 10

// Test 5: Add at index equal to size
const list5 = new MyLinkedList();

list5.addAtHead(10);
list5.addAtHead(20);

list5.addAtIndex(2, 30);

console.log(list5.get(0)); // 20
console.log(list5.get(1)); // 10
console.log(list5.get(2)); // 30

// Test 6: Add at invalid index
const list6 = new MyLinkedList();

list6.addAtHead(10);
list6.addAtIndex(5, 20);

console.log(list6.get(0)); // 10
console.log(list6.get(1)); // -1

// Test 7: Delete head
const list7 = new MyLinkedList();

list7.addAtHead(10);
list7.addAtHead(20);
list7.addAtHead(30);

list7.deleteAtIndex(0);

console.log(list7.get(0)); // 20
console.log(list7.get(1)); // 10

// Test 8: Delete middle node
const list8 = new MyLinkedList();

list8.addAtTail(10);
list8.addAtTail(20);
list8.addAtTail(30);

list8.deleteAtIndex(1);

console.log(list8.get(0)); // 10
console.log(list8.get(1)); // 30

// Test 9: Delete tail
const list9 = new MyLinkedList();

list9.addAtTail(10);
list9.addAtTail(20);
list9.addAtTail(30);

list9.deleteAtIndex(2);

console.log(list9.get(0)); // 10
console.log(list9.get(1)); // 20
console.log(list9.get(2)); // -1

// Test 10: Delete from single-node list
const list10 = new MyLinkedList();

list10.addAtHead(10);
list10.deleteAtIndex(0);

console.log(list10.get(0)); // -1

// Test 11: Delete invalid index
const list11 = new MyLinkedList();

list11.addAtHead(10);
list11.deleteAtIndex(5);

console.log(list11.get(0)); // 10

// Test 12: Empty list
const list12 = new MyLinkedList();

console.log(list12.get(0)); // -1

list12.deleteAtIndex(0);

console.log(list12.get(0)); // -1

// Test 13: Mixed operations
const list13 = new MyLinkedList();

list13.addAtHead(1); // [1]
list13.addAtTail(3); // [1, 3]
list13.addAtIndex(1, 2); // [1, 2, 3]
list13.deleteAtIndex(1); // [1, 3]
list13.addAtHead(0); // [0, 1, 3]
list13.addAtTail(4); // [0, 1, 3, 4]

console.log(list13.get(0)); // 0
console.log(list13.get(1)); // 1
console.log(list13.get(2)); // 3
console.log(list13.get(3)); // 4
console.log(list13.get(4)); // -1

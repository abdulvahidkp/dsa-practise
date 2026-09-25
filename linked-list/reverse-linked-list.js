// LeetCode/Problem: Middle of the Linked List
// Link: https://leetcode.com/problems/reverse-linked-list/description/
// Date: 2026-09-13

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - In Linked List, we can't traverse back unless we have a doubly linked list, and in this question we have a singly linked list.
// - So I am going in a way by keeping track of the previous node with a default value of null and the current node with a default value of head.
// - I will have a while loop which only runs if there is a current node.
// - In that, we will initially store the current node's next node, because we have to change the current node's next node with the previous node's value.
// - Then we will change the current node's next node with the previous node.
// - Then we will update the previous node with what is in the current node.
// - Then we will update the current node with what is in the next node.
// - Once the current node becomes null, the loop will end, and we will return the previous node.

// Time: Best case: O(n),  Space: O(1)

// ============================================
// SOLUTION
// ============================================

var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;

  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Linked list can be empty.
//   - Linked list can contain only one node.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - In-place Reversal
//
// - Mistake pattern (things to keep forgetting):
//   - Before changing `currNode.next`, make sure to store its original value in `nextNode`, otherwise we will lose the rest of the linked list
//   -`prevNode` should initially be `null` because the original head becomes the last node after reversal, so its next should point to null.
//   - we doesn't need sentinal node for this problem, we just only have to set null for the prev variable.

// ============================================
// TESTS
// ============================================

// Test 1: Multiple nodes
// [1,2,3,4,5] -> [5,4,3,2,1]

// Test 2: Two nodes
// [1,2] -> [2,1]

// Test 3: Single node
// [1] -> [1]

// Test 4: Empty linked list
// [] -> []

// Test 5: Three nodes
// [1,2,3] -> [3,2,1]

// Test 6: Four nodes
// [1,2,3,4] -> [4,3,2,1]

// Test 7: Larger list
// [1,2,3,4,5,6,7,8,9] -> [9,8,7,6,5,4,3,2,1]

// LeetCode/Problem: Middle of the Linked List
// Link: https://leetcode.com/problems/middle-of-the-linked-list/description/
// Date: 2026-09-12

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Initially, we might think that to find the middle of the linked list,
//   we need to traverse through the entire list to find its size and then
//   iterate again until size / 2 (middle position) to return the middle node.
// - This would take O(n) time, but we would need to traverse the list twice.
// - But there is another approach called the Slow and Fast Pointer approach.
// - We will have two pointers:
//   - The slow pointer moves one node at a time.
//   - The fast pointer moves two nodes at a time.
// - So, once the fast pointer reaches the end of the linked list, the slow pointer will be at the middle node.
// - We can start both pointers from the starting position (head).
// - Then, using a while loop:
//   - Move the slow pointer one node forward.
//   - Move the fast pointer two nodes forward.
// - We continue the iteration while the fast pointer has a next node.
// - Once the loop ends, we can return the node that the slow pointer is pointing to.

// Time: Best case: O(n),  Space: O(1)

// ============================================
// SOLUTION
// ============================================

var middleNode = function (head) {
  let slowPointer = (fastPointer = head);

  while (fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal

// ============================================
// PATTERN THIS BELONGS TO
// ============================================
// - Slow and Fast Pointer
// - Two Pointers
// - Linked List

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Linked list can have an odd number of nodes.
//   - Linked list can have an even number of nodes.
//   - If there are two middle nodes, we need to return the second middle node.
//   - Linked list can contain only one node.
//
// - Pattern this belongs to:
//   - Slow and Fast Pointer
//   - Two Pointers
//
// - Mistake pattern (things to keep forgetting):
//   - Slow pointer should move one node at a time, while fast pointer should
//     move two nodes at a time.
//   - Both pointers can start from the head node.
//   - Use `fastPointer?.next` as the while-loop condition so the fast pointer
//     can safely move two nodes at a time.
//   - For an even-length linked list, make sure the slow pointer reaches the
//     second middle node, as required by the problem.
//   - Remember that linked lists cannot be accessed directly using an index,
//     so we need to move through the nodes using `.next`.

// ============================================
// TESTS
// ============================================

// Test 1: Odd number of nodes
// [1,2,3,4,5] -> [3,4,5]

// Test 2: Even number of nodes
// [1,2,3,4,5,6] -> [4,5,6]

// Test 3: Single node
// [1] -> [1]

// Test 4: Two nodes
// [1,2] -> [2]

// Test 5: Three nodes
// [1,2,3] -> [2,3]

// Test 6: Four nodes
// [1,2,3,4] -> [3,4]

// Test 7: Larger list
// [1,2,3,4,5,6,7,8,9] -> [5,6,7,8,9]

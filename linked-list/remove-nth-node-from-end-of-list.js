// LeetCode/Problem: Remove Nth Node From End of List
// Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Date: 2026-09-17

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - The first idea that came to my mind was to traverse through the linked
//   list and find its size. Then, traverse through the list again using that
//   size to find and remove the nth node. However, this requires two passes,
//   while the problem specifically asks for a one-pass solution.
//
// - Whenever we need to delete a node from a linked list, always think about
//   using a sentinel node. It is very useful when we need to remove the head
//   of the list.
//
// - First, create a sentinel node whose `next` points to the head of the list.
//
// - Then, create two pointers, `slowPointer` and `fastPointer`, both
//   initialized to the sentinel node.
//
// - Move the `fastPointer` `n` times, where `n` is passed as an argument.
//   This creates a gap of `n` nodes between the two pointers.
//
// - Then, move both pointers together (`slowPointer` from the sentinel node
//   and `fastPointer` from its moved position) until `fastPointer` reaches
//   the last node.
//
// - At that point, `slowPointer` will be pointing to the node before the node
//   that needs to be removed.
//
// - We can then remove the target node by updating:
//   `slowPointer.next = slowPointer.next.next`
//
// - Finally, return `sentinelNode.next`, because the sentinel node is only a
//   helper node and is not part of the actual linked list.

// ============================================
// SOLUTION
// ============================================

var removeNthFromEnd = function (head, n) {
  const sentinelNode = new ListNode(null, head);

  let slowPointer = sentinelNode;
  let fastPointer = sentinelNode;

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next;
  }

  while (fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  slowPointer.next = slowPointer.next.next;

  return sentinelNode.next;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n)
// Space Complexity: O(1)

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The linked list can contain only one node.
//   - The head itself can be the node that needs to be removed.
//   - The last node can be the node that needs to be removed.
//   - `n` can be equal to the length of the linked list.
//
// - Pattern this belongs to:
//   - Fast and Slow Pointer
//   - Two Pointers
//   - Linked List
//   - Sentinel Node
//
// - Mistake pattern (things to keep forgetting):
//   - Move `fastPointer` exactly `n` nodes ahead before moving both pointers.
//   - Use a sentinel node so that removing the head node can be handled in
//     the same way as removing any other node.
//   - `slowPointer` should stop at the node BEFORE the node that needs to
//     be removed, because we need to update `slowPointer.next`.
//   - Remove the target node using:
//     `slowPointer.next = slowPointer.next.next`.
//   - Return `sentinelNode.next`, because the sentinel node is only a helper
//     node and is not part of the actual linked list.

// ============================================
// TESTS
// ============================================

// Test 1: Remove the second node from the end
// Input:  head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Test 2: Remove the only node
// Input:  head = [1], n = 1
// Output: []

// Test 3: Remove the last node
// Input:  head = [1,2], n = 1
// Output: [1]

// Test 4: Remove the head node
// Input:  head = [1,2], n = 2
// Output: [2]

// Test 5: Remove the first node from a longer list
// Input:  head = [1,2,3,4,5], n = 5
// Output: [2,3,4,5]

// Test 6: Remove the middle node
// Input:  head = [1,2,3,4,5], n = 3
// Output: [1,2,4,5]

// Test 7: Two-node list, remove the first node
// Input:  head = [1,2], n = 2
// Output: [2]

// Test 8: Single-node list
// Input:  head = [1], n = 1
// Output: []

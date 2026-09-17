// LeetCode/Problem: Remove Linked List Elements
// Link: https://leetcode.com/problems/remove-linked-list-elements/description/
// Date: 2026-09-17

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - First of all, we have to create a temporary node with its `next` pointing
//   to the head of the passed list. We can call it a sentinel node. It is
//   created because the passed linked list's head itself can have the matching
//   value that needs to be removed.
//
// - Then we can create another variable named `currNode` and set it to the
//   sentinel node. The `currNode` will change while we go through the list,
//   but we still need the sentinel node to return the new head at the end.
//
// - In the while condition, we can check only if `currNode.next` exists.
//   This is because `currNode` is always kept at the node before the node
//   that we are checking.
//
// - Then inside the loop:
//   - We can check if `currNode.next.val` matches the passed `val`.
//   - If it matches, we should change `currNode.next` to `currNode.next.next`.
//     This removes the current next node from the linked list.
//   - We should not move `currNode` forward after removing a node, because
//     there may be node with value to be removed next to each other. If we move forward,
//     we might skip a node that also needs to be removed.
//
//   - If the current next node's value does not match `val`, then we can move
//     `currNode` forward to the next node.
//
// - Once the loop ends, we can return `sentinalNode.next`, because it points
//   to the new head of the linked list.
//
// Time: O(n), Space: O(1)

// ============================================
// SOLUTION
// ============================================

var removeElements = function (head, val) {
  const sentinalNode = new ListNode(null, head);
  let currNode = sentinalNode;

  while (currNode.next) {
    if (currNode.next.val === val) currNode.next = currNode.next.next;
    else currNode = currNode.next;
  }

  return sentinalNode.next;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The linked list can be empty.
//   - The head of the list can be matching value.
//   - The end node of the list can be matching value.
//   - Multiple consecutive nodes can have the value that needs to be removed.
//   - All nodes can have the value that needs to be removed.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - Sentinel Node
//
// - Mistake pattern (things to keep forgetting):
//   - `currNode` should stay at the current node when `currNode.next` is removed.
//     This is important when there are multiple consecutive nodes with the
//     same value.
//   - Return `sentinelNode.next`, not `sentinelNode`, because the sentinel node
//     is only a helper node and is not part of the actual linked list.

// ============================================
// TESTS
// ============================================

// Test 1: Remove values from the middle and end
// Input:  [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Test 2: Empty linked list
// Input:  [], val = 1
// Output: []

// Test 3: All nodes have the target value
// Input:  [7,7,7,7], val = 7
// Output: []

// Test 4: No nodes have the target value
// Input:  [1,2,3,4], val = 5
// Output: [1,2,3,4]

// Test 5: Target is the head
// Input:  [6,1,2,3], val = 6
// Output: [1,2,3]

// Test 6: Multiple target nodes at the beginning
// Input:  [6,6,6,1,2], val = 6
// Output: [1,2]

// Test 7: Multiple consecutive target nodes in the middle
// Input:  [1,6,6,6,2], val = 6
// Output: [1,2]

// Test 8: Single node matching the target
// Input:  [1], val = 1
// Output: []

// Test 9: Single node not matching the target
// Input:  [1], val = 2
// Output: [1]

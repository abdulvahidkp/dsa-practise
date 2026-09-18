// LeetCode/Problem: Remove Duplicates from Sorted List
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// Date: 2026-09-18

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Since we have to remove only duplicates from the sorted linked list, we
//   don't need a sentinel node here. The first node will always be a valid
//   node that we need to keep. If it has duplicates, we can simply remove
//   those duplicate nodes.
//
// - We will assign the head to a variable named `currNode`.
//
// - Then, we will use a while loop with the condition `currNode?.next`.
//   Since `currNode` is always pointing to a unique node, once we reach the
//   end of the list, there is no next node to check.
//
// - Inside the loop, if the current value matches the next node's value, we
//   will update the current node's `next` pointer to skip the duplicate node:
//   `currNode.next = currNode.next.next`.
//
// - We don't move the `currNode` pointer when we remove a duplicate because
//   there may be multiple consecutive duplicate nodes.
//
// - If the current value does not match the next node's value, then we move
//   `currNode` to the next node.
//
// - Once the loop ends, we return the original `head`.

// ============================================
// SOLUTION
// ============================================

var deleteDuplicates = function (head) {
  let currNode = head;

  while (currNode?.next) {
    if (currNode.val === currNode.next.val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }

  return head;
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
//   - The linked list can be empty.
//   - The linked list can contain only one node.
//   - There can be multiple consecutive duplicate nodes.
//   - Since the linked list is sorted, duplicate values will always be next
//     to each other.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - In-place Modification
//   - Two Pointers / Current Pointer

// - Mistake pattern (things to keep forgetting):
//   - We don't need a sentinel node because the first node is always a valid
//     node that should remain in the list.
//   - When removing a duplicate, don't move `currNode` forward immediately.
//     There may be multiple consecutive duplicate nodes.
//   - The loop condition should be curr.next

// ============================================
// TESTS
// ============================================

// Test 1: Duplicate values at the beginning
// Input:  head = [1,1,2]
// Output: [1,2]

// Test 2: Multiple duplicate groups
// Input:  head = [1,1,2,3,3]
// Output: [1,2,3]

// Test 3: No duplicates
// Input:  head = [1,2,3,4]
// Output: [1,2,3,4]

// Test 4: All nodes are duplicates
// Input:  head = [1,1,1,1]
// Output: [1]

// Test 5: Empty linked list
// Input:  head = []
// Output: []

// Test 6: Single node
// Input:  head = [1]
// Output: [1]

// Test 7: Duplicates at the end
// Input:  head = [1,2,3,3,3]
// Output: [1,2,3]

// Test 8: Two nodes with the same value
// Input:  head = [5,5]
// Output: [5]

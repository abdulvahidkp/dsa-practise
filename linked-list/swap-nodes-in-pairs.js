// LeetCode/Problem: Swap Nodes in Pairs
// Link: https://leetcode.com/problems/swap-nodes-in-pairs/description/
// Date: 2026-09-20

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - In this problem, we need to keep track of the first node of each pair after swapping,
//   because we need to update its `next` pointer after swapping the next pair.
// - To keep the code consistent, we can create a sentinel node and assign it
//   to a variable named `prevPair`. We need to keep the sentinel node because
//   we will use it to return the new head at the end.
// - We also need a variable to keep track of the current node. We initialize
//   `currNode` with `head`.
// - Then, we can create a while loop that runs only if `currNode.next` exists.
//   This makes sure that we always have two nodes available to swap.
// - Inside the loop, first we need to store `currNode.next.next` in a temporary
//   variable because we are going to change `currNode.next` while swapping the
//   current pair.
// - Then, we change `currNode.next.next` to `currNode`. This reverses the link
//   between the two nodes in the current pair.
// - Then, we update `prevPair.next` to `currNode.next`, which makes the previous
//   pair point to the new first node of the current pair.
// - Then, we update `currNode.next` to the temporary node that we stored at the
//   beginning. This connects the swapped pair to the next pair.
// - Then, we update `prevPair` to `currNode`, because after the swap,
//   `currNode` becomes the last node of the current pair.
// - Finally, we update `currNode` to the temporary node that we stored earlier,
//   so we can start processing the next pair.
// - Once the loop ends, we return `sentinelNode.next`, which is the new head
//   of the linked list.

// ============================================
// SOLUTION
// ============================================

var swapPairs = function (head) {
  let currNode = head;

  const sentinelNode = new ListNode(null, head);
  let prevPair = sentinelNode;

  while (currNode?.next) {
    const tempNextPairStart = currNode.next.next;

    currNode.next.next = currNode;
    prevPair.next = currNode.next;

    currNode.next = tempNextPairStart;

    prevPair = currNode;
    currNode = tempNextPairStart;
  }

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
//   - The linked list can be empty.
//   - The linked list can contain only one node.
//   - The linked list can contain an even number of nodes.
//   - The linked list can contain an odd number of nodes.
//   - The last node should remain unchanged if there is no pair for it.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - In-place Reordering
//   - Sentinel Node
//
// - Mistake pattern (things to keep forgetting):
//   - Store `currNode.next.next` before changing any pointers, because we need
//     this node to connect the current pair to the next pair.
//   - The condition should be `currNode?.next` because we need two nodes to
//     perform a swap.
//   - After swapping, `currNode` becomes the second node of the pair, so
//     `prevPair` should be updated to `currNode`.
//   - After swapping the current pair, move `currNode` to the node stored in
//     `tempNextPairStart` to start processing the next pair.
//   - Use a sentinel node so that the first pair can be swapped without
//     needing separate logic for the head.

// ============================================
// TESTS
// ============================================

// Test 1: Even number of nodes
// Input:  head = [1,2,3,4]
// Output: [2,1,4,3]

// Test 2: Empty linked list
// Input:  head = []
// Output: []

// Test 3: Single node
// Input:  head = [1]
// Output: [1]

// Test 4: Odd number of nodes
// Input:  head = [1,2,3]
// Output: [2,1,3]

// Test 5: Two nodes
// Input:  head = [1,2]
// Output: [2,1]

// Test 6: Six nodes
// Input:  head = [1,2,3,4,5,6]
// Output: [2,1,4,3,6,5]

// Test 7: Four nodes with duplicate values
// Input:  head = [1,1,2,2]
// Output: [1,1,2,2]

// Test 8: Three nodes with duplicate values
// Input:  head = [1,1,1]
// Output: [1,1,1]

// LeetCode/Problem: Odd Even Linked List
// Link: https://leetcode.com/problems/odd-even-linked-list/description/
// Date: 2026-09-18

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - The main idea in this problem is to change the `next` pointers so that
//   the odd-indexed nodes are connected together and the even-indexed nodes
//   are connected together.
// - Initially, we can set two variables: `oddNode` starting at `head` and
//   `evenNode` starting at `head.next`.
// - We also need to store the starting node of the even list. We cannot find
//   the even starting node later using `head.next`, because the `next` pointer
//   of `head` will be changed to point to the next odd-indexed node.
// - Then, we can start a loop with the condition `evenNode?.next`. I got this
//   condition by dry-running the solution with both odd and even numbers of
//   nodes.
// - Basically, if there is a node after `evenNode`, we need to run the loop.
//   This allows us to move both the odd and even pointers two nodes forward
//   and correctly update their `next` pointers. and the even node will recieve a null as well.
// - Inside the loop, we need to update the odd pointer first and the even
//   pointer second. If we update the even pointer first, it changes the link
//   that the odd pointer uses. Then `oddNode.next.next` would point one node
//   further than we expect.
// - Once the loop ends, we connect the end of the odd list to the starting
//   node of the even list using `oddNode.next = evenStart`.
// - Finally, return the original `head`.
// - The problem says the list size can be 0, so we can return the head itself if there is not value in it.

// ============================================
// SOLUTION
// ============================================

var oddEvenList = function (head) {
  if (!head) return head;

  const evenStart = head.next;

  let oddNode = head;
  let evenNode = head.next;

  while (evenNode?.next) {
    oddNode = oddNode.next = oddNode.next.next;
    evenNode = evenNode.next = evenNode.next.next;
  }

  oddNode.next = evenStart;

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
//   - The linked list can contain two nodes.
//   - The linked list can contain an odd number of nodes.
//   - The linked list can contain an even number of nodes.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - In-place Reordering
//   - Two Pointers
//
// - Mistake pattern (things to keep forgetting):
//   - Store `head.next` in `evenStart` before changing any pointers, because
//     we need this node later to connect the odd list with the even list.
//   - The loop condition should be `evenNode?.next`, because we need to make
//     sure the next odd node exists before updating the pointers. also the
//     even pointer is left side of the odd pointer, so if there is even next
//     exist, which means both can move two pointers. the odd to the next odd
//     indexed node and the even to the even indexed node or null
//   - After separating the odd and even nodes, connect the end of the odd
//     list to `evenStart`.
//   - Always update `oddNode` first and `evenNode` second. If we update the
//     even pointer first, the odd `next` pointer will not point to the correct node.

// ============================================
// TESTS
// ============================================

// Test 1: Odd number of nodes
// Input:  head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Test 2: Even number of nodes
// Input:  head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Test 3: Empty linked list
// Input:  head = []
// Output: []

// Test 4: Single node
// Input:  head = [1]
// Output: [1]

// Test 5: Two nodes
// Input:  head = [1,2]
// Output: [1,2]

// Test 6: Three nodes
// Input:  head = [1,2,3]
// Output: [1,3,2]

// Test 7: Four nodes
// Input:  head = [1,2,3,4]
// Output: [1,3,2,4]

// LeetCode/Problem: Rotate List
// Link: https://leetcode.com/problems/rotate-list/description/
// Date: 2026-09-20

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - The `k` value can be larger than the size of the list. But even if `k`
//   is larger, we don't need to rotate the list that many times. For example,
//   if the list size is 5 and `k` is 2, we need to shift 2 times. If `k` is
//   7, we still only need to shift 2 times, and if `k` is 12, we also only
//   need to shift 2 times. So, we can use `k % size` to find the actual
//   number of shifts needed.
// - To calculate this, we first need to find the size of the list. So, we
//   assign the head to a variable named `curr` and create another variable
//   named `size` with a default value of 1. The problem allows the list to
//   contain 0 nodes, so we return immediately if there is no head.
// - Then, we traverse through the list and increase `size` until `curr.next`
//   is no longer present. At this point, `curr` will be pointing to the last
//   node.
// - Then, we find the actual number of shifts using `k % size`.
// - Next, we connect the last node to the head of the list. This makes the
//   linked list circular.
// - Now we need to find where to break the circular list by setting a
//   `next` pointer to `null`. From dry-running the solution, we can see that
//   we need to move `size - shift` times from the last node to reach the node
//   that should become the last node.
// - So, we run a loop from `0` to `size - shift`. During each iteration, we
//   move `curr` to the next node.
// - Once the loop ends, `curr.next` will be the new head. So, we store
//   `curr.next` in `head`, then set `curr.next` to `null` to break the
//   circular list.
// - Finally, we return the new `head`.

// ============================================
// SOLUTION
// ============================================

var rotateRight = function (head, k) {
  if (!head) return head;

  // finding size
  let curr = head;
  let size = 1;

  while (curr.next) {
    curr = curr.next;
    ++size;
  }

  // finding actual value to shift
  const shift = k % size;

  curr.next = head;

  let loop = size - shift;

  for (let i = 0; i < loop; i++) {
    curr = curr.next;
  }

  head = curr.next;
  curr.next = null;

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
//   - `k` can be 0, which means no rotation is needed.
//   - `k` can be greater than the size of the linked list.
//   - `k` can be a multiple of the list size, which means the list remains
//     unchanged.
//
// - Pattern this belongs to:
//   - Linked List
//   - Pointer Manipulation
//   - Circular Linked List
//   - In-place Reordering
//
// - Mistake pattern (things to keep forgetting):
//   - Use `k % size` to find the actual number of rotations needed when `k`
//     is greater than the list size.
//   - Remember to connect the last node to the head before trying to find the
//     new head.
//   - The number of nodes to move is `size - shift`, not `shift`.
//   - After finding the new head, set `curr.next = null` to break the circular
//     linked list.
//   - If `shift` is 0, the list should remain unchanged.

// ============================================
// TESTS
// ============================================

// Test 1: Rotate by 2
// Input:  head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Test 2: k is greater than the list length
// Input:  head = [0,1,2], k = 4
// Output: [2,0,1]

// Test 3: k is 0
// Input:  head = [1,2,3], k = 0
// Output: [1,2,3]

// Test 4: k is equal to the list length
// Input:  head = [1,2,3,4], k = 4
// Output: [1,2,3,4]

// Test 5: k is a multiple of the list length
// Input:  head = [1,2,3], k = 6
// Output: [1,2,3]

// Test 6: Rotate a single node
// Input:  head = [1], k = 100
// Output: [1]

// Test 7: Empty linked list
// Input:  head = [], k = 5
// Output: []

// Test 8: Rotate by one
// Input:  head = [1,2,3,4], k = 1
// Output: [4,1,2,3]

// Test 9: Rotate by length - 1
// Input:  head = [1,2,3,4,5], k = 4
// Output: [2,3,4,5,1]

// LeetCode/Problem: Add Two Numbers
// Link: https://leetcode.com/problems/add-two-numbers/description/
// Date: 2026-09-19

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Since the linked lists are already in reverse order, and the result is
//   also expected in reverse order, we only need to traverse through both
//   lists and add the values. This makes the problem straightforward.
//
// - Initially, we need to put both lists into variables so that we can
//   traverse through them.
//
// - Then, we create a sentinel node because we are creating new nodes for the
//   result. Using a sentinel node keeps the code consistent, and at the end
//   we can return `sentinelNode.next` as the head of the result list.
//
// - We also need to keep a reference to the sentinel node and use another
//   variable, `newNodes`, to traverse through the new result list. Once all
//   the sums are added, we can return `sentinelNode.next` to get the head of
//   the result list.
//
// - Then, we create a `carry` variable with `0` as the default value in the
//   outer scope. Its value is not tied to only one loop iteration. The carry
//   calculated in the current iteration needs to be used in the next
//   iteration.
//
// - In the while loop, we check if either `l1Curr` or `l2Curr` exists, or if
//   there is still a `carry`. We need to continue the loop if any of these
//   three conditions is true.
//
// - Inside the loop, we get the current values from `l1` and `l2`. Sometimes
//   one list can be shorter than the other, so there may not be a node in one
//   of the lists. In that case, we use `0` as its value.
//
// - Then, we calculate the sum by adding the current values from both lists
//   and the previous `carry`.
//
// - Once we find the sum, we need to find the value that should be stored in
//   the new node. This is the last digit of the sum, so we use `% 10` to get
//   it.
//
// - To find the carry for the next iteration, we divide the sum by `10` and
//   use `Math.trunc()` because we only need the integer part.
//
// - Then, we create a new node with the value we calculated. We attach this
//   node to the `next` pointer of the current result node and then move
//   `newNodes` to the newly created node.
//
// - Once the loop ends, we return `sentinelNode.next`, which is the head of
//   the newly created result list.

// ============================================
// SOLUTION
// ============================================

var addTwoNumbers = function (l1, l2) {
  let l1Curr = l1;
  let l2Curr = l2;

  let carry = 0;

  let sentinelNode = new ListNode(null);
  let newNodes = sentinelNode;

  while (l1Curr || l2Curr || carry) {
    let currL1Val = l1Curr?.val ?? 0;
    let currL2Val = l2Curr?.val ?? 0;

    l1Curr = l1Curr?.next;
    l2Curr = l2Curr?.next;

    let sum = currL1Val + currL2Val + carry;

    let valueToPut = sum % 10;
    carry = Math.trunc(sum / 10);

    let newNode = new ListNode(valueToPut);
    newNodes = newNodes.next = newNode;
  }

  return sentinelNode.next;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(max(n, m))
// Space Complexity: O(max(n, m))
// - The output linked list requires O(max(n, m)) space.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - The two linked lists can have different lengths.
//   - There can be a carry after both linked lists have reached the end.
//   - The input lists can contain only one node.
//
// - Pattern this belongs to:
//   - Linked List
//   - Sentinel Node
//   - Carry
//   - Digit-by-Digit Processing
//
// - Mistake pattern (things to keep forgetting):
//   - Use `0` when one of the linked lists has no current node, because the
//     two lists can have different lengths.
//   - Keep `carry` outside the loop because the carry from the current
//     iteration must be used in the next iteration.
//   - The loop must continue when `carry` still exists, even if both linked
//     lists have already reached the end. Otherwise, we can lose the final
//     carry.
//   - Use `% 10` to get the digit that should be stored in the current node.
//   - Use `Math.trunc(sum / 10)` to get the carry for the next iteration.
//   - Remember that the digits are stored in reverse order, so we can add
//     the nodes from left to right without reversing the linked lists.
//   - Use a sentinel node so that creating the first result node is handled
//     in the same way as creating all the following nodes.

// ============================================
// TESTS
// ============================================

// Test 1: Both lists have the same length
// Input:  l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// Test 2: Both numbers are zero
// Input:  l1 = [0], l2 = [0]
// Output: [0]

// Test 3: Different list lengths with a final carry
// Input:  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Test 4: One list is longer
// Input:  l1 = [9,9], l2 = [1]
// Output: [0,0,1]

// Test 5: Carry continues through multiple nodes
// Input:  l1 = [9,9,9], l2 = [1]
// Output: [0,0,0,1]

// Test 6: No carry
// Input:  l1 = [1,2,3], l2 = [4,5,6]
// Output: [5,7,9]

// Test 7: Different lengths without final carry
// Input:  l1 = [1,2], l2 = [5,6,7]
// Output: [6,8,7]

// Test 8: Single digit numbers
// Input:  l1 = [5], l2 = [7]
// Output: [2,1]

// LeetCode/Problem: Merge Two Sorted Lists
// Link: https://leetcode.com/problems/merge-two-sorted-lists/description/
// Date: 2026-09-19

// ============================================
// PROBLEM
// ============================================
// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - To avoid manually setting the first node of the sorted list, we can
//   create a sentinel node.
// - Then, we assign the sentinel node to another variable because we need to
//   move through the new sorted list. We need to keep the original sentinel
//   node so that we can return `sentinelNode.next` at the end.
// - In the while condition, we only continue while both `list1` and `list2`
//   are present. Once one of the lists becomes empty, we don't need to
//   compare anymore. We can simply connect the remaining list to the end
//   of the sorted list.
// - Inside the loop, we compare the values of the current nodes of `list1`
//   and `list2`. Based on which value is smaller, we update the `next`
//   pointer of the current sorted node and then move that list's pointer
//   forward.
// - Once the loop ends, at least one of the lists is empty. If `list1` still
//   has nodes, we connect it to `sortedNode.next`. Otherwise, if `list2`
//   still has nodes, we connect it to `sortedNode.next`.
// - Finally, we return `sentinelNode.next`, which is the head of the merged
//   sorted list.

// ============================================
// SOLUTION
// ============================================

var mergeTwoLists = function (list1, list2) {
  const sentinelNode = new ListNode(null);
  let sortedNode = sentinelNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      sortedNode = sortedNode.next = list1;
      list1 = list1.next;
    } else {
      sortedNode = sortedNode.next = list2;
      list2 = list2.next;
    }
  }

  if (list1) sortedNode.next = list1;
  else if (list2) sortedNode.next = list2;

  return sentinelNode.next;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// solution.
//
// Time Complexity: O(n + m)
// Space Complexity: O(1)

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - Both lists can be empty.
//   - One of the lists can be empty.
//   - Both lists can contain only one node.
//   - The two lists can have different lengths.
//   - One list can become empty before the other, so we need to attach the
//     remaining nodes from the other list.
//
// - Pattern this belongs to:
//   - Linked List
//   - Two Pointers
//   - Sentinel Node
//   - In-place Merging
//
// - Mistake pattern (things to keep forgetting):
//   - Use a sentinel node so we don't have to handle the first node
//     separately.
//   - Keep a separate pointer (`sortedNode`) to build the merged list while
//     keeping the original `sentinelNode` unchanged for the final return.
//   - Only compare nodes while both lists have nodes.
//   - Once one list becomes empty, directly connect the remaining list to
//     `sortedNode.next`.

// ============================================
// TESTS
// ============================================

// Test 1: Both lists contain multiple nodes
// Input:  list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Test 2: Both lists are empty
// Input:  list1 = [], list2 = []
// Output: []

// Test 3: First list is empty
// Input:  list1 = [], list2 = [0]
// Output: [0]

// Test 4: Second list is empty
// Input:  list1 = [1,2,3], list2 = []
// Output: [1,2,3]

// Test 5: First list contains smaller values
// Input:  list1 = [1,2,3], list2 = [4,5,6]
// Output: [1,2,3,4,5,6]

// Test 6: Second list contains smaller values
// Input:  list1 = [4,5,6], list2 = [1,2,3]
// Output: [1,2,3,4,5,6]

// Test 7: Lists contain duplicate values
// Input:  list1 = [1,1,1], list2 = [1,1]
// Output: [1,1,1,1,1]

// Test 8: One node in each list
// Input:  list1 = [2], list2 = [1]
// Output: [1,2]

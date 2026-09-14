// LeetCode/Problem: Linked List Cycle
// Link: https://leetcode.com/problems/linked-list-cycle/description/
// Date: 2026-09-14

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can solve this problem using a hash table (Set), but it will use O(n)
//   space complexity, and the problem asks us to solve it using O(1) space.
//
// - There is an algorithm called Floyd's Cycle Finding Algorithm.
//   In this problem, it is possible to use it.
//
// - For that, we have to use two pointers:
//   - One pointer will move one step at a time.
//   - The other fast pointer will move two steps at a time.
//
// - We can make the while loop run as long as the fast pointer has a next node.
//   If there is no next node, it means the fast pointer has reached the end of
//   the linked list, so the loop will exit and we can return false.
//
// - But if the linked list has a cycle, the fast pointer will eventually catch
//   the slow pointer, so at some point both pointers will point to the same node.
//
// - We can think of it like two people running on a circular track. If one person
//   is running faster than the other, eventually the faster person will catch
//   the slower person at some point.
//
// - So if slowPointer === fastPointer, we know that there is a cycle and can
//   return true.
//
// Time: O(n), Space: O(1)

// ============================================
// SOLUTION
// ============================================

var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) return true;
  }

  return false;
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
//   - Linked list can be empty.
//   - Linked list can contain only one node.
//   - A single node can point to itself, which means it has a cycle.
//
// - Pattern this belongs to:
//   - Floyd's Cycle Finding Algorithm
//   - Slow and Fast Pointer
//   - Two Pointers
//
// - Mistake pattern (things to keep forgetting):
//   - Both pointers can start from the head node.
//   - Use `fastPointer?.next` as the while-loop condition so the fast pointer
//     can safely move two steps at a time.
//   - We need to check `slowPointer === fastPointer` after moving both pointers.
//   - Remember that we are comparing the node references, not their values.

// ============================================
// TESTS
// ============================================

// Test 1: Cycle starts at the head
// [3,2,0,-4], tail connects to node 3
// Output: true

// Test 2: Cycle starts in the middle
// [3,2,0,-4], tail connects to node 2
// Output: true

// Test 3: No cycle
// [1,2,3,4]
// Output: false

// Test 4: Single node without cycle
// [1]
// Output: false

// Test 5: Single node pointing to itself
// [1], node 1 points to itself
// Output: true

// Test 6: Two nodes with a cycle
// [1,2], node 2 points to node 1
// Output: true

// Test 7: Two nodes without a cycle
// [1,2]
// Output: false

// Test 8: Empty linked list
// []
// Output: false

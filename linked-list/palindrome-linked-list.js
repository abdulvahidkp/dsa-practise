// LeetCode/Problem: Palindrome Linked List
// Link: https://leetcode.com/problems/palindrome-linked-list/description/
// Date: 2026-09-16

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - We can solve this problem using a Set or Array, like  by traversing through the linked list and put all the values in array, and then using array palindrome check but that would use O(n) time and space, and the follow-up asks us to solve it using O(1) space.
// - And another approach came in my mind is finding the middle first, and from the middle calling a recursion functoin, and while unwinding the function, we start checking with starting node, and increse it to next node. but this also will take o(n) space complexity since it's taking stack space.
//
// - so the correct approach for this problem is finding middle, then reverse from the middle position, and then check first part, with reversed second part. and in the problem statement it's not mentioned we shouldn't change linked list order. so this is fine, but if it's mentioned then we've to re reverse the second part to make it orginal way.
//
// - So first, we need to find the middle of the linked list using the
//   slow and fast pointer approach.
//
// - Then we will reverse the linked list starting from the slow pointer.
//   This gives us the second half of the linked list in reverse order.
//
// - Now we can have two pointers:
//   - One starting from the head of the linked list.
//   - Another starting from the head of the reversed second half.
//
// - We compare both nodes one by one.
//
// - If the values are different at any point, it is not a palindrome,
//   so we return false.
//
// - If all the values in the reversed second half match the values from
//   the beginning of the list, we return true.
//
// Time: O(n), Space: O(1)

// ============================================
// SOLUTION
// ============================================

var isPalindrome = function (head) {
  // finding middle of the node to reverse
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  const middle = slowPointer;

  // reversing from the middle to end
  let prev = null;
  let curr = middle;

  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  const endNode = prev;

  // check if palindrome from the starting node and ending node
  // (already reversed the second half, so we can compare from both ends)
  let leftEnd = head;
  let rightEnd = endNode;

  while (rightEnd) {
    if (leftEnd.val !== rightEnd.val) return false;

    leftEnd = leftEnd.next;
    rightEnd = rightEnd.next;
  }

  return true;
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
//   - Linked list can contain only one node.
//   - Linked list can contain two nodes.
//   - Linked list can have an odd or even number of nodes.
//
// - Pattern this belongs to:
//   - Slow and Fast Pointer
//   - Two Pointers
//   - In-place Linked List Reversal
//
// - Mistake pattern (things to keep forgetting):
//   - After reversing the second half, `prev` will point to the new head of
//     the reversed second half.
//   - For an odd-length linked list, the middle node itself does not affect
//     the palindrome comparison.
//   - Remember that we are comparing node values, not node references.
//   - The while-loop condition in the last palindrome check should be
//     `rightEnd`, not `rightEnd.next`. We need to check the current `rightEnd`
//     node as well. Using `rightEnd.next` would skip the last node of the
//     reversed second half, which means we would not check that value.
//   - Even for a larger palindrome, the last node of the reversed second half
//     still needs to be compared. The middle node in an odd-length list is
//     okay to compare because it will match itself.

// ============================================
// TESTS
// ============================================

// Test 1: Even length palindrome
// [1,2,2,1] -> true

// Test 2: Even length not palindrome
// [1,2] -> false

// Test 3: Odd length palindrome
// [1,2,3,2,1] -> true

// Test 4: Odd length not palindrome
// [1,2,3,4,1] -> false

// Test 5: Single node
// [1] -> true

// Test 6: Two nodes with same value
// [1,1] -> true

// Test 7: Two nodes with different values
// [1,2] -> false

// Test 8: All values are the same
// [1,1,1,1,1] -> true

// Test 9: Larger palindrome
// [1,2,3,4,4,3,2,1] -> true

// Test 10: Larger non-palindrome
// [1,2,3,4,5,3,2,1] -> false

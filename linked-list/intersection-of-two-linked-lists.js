// LeetCode/Problem: Intersection of Two Linked Lists
// Link: https://leetcode.com/problems/intersection-of-two-linked-lists/description/
// Date: 2026-09-16

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - First of all, in my thought, I thought of looping through one of the
//   linked lists first and putting the values in a Set, and then looping over
//   the next linked list and checking whether any value is in the Set. If there
//   is a match (first match, since we want to return the intersection node),
//   we can return it. But this will take O(n) space.
//
// - There is another way. We will have two variables, one for each list, and
//   we will move through both lists.
//
// - Once any of the lists reaches null, we will update that variable with the
//   opposite list's head. The same will happen for the other variable when it
//   reaches null.
//
// - We will do this in a while loop with the condition to run while both
//   variables are not equal.
//
// - So even if there is no intersection, both variables will eventually reach
//   null, and they will match. So we can return either variable.
//
// - If there is an intersection, both variables will eventually point to the
//   same node, and we can return that node.
//
// - Think about there being two roads to the same destination, where one road
//   is shorter and the other is longer. If two people start from both roads,
//   and once they reach the end of their first road they take the opposite road,
//   both people will travel the same total distance before reaching the same
//   destination.
//
// Time: O(n), Space: O(1)

// ============================================
// SOLUTION
// ============================================

var getIntersectionNode = function (headA, headB) {
  let currHeadA = headA;
  let currHeadB = headB;

  while (currHeadA != currHeadB) {
    currHeadA = !currHeadA ? headB : currHeadA.next;
    currHeadB = !currHeadB ? headA : currHeadB.next;
  }

  return currHeadA;
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
//   - The intersection can happen at the first node itself.
//   - The two linked lists may have different lengths.
//
// - Pattern this belongs to:
//   - Two Pointers
//   - Linked List
//
// - Mistake pattern (things to keep forgetting):
//   - The while loop condition. Think about it: the pointers will also match
//     once they both become null, which simplifies the logic.
//   - Never assign the opposite head by checking if `currHead.next` is null.
//     Instead, switch to the opposite head only when the current pointer itself
//     becomes null; otherwise, it can cause an infinite loop.
//   - We need to compare the node references, not the node values. Two different
//     nodes can have the same value but are not an intersection.

// ============================================
// TESTS
// ============================================

// Test 1: Lists intersect
// List A: [4,1,8,4,5]
// List B: [5,6,1,8,4,5]
// Intersection: node 8

// Test 2: Lists do not intersect
// List A: [2,6,4]
// List B: [1,5]
// Intersection: null

// Test 3: Intersection occurs at the head
// List A: [1,2,3]
// List B: [1,2,3]
// Intersection: node 1

// Test 4: Intersection occurs at the last node
// List A: [1,2,3,4]
// List B: [5,6,4]
// Intersection: node 4

// Test 5: One list is empty
// List A: []
// List B: [1,2,3]
// Intersection: null

// Test 6: Both lists are empty
// List A: []
// List B: []
// Intersection: null

// Test 7: One list is completely part of the other
// List A: [1,2,3]
// List B: [2,3]
// Intersection: node 2

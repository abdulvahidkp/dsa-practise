// LeetCode/Problem: 496. Next Greater Element I
// Link: https://leetcode.com/problems/next-greater-element-i/
// Date: 2026-10-26

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Use a monotonic decreasing stack and a map.
// - Traverse nums2 from right to left because we need to find elements
//   that are to the right of the current element.
// - For each current value:
//   - Pop elements from the stack while they are less than or equal
//     to the current value. They cannot be its next greater element.
//   - If the stack is not empty, its top is the next greater element.
//   - Otherwise, the next greater element is -1.
//   - Store the result in the map using the current value as the key.
//   - Push the current value onto the stack.
// - Traverse nums1 using map and return each value with its corresponding
//   next greater element from the map.
//
// Why this works:
// - The stack maintains potential greater elements to the right.
// - Each element is pushed once and popped at most once.
// - The map lets us look up each answer in O(1) average time.

// ============================================
// SOLUTION
// ============================================

var nextGreaterElement = function (nums1, nums2) {
  const greaterStack = [];
  const greaterMap = {};

  for (let i = nums2.length - 1; i >= 0; i--) {
    const currDigit = nums2[i];
    while (
      greaterStack.length &&
      greaterStack[greaterStack.length - 1] <= currDigit
    ) {
      greaterStack.pop();
    }

    greaterMap[currDigit] = greaterStack.length
      ? greaterStack[greaterStack.length - 1]
      : -1;

    greaterStack.push(currDigit);
  }

  return nums1.map((num) => greaterMap[num]);
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal solution.
//
// Time Complexity: O(n + m)
// - n = nums2.length
// - m = nums1.length
// - Each element in nums2 is pushed and popped at most once.
// - Each query in nums1 takes O(1) average lookup time.
//
// Space Complexity: O(n)
// - The stack and map can each store up to n elements.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - If no greater element exists to the right, return -1.
//   - The last element in nums2 always has -1 as its next greater element.
//   - Elements smaller than or equal to the current value must be popped.
//   - A greater element does not need to be immediately adjacent;
//     it must be the first greater element to the right.
//   - nums1 is guaranteed to be a subset of nums2.
//   - All values are distinct, so each value can be used as a map key.

// - Pattern this belongs to:
//   - Monotonic stack. (a specialized stack data structure that keeps its elements in a strictly increasing or decreasing order from bottom to top)
//   - Hash map for efficient lookups
//   - Right-to-left traversal

// - Mistake pattern (things to keep forgetting):
//   - Do not traverse from left to right for this particular approach,
//     because the elements to the right need to be processed first.
//   - Do not pop only elements smaller than the current value;
//     equal values must also be popped.
//   - Do not forget to push the current value after finding its answer.
//   - The stack top is the next greater element only after invalid
//     candidates have been removed.
//   - A nested while loop does not automatically mean O(n^2).
//     Each element is pushed once and popped at most once.

// ============================================
// TESTS
// ============================================

let result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(JSON.stringify(result) === JSON.stringify([-1, 3, -1]));

result = nextGreaterElement([2, 4], [1, 2, 3, 4]);
console.log(JSON.stringify(result) === JSON.stringify([3, -1]));

result = nextGreaterElement([1, 3, 5], [1, 2, 3, 4, 5]);
console.log(JSON.stringify(result) === JSON.stringify([2, 4, -1]));

result = nextGreaterElement([3, 1], [3, 2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([-1, -1]));

result = nextGreaterElement([2, 1], [1, 2]);
console.log(JSON.stringify(result) === JSON.stringify([-1, 2]));

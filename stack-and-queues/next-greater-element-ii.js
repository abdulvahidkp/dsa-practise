// LeetCode/Problem: 503. Next Greater Element II
// Link: https://leetcode.com/problems/next-greater-element-ii/
// Date: 2026-11-02

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Use a monotonic decreasing stack to store indices.
// - Initialize the result array with -1.
// - Traverse the array twice using a loop from 0 to 2 * n.
// - Use i % n to get the actual index because the array is circular.
// - For each current element:
//   - While the stack is not empty and the value at the
//     top index is smaller than the current value:
//       - Pop the index from the stack.
//       - The current value is its next greater element.
//       - Update the result at that popped index.
//   - Only push indices during the first traversal (i < n).
// - Return the result.
//
// Why traverse twice?
// - The second traversal simulates moving from the end of the array
//   back to its beginning.
// - This allows elements near the end to find greater elements
//   near the beginning.

// ============================================
// SOLUTION
// ============================================

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const index = i % n;
    const current = nums[index];

    while (stack.length > 0 && nums[stack[stack.length - 1]] < current) {
      const prevIndex = stack.pop();
      result[prevIndex] = current;
    }

    // Only add indexes during the first traversal.
    if (i < n) {
      stack.push(index);
    }
  }

  return result;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal solution.
//
// Time Complexity: O(n)
// - We iterate through the array twice, which is O(2n) = O(n).
// - Each index is pushed once and popped at most once.
//
// Space Complexity: O(n)
// - The stack and result array can each store up to n elements.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - A single-element array returns [-1].
//   - If all elements are equal, every answer is -1.
//   - If an element has no greater element even after wrapping around,
//     its answer remains -1.
//   - An element near the end can find its next greater element
//     near the beginning.
//   - Equal values are not considered greater.
//   - The current element must be strictly greater than the stack's
//     top element to resolve that index.

// - Pattern this belongs to:
//   - Use a monotonic stack to maintain unresolved indices.
//   - Traverse twice to simulate circular movement.
//   - Use i % n to access elements circularly.
//   - Push indices only during the first traversal.
//   - During the second traversal, only resolve remaining indices.

// - Mistake pattern (things to keep forgetting):
//   - Do not use i directly as the array index during the second traversal.
//     Use i % n.
//   - Do not push indices during both traversals, because that creates
//     duplicate entries in the stack.
//   - Do not use <= when comparing values because equal values
//     are not greater.
//   - Do not overwrite unresolved answers with -1 at the end;
//     the result array is already initialized with -1.
//   - Remember that the second traversal is for finding answers,
//     not for adding elements to the stack.

// ============================================
// TESTS
// ============================================

let result = nextGreaterElements([1, 2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([2, -1, 2]));

result = nextGreaterElements([1, 2, 3, 4, 3]);
console.log(JSON.stringify(result) === JSON.stringify([2, 3, 4, -1, 4]));

result = nextGreaterElements([5]);
console.log(JSON.stringify(result) === JSON.stringify([-1]));

result = nextGreaterElements([1, 1, 1]);
console.log(JSON.stringify(result) === JSON.stringify([-1, -1, -1]));

result = nextGreaterElements([3, 2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([-1, 3, 3]));

result = nextGreaterElements([2, 1, 3]);
console.log(JSON.stringify(result) === JSON.stringify([3, 3, -1]));

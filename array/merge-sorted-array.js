// LeetCode/Problem: Merge Sorted Array
// Link: https://leetcode.com/problems/merge-sorted-array/description/
// Date: 2026-07-28

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// CONSTRAINTS
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
//  - Since both arrays are already sorted, and `nums1` has enough space to store all the elements, we can start merging from the back. Starting from the front would overwrite values in `nums1` that we haven't processed yet. For example: nums1 = [3, 4, 5], nums2 = [1, 2, 4].
//  - I'll keep two pointers: one pointing to the last valid element in `nums1` and the other pointing to the last element in `nums2`.
//  - We will start a while loop and continue until all the elements in `nums2` are placed in `nums1`.
//  - During each iteration, we'll compare the current values from both arrays. If a pointer has moved past the beginning of its array, I'll treat its value as `-Infinity` so the comparison still works.
//  - To know where to place the next element, we'll calculate the index as `nums1Pointer + nums2Pointer + 1`.
//  - We'll place the larger value at that index and move the corresponding pointer backward.
//  - Once the iteration is over, we'll return `nums1`, which now contains all the elements in sorted order.
// Time: O(m + n)  Space: O(1)

function solve(nums1, m, nums2, n) {
  let nums1Pointer = m - 1;
  let nums2Pointer = n - 1;

  while (nums1Pointer >= 0 || nums2Pointer >= 0) {
    const nums1Val = nums1[nums1Pointer] ?? -Infinity;
    const nums2Val = nums2[nums2Pointer] ?? -Infinity;

    const idxToPut = nums1Pointer + nums2Pointer + 1;

    if (nums2Val > nums1Val) {
      nums1[idxToPut] = nums2Val;
      --nums2Pointer;
    } else {
      nums1[idxToPut] = nums1Val;
      --nums1Pointer;
    }
  }

  return nums1;
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Time: O(n)  Space: O(1)
// What I missed:
// - We don't need to continue once `nums2Pointer` becomes less than 0.
// - If `nums2` is exhausted, the remaining elements of `nums1` are already in their correct positions, so no more work is needed.
function solveOptimal(nums1, m, nums2, n) {
  let nums1Pointer = m - 1;
  let nums2Pointer = n - 1;

  while (nums2Pointer >= 0) {
    const nums1Val = nums1[nums1Pointer] ?? -Infinity;
    const nums2Val = nums2[nums2Pointer];

    const isNums1ValGreaterThan = nums2Val > nums1Val;

    const idxToPut = nums1Pointer + nums2Pointer + 1;

    if (isNums1ValGreaterThan) {
      nums1[idxToPut] = nums2Val;
      --nums2Pointer;
    } else {
      nums1[idxToPut] = nums1Val;
      --nums1Pointer;
    }
  }

  return nums1;
}

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - `nums2` is empty, so `nums1` remains unchanged.
//   - One array finishes before the other.
//   - Duplicate values exist in both arrays.
//
// - Pattern this belongs to:
//   - Two pointers
//   - Backward traversal
//   - In-place merge
//
// - Mistake pattern (things to keep forgetting):
//   - Merge from the back, not the front, otherwise values in `nums1` may be overwritten before they're processed.
//   - We only need to continue until `nums2` is exhausted.
//   - The position to insert the next value is `nums1Pointer + nums2Pointer + 1`.

// ============================================
// TESTS
// ============================================

// Example 1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
solveOptimal(nums1, 3, nums2, 3);
console.log(JSON.stringify(nums1) === JSON.stringify([1, 2, 2, 3, 5, 6]));

// Example 2
nums1 = [1];
nums2 = [];
solveOptimal(nums1, 1, nums2, 0);
console.log(JSON.stringify(nums1) === JSON.stringify([1]));

// Example 3
nums1 = [0];
nums2 = [1];
solveOptimal(nums1, 0, nums2, 1);
console.log(JSON.stringify(nums1) === JSON.stringify([1]));

// nums2 values are all smaller
nums1 = [4, 5, 6, 0, 0, 0];
nums2 = [1, 2, 3];
solveOptimal(nums1, 3, nums2, 3);
console.log(JSON.stringify(nums1) === JSON.stringify([1, 2, 3, 4, 5, 6]));

// nums2 values are all larger
nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [4, 5, 6];
solveOptimal(nums1, 3, nums2, 3);
console.log(JSON.stringify(nums1) === JSON.stringify([1, 2, 3, 4, 5, 6]));

// Duplicate values
nums1 = [2, 2, 3, 0, 0, 0];
nums2 = [1, 2, 2];
solveOptimal(nums1, 3, nums2, 3);
console.log(JSON.stringify(nums1) === JSON.stringify([1, 2, 2, 2, 2, 3]));

// nums1 has no valid elements
nums1 = [0, 0, 0];
nums2 = [1, 2, 3];
solveOptimal(nums1, 0, nums2, 3);
console.log(JSON.stringify(nums1) === JSON.stringify([1, 2, 3]));

// Negative numbers
nums1 = [-3, -1, 2, 0, 0];
nums2 = [-2, 4];
solveOptimal(nums1, 3, nums2, 2);
console.log(JSON.stringify(nums1) === JSON.stringify([-3, -2, -1, 2, 4]));

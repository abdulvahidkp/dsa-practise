// LeetCode/Problem: Merge Sort
// Link: <problem URL>
// Date: 2026-09-09

// ============================================
// PROBLEM
// ============================================
// - Given an array of numbers, sort the array in ascending order using Merge Sort.
// - You should return the sorted array.
// - Do not use JavaScript's built-in `.sort()` method.
//
// Example 1:
// Input:  [5, 3, 8, 4, 2]
// Output: [2, 3, 4, 5, 8]
//
// Example 2:
// Input:  [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// ============================================
// CONSTRAINTS
// ============================================
// - 0 <= nums.length <= 1000
// - -10^4 <= nums[i] <= 10^4

// ============================================
// MY SOLUTION (before looking anything up)
// ============================================
// Approach:
// - First, I will use recursion to keep dividing the array into two smaller
//   arrays until each array contains only one value or no values.
// - Once we reach that point, each small array is already considered sorted.
// - Then I will merge the two sorted arrays by comparing the first available
//   value from each array and putting the smaller value into a new sorted array.
// - I will continue merging the smaller arrays until I finally get one
//   completely sorted array.
// Time: O(n log n)  Space: O(n)

function solve(nums) {
  if (nums.length <= 1) return nums;

  const center = Math.floor(nums.length / 2);

  let left = solve(nums.slice(0, center));
  let right = solve(nums.slice(center));

  let sortedArray = mergeSortedArrays(left, right);

  return sortedArray;
}

function mergeSortedArrays(nums1, nums2) {
  let sortedArray = [];
  let nums1Idx = 0;
  let nums2Idx = 0;

  for (let i = 0; i <= nums1.length + nums2.length - 1; i++) {
    const nums1Val = nums1Idx < nums1.length ? nums1[nums1Idx] : Infinity;
    const nums2Val = nums2Idx < nums2.length ? nums2[nums2Idx] : Infinity;

    if (nums1Val < nums2Val) {
      sortedArray.push(nums1Val);
      nums1Idx++;
    } else {
      sortedArray.push(nums2Val);
      nums2Idx++;
    }
  }

  return sortedArray;
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — this is the standard Merge Sort approach.
// Time: O(n log n)  Space: O(n)
//
// Note:
// Merge Sort has O(n log n) time because the array is divided into
// approximately half at each level, and each level requires O(n) work
// to merge the values.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - An empty array should return an empty array.
//   - A single-element array is already sorted.
//
// - Pattern this belongs to:
//   - Merge Sort
//   - Recursion
//   - Divide and conquer
//
// - Mistake pattern (if any) — things to keep forgetting:
//   - Keep dividing the array until the array has one or zero elements.
//   - Merge Sort has O(n log n) time and O(n) space.
//   - `slice()` creates new arrays, which contributes to the O(n) space usage.

// ============================================
// TESTS
// ============================================

// Basic case
let result = solve([5, 3, 8, 4, 2]);
console.log(JSON.stringify(result) === JSON.stringify([2, 3, 4, 5, 8]));

// Already sorted
result = solve([1, 2, 3, 4, 5]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5]));

// Reverse sorted
result = solve([5, 4, 3, 2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5]));

// Duplicate values
result = solve([4, 2, 4, 1, 2]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 2, 4, 4]));

// Negative values
result = solve([3, -1, 5, -4, 2]);
console.log(JSON.stringify(result) === JSON.stringify([-4, -1, 2, 3, 5]));

// All same values
result = solve([7, 7, 7, 7]);
console.log(JSON.stringify(result) === JSON.stringify([7, 7, 7, 7]));

// Single element
result = solve([10]);
console.log(JSON.stringify(result) === JSON.stringify([10]));

// Empty array
result = solve([]);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Two elements
result = solve([2, 1]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2]));

// Larger array
result = solve([10, 3, 7, 1, 8, 2, 9, 4, 6, 5]);
console.log(
  JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
);

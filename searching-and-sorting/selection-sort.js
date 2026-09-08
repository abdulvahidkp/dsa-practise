// LeetCode/Problem: Selection Sort
// Link: <problem URL>
// Date: 2026-09-08

// ============================================
// PROBLEM
// ============================================
// - Given an array of numbers, sort the array in ascending order using Selection Sort.
// - You should modify the given array in-place.
// - Do not use JavaScript's built-in `.sort()` method.
// - Return the sorted array.

// Example 1:
// Input:  [5, 3, 8, 4, 2]
// Output: [2, 3, 4, 5, 8]

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
// - Selection sort is working by iterating an array, and finding the very minimum value, and then putting it on the first position. Again, it will iterate and find the next minimum value from the 2nd position, and once found, it will then put it in the second position.
// - So I will use one loop to track the position where the next minimum value should be placed.
// - Then I will use another loop to find the minimum value from the remaining unsorted part of the array.
// - Once I find the minimum value, I will swap it with the value at the current position.
// - This process will continue until the whole array becomes sorted.
//
// Time: O(n^2)  Space: O(1)

function solve(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < nums.length; j++) {
      const currVal = nums[j];

      if (currVal < nums[min]) min = j;
    }

    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
}

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Same as mine ✅ — checked the Selection Sort approach.
// This is the standard in-place Selection Sort implementation.
// Time: O(n^2)  Space: O(1)
//
// Note:
// Selection Sort is not the most time-efficient sorting algorithm.
// Algorithms such as Merge Sort or Quick Sort can have better average
// time complexity, but for Selection Sort itself, this is the standard
// in-place approach.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Single element should remain unchanged.
//   - Duplicate values should be handled correctly.
//
// - Pattern this belongs to:
//   - Selection Sort
//   - Nested loops
//   - In-place array modification
//
// - Mistake pattern (if any) — things to keep forgetting:
//   - `min` should store the index of the minimum value, not the value itself.
//   - The inner loop should start from `i + 1` because the values before `i`
//     are already sorted.
//   - Selection Sort still takes O(n^2) time even when the array is already sorted coz we can't optimize the solution with a variable 'isSwapped' like we do for the bubble sort.

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

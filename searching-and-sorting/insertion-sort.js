// LeetCode/Problem: Insertion Sort
// Link: <problem URL>
// Date: 2026-09-09

// ============================================
// PROBLEM
// ============================================
// - Given an array of numbers, sort the array in ascending order using Insertion Sort.
// - You should modify the given array in-place.
// - Do not use JavaScript's built-in `.sort()` method.
// - Return the sorted array.
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
// - Insertion sort works in a way where we first start from the second index, and check with the first index value which one is greater. If the second one is smaller, we move the first value to the right and put the second value in the correct position. Then we move to the third index. It will check whether the third value is greater than the second value. If not, we move the second value to the right, and again check the third value with the first value. This continues until we find the correct position for the current value.
// - We need two loops.
// - The first loop is for moving one by one through the array and starting the checking from the left side in the inner loop.
// - The outer loop can start from the 1st index (not 0) because we can assume the 0th index as the already sorted part.
// - In the inner loop, we can make a while loop since we're not sure how many times it will move backward. We can store the current value and check whether it is less than the previous value. If yes, we move the previous value one position to the right and reduce the currIdx, then again check with the next previous value.
// - Make sure to check in the while loop whether the currIdx is greater than zero or not, because sometimes a value will move all the way to the zero index, so we don't want to continue the while loop at that point.
// - At last, we can put the currVal in the position we found and return nums.
//
// Time: O(n^2) time, O(1) space
function solve(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currVal = nums[i];
    let currIdx = i;

    while (currIdx > 0 && currVal < nums[currIdx - 1]) {
      nums[currIdx] = nums[currIdx - 1];
      --currIdx;
    }

    if (currIdx !== i) nums[currIdx] = currVal;
  }

  return nums;
}

// ============================================
// OPTIMAL SOLUTION — same as mine ✅
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(n^2) time, O(1) space). No changes needed.
//
// Note:
// Insertion Sort can have O(n) time when the array is already sorted,
// but its worst-case time complexity is O(n^2).

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - If the currVal is the lowest value in the array, it will move towards // index 0, so make sure to end the while loop at that point.
//
// - Pattern this belongs to:
//   - Insertion sort
//
// - Mistake pattern (if any) — things to keep forgetting:
//   - We only need to put the currVal once all greater previous elements have // been shifted to the right and we have found the correct place for currVal.
//   - `currIdx > 0` is the correct boundary because we access `nums[currIdx - 1]`.
//   - The outer loop starts from index 1 because a single element at index 0 is already considered sorted.

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

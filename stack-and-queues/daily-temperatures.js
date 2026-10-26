// LeetCode/Problem: 739. Daily Temperatures
// Link: https://leetcode.com/problems/daily-temperatures/
// Date: 2026-10-26

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Use a monotonic decreasing stack to store indices of temperatures.
// - Initialize an answer array filled with 0.
// - Traverse the temperatures array from right to left.
// - For each current temperature:
//   - While the stack is not empty and the temperature at the top index
//     is less than or equal to the current temperature, pop that index.
//   - These temperatures cannot be the next warmer day for the current day.
//   - If the stack is not empty, its top index represents the next warmer day.
//   - Calculate the waiting days by subtracting the current index
//     from the next warmer day's index.
//   - Push the current index onto the stack.
// - Return the answer array.
//
// Why store indices instead of temperatures?
// - We need the temperature to compare values.
// - We also need the index to calculate the number of days to wait.

// ============================================
// SOLUTION
// ============================================

var dailyTemperatures = function (temperatures) {
  const stack = [];
  const waitingDays = Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    const currVal = temperatures[i];

    while (stack.length && temperatures[stack[stack.length - 1]] <= currVal) {
      stack.pop();
    }

    if (stack.length) {
      waitingDays[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return waitingDays;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal solution.
//
// Time Complexity: O(n)
// - Each index is pushed onto the stack once and popped at most once.
//
// Space Complexity: O(n)
// - The stack and the answer array can each store up to n elements.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - If no warmer day exists, the answer remains 0.
//   - The last day always has an answer of 0.
//   - If the next day's temperature is warmer, the answer is 1.
//   - Equal temperatures do not count as warmer.
//   - A warmer day may be several days away, so use indices to calculate
//     the waiting days.

// - Pattern this belongs to:
//   - Monotonic decreasing stack
//   - Next greater element
//   - Right-to-left traversal
//   - Index-based distance calculation

// - Mistake pattern (things to keep forgetting):
//   - Store indices, not temperature values, because the answer requires
//     the difference between two day indices.
//   - Compare temperatures using temperatures[stack[stack.length - 1]].
//   - Pop temperatures that are less than OR equal to the current temperature.
//   - Do not calculate a waiting time when the stack is empty.
//   - Initialize the answer array with zeros so days without a warmer
//     future temperature automatically have the correct answer.

// ============================================
// TESTS
// ============================================

let result = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(
  JSON.stringify(result) === JSON.stringify([1, 1, 4, 2, 1, 1, 0, 0]),
);

result = dailyTemperatures([30, 40, 50, 60]);
console.log(JSON.stringify(result) === JSON.stringify([1, 1, 1, 0]));

result = dailyTemperatures([30, 60, 90]);
console.log(JSON.stringify(result) === JSON.stringify([1, 1, 0]));

result = dailyTemperatures([50]);
console.log(JSON.stringify(result) === JSON.stringify([0]));

result = dailyTemperatures([70, 70, 70, 70]);
console.log(JSON.stringify(result) === JSON.stringify([0, 0, 0, 0]));

result = dailyTemperatures([80, 75, 72, 85]);
console.log(JSON.stringify(result) === JSON.stringify([3, 2, 1, 0]));

result = dailyTemperatures([30, 40, 35, 50]);
console.log(JSON.stringify(result) === JSON.stringify([1, 2, 1, 0]));

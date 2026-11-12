// LeetCode/Problem: 994. Rotting Oranges
// Link: https://leetcode.com/problems/rotting-oranges/
// Date: 2026-11-12

// ============================================
// PROBLEM
// ============================================

// Refer to the LeetCode problem for the full problem statement.

// ============================================
// APPROACH
// ============================================
// - Use Multi-source Breadth-First Search (BFS).
// - Create a queue to store the positions of rotten oranges.
// - Traverse the entire grid:
//   - Add every initially rotten orange to the queue.
//   - Count the total number of fresh oranges.
// - Start BFS:
//   - Process all oranges currently in the queue at the same level.
//   - These oranges represent the rotten oranges at the current minute.
//   - Check their four adjacent directions:
//     - Up
//     - Down
//     - Left
//     - Right
//   - If an adjacent cell contains a fresh orange:
//     - Change its value to 2.
//     - Add its position to the queue.
//     - Decrease the fresh orange count.
//   - After processing the current level, if newly rotten oranges
//     are waiting in the queue, increment the minutes.
// - When BFS finishes:
//   - If fresh is 0, return the minutes.
//   - Otherwise, return -1.
//
// Why mark an orange as rotten immediately?
// - This prevents the same orange from being added to the queue
//   multiple times by different rotten neighbors.
//
// Why process level by level?
// - All oranges in the same BFS level become rotten during the same minute.
// - The next level represents the following minute.

// ============================================
// SOLUTION
// ============================================

var orangesRotting = function (grid) {
  const queue = [];
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const currVal = grid[i][j];

      if (currVal === 2) queue.push([i, j]);
      else if (currVal === 1) ++fresh;
    }
  }

  let minutesToRotten = 0;

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const curr = queue.shift();

      const row = curr[0];
      const col = curr[1];

      if (grid[row - 1]?.[col] === 1) {
        grid[row - 1][col] = 2;
        queue.push([row - 1, col]);
        --fresh;
      }

      if (grid[row + 1]?.[col] === 1) {
        grid[row + 1][col] = 2;
        queue.push([row + 1, col]);
        --fresh;
      }

      if (grid[row][col - 1] === 1) {
        grid[row][col - 1] = 2;
        queue.push([row, col - 1]);
        --fresh;
      }

      if (grid[row][col + 1] === 1) {
        grid[row][col + 1] = 2;
        queue.push([row, col + 1]);
        --fresh;
      }
    }

    if (queue.length) ++minutesToRotten;
  }

  return fresh === 0 ? minutesToRotten : -1;
};

// ============================================
// OPTIMAL SOLUTION
// ============================================
// Checked editorial/discussion after solving — this is an optimal solution.
//
// Time Complexity: O(m * n)
// - We initially traverse the entire grid.
// - Each orange is added to the queue at most once.
// - Each orange checks at most four neighboring cells.
//
// Space Complexity: O(m * n)
// - In the worst case, the queue can contain O(m * n) positions.

// ============================================
// NOTES
// ============================================

// - Edge cases to remember:
//   - No fresh oranges: return 0.
//   - No initially rotten oranges but fresh oranges exist: return -1.
//   - All oranges are already rotten: return 0.
//   - Empty cells do not participate in the spreading process.
//   - If fresh oranges are isolated by empty cells, return -1.
//   - Multiple initially rotten oranges must spread simultaneously.
//   - A fresh orange can be reached by multiple rotten oranges,
//     so mark it rotten immediately when adding it to the queue.

// - Pattern this belongs to:
//   - Multi-source BFS.
//   - Add all starting points to the queue before starting BFS.
//   - Process the queue level by level.
//   - Each BFS level represents one unit of distance or time.
//   - Useful for problems involving simultaneous spreading,
//     shortest distances, or minimum steps from multiple starting points.

// - Mistake pattern (things to keep forgetting):
//   - Do not start BFS with only one rotten orange.
//     All initially rotten oranges must be added first.
//   - Do not forget to count fresh oranges before starting BFS.
//   - Mark fresh oranges as rotten when adding them to the queue,
//     not when removing them.
//   - Process the queue level by level to calculate minutes correctly.
//   - Check all four directions and handle grid boundaries.
//   - Do not assume that processing the entire queue means
//     every fresh orange has become rotten.
//   - Keep row and column variables consistent when accessing the grid.

// ============================================
// TESTS
// ============================================

let result = orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
console.log(result === 4);

result = orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
]);
console.log(result === -1);

result = orangesRotting([[0, 2]]);
console.log(result === 0);

result = orangesRotting([[1, 2, 1]]);
console.log(result === 1);

result = orangesRotting([
  [2, 2],
  [1, 1],
]);
console.log(result === 1);

result = orangesRotting([
  [1, 1],
  [1, 1],
]);
console.log(result === -1);

result = orangesRotting([
  [0, 0],
  [0, 0],
]);
console.log(result === 0);

result = orangesRotting([[2]]);
console.log(result === 0);

result = orangesRotting([[1]]);
console.log(result === -1);

// LeetCode/Problem: Best Time to Buy and Sell Stock
// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
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
//  - Since we have to find the maximum profit, we always need to know the lowest stock price we've seen so far because buying at the lowest price gives us the best chance of making a higher profit later.
//  - So, I will create two variables: `lowest`, initialized with the price on the 0th day, and `profit`, initialized with 0 because if no profit can be made, the answer should be 0.
//  - We will start iterating from the 1st index since we've already considered the 0th day's price as our initial buying price.
//    - First, calculate the profit by subtracting `lowest` from the current price and update `profit` if this value is greater than the current maximum profit.
//    - Then, update `lowest` if the current price is smaller than the lowest price we've seen so far.
//  - Once the iteration is over, we'll return `profit`.
// Time: O(n)  Space: O(1)

function solve(prices) {
  let lowest = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currVal = prices[i];
    profit = Math.max(currVal - lowest, profit);
    lowest = Math.min(lowest, currVal);
  }

  return profit;
}

// ============================================
// OPTIMAL SOLUTION — same as mine ✅
// ============================================
// Checked editorial/discussion after solving — this was already the optimal
// approach (O(n) time, O(1) space, single pass). No changes needed.

// ============================================
// NOTES
// ============================================
// - Edge cases to remember:
//   - Finding a new lowest price later doesn't always mean it will produce the maximum profit. eg: [3, 7, 1, 5]
//   - The maximum profit is not always obtained by selling at the highest price. eg: [10, 1, 8] or [7, 10, 1, 5] here 1 and 5 gives max profit
//
// - Pattern this belongs to:
//   - Sliding minimum
//   - Single pass
//   - T̶w̶o̶ p̶o̶i̶n̶t̶e̶r̶s̶ because we're not tracking two indices (addresses). Instead, we're storing the lowest price seen so far and the maximum profit found so far.
//
// - Mistake pattern (things to keep forgetting):
//   - Calculate the profit before updating `lowest`.
//   - Track only the lowest price seen so far, not the highest price.

// ============================================
// TESTS
// ============================================

// Example 1
let prices = [7, 1, 5, 3, 6, 4];
let profit = solve(prices);
console.log(profit === 5);

// Example 2
prices = [7, 6, 4, 3, 1];
profit = solve(prices);
console.log(profit === 0);

// Single day
prices = [5];
profit = solve(prices);
console.log(profit === 0);

// Two increasing prices
prices = [2, 5];
profit = solve(prices);
console.log(profit === 3);

// Two decreasing prices
prices = [5, 2];
profit = solve(prices);
console.log(profit === 0);

// Buy at the beginning
prices = [1, 2, 3, 4, 5];
profit = solve(prices);
console.log(profit === 4);

// Buy in the middle
prices = [8, 6, 2, 7, 3];
profit = solve(prices);
console.log(profit === 5);

// Lowest price appears near the end
prices = [5, 4, 3, 2, 10];
profit = solve(prices);
console.log(profit === 8);

// Repeated prices
prices = [3, 3, 3, 3];
profit = solve(prices);
console.log(profit === 0);

// Lowest price at the end (no profit possible)
prices = [4, 3, 2, 1];
profit = solve(prices);
console.log(profit === 0);

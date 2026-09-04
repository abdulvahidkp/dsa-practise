# DSA Practice

Daily data structures & algorithms practice, followed in a fixed order — easy foundations to advanced patterns — as part of a 6-month deep-dive into systems-level software engineering. Following along? Start at the top of the checklist and work down; this repo doubles as a learning path, not just a log.

Documenting the journey here: [Instagram @buildwithvahid](https://www.instagram.com/buildwithvahid).

## How to use this repo

Each problem file contains my own first-attempt solution, the optimal solution (if different), and notes on the pattern/edge cases — not just the final answer. Copy `TEMPLATE.js` for your own attempts before reading mine, if you're following along.

## Learning Path (in order)

Check the box once a topic is done. Folder links point to every problem solved under that topic so far.

- [ ] **Arrays & Hashing** → [`array/`](./array)
- [ ] **Two Pointers** → [`two-pointers/`](./two-pointers)
- [ ] **Sliding Window** → [`sliding-window/`](./sliding-window)
- [ ] **Linked List** → [`linked-list/`](./linked-list)
- [ ] **Stacks & Queues** → [`stacks-queues/`](./stacks-queues)
- [ ] **Binary Trees** → [`trees/binary-tree/`](./trees/binary-tree)
- [ ] **Binary Search Trees** → [`trees/bst/`](./trees/bst)
- [ ] **Heaps / Priority Queues** → [`heaps/`](./heaps)
- [ ] **Backtracking** → [`backtracking/`](./backtracking)
- [ ] **Graphs — BFS/DFS** → [`graphs/bfs-dfs/`](./graphs/bfs-dfs)
- [ ] **Graphs — Union-Find** → [`graphs/union-find/`](./graphs/union-find)
- [ ] **Graphs — Shortest Path** → [`graphs/shortest-path/`](./graphs/shortest-path)
- [ ] **Greedy** → [`greedy/`](./greedy)
- [ ] **1D Dynamic Programming** → [`dp/1d/`](./dp/1d)
- [ ] **2D Dynamic Programming** → [`dp/2d/`](./dp/2d)

_(reorder/edit this list once to match the exact sequence you're following — then it's a fixed map for anyone joining the journey)_

## File format

Every problem file follows the same structure — see [`TEMPLATE.js`](./TEMPLATE.js):

1. **My solution** — written before looking anything up
2. **Optimal solution** — only included if different from mine, with what I missed
3. **Notes** — edge cases, pattern it belongs to, recurring mistakes
4. **Tests** — inline `console.log`/`assert` checks, no framework

## Patterns learned so far

See [`notes/patterns.md`](./notes/patterns.md) for the growing "when you see X, think Y" cheat sheet.

## Progress

| Metric            | Count  |
| ----------------- | ------ |
| Topics completed  | 1 / 15 |
| Problems solved   | 14     |
| First-try optimal | 11     |

_(update weekly during Sunday review)_

---

### Personal log (chronological)

<details>
<summary>Click to expand — date-by-date solve history</summary>

| Date       | Problem                             | Topic     | First try = optimal? |
| ---------- | ----------------------------------- | --------- | -------------------- |
| 2026-07-20 | Second Largest                      | Array     | ✅                   |
| 2026-07-20 | Remove Duplicates from Sorted Array | Array     | ✅                   |
| 2026-07-27 | Remove Element                      | Array     | ✅                   |
| 2026-07-27 | Reverse String                      | Array     | ✅                   |
| 2026-07-28 | Best Time to Buy and Sell Stock     | Array     | ✅                   |
| 2026-07-28 | Merge Sorted Array                  | Array     | ❌                   |
| 2026-08-01 | Move Zeroes                         | Array     | ❌                   |
| 2026-08-01 | Max Consecutive Ones                | Array     | ✅                   |
| 2026-09-01 | Missing Number                      | Array     | ✅                   |
| 2026-09-01 | Single Number                       | Array     | ✅                   |
| 2026-09-02 | Sum of first N Numbers              | Recursion | ✅                   |
| 2026-09-03 | Sum of all numbers in array         | Recursion | ❌                   |
| 2026-09-04 | Factorial of n                      | Recursion | ✅                   |
| 2026-09-04 | Power of Two                        | Recursion | ✅                   |

</details>

## Commit message format

Every problem is committed using the following format:

```text
<topic>: <what was solved>
```

Examples:

```text
array: find second largest value
array: remove duplicates from sorted array
two-pointers: container with most water
linked-list: reverse linked list
```

// // Given a 2d grid map of '1's (land) and '0's (water),
// //count the number of islands. An island is surrounded
// // by water and is formed by connecting adjacent lands
// // horizontally or vertically. You may assume all four
// // edges of the grid are all surrounded by water.

// // Example 1:

// // Input:
// // 11110
// // 11010
// // 11000
// // 00000

// // Output: 1

// // Example 2:

// // Input:
// // 11000
// // 11000
// // 00100
// // 00011

// // Output: 3

var numIslands = function (grid) {
  let visited = {};
  let count = 0;

  function helper(i, j) {
    let val;

    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
      val = 0;
    } else {
      val = grid[i][j];
    }

    if (val === 0) {
      return;
    }

    visited[`${i}-${j}`] = true;

    !visited[`${i - 1}-${j}`] && helper(i - 1, j);
    !visited[`${i + 1}-${j}`] && helper(i + 1, j);
    !visited[`${i}-${j - 1}`] && helper(i, j - 1);
    !visited[`${i}-${j + 1}`] && helper(i, j + 1);
    return;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let curr = grid[i][j];

      if (curr === 1 && !visited.hasOwnProperty(`${i}-${j}`)) {
        helper(i, j);
        count++;
      }
    }
  }

  return count;
};

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

console.log(numIslands(grid));

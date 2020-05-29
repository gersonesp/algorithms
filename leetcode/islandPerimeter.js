// You are given a map in form of a two-dimensional integer grid where 1
//  represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally).
// The grid is completely surrounded by water, and there is exactly one
//  island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to
//  the water around the island). One cell is a square with side length 1.
//   The grid is rectangular, width and height don't exceed 100. Determine
//   the perimeter of the island.

const islandPerimeter = (grid) => {
  let count = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let current = grid[x][y];

      if (current === 1) {
        if (x === 0 || grid[x - 1][y] !== 1) count++;
        if (x === grid.length - 1 || grid[x + 1][y] !== 1) count++;
        if (y === 0 || grid[x][y - 1] !== 1) count++;
        if (y === grid[x].length - 1 || grid[x][y + 1] !== 1) count++;
      }
    }
  }

  return count;
};

const input = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(input));

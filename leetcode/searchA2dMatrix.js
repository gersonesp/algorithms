// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    if (target <= row[row.length - 1]) {
      for (let j = 0; j < row.length; j++) {
        if (row[j] === target) return true;
      }
    }
  }

  return false;
};

const matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
const target1 = 3;
// Output: true

const matrix2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
const target2 = 13;
// Output: false

console.log(searchMatrix(matrix1, target1));
console.log(searchMatrix(matrix2, target2));

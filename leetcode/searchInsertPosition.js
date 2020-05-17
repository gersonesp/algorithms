// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

const input1 = [1, 3, 5, 6];
const target1 = 5;
// Output: 2

const input2 = [1, 3, 5, 6];
const target2 = 2;
// Output: 1

const input3 = [1, 3, 5, 6];
target3 = 7;
// Output: 4

const input4 = [1, 3, 5, 6];
const target4 = 0;
// Output: 0

console.log(searchInsert(input1, target1));
console.log(searchInsert(input2, target2));
console.log(searchInsert(input3, target3));
console.log(searchInsert(input4, target4));

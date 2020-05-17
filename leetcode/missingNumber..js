// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const missingNumber = (nums) => {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};

const input1 = [3, 0, 1];
// Output: 2

const input2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8

const input3 = [1, 2, 3];
// Output: 4

const input4 = [0];
// Output: 1

const input5 = [1];
// Output: 0

console.log(missingNumber(input1));
console.log(missingNumber(input2));
console.log(missingNumber(input3));
console.log(missingNumber(input4));
console.log(missingNumber(input5));

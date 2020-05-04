// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
  let length = nums.length;
  let index = nums.indexOf(0);
  let count = 0;

  while (index > -1) {
    nums.splice(index, 1);
    index = nums.indexOf(0);
    count++;
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }

  return nums;
};

const arr = [0, 1, 0, 3, 12];

console.log(moveZeroes(arr));

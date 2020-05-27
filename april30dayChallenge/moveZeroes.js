// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
  let zeroInx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[zeroInx]] = [nums[zeroInx], nums[i]];
      zeroInx++;
    }
  }
  return nums;
};

const arr = [0, 1, 0, 3, 12];

console.log(moveZeroes(arr));

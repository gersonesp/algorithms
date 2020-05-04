// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = (nums) => {
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));

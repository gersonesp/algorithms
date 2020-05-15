// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hash.hasOwnProperty(difference)) {
            return [hash[difference], i ]
        }
        hash[nums[i]] = i;
    }
};

const nums = [2, 7, 11, 15]
const target = 9

const nums1 = [3,3]
const target1 = 6;

console.log(twoSum(nums, target))
console.log(twoSum(nums1, target1))
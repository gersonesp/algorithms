// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = (nums, k) => {

    if (k === 0 || nums.length === 1) {
        return nums;
    }

    while(k > 0) {
        nums.unshift(nums[nums.length-1]);
        nums.splice(-1, 1);
        k--;
    }

    return nums;
};

const nums = [1,2,3,4,5,6,7]
const k = 3;

// [5,6,7,1,2,3,4]

const nums2 = [-1,-100,3,99]
const k2 = 2

// [3,99,-1,-100]

const nums3 = [1,2,3]
const k3 = 2

// [2, 3, 1]

console.log(rotate(nums, k))
console.log(rotate(nums2, k2))
console.log(rotate(nums3, k3))
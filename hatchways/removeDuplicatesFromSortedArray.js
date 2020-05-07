// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = (nums) => {
    let seen = new Set()

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (seen.has(num)) {
            nums.splice(i, 1);
            i--;
        }

        seen.add(num)
    }

    return nums.length;
};

const arr1 = [1,1,2];
const arr2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))
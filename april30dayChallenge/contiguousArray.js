// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1. 

const findMaxLength = (nums) => {
    let hash = {0: -1}
    let count = 0;
    let max = 0;

    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 0) count--;
        else count++;
    
        if (hash[count]!=null) max = Math.max(max, i - hash[count]);
        else hash[count] = i 
    }

    return max;
};

const arr1 = [0,1]
const arr2 = [0,1,0]
const arr3 = [0,0,0,1,1,1,0]
const arr4 = [0,1,1]

console.log(findMaxLength(arr1))
console.log(findMaxLength(arr2))
console.log(findMaxLength(arr3))
console.log(findMaxLength(arr4))
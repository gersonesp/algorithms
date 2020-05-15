// Given an array of integers, find if the array contains any duplicates.

const containsDuplicate = (nums) => {
    let hash = {}

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if(hash.hasOwnProperty(num)) {
            return true;;
        } else {
            hash[num] = true;
        }
    }

    return false;
};

const input = [1,2,3,1]
// Output: true

const input2 = [1,2,3,4]
// Output: false

const input3 = [1,1,1,3,3,4,3,2,4,2]
// Output: true

console.log(containsDuplicate(input))
console.log(containsDuplicate(input2))
console.log(containsDuplicate(input3))
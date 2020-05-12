// Given two arrays, write a function to compute their intersection.

const intersect = (nums1, nums2) => {
    let hash = {};
    let result = []

    for(let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        if(hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1;
        }
    }

    for(let j = 0; j < nums2.length; j++) {
        let num = nums2[j];

        if(hash.hasOwnProperty(num) && hash[num] > 0) {
            result.push(num)
            hash[num]--
        }
    }

    return result;
};


const nums1 = [1,2,2,1]
const nums2 = [2,2]
// Output: [2,2]

const nums3 = [4,9,5]
const nums4 = [9,4,9,8,4]
// Output: [4,9]

console.log(intersect(nums1, nums2))
console.log(intersect(nums3, nums4))
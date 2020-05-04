// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

const singleNumber = (nums) => {
  let seen = {};

  nums.map((num) => {
    if (seen[num]) {
      delete seen[num];
    } else {
      seen[num] = true;
    }
  });

  return Number(Object.keys(seen)[0]);
};

const numsOne = [2, 2, 1];
const numsTwo = [4, 1, 2, 1, 2];

console.log(singleNumber(numsOne));
console.log(singleNumber(numsTwo));

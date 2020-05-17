// Given a non-empty array of integers, return the third maximum number in this array.
// If it does not exist, return the maximum number. The time complexity must be in O(n).

const thirdMax = (nums) => {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (current === first || current === second || current === third) {
      continue;
    }

    if (current > first) {
      [first, second, third] = [current, first, second];
      continue;
    }

    if (current > second) {
      [second, third] = [current, second];
      continue;
    }

    if (current > third) {
      third = current;
      continue;
    }
  }

  return third !== -Infinity ? third : first;
};

const input1 = [3, 2, 1];
// Output: 1

const input2 = [1, 2];
// Output: 2

const input3 = [2, 2, 3, 1];
// Output: 1

console.log(thirdMax(input1));
console.log(thirdMax(input2));
console.log(thirdMax(input3));

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = (s) => {
  return reverseFunc(s, 0, s.length - 1);
};

const reverseFunc = (arr, start, end) => {
  if (start >= end) {
    return arr;
  }

  [arr[start], arr[end]] = [arr[end], arr[start]];

  return reverseFunc(arr, start + 1, end - 1);
};

const arr1 = ["h", "e", "l", "l", "o"];
const arr2 = ["H", "a", "n", "n", "a", "h"];

console.log(reverseString(arr1));
console.log(reverseString(arr2));

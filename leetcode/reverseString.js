// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = (s) => {
    return s.reverse();
};

const arr1 = ["h","e","l","l","o"];
const arr2 = ["H","a","n","n","a","h"];

console.log(reverseString(arr1))
console.log(reverseString(arr2))
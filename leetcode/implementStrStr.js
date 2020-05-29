// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

const strStr = (haystack, needle) => {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let curr = haystack.slice(i, i + needle.length);
    if (curr === needle) {
      return i;
    }
  }

  return -1;
};

const haystack1 = "hello";
const needle1 = "ll";
// Output: 2

const haystack2 = "aaaaa";
const needle2 = "bba";
// Output: -1

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));

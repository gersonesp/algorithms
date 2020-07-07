// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false
// 1c, 1d, 1e, 1o

// Example 2:

// Input: "aab" => aba
// Output: true
// Example 3:

// 2a 1b

// Input: "carerac"
// Output: true
// 2a, 2r, 2a, 1e

// abab
// 2a 2b

function isPermutationPalindrome(s) {
  // const reverseStr = s.split('').reverse().join('')
  let characters = {};

  for (let i = 0; i < s.length; i++) {
    if (characters.hasOwnProperty(s[i])) {
      characters[s[i]]++;
    } else {
      characters[s[i]] = 1;
    }
  }

  let oddCount = 0;

  for (keys in characters) {
    if (characters[keys] % 2 !== 0) {
      oddCount++;
    }

    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

console.log(isPermutationPalindrome("code"));
console.log(isPermutationPalindrome("aab"));
console.log(isPermutationPalindrome("carerac"));
console.log(isPermutationPalindrome("aabb"));

// """
// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

// """

const findTheDifference = (s, t) => {
  let hash = {};

  // for loop => t => check for values in hash
  for (let i = 0; i < t.length; i++) {
    let tLetter = t[i];
    if (hash.hasOwnProperty(tLetter)) {
      hash[tLetter] = hash[tLetter] + 1;
    } else {
      hash[tLetter] = 1;
    }
  }

  // for loop => s => hash
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];

    if (hash.hasOwnProperty(sLetter)) {
      hash[sLetter] = hash[sLetter] - 1;

      if (hash[sLetter] < 1) {
        delete hash[sLetter];
      }
    }
  }

  let letter = Object.keys(hash);
  return letter[0];
};

console.log(findTheDifference("abcd", "abcde"));
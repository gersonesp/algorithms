// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// You may return the answer in any order.

const commonChars = (A) => {
  let allWords = {};

  A.forEach((word, idx) => {
    const currentWord = {};

    for (const char of word) {
      currentWord[char] = currentWord[char] ? currentWord[char] + 1 : 1;
    }
    if (idx === 0) {
      allWords = currentWord;
    } else {
      for (const char in allWords) {
        allWords[char] = Math.min(allWords[char] || 0, currentWord[char] || 0);
      }
    }
  });

  const res = [];

  for (const char in allWords) {
    for (let i = 0; i < allWords[char]; i++) {
      res.push(char);
    }
  }
  return res;
};

const input1 = ["bella", "label", "roller"];
// Output: ["e","l","l"]

const input2 = ["cool", "lock", "cook"];
// Output: ["c","o"]

console.log(commonChars(input1));
console.log(commonChars(input2));

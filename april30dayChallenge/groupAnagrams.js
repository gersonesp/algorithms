// Given an array of strings, group anagrams together.

const groupAnagrams = (strs) => {
  let storage = {};
  let word;

  for (let i = 0; i < strs.length; i++) {
    word = strs[i].split("").sort();
    if (storage.hasOwnProperty(word)) {
      storage[word].push(strs[i]);
    } else {
      storage[word] = [strs[i]];
    }
  }

  return Object.values(storage);
};

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr));

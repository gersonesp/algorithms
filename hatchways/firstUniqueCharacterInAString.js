// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1. 

const firstUniqChar = (s) => {
    const unique = {};
    const removed = {};

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if(unique.hasOwnProperty(letter)) {
            removed[letter] = true;
            delete unique[letter];
        } 
        
        if (!removed.hasOwnProperty(letter)) {
            unique[letter] = i;
        }
    }

    const uniqueValues = Object.values(unique).sort((a, b) => a - b)

    if (uniqueValues.length > 0) {
        return uniqueValues[0];
    } else {
        return -1;
    }
};

const s1 = "leetcode"
// return 0.

const s2 = "loveleetcode"
// return 2.

const s3 = "cc"
// return -1.

console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))
console.log(firstUniqChar(s3))
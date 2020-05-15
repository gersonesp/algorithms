// Given two strings s and t , write a function to determine if t is an anagram of s.

const isAnagram = (s, t) => {
    // const sortedS = s.split('').sort();
    // const sortedT = t.split('').sort();

    // return sortedS.join('') === sortedT.join('') ? true : false;

    const lettersInS = {}

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (lettersInS.hasOwnProperty(letter)) {
            lettersInS[letter]++;
        } else {
            lettersInS[letter] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        const letter = t[i];

        if (lettersInS.hasOwnProperty(letter)) {
            lettersInS[letter]--;

            if(lettersInS[letter] === 0) {
                delete lettersInS[letter]
            }
        } else {
            return false;
        }
    }

    return Object.keys(lettersInS).length === 0 ? true : false;
};

const s = "anagram";
const t = "nagaram";
// true

const s1 = "rat";
const t1 = "car";
// false

const s3 = "ab";
const t3 = "a";
// false

console.log(isAnagram(s, t))
console.log(isAnagram(s1, t1))
console.log(isAnagram(s3, t3))
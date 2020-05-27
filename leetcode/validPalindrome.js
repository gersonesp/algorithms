// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

const isPalindrome = (s) => {
  const regex = /[^A-Za-z0-9]/g;
  const str = s.toLowerCase().replace(regex, "");
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

const input1 = "A man, a plan, a canal: Panama";
// Output: true

const input2 = "race a car";
// Output: false

console.log(isPalindrome(input1));
console.log(isPalindrome(input2));

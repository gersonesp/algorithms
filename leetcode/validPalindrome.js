// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

const isPalindrome = (s) => {
  const regex = /[a-z0-9]/i;
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (!regex.test(s[i])) {
      i++;
    } else if (!regex.test(s[j])) {
      j--;
    } else if (s[i++].toLowerCase() !== s[j--].toLowerCase()) {
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

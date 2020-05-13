// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

const plusOne = (digits) => {
    if (digits[digits.length-1] + 1 <= 9) {
        digits[digits.length-1] += 1;
        return digits;
    }

    for(let i = digits.length - 1; i >= 0; i --){
        if(digits[i] === 9){
          digits[i] = 0;
        }
        else {
          digits[i] ++;
          return digits;
        }
      }
      return [1, ...digits];
};

const input = [1,2,3]
// Output: [1,2,4]

const input2 = [4,3,2,1]
// Output: [4,3,2,2]

const input3 = [1,2,9]
// Output: [1,3,0]

const input4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

console.log(plusOne(input))
console.log(plusOne(input2))
console.log(plusOne(input3))
console.log(plusOne(input4))
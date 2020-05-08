// Given a 32-bit signed integer, reverse digits of an integer.

const reverse = (x) => {
    let lastDigit;
    let reverse = 0;
    let isNegative = false;

    if (x < 0) {
        x *= -1;
        isNegative = !isNegative;
    }
    
    while(x > 0) {
        lastDigit = x % 10;
        reverse = (reverse * 10) + lastDigit;
        x = Math.floor(x / 10); 
    }

    if (reverse >= 2147483647) {
        return 0;
    }

    return isNegative ? reverse * -1 : reverse;
};

const num1 = 123;
const num2 = -123;
const num3 = 120;
const num4 = 1534236469;

console.log(reverse(num1));
console.log(reverse(num2));
console.log(reverse(num3));
console.log(reverse(num4));
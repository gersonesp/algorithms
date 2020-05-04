// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

const isHappy = (n) => {
  let total = n;
  let arrayOfN = n.toString().split("");

  let seen = new Set([n]);

  while (total !== 1) {
    total = arrayOfN.reduce(
      (accum, value) => accum + Math.pow(Number(value), 2),
      0
    );
    arrayOfN = total.toString().split("");

    if (seen.has(total)) {
      return false;
    } else {
      seen.add(total);
    }
  }

  return true;
};

const num = 19;

console.log(isHappy(num));

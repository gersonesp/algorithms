// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

const maxProfit = (prices) => {
  let profit = 0;
  let leftIndex = 0;
  let rightIndex = 1;

  while (rightIndex < prices.length) {
    let leftVal = prices[leftIndex];
    let rightVal = prices[rightIndex];

    if (rightVal > leftVal) {
      profit += rightVal - leftVal;
      leftIndex++;
      rightIndex++;
    } else {
      leftIndex++;
      rightIndex++;
    }
  }

  return profit;
};

const pricesOne = [7, 1, 5, 3, 6, 4];
const pricesTwo = [1, 2, 3, 4, 5];
const pricesThree = [7, 6, 4, 3, 1];

console.log(maxProfit(pricesOne));
console.log(maxProfit(pricesTwo));
console.log(maxProfit(pricesThree));

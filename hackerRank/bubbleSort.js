const countSwaps = (a) => {
  let swaps = 0;
  let first, last;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }

  first = a[0];
  last = a[a.length - 1];

  return `
    Array is sorted in ${swaps} swaps.
    First Element: ${first}
    Last Element: ${last}
    `;
};

const input = [3, 2, 1];
console.log(countSwaps(input));

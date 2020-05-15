// Given a 2D Array:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Print the largest (maximum) hourglass sum found in arr.

// 19

const hourglassSum = (arr) => {
    let maxSum = -Infinity;

    for(let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++) {
            let sum = 0;
            sum = arr[x][y] + arr[x][y + 1] + arr[x][y + 2] + arr[x + 1][y + 1] + arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];
            
            if (sum > maxSum) {
                 maxSum = sum;
            }
        }
    }


    return maxSum;
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(arr))
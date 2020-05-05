// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

//     If x == y, both stones are totally destroyed;
//     If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)


const lastStoneWeight = (stones) => {
    let stonesArr = stones;
    let y, x;

    while(stonesArr.length > 1) {
        y = Math.max(...stonesArr)
        let yMaxIndex = stonesArr.indexOf(y)
        stonesArr.splice(yMaxIndex,1)

        x = Math.max(...stonesArr);
        let xMaxIndex = stonesArr.indexOf(x)
        stonesArr.splice(xMaxIndex, 1)

        if (y - x > 0) {
            stonesArr.push(y - x)
        } else {
            continue;
        }
    }

    return stonesArr;
};

const arr = [2,7,4,1,8,1];

console.log(lastStoneWeight(arr))
/*
380. Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

*/

/**
 * Initialize your data structure here.
 */

var RandomizedSet = function () {
  this.values = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */

/*
[]
1
[1]
*/
RandomizedSet.prototype.insert = function (val) {
  if (!this.values.hasOwnProperty(val)) {
    this.arr.push(val);
    this.values[val] = this.arr.length - 1;
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
/*
[1,2,3,4,5]
[1,2,5,4,5]
rem(3)
{3:2}
*/
RandomizedSet.prototype.remove = function (val) {
  if (this.values.hasOwnProperty(val)) {
    const index = this.values[val];
    this.arr[index] = this.arr[this.arr.length - 1];
    this.values[this.arr[this.arr.length - 1]] = index;
    this.arr.pop();
    delete this.values[val];
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomNum = Math.floor(Math.random() * this.arr.length);

  return this.arr[randomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1));

// 2 was already in the set, so return false.
console.log(randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());

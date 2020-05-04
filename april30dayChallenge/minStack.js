// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//     push(x) -- Push element x onto stack.
//     pop() -- Removes the element on top of the stack.
//     top() -- Get the top element.
//     getMin() -- Retrieve the minimum element in the stack.

const Node = function (val) {
  this.val = val;
  this.min = null;
};

const MinStack = function (stack) {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  let newNode = new Node(x);
  newNode.min = this.getMin() < x ? this.getMin() : x;
  this.stack.push(newNode);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

MinStack.prototype.getMin = function () {
  return this.stack.length === 0
    ? Infinity
    : this.stack[this.stack.length - 1].min;
};

const minStack = new MinStack([]);

minStack.push(-2);
console.log("push ", minStack);

minStack.push(0);
console.log("push ", minStack);

minStack.push(-3);
console.log("push ", minStack);

console.log("getMin ", minStack.getMin());

minStack.pop();
console.log("pop ", minStack);

console.log("getTop ", minStack.top());

console.log("getMin ", minStack.getMin());

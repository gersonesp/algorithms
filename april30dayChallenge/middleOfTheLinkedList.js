// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

const middleNode = (head) => {
  let node = head;
  let storage = [];
  let length = 0;

  while (node) {
    length++;
    storage.push(node);
    node = node.next;
  }

  const middleNode = length / 2;

  return length % 2 === 0
    ? storage[middleNode]
    : storage[Math.floor(middleNode)];
};

const nodeOne = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

const nodeTwo = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
    },
  },
};

console.log(middleNode(nodeOne));
console.log(middleNode(nodeTwo));

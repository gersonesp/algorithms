// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to.
// If pos is -1, then there is no cycle in the linked list.

var hasCycle = function (head) {
  let node = head;
  let hash = {};

  while (node !== null) {
    if (hash[node.val]) {
      for (let i = 0; i < hash[node.val].length; i++) {
        if (node === hash[node.val][i]) {
          return true;
        }
      }

      hash[node.val].push(node);
    } else {
      hash[node.val] = [node];
    }
    node = node.next;
  }

  return false;
};

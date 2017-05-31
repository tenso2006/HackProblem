// A binary search tree is a binary tree in which, for each node:

// The node's value is greater than all values in the left subtree.
// The node's value is less than all values in the right subtree.
// BSTs are useful for quick lookups. If the tree is balanced, we can search for a given value in the tree in O(\lg{n})O(lgn) time.

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

//method isBinarySearchTree
BinaryTreeNode.prototype.isBinarySearchTree = function() {
  //check if the current node has a value
  if(this.value) {
    //check if the node left less than current node value
    if(this.left !== null) {
      if(this.left.value < this.value) {
      //if yes, call isBinarySearchTree on the left node
      this.left.isBinarySearchTree();
      } else {
        //if not, return false
        return false;
      }
    }

    //check if the node right greater than the current node value
    if(this.right !== null && this.right.value > this.value) {
      //if yes, call the isBinarySearchTree on the right node
      this.right.isBinarySearchTree();
    } else {
      //if not, return false
      return false;
    }
  }
  return true;
  //return true
};

var node = new BinaryTreeNode(2);
node.insertLeft(1);
node.insertRight(2);
//console.log(node);

console.log(node.isBinarySearchTree());

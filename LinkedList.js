var LinkedList = function () {
  this.head = null;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};


// [10] -> [20] -> [30] -> null
LinkedList.prototype.size = function () {
  var count = 0;
  var current = this.head;

  while(current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

//[20] -> [30] -> [50] -> null
LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while(current !== null) {
    if(current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

var list = new LinkedList();
console.log(list.isEmpty());
console.log(list.size());
console.log(list.contains());

LinkedList.prototype.prepend = function () {

};

LinkedList.prototype.append = function () {

};

LinkedList.prototype.remove = function () {

};
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

var list = new LinkedList();
console.log(list.isEmpty());
console.log(list.size());

LinkedList.prototype.contains = function () {

};

LinkedList.prototype.prepend = function () {

};

LinkedList.prototype.append = function () {

};

LinkedList.prototype.remove = function () {

};
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

//[4] -> [8] -> [9] -> [2] -> null
LinkedList.prototype.prepend = function (val) {

  var newNode = {
    val: val,
    next: this.head
  };

  this.head = newNode;
};

// [23] -> [4] -> [4] -> [2] -> null

LinkedList.prototype.append = function (val) {

  var newNode = {
    val: val,
    next: null
  };

  if(this.isEmpty()) {
    this.head = newNode;
    return;
  }

  var current = this.head;
  while(current.next !== null) {
    current = current.next;
  }

  current.next  = newNode;
};



LinkedList.prototype.remove = function (val) {
  if(!this.contains(val)){
    return;
  }

  if(this.head.val === val) {
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var curr = this.head;

  while(curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
};

var list = new LinkedList();
list.prepend(5);
list.prepend(8);
console.log(list.isEmpty());
console.log(list.size());
console.log(list.contains());
console.log(list);
list.append(1);
console.log(list);
list.remove(8);
console.log(list);
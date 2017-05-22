var LinkList = function (val){
  this.head = null;
  this.tail = null;
};

LinkList.prototype.makeNode = function (val) {
  var node = {};
  node.val = val;
  node.next = null;
  return node;
};

LinkList.prototype.addToHead = function (val) {
  var newNode = this.makeNode(val);
  if(!this.head) {
    this.head = newNode;
  }
};
var addTwoLinkList = function (l1, l2) {
  //if l1 is null return l2;
  if(l1 === null) return l2;

  //if l2 is null return l1;
  if(l2 === null) return l1;

  var result = new LinkList(0);
  var sum = 0;
  var carry = 0;

  while(l1 !== null || l2 !== null || sum > 0) {
    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if(sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    result.next = new LinkList(sum);
    result = result.next;

    sum = carry;
    carry = 0;
  }
};


// function LinkList () {
//     this.head = null;
// }

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var prepend = function (linklist, val) {
//     var current = linklist.head;
//     var newNode = {
//         val: val,
//         next: current
//     };
//     linklist.head = newNode;
// };

// var reverse = function (linklist) {

//     var result = new LinkList();
//     var current = linklist.head;
//     while(current !== null) {
//         prepend(result, current.val);
//         current = current.next;
//     }
//     return result;
// };

// var checkLength = function (linklist) {
//     var count = 0;
//     var current = linklist.head;
//     while(current !== null) {
//         count++;
//         current = current.next;
//     }
//     return count;
// };

// // [3]->[6]->[8]->[9]-> null  3778
// // [8]->[9]-> null

// // [3]->[6]->[8]->[9]-> null  3778
// // [0]->[0]->[8]->[9]-> null

// // [9]->[8]->[6]->[3]-> null 8773
// // [9]->[8]->[0]->[0]-> null


// var addTwoNumbers = function (l1,l2) {
//     var l1Length = checkLength(l1);
//     var l2Length = checkLength(l2);
//     var diff;
//     if( l1Length > l2Length) {
//         diff = l1Length - l2Length;
//         while(diff) {
//             prepend(l2, 0);
//             diff--;
//         }
//     } else {
//         diff = l2Length - l1Length;
//         while(diff) {
//             prepend(l1,0);
//             diff--;
//         }
//     }

//     console.log(l1);
//     console.log(l2);

//     reverse(l1);
//     reverse(l2);
//     console.log(l1);
//     console.log(l2);

// };

// var list1 = new LinkList();
// var list2 = new LinkList();

// prepend(list1, 8);
// prepend(list2, 4);
// prepend(list2, 9);
// prepend(list2, 9);

// // console.log(list);
// // //console.log(reverse(list));
// // console.log(reverse(list));
// // console.log(checkLength(list));
// //console.log(list);

// console.log(addTwoNumbers(list1,list2));
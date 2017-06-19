// [2,3,4,5,3,2] ,3
// [2,3,4]
// [5,3,3]
// find max and min and median



var deviation = function (array, size) {
  var acc = [];
  for(var i = 0; i < array.length; i++) {
    var seq = [];
    var med;
    for(var j = 0; j < size; j++) {

      seq.push(array[i]);
      i++;
    }
    i--;
    med = Math.max(...seq) - Math.min(...seq);
    acc.push(med);
  }
  return Math.max(...acc);
};

console.log(deviation([2,3,4,5,3,12,],3));
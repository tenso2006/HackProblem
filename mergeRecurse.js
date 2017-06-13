var mergeRecurse = function (arr1, arr2) {
  if(arr1.length === 0) {
    return arr2;
  }
  if(arr2.length === 0) {
    return arr1;
  }
  if(arr1[0] < arr2[0]) {
    return [arr1[0]].concat(mergeRecurse(arr1.slice(1), arr2));
  } else {
    return [arr2[0]].concat(mergeRecurse(arr1, arr2.slice(1)));
  }
};

console.log(mergeRecurse([1,2,3],[0,4,8,90]));
module.exports = mergeRecurse;
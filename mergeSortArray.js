(function (){
  // var mergeSortArrayNlogN = function (arr1, arr2) {
  //   var mergeArray = arr1.concat(arr2);
  //   return mergeArray.sort(function (a,b) {
  //     return a - b;
  //   });
  // };
  // console.log(mergeSortArrayNlogN([2,3,5,7],[1,6,8,9]));

  var mergeSortArrayLinear = function (arr1, arr2) {

    var mergeArray = [];

    while((arr1.length + arr2.length) > 0 ) {
      var headArr1 = arr1[0];
      var headArr2 = arr2[0];
      if (headArr1 < headArr2) {
        mergeArray.push(arr1.shift());
      } else {
        mergeArray.push(arr2.shift());
      }
    }
    return mergeArray;
  };
  console.log(mergeSortArrayLinear([2,3,5,7,9],[5,6,8,9]));
})();
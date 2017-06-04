// [1,2] , [2,3,4] -> [1,2,2,3,3,4]

//merge two sorted array into single sorted array using for loop iterative method

var merge = function (arr1, arr2) {
  var result = [];
  var i;
  var j;
  for (i = 0, j = 0; i < arr1.length && j < arr2.length; i++, j++) {
    if(arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      j--;
    } else {
      result.push(arr2[j]);
      i--;
    }
  }

  if( i < arr1.length ) {
    result = result.concat(arr1.slice(i));
  }
  if( j < arr2.length ) {
    result.concat(arr2.slice(j));
  }

  return result;
};

console.log(merge([1,2,7,9,10], [2,3,4,8]));
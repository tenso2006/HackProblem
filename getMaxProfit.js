(function (){
  var getMaxProfit = function (arr) {
    var minVal = arr[0];
    var maxProfit = 0;
    arr.forEach(function (val, i) {
      // if(val < minVal) {
      //   minVal = val;
      // }
      minVal = Math.min(val, minVal);
      maxProfit = Math.max(maxProfit, val - minVal);
    });
    return maxProfit;
  };
  console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
})();

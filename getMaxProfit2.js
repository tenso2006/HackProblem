//[10,7,4,5,1,9]
//[10 - 10, 7 -10, 4 -10, 5 -10, 1 -10, 9 -10]
//[7 - 10, 7- 7, 7 - 4, 7 - 5, 7 - 1, 7 - 9]
//[4 - 10, 4- 7, 4 - 4, 4 - 5, 4 - 1, 4 - 9]
//[5 - 10, 5- 7, 5 - 4, 5 - 5, 5 - 1, 5 - 9]
//[1 - 10, 1- 7, 1 - 4, 1 - 5, 1 - 1, 1 - 9]
//[9 - 10, 9- 7, 9 - 4, 9 - 5, 9 - 1, 9 - 9]
var getMaxProfit2 = function (stock) {
  if(stock.length < 2) {
    throw new Error('Getting profit requires 2 prices');
  }

  var minVal = stock[0];
  var maxProfit = stock[1] - stock[0];

  for(var i =1; i < stock.length; i++) {
    var currentPrice = stock[i];
    var potentialProfit = currentPrice - minVal;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minVal = Math.min(minVal, currentPrice);
  }
  return maxProfit;
};

console.log(getMaxProfit2([10,7,4,5,1,9]));
//function to check if string is palindrome or not
(function (){
  'use strict';
  var palindrome = function (string) {
    var result = true;
    for(var i=0; i < string.length / 2; i++) {
      if(string[i] !== string[string.length -1 - i]) {
        result = result && false;
      }
    }
    return result;
  };
  console.log(palindrome('civic'));
})();
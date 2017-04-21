//first duplicate char in string


//input : 'i am sonam san'
//output: 'a'

// temp = {
  // 'i': 1,
  // 'a': 1,
  // 'm': 1,
  // 's': 1,
  // 'o': 1,
  // 'n': 1,
//}

// take the string
  // placeholder for tempMem;
  // iterate over the string
    //check if char is in tempMem
      //if so, return the char
    //tempMem[char] = 1,
  //return no duplicate found


(function (){
  var findFirstDuplicate = function (str) {
    var tempMem = {};
    var res = '';
    for( var i = 0; i < str.length; i++) {
      if(tempMem.hasOwnProperty(str[i]) && str[i] !== ' ') {
        //console.log(tempMem);
        res = str[i];
        break;
      }
      if(str[i] !== ' ') {
        tempMem[str[i]] = 1;
      }
    }
    console.log(res || 'No duplicate character in this string');
  };
  findFirstDuplicate('I am a sonam son');
})();
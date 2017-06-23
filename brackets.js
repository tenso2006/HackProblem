// input -> [{[]}()]
// output -> boolean

//to check if each brackets has closing pair and nested properly

var isBracketsMatching = function (brackets) {
  //stackup the open brackets
  var openBracketsStack = [];

  //keep the brackets pairs
  var closeOpenBracketPair = {
    '}': '{',
    ']': '[',
    ')': '(',
    '>': '<'
  };

  //go over the brackets string
  for (var i = 0; i < brackets.length; i++) {
    //check if bracket is open type?
    if (!(brackets[i] in closeOpenBracketPair)){
      //send to open bracket stack
      openBracketsStack.push(brackets[i]);
    } else {
      // if not(it is closed type)
      // find the correnponding open bracket
      var openPair = closeOpenBracketPair[brackets[i]];

      // find the last open bracket in the stack
      var lastOpenBracketInStack = openBracketsStack[openBracketsStack.length -1];

      // check if last stacked open brackets is same as this open bracket
      if ( lastOpenBracketInStack === openPair) {

        // if it is same, pop out the last open bracket
        openBracketsStack.pop();
      } else {
        // if not same, return false
        return false;
      }

    }
  }
  //otherwise return true
  if(openBracketsStack.length) {
    return false;
  }
  return true;
};

console.log(isBracketsMatching('[[[[[[[[[[{{{{{{{{{{}}}}}}}}}}]]]]]]]]]]((((({{{{{[[[[[]]]]]}}}}})))))'));



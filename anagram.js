var isAnagram = function (source, target) {
  source = source.toUpperCase().split('').sort().join('');
  target = target.toUpperCase().split('').sort().join('');
  return source === target;
};

var isAnagramOn = function (source, target) {
  var allChar = {};
  for(var i =0; i< source.length; i++) {
    var char = source[i];
    if (char in allChar) {
      allChar[char]++;
    } else {
      allChar[char] = 1;
    }
  }

  for(var j =0; j< target.length; j++) {
    var tar = target[j];
    if(tar in allChar) {
      allChar[tar]--;
    } else {
      return false;
    }
  }

  for(var key in allChar) {
    if(allChar[key]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnagramOn('can', 'nac'));
// console.log(isAnagramOn('can', 'acn'));
// console.log(isAnagramOn('can', 'acb'));

// console.log(isAnagram('can', 'nac'));
// console.log(isAnagram('can', 'acn'));
// console.log(isAnagram('can', 'acb'));

var anagramPair = function (arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach(function (word, i) {
    if(isAnagramOn(word, arr2[i])) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
};

//anagramPair(['dog', 'cat', 'horse'],['god','tac', 'sehor']);
anagramPair(['dog', 'cat', 'horse'],['god','tac', 'saehor']);
//go over each string in first array
  //generate all possible anagram of the string
  //check if other string pair is one of the possible anagram.
    //if it is anagram, then return 1
    //else return 0


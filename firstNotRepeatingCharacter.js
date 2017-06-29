function firstNotRepeatingCharacter(s) {
    //declare a obj to hold the unique char count
    var obj = {};
    var arr = [];
    var nonRepeat = [];

    //iterate over the string s to build obj to find unique char count
    for(var i=0; i< s.length; i++) {
        if(obj.hasOwnProperty(s[i])) {
            obj[s[i]]++;
            nonRepeat.splice(nonRepeat.indexOf(s[i]),1);
        } else {
            obj[s[i]] = 1;
            nonRepeat.push(s[i]);
        }
    }

    return nonRepeat.length === 0 ? '_' : nonRepeat[0];

    // //iterate over obj to take out all the key with 1 as count in arr
    // for(var key in obj) {
    //     if(obj[key] === 1) {
    //         arr.push(key);
    //     }
    // }
    // console.log(nonRepeat);
    // //iterate over the string s again to check if any letter is in arr
    // for(var j=0; j< s.length; j++) {
    //     if (arr.includes(s[j])) {
    //         return s[j];
    //     }
    // }

    // return '_';
}

console.log(firstNotRepeatingCharacter('abcd'));
console.log(firstNotRepeatingCharacter('abacdb'));

module.exports = firstNotRepeatingCharacter;
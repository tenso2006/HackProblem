function firstDuplicate(a) {
    var result = -1;
    var occurence = {};
    for(var i=0; i < a.length; i++) {
        if(occurence.hasOwnProperty(a[i])) {
            occurence[a[i]]++;
            result = a[i];
            break;
        } else {
            occurence[a[i]] = 1;
        }
    }
    return result;
}

module.exports = firstDuplicate;

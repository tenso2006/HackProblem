(function () {
    var longestPalindrome = function (str) {
        var longest = '';
        for(var i = 0; i < str.length; i++) {
            var curr = str[i];
            var first;
            for(var j = i+1; j <str.length; j++) {
                if(curr.toLowerCase() === str[j].toLowerCase()) {
                    first = j;
                    var substring = str.slice(i, first +1);
                    if(substring.length > longest.length && substring.toLowerCase() === substring.split('').reverse().join('').toLowerCase()) {
                        longest = substring;
                    }
                }

            }
        }
        return longest;
    };
    console.log(longestPalindrome("My dad is  a racecar athlete"));
})();

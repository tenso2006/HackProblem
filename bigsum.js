process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result = 0;
    if(a.length === a[0].length) {
        var diagonalSumLR = 0;
        var diagonalSumRL = 0;
        var length = a.length;
        a.forEach(function (row, i) {
            result += row[i];
            diagonalSumLR += row[i];
            diagonalSumRL += row[--length];
        });
        if(diagonalSumLR > diagonalSumRL) {
            result = diagonalSumLR - diagonalSumRL;
        } else {
            result = diagonalSumRL - diagonalSumLR;
        }
    }
    console.log(result);
}

main();
// var hill = function (v) {
//   //declare  a variable for result
//   var result = [];

//   //create a copy of the input
//   var copy = v.slice();

//   //declare a sortedArray
//   var sortedArray = [];

//   //sort the v and save it in new variable
//   //check the minimum in the array and push it in new sorted list
//   var min = Math.min(...copy);
//   sortedArray.push(min);

//   //remove the minimum from the array
//   copy.splice(copy.indexOf(min),1);

//   //check the diff between current value and the last minimum value
//   for(var i =0; i < v.length; i++) {
//     result.push(v[i] - min);
//   }
//   console.log(min, copy, result);
//   // save the diff in result array
//   //return the max value in the sortedArray

//};

function hill(v) {
    var copy  = v.slice(0).sort();
    var max   = 0;

    for(var i = 0; i < v.length; i++) {
        var a = v[i];
        var b = copy[i];
        console.log(a,b);
        // Difference
        if(a < b && ((b-a) > max)) {
            max = b - a;
        } else if(a-b > max) {
            max = a - b;
        }
    }

    return max;
}

console.log(hill([5,4,3,2,8]));

// function hill(v) {
//   var state = { off: null, max: null };
//   for (var i=0; i<v.length; i++) {
//     if (i === 0) {
//       state.off = 0;
//       state.max = v[i];
//     } else {
//       if (v[i] > state.max) {
//         state.max = v[i];
//       } else {
//         var o = state.max - v[i];
//         if (o > state.off) {
//           state.off = o;
//         } else if (o === state.off) {
//           state.off = state.off + 1;
//         } else {
//           // keep same state.off
//         }
//         state.max = state.max;
//       }
//     }
//   }
//   console.log(state.off);
// }

// hill([5,4,3,2,8]);
// hill([5,4,3,0,8]);
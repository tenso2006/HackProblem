//var mocha = require('mocha');
var merge = require('./merge.js');
var expect = require('chai').expect;
describe('merge function ', function (){
  it('merges two array', function () {
    var arr1 = [2,3,4];
    var arr2 = [4,5,5];
    //console.log(merge);
    expect(merge(arr1, arr2)).to.deep.equal([2,3,4,4,5,5]);
  });
});

var mergeRecurse = require('./mergeRecurse.js');

describe('merge using recursion ', function () {
  it('merges two array', function () {
    var arr1 = [2,3,4];
    var arr2 = [4,5,5];
    //console.log(merge);
    expect(merge(arr1, arr2)).to.deep.equal([2,3,4,4,5,5]);
  });
});
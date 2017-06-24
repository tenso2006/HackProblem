//var mocha = require('mocha');
var merge = require('./merge.js');
var expect = require('chai').expect;
var assert = require('assert');
var firstDuplicate = require('./firstDuplicate.js');

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

describe('first Duplicate ', function () {

  it('returns -1 if array has no duplicate values', function () {
    var arr = [2,3,4,1];
    assert.equal(firstDuplicate(arr), -1);
  });

  it('returns the value in array that has duplicate', function () {
    var arr = [2,3,2,1];
    assert.equal(firstDuplicate(arr), 2);
  });

  it('returns the value in array that has least index number of duplicated value', function () {
    var arr = [1,2,3,2,3,1];
    assert.equal(firstDuplicate(arr), 2);
  });

});

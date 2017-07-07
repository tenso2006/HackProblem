//var mocha = require('mocha');
var merge = require('./merge.js');
var expect = require('chai').expect;
var assert = require('assert');
var firstDuplicate = require('./firstDuplicate.js');
var firstNotRepeatingCharacter = require('./firstNotRepeatingCharacter.js');

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


describe('first Not Repeating Character ', function () {

  it('returns _ if string has all repeating character', function () {
    var s = 'aabbcc';
    assert.equal(firstNotRepeatingCharacter(s), '_');
  });

  it('returns the character in string that is not repeated', function () {
    var s = 'abcdabc';
    assert.equal(firstNotRepeatingCharacter(s), 'd');
  });

  it('returns the first non repeated character in string', function () {
    var s = 'abcdba';
    assert.equal(firstNotRepeatingCharacter(s), 'c');
  });

});

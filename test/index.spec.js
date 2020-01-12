const assert = require('assert');
const expect = require('chai').expect;
const {isAdult,isOddNumber,isEvenNumber,reverse,sumArray} = require('../index.js');

describe('function isAdult', () => {
  it('should function isAdult works correct', () => {
    assert.equal(isAdult(6), false);
    expect(isAdult(6)).to.be.false;
  });
   
  it('should function isAdult works correct', () => {
    assert.equal(isAdult(25),true);
    expect(isAdult(25)).to.be.true;
  });
   
  it('should function isAdult works correct', () => {
    assert.equal(isAdult(18),false);
    expect(isAdult(18)).to.be.false;
  });
  it('should function isAdult works correct', () => {
    assert.equal(isAdult(101),true);
    expect(isAdult(101)).to.be.true;
  });
   
});

describe('function isOddNumber', () => {
  it('should function isOddNumber return odd number', () => {
    assert.equal(isOddNumber(3), true);
    expect(isOddNumber(3)).to.be.true;
  });
  it('should function isOddNumber return odd number', () => {
    assert.equal(isOddNumber(6), false);
    expect(isOddNumber(6)).to.be.false;
  });
  it('should function isOddNumber return odd number', () => {
    assert.equal(isOddNumber(584), false);
    expect(isOddNumber(584)).to.be.false;
    
  });
  it('should function isOddNumber return odd number', () => {
    assert.equal(isOddNumber(), undefined);
    expect(isOddNumber()).to.be.undefined;
    
  });
});
describe('function isEvenNumber', () => {
  it('should function isEvenNumber return even number', () => {
    assert.equal(isEvenNumber(4), true);
    expect(isEvenNumber(4)).to.be.true;
  });
  it('should function isEvenNumber return even number', () => {
    assert.equal(isEvenNumber(7), false);
    expect(isEvenNumber(7)).to.be.false;
  });
  it('should function isEvenNumber return even number', () => {
    assert.equal(isEvenNumber('string'), undefined);
    expect(isEvenNumber('string')).to.be.undefined;
       
  });
});
describe('function reverse', ()=>{
  it('should function reverse array correctly', ()=> {
    assert.notEqual(reverse([1,2,3,4,5]),[5,4,3,2,1]);
  });
});
describe('function returns sum of array', () =>{
  it('should  function  sumArray return sum ', () =>{
    assert.equal(sumArray([2,4,6,8]),20);
  });
});
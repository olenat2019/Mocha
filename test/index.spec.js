const assert = require('assert');
const expect = require('chai');
const {isAdult,isOddNumber,isEvenNumber} = require('../index.js');

 describe('function isAdult', () => {
   it('should function isAdult works correct', () => {
    assert.equal(isAdult(6), false)
     //expect(isAdult(6)).false;
   })
   
   it('should function isAdult works correct', () => {
     assert.equal(isAdult(25),true)
   })
   
   it('should function isAdult works correct', () => {
     assert.equal(isAdult(18),false)
   })
   it('should function isAdult works correct', () => {
     assert.equal(isAdult(101),true)
   })
   
 })

 describe('function isOddNumber', () => {
   it('should function isOddNumber return odd number', () => {
     assert.equal(isOddNumber(3), true)
   })
   it('should function isOddNumber return odd number', () => {
     assert.equal(isOddNumber(6), false)
   })
   it('should function isOddNumber return odd number', () => {
     assert.equal(isOddNumber(584), false)
   })
   it('should function isOddNumber return odd number', () => {
     assert.equal(isOddNumber('string'), undefined)
   })
   it('should function isOddNumber return even number', () => {
     assert.equal(isOddNumber(), null)
    
   })
 })

 describe('function isEvenNumber', () => {
   it('should function isEvenNumber return even number', () => {
     assert.equal(isEvenNumber(4), true)
   })
   it('should function isEvenNumber return even number', () => {
     assert.equal(isEvenNumber(7), false)
   })
   it('should function isEvenNumber return even number', () => {
     assert.equal(isEvenNumber('string'), undefined)
   })
   it('should function isEvenNumber return even number', () => {
     assert.equal(isEvenNumber(), null)
    
   })
  
 })
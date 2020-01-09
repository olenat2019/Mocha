function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function isAdult(age) {
  if (age < 21) {
    return false;
  }
  else {
    return true;
  }
  
}

function isOddNumber(num) {
  if (typeof num !== 'number') {
    return undefined;
  }
  if(num !== num) {
    return null;}
  if (num % 2 == 1) {
    return true;
  } else {
    return false;
    
  }
}
function isEvenNumber(num) {
  if (typeof num !== 'number') {
    return undefined;}
    if(num !== num) {
      return null;}
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
      
    }
    
  }
  

 
  module.exports = {isAdult, isOddNumber, isEvenNumber}

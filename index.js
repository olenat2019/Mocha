function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}
function isAdult(age) {
  if (age < 21) {
    return false;
  } else {
    return true;
  }
  
}

function isOddNumber(num) {
  if (typeof num !== 'number') {
    return undefined;
  }
  if (num % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
function isEvenNumber(num) {
  if (typeof num !== 'number') {
    return undefined;
  }
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function reverse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}


module.exports = {isAdult, isOddNumber, isEvenNumber, reverse, sumArray}

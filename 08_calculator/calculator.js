const add = function(one, two) {
  return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length ; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(exp, power) {
	return exp ** power;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

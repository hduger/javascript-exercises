const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {

	return array.reduce((a, b)=> a + b, 0);

};

const multiply = function(array) {
  return array.length ? array.reduce((a, b) => a*b) : 0;

};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0) return 1;
  prod = 1;
  for (let i = num; i >=1; i--) {
    prod *= i;
  }
  return prod; 
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

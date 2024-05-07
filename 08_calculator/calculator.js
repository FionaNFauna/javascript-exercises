const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  return arr.reduce((x, y)=> x* y, 1);
};

const power = function(num, pow) {
	return pow == 1 ? num : num* power(num , pow-1);
};

const factorial = function(num) {
	return num == 1 || num == 0 ? 1 : num * factorial(num - 1);
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

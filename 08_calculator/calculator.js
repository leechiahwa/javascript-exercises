const add = function(a, b) {
  result = a + b;
  return result;
};

const subtract = function(a, b) {
	result = a - b;
  return result;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a, b) {
  result = a ** b;
	return result;
};

const factorial = function factorialize(num) {
  if (num < 0)
  {
    return - 1;
  }
  else if (num == 0)
  {
    return 1;
  }
  else
  {
    return (num * factorialize(num - 1));
  }
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

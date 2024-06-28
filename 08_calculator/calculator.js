const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((accumulator, next) => accumulator + next, 0)
	
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current)
};

const power = function(a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(n) {
	let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
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

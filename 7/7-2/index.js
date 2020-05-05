const R = require('ramda');

var numbers = [11, 3, 9, 10, 13, 28, 19, 40];

function greeting(name) {
    return "Witaj " + name;
}

var greet = R.compose(R.toUpper,greeting);

console.log(greet('Admin'));

console.log(R.without([3,9,13], numbers));
console.log(R.sum(numbers));

const fp = require('lodash/fp');

var numbers = [11, 3, 9, 10, 13, 28, 19, 40, 4, 16];

function isOdd(v) {
    return v % 2 == 1;
}

function double(v) {
    return v * 2;
}

var newNumbers = numbers.filter(isOdd).map(double);

console.log(newNumbers);

var newNumbersFP = fp.compose([fp.map(double),fp.filter(isOdd)]);
console.log(newNumbersFP(numbers));

var numbers = [1, 2, 3, 4, 5];
var letters = ['r','e','d','u','c','e'];

function sum(a,b){
    return a+ b;
}

function multiply(a,b){
    return a*b;
}

var reducedList = numbers.reduce(sum);
var reducedListPlus10 = numbers.reduce(sum,10);
var reducedListMultiply = numbers.reduce(multiply);

var reducedLetters = letters.reduce(sum);

console.log(reducedList);
console.log(reducedListPlus10);
console.log(reducedListMultiply);

console.log(reducedLetters);
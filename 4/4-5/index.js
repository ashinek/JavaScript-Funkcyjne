function curry(fn){
    return function(a){
        return function(b){
            return fn(a,b);
        }
    }
}

// f(x,y) = f(x)(y)

function multiply(a,b){
    return a*b;
}

function formatString(string,format){
    return `"${string}" Sformatowany za pomocą ${format}`;
}

var curriedFormatString = curry(formatString);

var curriedMultiply = curry(multiply);
var multiply3 = curriedMultiply(3);
var multiply3And5 = multiply3(5);

console.log(curriedMultiply(3)(5));
console.log(multiply3And5);
console.log(curriedFormatString("witaj")("h1"));
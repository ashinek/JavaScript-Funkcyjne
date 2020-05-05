var compose = require('compose-function');

function split(string) {
    return string.split(" ");
}

function length(arr) {
    return arr.length;
}

function double(v){
    return v*2
}

function tripple(v){
    return v*3
}

var splitAndGetLength = compose(tripple,double,length,split);
console.log(splitAndGetLength("Komponowanie nowych funkcji w funkcjach"));
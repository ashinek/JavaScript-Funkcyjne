var values = [1, 2, 3, 4, 5];
var letters = ['a','r','l','i'];

function double(v) {
    return v * 2;
}

function tripple(v) {
    return v * 3;
}

function toUpperCase(string){
    return string.toUpperCase();
}

function transformValues(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    return newArr;
}

var newValues = values.map( double );
var newValues2 = values.map( tripple );
var upper = letters.map( toUpperCase );

console.log(upper);
console.log(newValues);
console.log(newValues2);
console.log(values);

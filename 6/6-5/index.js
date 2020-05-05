var compose = require('compose-function');

var words = ["funkcyjne  ", " javascript ", "redukcja ", " mapowanie", "  kompozycja "];

function trim(str) {
    return str.trim();
}

function upper(str) {
    return str.toUpperCase();
}

var transformedList = words.map(trim).map(upper);

var composedMapper = compose(upper,trim);

var composedList = words.map(composedMapper);

console.log(transformedList);
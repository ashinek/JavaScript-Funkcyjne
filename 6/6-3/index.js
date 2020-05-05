var numbers = [10, 4, 7, 14, 19, 3, 2, 9 , 34, 23];

function isOdd(v){
    return v % 2 == 1;
}

var filteredNumbers = numbers.filter(isOdd);


console.log(numbers);
console.log(filteredNumbers);
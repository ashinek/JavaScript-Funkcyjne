var numbers = [1, 2, 3];

function addValue(arr,v){
    return arr.push(v);
}

function reverse(arr){
    return arr.reverse();
}

function slice(arr,a,b){
    return arr.slice(a,b);
}

addValue(numbers,4);

reverse(numbers);

var sliced = slice(numbers,1,3);

console.log(numbers);
console.log(sliced);
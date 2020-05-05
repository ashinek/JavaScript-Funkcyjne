var values = [1, 2, 3, 4, 5];

function double(v) {
    return v * 2;
}

function transformValues(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    return newArr;
}

var newValues = transformValues(values,double);
console.log(values);
console.log(newValues);
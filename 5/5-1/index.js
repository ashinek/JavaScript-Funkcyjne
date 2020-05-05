"use strict"

const obj = Object.freeze({
    id: 1,
    value: {
        a: 2,
        b: 3
    }
})

const arr = [1,2,3];

arr[0] = 'ok';
arr[3] = true;

obj.value.a = true;

console.log(obj);
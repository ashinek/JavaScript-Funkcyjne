var x = 1;
function outerfn(x){
    return function fn(y) {
        x++;
        return x + y;
    }
}

console.log(outerfn(x)(3));
console.log(x);
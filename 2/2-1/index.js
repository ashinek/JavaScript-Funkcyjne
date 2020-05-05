function fn(){
    return function(){
        return 2+4;
    }
}

console.log(fn()());
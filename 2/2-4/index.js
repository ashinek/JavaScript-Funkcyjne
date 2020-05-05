function fn(a,b){
    return function(c){
        return function(d){
            return(a+b+c+d);
        }
    }
}

console.log(fn(2,4)(5)(7));
function sum(a) {
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var sum3 = sum(3);
var sum3And4 = sum3(4);
var sum3And4And7 = sum3And4(7);

console.log(sum3And4And7);
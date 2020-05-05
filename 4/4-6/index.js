function doubleValue(v) {
    return v * 2;
}

function add10ToValue(v) {
    return 10 + v;
}

function compose(fn2,fn1){
    return function composed(v){
        return fn2(fn1(v));
    }
}

var composed = compose(doubleValue,add10ToValue);

console.log("Połączone funkcje "+composed(4));

console.log(doubleValue(add10ToValue(4)));
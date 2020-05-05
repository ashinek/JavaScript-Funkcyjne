function split(string) {
    return string.split(" ");
}

function length(arr) {
    return arr.length;
}

function compose(fn2, fn1) {
    return function composed(v) {
        return fn2(fn1(v));
    }
}

function pipe(fn1,fn2){
    return function piped(v){
        return fn2(fn1(v));
    }
}

var splitAndGetLength = compose(length,split);

var pipeSplitAndGetLength = pipe(split,length);

console.log("Połączone funkcje w compose: "+splitAndGetLength("kompozycja funkcji w JavaScript"));

console.log("Połączone funkcje w Pipe: "+pipeSplitAndGetLength("kompozycja funkcji w JavaScript"));

console.log(length(split("kompozycja funkcji w JavaScript")));


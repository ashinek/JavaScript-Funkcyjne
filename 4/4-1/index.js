// unary
function identity(id) {
    return id;
}

// binary
function sum(a, b) {
    return a + b;
}

// variadic
function variadic(a,...args) {
    console.log(a);
    console.log(args);
}
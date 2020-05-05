function createUser(role, active, name) {
    return [role, active, name];
}

//var createAdmin = createUser.bind(null, 'admin', true);
//var createAuthor = createUser.bind(null, 'author', true);

function partial(fn,...partialArgs){
    return function partiallyApplied(...laterArgs){
        return fn(...partialArgs, ...laterArgs);
    }
}

var createAdmin = partial(createUser, 'admin', true);

var createAuthor = partial(createUser, 'author', true);

console.log(createAdmin('admin1'));
console.log(createAuthor('user22'));
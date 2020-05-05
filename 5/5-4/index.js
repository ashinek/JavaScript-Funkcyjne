const user = {
    name: 'admin'
}

function changeName(user, name) {
    return Object.assign({},user,{name: name})
}

var userWithNewName = changeName(user, 'userX');

console.log(user);
console.log(userWithNewName);

function createUser(role, active, name) {
    return [role, active, name];
}

var createAdmin = createUser.bind(null, 'admin',true);
var createAuthor = createUser.bind(null, 'author',true);

console.log(createAdmin('admin1'));
console.log(createAuthor('user22'));
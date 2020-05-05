var user = {
    name: 'admin',
    email: 'admin@strefakursow.pl'
}

function convertToUCase(v) {
    return v.toUpperCase();
}

function mapObj(fn, obj){
    var newObj = {};
    var objKeys = Object.keys(obj);
    for (let key of objKeys){
        newObj[key] = fn(obj[key]);
    }
    return newObj;
}

var result = mapObj(convertToUCase,user);
console.log(result);
console.log(user);
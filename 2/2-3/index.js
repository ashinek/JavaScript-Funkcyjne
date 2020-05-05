function fn(a,y,...args){
    for (const arg of args) {
        console.log(arg);
    };
}

fn(2, 5, 'A',true, 10, 6);
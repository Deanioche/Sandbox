'use strict'

let add = (arg1, arg2)=> new Promise((resolve)=> {
setTimeout(()=> {
console.log('add executed');
resolve({result: arg1+arg2});
}, 1000);
});

let sub = (arg1, arg2)=> new Promise((resolve)=> {
setTimeout(()=> {
console.log('sub executed');
resolve({result: arg1-arg2});
}, 500);
});

add(1, 2);
sub(3, 4);

add(1, 2)
.then((data)=> sub(data.result, 4))
.then((data)=> {
console.log(data);
});


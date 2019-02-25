var o1 = { a: 1, b: 2, c: 3 },
    o2 = {};
( { a: o2.x, b: o2.y, c: o2.z } = o1 );
console.log( o2.x, o2.y, o2.z );
// 1 2 3

var abc = {a:1,b:2,c:3},
    xyz = {};


    
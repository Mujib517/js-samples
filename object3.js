//'use strict'; //sloppy strict

var obj = Object.create({}, {
    width: { value: 5, configurable: false, writeable: false, enumerable: false },
    height: { value: 1, enumerable: true },
    color: { value: 'Black', enumerable: true }
});

//Object.defineProperty(obj,"width", { writable: true });

// for (var key in obj) {
//     console.log(key);
// }

// obj.width = 100;
// console.log(obj.width);
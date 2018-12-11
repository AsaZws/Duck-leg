"use strict";

// 箭头函数排序
// var arr = [10, 20, 1, 2];
// arr.sort((x, y) => {
//     return x >= y; // 降序
// });
// console.log(arr);

/*

// 箭头函数的转化
class Student {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('Hello,' + this.name + '!');
    }
}
let xiaoming = new Student('小明');
xiaoming.hello();   // Hello,小明!

*/

/*

@Asa_Zhou
2018/12/11

数组的结构赋值
let a = 0;
let b = 1;
let c = 2;

let [a,[b,c],d] = [1,[2,3],4];
let [foo = true] = [];
console.log(foo);  // true

let [a,b="JSPang"] = ['技术胖',undefined];
console.log(a+b);  // 技术胖JSPang

let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo+bar); // JSPang技术胖

let foo;
({foo} ={foo:'JSPang'});
console.log(foo); // JSPang

const [a,b,c,d,e,f] = "JSPang";
console.log(a);  // J

扩展运算符和rest运算符

function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
jspang(1,2,3);  // 1 2 3 undefined

let arr1 = ['www', 'jspang', 'com'];
let arr2 = arr1;
console.log(arr2);  // ["www", "jspang", "com"]
arr2.push('ChengHongYu');
console.log(arr1);  // ["www", "jspang", "com", "ChengHongYu"]

let arr1 = ['www', 'jspang', 'com'];
let arr2 = [...arr1];
console.log(arr2);  // ["www", "jspang", "com"]
arr2.push("ChengHongYu");
console.log(arr2);  // ["www", "jspang", "com", "ChengHongYu"]
console.log(arr1);  // ["www", "jspang", "com"]

function jspang(first, ...arg){
    console.log(arg.length);
}
jspang(0,1,2,3,4,5,6,7);  // 7

*/

function jspang(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
jspang(0, 1, 2, 3, 4, 5, 6, 7);

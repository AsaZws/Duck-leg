'use strict';

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

function jspang(first,...arg) {
    for(let val of arg) {
        console.log(val);
    }
}
jspang(0,1,2,3,4,5,6,7);  // 1 2 3 4 5 6 7

*/

/*

@Asa_Zhou
2018/12/12

字符串模板

let jspang = '技术胖';
let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模板。`;

数字操作

let a = 1;
let b = 2;
let result = `${a+b}`;
document.write(result);

let a = 11/4;
console.log(Number.isFinite(a));  // true

console.log(Number.isNaN(NaN));  // true

let a = '9.18';
console.log(Number.isInteger(a));  // false

数组

let json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '肥仔',
    length: 3
}
let arr = Array.from(json);
console.log(arr);  // ["jspang", "技术胖", "肥仔"]

let arr = Array.of(3,4,5,6);
console.log(arr);  // [3, 4, 5, 6]

let arr = Array.of('技术胖', '技术胖', '肥仔');
console.log(arr);  // ["技术胖", "技术胖", "肥仔"]

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 8;
}))  // 9

let arr = [0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang', 2, 5);
console.log(arr);  // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]

let arr = ['jspang', '技术胖', 'pangdiao'];
for (let item of arr) {
    console.log(item);
}  // jspang 技术胖 pangdiao

let arr = ['jspang', '技术胖', 'pangdiao'];
for (let index of arr.keys()){
    console.log(index);
}  // 0 1 2

let arr = ['jspang', '技术胖', 'pangdiao'];
for (let [index,val] of arr.entries()){
    console.log(index+ ':' + val);
}   // 0:jspang 1:技术胖 2:pangdiao

let arr = ['jspang', '技术胖', 'pangdiao'];
let list = arr.entries();
console.log(list.next().value);  // [0, "jspang"]
console.log(list.next().value);  // [0, "jspang"]

function add(a,b=1){
    return a+b;
}
console.log(add(1));  // 2

var add = (a,b=1) => a+b;
console.log(add(1));  // 2

函数和数组的补漏学习

let json = {
    a: 'jspang',
    b: '技术胖',
}
function fun({a,b='jspang'}){
    console.log(a,b);  // jspang 技术胖
}
fun(json);

let arr = ['jspang','技术胖','免费教程'];
function fun(a,b,c) {
    console.log(a,b,c);  // jspang 技术胖 免费教程
}
fun(...arr);

let obj = {
    a:'jspang',
    b:'技术胖'
}
console.log('a' in obj);  // true

let arr = [,,,,,];
console.log(arr.length);  // 5

let arr = [,,,,,];
console.log(0 in arr);  // false

let arr1 = ['jspang', '技术胖'];
console.log(0 in arr1);  // true

let arr = ['jspang', '技术胖', '前端教程'];
arr.forEach((val,index)=>console.log(index,val));
// 0 "jspang"
// 1 "技术胖"
// 2 "前端教程"

let arr = ['jipang', '技术胖', '前端教程'];
arr.filter(x=>console.log(x));  // jipang 技术胖 前端教程

let arr = ['jspang', '技术胖', '前端教程'];
arr.some(x=>console.log(x));  // jipang 技术胖 前端教程

let arr = ['jspang', '技术胖', '前端教程'];
console.log(arr.map(x=>'web'));  // ["web", "web", "web"]

let arr = ['jspang', '技术胖', '前端教程'];
console.log(arr.join('|'));
console.log(arr.toString());

let name = "japang";
let skill = "web";
var obj = {name,skill};
console.log(obj);  // {name: "japang", skill: "web"}

let key = "skill";
var obj = {
    [key]: "web"
}
console.log(obj.skill);  // web

var obj = {
    add:function(a,b) {
        return a+b;
    }
}
console.log(obj.add(1,2));  // 3

var obj1 = {name: "jspang"};
var obj2 = {name: "jspang"};
console.log(obj1.name === obj2.name); // true
console.log(Object.is(obj1.name,obj2.name)); // true

var a = {a: "jspang"};
var b = {b: "jspang"};
var c = {c: "web"};

let d = Object.assign(a,b,c);
console.log(d);  // {a: "jspang", b: "jspang", c: "web"}

let g = Symbol("jspang");
console.log(g);  // 红字
console.log(g.toString()); // 黑字

let obj = {name: "jspang", skill: "web", age: 18};
for (let item in obj){
    console.log(obj[item]);  // jspang web 18
}

let obj = {name: 'jspang', skill: 'web'};
let age = Symbol();
obj[age] = 18;
for (let item in obj) {
    console.log(obj[item]);
}
console.log(obj);

@Asa_Zhou
2018/12/13
Set()

let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
console.log(setArr);  // {"jspang", "技术胖", "web"}

let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
console.log(setArr);  // {"jspang", "技术胖", "web"}
setArr.add('前端');
console.log(setArr);  // {"jspang", "技术胖", "web", "前端"}
setArr.delete("前端");
console.log(setArr);  // {"jspang", "技术胖", "web"}
console.log(setArr.has('jspang'));  // true

let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
for (let item of setArr) {
    console.log(item);  // jspang 技术胖 web
}
console.log(setArr.size);  // 3

setArr.forEach((value)=> console.log(value)); // jspang 技术胖 web

let weakObj = new WeakSet();
let obj = {a: "jsp", b: "技术胖"};
weakObj.add(obj);
console.log(weakObj); // WeakSet {{…}}

let json = {
    name: "jspang",
    skill: "web"
}
console.log(json.name);  // jspang
let map = new Map();
map.set(json, "iam");
console.log(map);  // Map(1) {{…} => "iam"}
map.set("jspang", json);
console.log(map);  // Map(2) {{…} => "iam", "jspang" => {…}}

let map = new Map();
map.set(json, "iam");
console.log(map.get(json));  // iam
console.log(map.size)  // 1
console.log(map.has("jspang"))  // false

Proxy

var obj = {
    add:function (val) {
        return val+10;
    },
    name: "I am Jspang"
};
console.log(obj.add(100));  // 110
console.log(obj.name);  // I am Jspang

let pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: "I am Jspang"
}, {
    get:function(target,key,property){
        console.log("come in Get");  // come in Get
        return target[key];
    },
    set:function(target, key, value, receiver) {
        console.log(`setting ${key} = ${value}`);  // I am Jspang
        return target[key] = value;
    }
});
console.log(pro.name); // I am Jspang
pro.name = "技术胖";
console.log(pro.name);  // 技术胖


*/

get = function get() {
    return 'I am JSPang';
};
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply.apply(Reflect, arguments);
    }
};
var pro = new Proxy(target, handler);
console.log(pro());

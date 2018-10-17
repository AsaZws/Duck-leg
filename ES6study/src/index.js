
// 箭头函数排序
// var arr = [10, 20, 1, 2];
// arr.sort((x, y) => {
//     return x >= y; // 降序
// });
// console.log(arr);

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
xiaoming.hello();

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 箭头函数排序
// var arr = [10, 20, 1, 2];
// arr.sort((x, y) => {
//     return x >= y; // 降序
// });
// console.log(arr);

// 箭头函数的转化
var Student = function () {
    function Student(name) {
        _classCallCheck(this, Student);

        this.name = name;
    }

    _createClass(Student, [{
        key: 'hello',
        value: function hello() {
            console.log('Hello,' + this.name + '!');
        }
    }]);

    return Student;
}();

var xiaoming = new Student('小明');
xiaoming.hello();

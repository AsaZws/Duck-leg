window.onload = function () {
    // 数据数组
    var love = ["黎", "立", "美", "周", "伟", "生", "我", "❤️", "你"]
    var scroll1 = document.getElementById("scroll1");
    var scroll2 = document.getElementById("scroll2");
    var scroll3 = document.getElementById("scroll3");
    // 开始按钮
    var start = document.getElementById("start");
    // 重置按钮
    var end = document.getElementById("end");
    

    // 数组塞进字符串函数
    function oarr(id) {
        // 获取id下面的span
        var ospan = id.getElementsByTagName("span");
        // 播放函数
        var t = 0;
        // 数据字符串
        var list = '';
        // 开始位置
        var spanHeight = id.offsetHeight;
        // 随机打乱数组
        function randomsort() {
            return Math.random() > .5 ? -1 : 1;
        }
        love.sort(randomsort);
        // 遍历数据数组
        for (var i = 0; i < love.length; i++) {
            list += "<span>" + love[i] + "</span>"
        }
        id.innerHTML = list;
        // 运动定时器
        function timer() {
            id.style.top = -spanHeight * t + "px";
        };
        var init = setInterval(function () {
            t++;
            if (t == ospan.length) {
                id.style.top = 0;
                t = 0;
            }
            timer();
        },20);
        // 3秒后停止函数
        setTimeout(function () {
            clearInterval(init);
        }, 3000);
    }

    // 设置初始化点击为0
    start.value = 0;
    // 点击重置
    end.onclick = function () {
        start.value = 0;
        console.log(start.value);
    }
    // 点击1次翻滚第一个，以此类推
    start.onclick = function () {
        start.value++;
        if(start.value == 1) {
            oarr(scroll1);
        }else if(start.value == 2) {
            oarr(scroll2);
        }else if (start.value == 3) {
            oarr(scroll3);
        }
        console.log(start.value);
    }
    

}
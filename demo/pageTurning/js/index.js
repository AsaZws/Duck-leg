var sign = 1;    // 记录当前第几个块，如果最多为10个块，那么就是1-10
var b_sign = 1;  // 记录sign变动之前的sign的数值
var count = 20;  // 记录总共页数
var real_count=count<=10?count:10; // 定义最多有多少块
var real_change=0;
var o = 0;

if (real_count%2==0){
    real_change=real_count/2;
} else {
    real_change=real_count/2+0.5;
    var o=1;
}

// 初始化模块
let i = 1;
while(i<=real_count) {
    var val="<div class='num' id="+i+">" +i+"</div>";
    $("#number").append(val);
    i++;
}

// 查找id='number'块的所有子节点
function query_all(){
    nodes = $("#number").find("div");
    length=nodes.length;
};
query_all();

// 获取当前page
function currentPage() {
    let use="#"+sign;
    $(".current").text("当前"+$(use).text()+"/"+count+"页");
};
currentPage();

//将当前第sign块样式还原
var b_change=function(){
    b_sign=sign;
    let use="#"+b_sign;
    $(use).css({"border":"1px solid #cccccc","backgroundColor":"#fff","color":"#666"})
}

// 将当前sign块样式改变，好区别于其他块
var blue_change=function(c){
    let use="#"+c;
    $(use).css({"border":"#3e89fa","backgroundColor":"#3e89fa","color":"#ffffff"});
}
// 页面第一次加载的时候，改变指定块样式
blue_change(sign);

// 当前sign块先还原样式，再改变sign，再改变改变后的sign块样式
function go_back(now_sign,kit) {
    b_change();
    if(kit==0) {
        sign=now_sign;
    } else if(kit==1) {
        if(sign!=real_count)
        sign++;
    } else if(kit==2) {
        if(sign!=1)
        sign--;
    }
    blue_change(sign);
}

// 遍历改变id="number"的子节点内容
function change_add(c_add,kit) {
    var p=c_add;
    for(let j=0;j<length;j++) {
        if(kit==0) {
            nodes[j].innerHTML=p;
            p++;
        } else if(kit==1){
            nodes[j].innerHTML=p;
            p--;
        } else if(kit==2){
            nodes[j].innerHTML=parseInt(nodes[j].innerHTML)+1;
        } else if(kit==3) {
            nodes[j].innerHTML=parseInt(nodes[j].innerHTML)-1;
        }
    }
}

function for_num(use,id) {
    let error_1="#"+real_change;
    // 页面在最前或者最后
    if($(error_1).text()==real_change||$(error_1).text()==count-real_change+1) {
        // 判断点击的第一个一半的前面还是点击的第二个一半的后面
        if($(use).text()<=real_change||$(use).text()>count-real_change) {
            go_back(id,0);
        } else {
            go_back(real_change,0);
            change_add($(use).text()-(real_change-1),0);
        }
        currentPage();
    } else {
        var inner=(o==0)?$(use).text()>=count-real_change:$(use).text()>count-real_change;
        if($(use).text()<=real_change||inner) {
            if($(use).text()<=real_change) {
                go_back($(use).text(),0);
                change_add(1,0);
            } else {
                go_back(real_count-(count-$(use).text()),0);
                change_add(count-real_count+1,0);
            }
        } else {
            go_back(real_change,0);
            change_add($(use).text()-(real_change-1),0);
        }
    }
    currentPage();
}

// 遍历每个div块，并为他们增加点击事件
for(let j=0;j<length;j++)
		{
			let id=nodes[j].getAttribute("id");
			let use="#"+id;
			$(use).bind("click",function(){
				for_num(use,id);
			});
		}

$("#home").bind("click",function() {
    go_back(1,0);
    change_add(1,0);
    currentPage();
});
$("#before").bind("click",function() {
    let use="#"+sign;
    var inner=(o==0)?$(use).text()>=count-real_change:$(use).text()>count-real_change+1;
    if($(use).text()<=real_change||inner) {
        go_back(0,2);
        currentPage();
    }
})
$("#next").bind("click",function(){
    let use="#"+sign;
    if($(use).text()!=count) {
        var inner = (o==0)?$(use).text()>=count-real_change:$(use).text()>count-real_change;
        if($(use).text()<real_change||inner) {
            go_back(0,1);
            currentPage();
        } else {
            change_add(0,2);
            currentPage();
        }
    }
})
$(".l_jump").bind("click",function(){
    let val=$("#inp").val();  // 获取输入框的值
    val=parseInt(val);
    if(val>=1&&val<=count) {
        var inner=(o==0)?val>=count-real_change:val>count-real_change;
        // 如果是最前面的一半以前，或者是最后面的一半以后
        if(val<=real_change||inner) {
            if(val<=real_change) {
                go_back(val,0);
                change_add(1,0);
            } else {
                go_back(real_count-(count-val),0);
                change_add(count-real_count+1,0);
            }
        } else {
            go_back(real_change,0);
            change_add(val-(real_change-1),0);
        }
    } else {
        alert("没有这么多页")
    }
    currentPage()
})
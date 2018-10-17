## vue学习笔记
## Vue.js 项目搭建 -- 脚手架的安装与使用
#### 1.安装Node.js
    node --version
#### 2.安装Vue.js devtools扩展程序
    打开Chrome网上应用店，安装Vue.js devtools。这个插件，便于我们在进行Vue.js开发过程中的调试，是一个很有用的工具。
#### 3.安装vue-cli脚手架工具
    npm install -g vue-cli  
    另外，由于npm的官方镜像服务器是在国外，国内没有进行科学上网的同学安装依赖包时，有时候速度会非常慢。因此，可采用淘宝的npm镜像，在命令行工具输入：  
    npm install -g cnpm --registry=https://registry.npm.taobao.org  
    以后就可以使用cnpm来代替npm了。因此，如果已经安装了淘宝的npm镜像工具，vue-cli可以这样安装：
    cnpm install -g vue-cli
#### 4.初始化vue项目
    vue init webpack my-firstvue
#### 5.进入项目目录
    cd webpack my-firstvue
#### 6.安装依赖
    npm install
#### 7.启动开发服务器
    npm run dev
### MAC安装webpack的时候失败
    在mac下依赖包要写入系统重要文件夹里，由于没有先获取root权限所以写入失败，导致安装失败。 
    mac 还有一步操作就是，终端先执行如下命令
    sudo－s
    执行后会出现小钥匙，你输入什么都不会显示出来，直接输入你的开机密码然后在回车就可以了。获取完root 在去安装webpack 就可以了~

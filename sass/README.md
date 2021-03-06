SASS具有两种语法。新的主要语法（SASS 3）称作SCSS (Sassy CSS)，同时支持CSS3的语法。也就是说只要CSS3支持的在SCSS中也被支持。SCSS文件扩展名为'.scss'，这也是当下使用最多的。

### scss预处理器的编译方法
- 由于SASS是在Ruby环境下运行，所以大家首先需要在自己的工作电脑上安装Ruby。
-  检测Ruby是否已安装：
```
$ ruby -v
```
#### SASS的安装
```
$ gem install sass 
```
- 安装完成后，可以通过下面的命令查看SASS是否安装成功：
```
$ gem list
```
- 安装完成后，可以通过下面的命令查看SASS是否安装成功：
```
$ sass -v
```
#### Beat版本安装
- 对于SASS的发烧友来说，一个稳定版本并不能满足需求，他需要一些别的东西，也就是说他想获取SASS的一些最新变化和最新功能。那么这个时候你就可以安装一个Beat版本的SASS，他会自己会自动创建每次更改的主分支：
```
$ gem install sass --pre
```
#### 创建你的第一个SASS项目
- 为了让项目规化的更完美一些，我把.scss的SASS文件都放在sass目录中，而需要转译出来的.css文件都将放在css目录中。因此，我们还需要在mySass项目中创建sass和css两个文件夹,在cass里面写好你的scss项目(注意：头部写好@charset "utf-8";)：
```
$ cd mySass 
$ mkdir sass 
$ mkdir css
```
#### SASS文件转译
- 转译.scss文件，我们主要使用的是sass命令。其操作非常简单，首先进入到对应的项目中:
```
$ sass sass/index.scss css/index.css
```
- 使用sass转译.scss文件，有一个不足之处，就是我们修改了.scss文件，不会自动转译。那么我们只需要在sass命令的基础上添加一个参数--watch就可以自动转译。
- 特别强调：如果使用sass --watch转译.scss样式，首先需要安装rb-fsevent
```
$ sass --watch test.scss:test.css
```
- 为了能让sass --watch命令运行正常，也就是时时能监控，只需要安装rb-fsevent即可:
- 这个时候再执行：
```
$ sass --watch sass/style.scss
```
- 他的优点是可以时间监控转译.scss文件，他不足的一处是转译出来的不在css目录下，只能在自己的文件夹下，到时候麻烦自己在复制一下
- 在SASS中，可以直接将整个目录中的所有.scss文件转译成所有的.css文件，并放到另一个CSS目录中
```
$ sass --watch sass/:css/
```
#### CSS转译成SASS
```
$ sass-convert css/style.css style.scss
```
原文出处： <http://www.w3cplus.com/preprocessor/sass-compile.html>
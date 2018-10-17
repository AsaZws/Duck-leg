## babel安装及编译
系统环境：win10（以下都是在vscode编辑器下展开的）
配置环境：node，npm（如何安装node以及npm请另寻文档）
项目文件夹：新建一个文件夹作为一个项目文件夹，文件夹结构为es6>src>index.js,dist,index.html
### 1、进入es6的文件夹的目录下，执行npm init -y（-y的意思是所有步骤都为yes），最终生成了package.json文件

```
PS E:\AsaZws\js\ES6> npm init -y
Wrote to E:\AsaZws\js\ES6\package.json:

{
  "name": "ES6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
### 2、创建.babelrc文件（win系统下直接创建文件.babelrc），在文件夹里面写入
```
{

    "presets": [], //设置转码规则

    "plugins": []  //设置插件

}
```
ES2015转码规则
```
npm install --save-dev babel-preset-es2015
```
然后，将这些规则加入 .babelrc
```
{

    "presets": [

        "es2015"

    ],

    "plugins": []

}
```
注意：Babel工具和模块的使用之前，都必须先写好 .babelrc。 
### 3、使用命令行转码 babel-cli

全局安装
```
npm install --global babel-cli
```
在项目文件中安装
```
npm install --save-dev babel-cli
```
在全局安装babel-cli，这意味着，如果项目要运行，全局环境必须有Babel，也就是说项目产生了对环境的依赖， 并且这样做也无法支持不同项目使用不同版本的Babel。所以官网强烈建议我们使用后一种方式，在项目中安装。 在项目中安装之后，需要改写package.js：
{//...略去了其他的内容"devDependencies": {"babel-cli": "^6.0.0"  //这里的版本号为安装的时候的版本号，一般安装的时候就会自动写入},"scripts": {"build": "babel src -d dist"//编译整个 src 目录并将其输出到 lib 目录。这里的src指的是需要转换的目录，lib指的是输出的内容的存放目录},}
转码的时候，就执行下面的命令：
```
npm run build
```
babel-cli基本用法如下：

转码结果输出到标准输出
```
babel example.js
```

转码结果写入一个文件

--out-file 或 -o 参数指定输出文件
```
babel example.js --out-file compiled.js
```
或者
```
babel example.js -o compiled.js
```

整个目录转码

--out-dir 或 -d 参数指定输出目录
```
babel src --out-dir lib
```
或者
```
babel src -d lib
```

-s 参数生成source map文件
```
babel src -d lib -s
```

    

    
    
    
    
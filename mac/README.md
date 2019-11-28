## mac下的一些小问题记录

### 终端zsh 
- zsh 是要结合 oh-my-zsh一起使用才好用  

#### 安装 
- git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh  

- cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc 

- 然后重启终端就可以了  

### brew  

#### 卸载 

- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"  

#### 安装 

- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  

- 当遇到 Error: Checksum mismatch. 类似校验不匹配的错误报错信息时，可以使用下面的解决方法： 
- 如： rm -rf /Users/djh/Library/Caches/Homebrew/portable-ruby-2.3.3.leopard_64.bottle.1.tar.gz

然后重新安装即可。

### mysql 

#### 如果之前没有安装过MySQL 5.7  

``` 
brew install mysql@5.7  // 安装
brew link --force mysql@5.7 // 链接
brew services start mysql@5.7 // 启动服务
echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc // 输出到环境变量
``` 

#### 如果之前安装了 MySQL 5.7 

``` 
brew uninstall mysql@5.7
rm -rf /usr/local/var/mysql
rm /usr/local/etc/my.cnf

--- 👇和第一种情况一样

brew install mysql@5.7  // 安装
brew link --force mysql@5.7 // 链接
brew services start mysql@5.7 // 启动服务
echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc // 输出到环境变量

``` 

#### 重要的一步，设置安全的访问 

- mysql_secure_installation 

#### 添加mysql到PATH  

- PATH="$PATH":/usr/local/mysql/bin
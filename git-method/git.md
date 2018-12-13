git的一些常用快捷键

## git的使用

    本地仓库上传到GitHub
    · git init
    · git add .
    · git commit -m "first commit"
    · git remote add origin https://github.com/AsaZws/Duck-leg
    · git push -u origin master
    更新本地仓库到GitHub
    · git add .
    · git commit -m "更新"
    · git push -u origin master
    拉取GitHub项目到本地
    · git clone address

## git常用快捷键

    · git init                        // 初始化文件夹
    · git branch                      // 查看分支
    · git checkout -b master          // 创建分支并切换到分支
    · git merge master                // 合并到当前分支
    · git branch -d master            // 删除分支

    · git status                      // 查看状态
    · git stash                       // 放入缓冲区
    · git stash list                  // 
    · git checkout master             // 切换到主分支
    · git pull                        // 把最新的主分支数据拉下来
    · git branch                      // 查看当前的分支
    · git checkout dev                // 切换到我的分支
    · git merge master                // 合并分支
    · git stash pop                   // 将缓冲区的东西提出来
    · git status                      // 查看状态
    · git add *                       // 修改或添加所有
    · git commit -a -m”注释”          // 提交修改
    · git push                        // 把你自己分支的内容提交到远程自己的分支
    · push --set-upstream origin      // 提交
    · git push origin master          // 合并和提交            

    · git push -u origin master -f    // 强制提交，可能会出问题
    · git pull origin master          // 远程pull
    · git clean -df                   // 清除未跟踪文件
    · git rm                          // 删除暂存区的文件
    · git rm -f                       // 同时删除工作区和暂存区中的文件
    · git rm --cached                 // 删除暂存区的文件，不删除工作区的文件

    · git fetch --all                 // 强制pull
    · git reset --hard origin/master
    · git pull

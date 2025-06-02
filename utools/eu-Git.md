Git指令和使用

### 1.使本地仓库与远程仓库连接

1.创建GitHub仓库和初始化本地仓库

```bash
#初始化本地仓库
git init

#重命名本地分支（分支名一致有好处，为了设置追踪分支）
git branch -m oldname newname
#对当前检出（当前所在）的分支重命名
git branch -m newname
```

2.添加远程仓库

相关指令

```bash
#查看设置的远程仓库（依附于某个具体仓库的东西）
git remote -v
git remote show remotename  #具体的

#添加：shortname是url的缩写，意思是用dozencat代替了后边的url（与alias异曲同工），git clone过的会默认添加一个origin远程仓库（url取决于连接方式）
git remote add shortname url

git remote rename oldname newname #rename重命名

git remote remove remotename #remove移除
```



```bash
#（ssh连接）
git remote add dozencat git@github.com:dozencat/MyLearn.git

#（html连接）
git remote add dozencat https://github.com/dozencat/MyLearn.git
```

 

3.追踪远程分支	

```bash
#新仓库注意，再本地提交一次，否则显示没提交记录，可以空提交，一般README
git fetch dozencat
#跟踪远程仓库分支（当前仓库跟踪，并且远程仓库可能不止一个分支，要具体）
git branch -u dozencat/main
#-u与--set-upstream-to等效，dozencat是我自定的远程仓库，上面具象来看就是：
#设置当前我的本地分支追踪远程仓库的main分支
#（dozencat就是https://github.com/dozencat/MyLearn.git）
git branch -u https://github.com/dozencat/MyLearn.git/main

```


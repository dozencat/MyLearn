# Git指令和使用

#### 建立重要概念：工作区、暂存区、HEAD（即上一次提交）

**核心关系：**

1. **暂存区是构建下一次提交的“蓝图”或“提案”**：
   - 当你执行 `git add` 时，你是在**更新暂存区的内容**。
   - 这个更新后的暂存区内容，**就是 `git commit` 命令将要创建的新提交所包含的确切内容**。
   - **暂存区定义了“下一次提交应该是什么样子”**。
2. **上次提交 (`HEAD`) 是暂存区的“起点”或“基线”**：
   - 在你开始新的工作、执行任何 `git add` 之前，暂存区的内容**总是与上一次提交 (`HEAD`) 完全一致**。
   - 初始状态下，暂存区是 `HEAD` 提交的一个快照副本。
   - 当你执行 `git add` 时，你是在**修改这个暂存区副本**，使其包含你想要包含在下一次提交中的新变化（新文件、修改、删除）。

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

### 2.关于一些撤销操作

- 将文件从 **暂存区 (Staged)** 移回 **工作区 (Modified)**。即取消暂存，但保留工作区的修改内容。

  ```bash
git reset HEAD <file> #(较旧方式) 或 
  git restore --staged <file> #(较新推荐)：
  ```
  
  

- 丢弃 **工作区** 中对指定文件的修改，将其恢复到最近一次 `git add` 或 `git commit` 时的状态（即暂存区或HEAD的状态）。**谨慎使用，未提交的修改会丢失！**

  ```bash
  git checkout -- <file> #(较旧方式) 或
  git restore <file> #(较新推荐)
  ```




### 3.关于查看差异

- `git diff`： **只看没存盘(`git add`)的改动** (工作区 vs 暂存区)。

- `git diff --staged`： **看存了盘(`git add`)但没交卷(`git commit`)的改动** (暂存区 vs HEAD)。

- `git diff HEAD`： **看所有没交卷(`git commit`)的改动，不管存没存盘** (工作区 vs HEAD)。

  


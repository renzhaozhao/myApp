# myApp

# 编译、运行

从代码库 clone 到本地，进后目录执行 `npm install` 安装依赖文件，等安装完成之后，使用 `gulp init` 构建出所有的静态资源文件。

```
$ gulp init
```

之后运行 ionic 服务：`ionic serve`，打开[http://localhost:8100](http://localhost:8100)即可看到效果。

## 目录结构

```

$ tree -L 1 .
.
├── app.js
├── bower.json
├── config.xml
├── gulpfile.js
├── hooks
├── ionic.project
├── node_modules
├── package.json
├── plugins
├── README.md
├── src
├── tasks
└── www

6 directories, 7 files


```

执行过上一步，最终目录会跟上面一样。

* `www`，存放最终编译出来的文件，也是最终的文件。

* `src`，一个基于 `gulp` 的 文件夹，可以在本机编辑 myApp。

* `gulpfile.js`，`gulp` 任务的入口文件。

* `src`，所以源码都放在于该目录，包括 less 和 javascript。

* `tasks`，gulp 的子任务都放在该目录下面。

## 开发

所以设置正常，运行 `gulp` 即可。需要预览、调式 myApp，打开 `ionic` 服务在 `http://localhost:8100`（端口可变）调试即可。

# 基于Node.js搭建简易服务器部署主页

***
##  Content
#### &nbsp;&nbsp;&nbsp;&nbsp; ·环境的搭建
#### &nbsp;&nbsp;&nbsp;&nbsp; ·使用Node.js 构建简易HTTP服务器
#### &nbsp;&nbsp;&nbsp;&nbsp; ·加载主页资源
#### &nbsp;&nbsp;&nbsp;&nbsp; ·将Demo部署在服务器上

---
---

## 环境的搭建
#### [Node.JS](https://nodejs.org/en/) 简介
> Node.js 就是运行在**服务端**的 JavaScript。
> Node.js 是一个基于**Chrome JavaScript** 运行时建立的一个平台。
> 集成了强大的包管理工具[NPM](https://www.npmjs.com/)

###### [安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)

> 安装配置完成后可以在命令行输入`node -v`查看Node版本
> 输入`npm -v`可以查看npm版本

---

## 搭建一个HTTP服务器
* 引入http模块
  > Node.js基于模块化开发，通过引用内置的http模块可以非常方便地搭建一个http服务器，参照[官方开发文档](https://nodejs.org/dist/latest-v8.x/docs/api/http.html) 可以快速查看对应的API
  >通过`const http = require('http');`引入http模块
* 创建服务
  >通过调用http模块中的`createServer`方法创建服务
  ```javascript
  http.createServer([requestListener])
  //function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) => void): Server
  ```
* 监听服务
  >通过调用创建的服务的`listen`方法监听服务
  ```javascript
  (method) Server.listen(port?: number, hostname?: string,  listeningListener?: Function): Server (+8 overloads)
  ```
  [Demo演示](./http-server.js)

  ---

## 加载主页资源

* 引入对应模块
```javascript {.line-numbers}
const http = require('http'); // 引入http模块
const url = require('url'); // 引入URL模块
const fs = require('fs'); // 引入文件系统模块
```
* 创建服务

* 监听服务

  [Demo演示](./http-server-fs.js)

---

## 将Demo部署在服务器上
* 服务器：建立虚拟机或者购买[云服务器](https://cloud.tencent.com)（建议无图形界面的Linux）
* 只需要了解一下[常用命令](https://blog.csdn.net/xiaoguaihai/article/details/8705992)其实就可以适应shell界面
* 使用[PuTTy](https://blog.csdn.net/oscar999/article/details/1752824)远程连接Linux可以更方便操作
  > 使用PuTTy中的[psftp](https://blog.csdn.net/wbcg111/article/details/48787227)实现不同系统之间的文件互传
  ```psftp {.line-numbers}
    get file newName  // 从服务器下载文件
    put file newName  // 上传文件到服务器

    get -r myDir newName  // 从服务器下载目录
    put -r myDir newName  // 上传目录到服务器
  ```
* 使用[pm2](https://www.npmjs.com/package/pm2)线程管理器管理你的项目
  ```shell {.line-numbers}
    npm install pm2 -g  // 全局安装pm2
    pm2 start app.js  // 托管运行项目
    pm2 stop     <app_name|id|'all'|json_conf>  // 暂停
    pm2 restart  <app_name|id|'all'|json_conf>  // 重启
    pm2 delete   <app_name|id|'all'|json_conf>  // 删除进程
    pm2 list  // 查看列表
    pm2 describe <id|app_name>  // 查看详细信息
    pm2 monit // 监控托管日志

  ```
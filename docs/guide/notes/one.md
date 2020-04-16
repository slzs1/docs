# 介绍

VuePress由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
 它以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作；享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题；它会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

## 特性

*  为技术文档而优化的内置 Markdown 拓展

*  在 Markdown 文件中使用 Vue 组件的能力

*  Vue 驱动的自定义主题系统

* 自动生成 Service Worker

* Google Analytics 集成

* 基于 Git 的 “最后更新时间”

* 多语言支持

* 默认主题包含：
  *  响应式布局
  * 可选的主页
  * 简洁的开箱即用的标题搜索
  * Algolia搜索
  * 可自定义的导航栏和侧边栏
  * 自动生成的github链接和页面的编辑链接

[参考基本模型](https://vuepress.vuejs.org/)

## 环境搭建

### 安装Node.js

注意查看Node.js的版本要大于8.

### 全局安装

```c
1.npm install -g vuepress   
```

### 创建项目目录

```
1.mkdir vuepress-demo		
2.cd vuepress-demo			
```

### 初始化项目，建立并编辑package.json

```
npm init -y
```

### 进入package.json,修改脚本内容

```
{
  "name": "vuepress-vlog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 建立基本目录

```
vuepress-demo
├─package.json
├─docs
|  ├─README.md                  //配置封面
|  ├─.vuepress										
|  |     ├─config.js			//配置导航
|  |     ├─public				//配置静态资源
|  |     |   └favicon.ico		//图片文件，可更改
```

### 修改配置文件-config.js

```
module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}
```

### 修改README

docs文件下的README文件用于配置封面

```
---
home: true
heroImage: /favicon.ico
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present xxxxxx
---
```

注意三个短杠不能忘记

### 运行结果

![](https://upload-images.jianshu.io/upload_images/13878898-dfb59b1bd0fbe464.png)

<Vssue />
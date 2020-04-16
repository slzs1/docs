# 让界面更清楚

## 配置导航栏

首先在docs目录下建立文件

我的文件配置

![image-20200319142821051](https://i.loli.net/2020/03/19/PFBHOKdTRMakuqm.png)

每个文件夹下的README.md就是当前目录的默认内容

然后通过config.js文件配置相应导航。

![11](https://i.loli.net/2020/03/19/4Poikzy6Qw29pUV.png)

网上的教程时直接在config文件中的themeConfig下直接添加nav内容，会让config文件的内容变多，而这个文件是配置整个网页的关键，内容过多会条理不清晰，以后改起来也会很麻烦。这里介绍一种方法：

### 创建nav.js文件

![1584602001_1_.jpg](https://i.loli.net/2020/03/19/1oEYad7l2NsBGLh.png)

按层次把导航栏的项目如上图格式布置。

### 配置config文件

![1584602147_1_.jpg](https://i.loli.net/2020/03/19/MX4rZwdzjI1NhRW.png)

在config文件中的themeConfig目录下输入

```
nav:require("./nav.js"),
```



## 配置侧边栏

```bash
sidebarDepth: 2,
sidebar: [
  {
    title: 'Guide',
    collapsable: false,
    children: ['/guide/']
  }         
]
```

可以直接在config.js文件下的themeConfig属性下添加，但是如果要配置的文件多了之后就会很麻烦，这里再介绍一种更有条理的方法：

![](https://i.loli.net/2020/03/19/SUY3g5l6BcmqZ2x.png)

我们可以在guide目录下创建一个sidebar.js文件，按上面的格式配置侧边栏的目录，然后在config文件中的themeConfig目录下直接引用

```
sidebar:require("./sidebar.js"),
```

这样在有多个侧边栏时，可以逐一更改，不会伤及主体。

<Vssue />
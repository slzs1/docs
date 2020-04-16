# 配置静态资源

## 载入图片

按之前的介绍操作，会发现封面会有些图片没有加载出来，是因为还没有配置图片。下面会介绍图片的添加方法。

### 创建public文件夹

在.vuepress文件夹目录中创建一个public文件夹，在其中创建两个文件夹分别为CSS和img，在img中存放想要使用的图片

![1584603276_1_.jpg](https://i.loli.net/2020/03/19/5qJDyYbTItxGQEO.png)

### 配置图片信息

在CSS文件夹中创建一个style.css文件，并输入配置css语言

```
#app .navbar .home-link span:before{
	display:inline-block;
	content:'';
	width:3rem;
	height:2.4rem;
	background:url('../img/xingkong.png') no-repeat;
	background-size:100% 100%;
	vertical-align:middle;
}
```

### 配置config文件

在config文件的head目录中输入

```
['link',{rel:'stylesheet',href:'/css/style.css'}],
```

![1584603546_1_.jpg](https://i.loli.net/2020/03/19/d8i4aRI3wzhbxUW.png)

<Vssue />
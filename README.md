# 切图的一些项目

## t-001  一家金融企业某个页面的切图 500

* echart如何使用
* flex布局的兼容性，以及jusitify:spance-evenly只能谷歌浏览器支持
* 为了在所有浏览器保持一致，有必要重新定义select,可以参考数据<dom编程2>

## d10026 一个武术的h5网页  700

* [手机端页面如何适配]( http://hcysun.me/2015/10/19/%E4%B8%80%E7%AF%87%E7%9C%9F%E6%AD%A3%E6%95%99%E4%BC%9A%E4%BD%A0%E5%BC%80%E5%8F%91%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%96%87%E7%AB%A0-%E4%BA%8C/)
* [如何测试自己写的界面](https://www.zhihu.com/question/37361845)
* 手机端扩大点击区域
* h5手机端视频播放

## d10027  公司官网首页  250

## d10029  官网修改  200

## d10033 手机h5  750

* 问题1： 不能以设计稿640为基准，如果以640为基准，那么font-size为16px，那么iphone5的font-size为8px，浏览器最小字体12px，所以会出现溢出
* 使用420px的设计稿为基准，在iphone5中html的font-size为12.19px
* 字体单独设置，使用单位em，媒体查询设置body的font-size

## d10042

写手机端页面的方法：

1. 设置420为基准，420px宽的时候页面的fon-size为16px,则320px宽的时候页面的font-siize为12.19047619px。chrome浏览器最小字体为12px，你设置为任何小于12px的值它都会是12px，所以如果根据设计稿的宽度(一般为750或者640)调整在小屏幕下就会出现问题
2. 我使用vscode的一个插件进行rem计算,如下图输入px，按tab转化为px
3. ![image-20180721165518909](/var/folders/8p/w9p5cj3n4wxfdwnsxj16rkcc0000gn/T/abnerworks.Typora/image-20180721165518909.png)

字体一般使用媒体查询设置，使用em,因为浏览器不能显示12px以下的字体，下面只是一个示例，距离多少根据设计稿

![image-20180721165912232](/var/folders/8p/w9p5cj3n4wxfdwnsxj16rkcc0000gn/T/abnerworks.Typora/image-20180721165912232.png)

4. 测试的话在chrome浏览器里面,设置宽度为420px

![image-20180721165829810](/var/folders/8p/w9p5cj3n4wxfdwnsxj16rkcc0000gn/T/abnerworks.Typora/image-20180721165829810.png)
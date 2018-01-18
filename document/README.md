# vue-seamless-scroll 
> 一个简单的基于vue.js的无缝滚动

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <img src="http://p2.qqyou.com/biaoqing/UploadPic/2013-2/1/2013020120565544702.gif" width="480"/>
</p>                                            
<p align="center">
   🌾 <a href="https://chenxuan0000.github.io/vue-seamless-scroll/" target="_blank">在线demo</a> |
   📘 <a href="../README.md">English Document</a>
</p>

## 浏览器兼容性
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;


## 安装

### NPM

```bash
npm install vue-seamless-scroll --save
```

## 使用
### ES6
> 详情的demo页面 [example-src/App.vue](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/examples-src/App.vue)

```js
import Vue from 'vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

new Vue({
  components: {
    vueSeamlessScroll
  }
})
```

### 普通的使用方法 (script标签引入)

Example:
> 详情的demo页面 [test/test.html](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/test/test.html)
```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-seamless-scroll></vue-seamless-scroll>
  </div>
  <script src="vue.js"></script>
  <script src="vue-seamless-scroll"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## 配置项默认值
```js
      defaultOption () {
        return {
          step: 1, //数值越大速度滚动越快
          limitMoveNum: 5, //开始无缝滚动的数据量  //this.dataList.length
          hoverStop: true, //是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, //开启数据实时监控刷新dom
          singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 //单步运动停止的时间(默认值1000ms)
        }
      }
```
## demo gif
- 这个组件是基于vue数据驱动的原理来实现的，所以你需要为了后面的回调处理向组件传个data。

> demo1
<p align="center">
    <img src="../test/demo1.gif" width="783"/>
</p> 

> demo2
<p align="center">
    <img src="../test/demo2.gif" width="783"/>
</p> 

> demo3
<p align="center">
    <img src="../test/demo3.gif" width="783"/>
</p> 

> demo4
- 请注意左右滚动你必须定义好solt容器的实际宽度(例如下面的css)样式。
```css
  .ul-item {
    width: 670px;
  }
```
<p align="center">
    <img src="../test/demo4.gif" width="783"/>
</p> 

## 注意
我将会在近期创建一个js无缝滚动插件项目。

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).
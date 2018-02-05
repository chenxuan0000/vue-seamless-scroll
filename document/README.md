# vue-seamless-scroll 
> 一个简单的基于vue.js的无缝滚动

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <img src="http://p2.qqyou.com/biaoqing/UploadPic/2013-2/1/2013020120565544702.gif" width="480"/>
</p>                                            
<p align="center">
   🐾<a href="https://chenxuan0000.github.io/component-document/index_prod.html#/component/seamless-default">在线文档demo</a> |
   🌾 <a href="https://chenxuan0000.github.io/vue-seamless-scroll/index.html" target="_blank">小demo</a> |
   📘 <a href="../README.md">English Document</a>
</p>

## 内容

- [**`浏览器兼容性`**](#浏览器兼容性)
- [**`功能特性`**](#功能特性)
- [**`安装`**](#安装)
- [**`使用`**](#使用)
    - [**`ES6`**](#ES6)
    - [**`普通的使用方法`**](#普通的使用方法)
- [**`配置项默认值`**](#配置项默认值)   
- [**`个别特殊配置项说明`**](#个别特殊配置项说明)
- [**`历史版本`**](#历史版本)
- [**`注意`**](#注意)
- [**`贡献`**](#贡献)

## 浏览器兼容性
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## 功能特性
* [x] 基于requestAnimationFrame实现
* [x] 配置多满足多样需求
* [x] 目前支持上下左右无缝滚动，单步滚动，以及支持水平方向的手动切换功能
* [x] 持续维护迭代

## 安装

### NPM

```bash
npm install vue-seamless-scroll --save
```

### CDN
`https://cdn.jsdelivr.net/npm/vue-seamless-scroll@1.1.3/dist/vue-seamless-scroll.min.js`

## 使用
### ES6

```js
// **main.js**
// 1.全局 install
import Vue from 'vue'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

// 或者你可以自己设置全局注册的组件名 默认注册的组件名是 vue-seamless-scroll
Vue.use(scroll,{componentName: 'scroll-seamless'})

// 2.单个.vue文件局部注册
<script>
  import vueSeamless from 'vue-seamless-scroll'
   export default {
      components: {
        vueSeamless
      }
   }
</script>
// demo
<template>
    <vue-seamless-scroll :data="listData" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>

```

### 普通的使用方法

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
          openTouch: true, //开启移动端touch
          singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000, //单步运动停止的时间(默认值1000ms)
          switchOffset: 30, // 左右 切换按钮 距离左右边距(px)
          autoPlay: true, // *是否自动播放 使用switch切换时候需要置为false*
          switchSingleStep: 134, //单步切换step(px)
          switchDelay: 400, // 单步切换的时间(ms)
          switchDisabledClass: 'disabled'  // 不可以点击状态的switch父元素的类名
      }
```

## 个别特殊配置项说明

> 1.最外层容器需要手动设置`width height overflow:hidden`

> 2.左右的无缝滚动需要给主内容区域（即默认slot插槽提供）设定合适的`css width`属性(否则无法正确计算实际宽度)

> 3.step值不建议太小,不然会有卡顿效果

> 4.需要实现手动切换左右滚动的时候,必须设置`autoPlay:false`,目前不支持环路

> 5.提供了`slot left-switch || right-switch`可以自由定义需要的按钮样式 外层有div已经定位了位置居中,距离两边侧的距离可以通过switchOffset参数调整

> 6.当按钮到达边界位置,会自动为无法点击状态按钮加上定义的`switchDisabledClass: 'disabled'`,可以按需配置


## 历史版本
See the GitHub [历史版本](https://github.com/chenxuan0000/vue-seamless-scroll/releases).

## 注意
如果你想要js无缝滚动(无依赖)你可以切换到这里[seamscroll](https://github.com/chenxuan0000/seamless-scroll)。


## 贡献
欢迎给出一些意见和优化，期待你的 `Pull Request`。

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).
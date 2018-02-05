# vue-seamless-scroll 
> A simple, Seamless scrolling for Vue.js

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                                                      
<p align="center">
    <img src="http://p2.qqyou.com/biaoqing/UploadPic/2013-2/1/2013020120565544702.gif" width="480"/>
</p>                                             
<p align="center">
   🐾<a href="https://chenxuan0000.github.io/component-document/index_prod.html#/component/seamless-default">online demo</a> |
   🌾 <a href="https://chenxuan0000.github.io/vue-seamless-scroll/index.html">sample demo</a> |
   📘 <a href="./document/README.md">中文文档</a> 
</p>
                                        
## Content

- [**`Browser support`**](#browser-support)
- [**`Features`**](#features)
- [**`Installation`**](#installation)
- [**`Usage`**](#usage)
    - [**`ES6`**](#eS6)
    - [**`Normal use`**](#normal-use)
- [**`Configure`**](#configure)  
- [**`Individual special configuration items`**](#individual-special-configuration-items) 
- [**`Changelog`**](#changelog)
- [**`Cares`**](#cares)
- [**`Contribution`**](#contribution)

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## Features
* [x] base on requestAnimationFrame
* [x] the configuration meets a variety of requirements.
* [x] current support for seamless scrolling, single-step scrolling, and manual switching support for horizontal direction.
* [x] ongoing maintenance

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

### CDN
`https://cdn.jsdelivr.net/npm/vue-seamless-scroll@1.1.3/dist/vue-seamless-scroll.min.js`

## Usage
### ES6

```js
// **main.js**
// 1.global install
import Vue from 'vue'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

//or you can set componentName default componentName is vue-seamless-scroll
Vue.use(scroll,{componentName: 'scroll-seamless'})

// 2.single .vue import
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

### Normal use

Example:
> Specific reference [test/test.html](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/test/test.html)
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

## Configure
```js
      defaultOption () {
        return {
          step: 1, //the faster the rolling speed is faster
          limitMoveNum: 5, //start seamless scrolling minimum data  //this.dataList.length
          hoverStop: true, //mouse hover control is enabled
          direction: 1, // 0 down || 1 up || 2 left || 3 right
          openTouch: true, //open touch 
          singleHeight: 0, //one single stop height(default zero is seamless) => direction 0/1
          singleWidth: 0, //one single stop width(default zero is seamless) => direction 2/3
          waitTime: 1000, //one single data stop wait time
          switchOffset: 30, // the left and right buttons distance from the left and right sides (px)
          autoPlay: true, // whether or not to automatically play the switch needs to be set to false
          switchSingleStep: 134, //the size of a single step switch (px)
          switchDelay: 400, // the time of a single step switch (ms)
          switchDisabledClass: 'disabled'  // the className of the switch parent element that cannot be clicked.
        }
      }
```

## Individual special configuration items

> 1.The outermost container needs to be set manually`width height overflow:hidden`

> 2.The left and right seamless rolling needs to be set for the main content area (that is, the default slot slots)`css width`(otherwise, the actual width cannot be calculated correctly)

> 3.The step value is not recommended to be too small, otherwise there will be carton effect.

> 4.You need to set when you need to manually switch left and right to scroll`autoPlay:false`,(The loop is not currently supported.)

> 5.Provides `slot left-switch || right-switch` you can freely define the button styles you want. The outer div is positioned in the middle,the distance from both sides can be adjusted by the switchOffset parameter.

> 6.When the button reaches the boundary position, it automatically adds a definition to the state button that cannot be clicked.`switchDisabledClass: 'disabled'`,you can configure it as needed.

## Changelog
See the GitHub [release history](https://github.com/chenxuan0000/vue-seamless-scroll/releases).

## Cares
If you want js to scroll seamlessly (without dependencies) you can switch to here.[seamscroll](https://github.com/chenxuan0000/seamless-scroll)。

## Contribution
Welcome to give some Suggestions and optimizations, and look forward to your `Pull Request`.

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).
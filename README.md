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
                                        

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

## Usage
### ES6
> Specific reference [example-src/App.vue](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/examples-src/App.vue)

```js
// **main.js**
import Vue from 'vue'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

<template>
  <vue-seamless-scroll></vue-seamless-scroll>
</template>

//or you can set componentName default componentName is vue-seamless-scroll
Vue.use(scroll,{componentName: 'scroll-seamless'})

<template>
  <scroll-seamless></scroll-seamless>
</template>
```

### normal use (script tag)

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
          openWatch: true, //open data realTime monitoring
          singleHeight: 0, //one single stop height(default zero is seamless) => direction 0/1
          singleWidth: 0, //one single stop width(default zero is seamless) => direction 2/3
          waitTime: 1000 //one single data stop wait time
        }
      }
```

## Changelog
See the GitHub [release history](https://github.com/chenxuan0000/vue-seamless-scroll/releases).

## Cares
If you want js to scroll seamlessly (without dependencies) you can switch to here.[seamscroll](https://github.com/chenxuan0000/seamless-scroll)。

## Contribution
Welcome to give some Suggestions and optimizations, and look forward to your `Pull Request`.

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).
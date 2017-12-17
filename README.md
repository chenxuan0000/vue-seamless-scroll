# vue-seamless-scroll 
> A simple, Seamless scrolling for Vue.js

[![GitHub forks](https://img.shields.io/github/forks/chenxuan0000/vue-seamless-scroll.svg?style=social&label=Fork)](https://www.npmjs.com/package/vue-seamless-scroll)[![GitHub stars](https://img.shields.io/github/stars/chenxuan0000/vue-seamless-scroll.svg?style=social&label=Stars)](https://www.npmjs.com/package/vue-seamless-scroll)
[![npm](https://img.shields.io/npm/dw/chenxuan0000/vue-seamless-scroll.svg)]()
[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <a href="https://lets-blade.com"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513438288&di=7501d9cbb876dbf8e189d846e72dc1f0&src=http://easyread.ph.126.net/e09BC9VNjw0fmSDrvpjVog==/7916749801802782271.jpg" width="550"/></a>
</p>                                          

## Demo

[https://github.com/chenxuan0000/vue-seamless-scroll/index.html](https://chenxuan0000.github.io/vue-seamless-scroll/)

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

## Usage
### ES6
*以下es6用法需要webpack环境编译.*
> 具体参考[example-src/App.vue](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/examples-src/App.vue)

```js
import Vue from 'vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

new Vue({
  components: {
    vueSeamlessScroll
  }
})
```

### 普通模式 (script tag)

Example:
> 具体参考[test/test.html](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/test/test.html)
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
          step: 1, //步长 越大滚动速度越快
          limitMoveNum: 5, //启动无缝滚动最小数据量 this.dataList.length
          hoverStop: true, //是否启用鼠标hover控制
          direction: 1, //1 往上 0 往下
          openWatch: true, //开启data实时监听
          singleHeight: 0, //单条数据高度有值hoverStop关闭
          waitTime: 1000 //单步停止等待时间
        }
      }
```

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).
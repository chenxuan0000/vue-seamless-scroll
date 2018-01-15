# vue-seamless-scroll 
> 一个简单的基于vue.js的无缝滚动

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513438288&di=7501d9cbb876dbf8e189d846e72dc1f0&src=http://easyread.ph.126.net/e09BC9VNjw0fmSDrvpjVog==/7916749801802782271.jpg" width="550"/>
</p>                                            
<p align="center">
   🌾 <a href="https://github.com/chenxuan0000/vue-seamless-scroll/index.html" target="_blank">在线demo</a> |
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
          direction: 1, //1向上 0向下
          openWatch: true, //开启数据实时监控刷新dom
          singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动)
          waitTime: 1000 //单步运动停止的时间(默认值1000ms)
        }
      }
```

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).
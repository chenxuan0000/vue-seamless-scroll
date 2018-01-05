# vue-seamless-scroll 
> A simple, Seamless scrolling for Vue.js
[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <a href="https://lets-blade.com"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513438288&di=7501d9cbb876dbf8e189d846e72dc1f0&src=http://easyread.ph.126.net/e09BC9VNjw0fmSDrvpjVog==/7916749801802782271.jpg" width="550"/></a>
</p>                                          


## Browser support
> mobile && pc

## Demo
[https://github.com/chenxuan0000/vue-seamless-scroll/index.html](https://chenxuan0000.github.io/vue-seamless-scroll/)

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

## Usage
### ES6
> Specific reference[example-src/App.vue](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/examples-src/App.vue)

```js
import Vue from 'vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

new Vue({
  components: {
    vueSeamlessScroll
  }
})
```

### normal use (script tag)

Example:
> Specific reference[test/test.html](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/test/test.html)
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
          direction: 1, //1 up 0 down
          openWatch: true, //open data realTime monitoring
          singleHeight: 0, //one single stop height(default zero is seamless)
          waitTime: 1000 //one single data stop wait time
        }
      }
```

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).
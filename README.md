# vue-seamless-scroll 
> A simple, Seamless scrolling for Vue.js

## Demo

[https://github.com/chenxuan0000/vue-seamless-scroll/index.html](https://github.com/chenxuan0000/vue-seamless-scroll/index.html)

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

## Usage
### ES6
*以下es6用法需要webpack环境编译.*

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

Add a script tag pointing to `dist/vue-seamless-scroll.min.js` *after* adding Vue.

Example:

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
  <script src="vue-simple-spinner.js"></script>
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
          direction: 1 //1 往上 0 往下
        }
      }
```

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).
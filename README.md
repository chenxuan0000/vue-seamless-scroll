# vue-seamless-scroll 
> A simple, Seamless scrolling for Vue.js

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                                                      
<p align="center">
    <img src="http://p2.qqyou.com/biaoqing/UploadPic/2013-2/1/2013020120565544702.gif" width="480"/>
</p>                                             
<p align="center">
   🐾<a href="http://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-default">online demo</a> |
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
- [**`Issues solution`**](#issues-solution)
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
`https://cdn.jsdelivr.net/npm/vue-seamless-scroll@1.1.12/dist/vue-seamless-scroll.min.js`

## Usage
### ES6

> [**`online demo`**](https://chenxuan0000.github.io/component-document/index_prod.html#/component/seamless-default)
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
|key|description|default|val|
|:---|---|---|---|
|`step`|the faster the rolling speed is faster|`1`|`Number`|
|`limitMoveNum`|start seamless scrolling minimum data length|`5`|`Number`|
|`hoverStop`|mouse hover control is enabled|`true`|`Boolean`|
|`direction`| 0 down、 1 up 、 2 left 、 3 right|`1`|`Number`|
|`openTouch`|open mobile touch |`true`|`Boolean`|
|`singleHeight`|one single stop height(default zero is seamless) => direction 0/1|`0`|`Number`|
|`singleWidth`|one single stop width(default zero is seamless) => direction 2/3|`0`|`Number`|
|`waitTime`|one single data stop wait time(ms)|`1000`|`Number`|
|`switchOffset`|the left and right buttons distance from the left and right sides (px)|`30`|`Number`|
|`autoPlay`|whether or not to automatically play the switch needs to be set to false|`true`|`Boolean`|
|`switchSingleStep`|the size of a single step switch (px)|`134`|`Number`|
|`switchDelay`|the animation time of a single step switch(ms)|`400`|`Number`|
|`switchDisabledClass`|the className of the switch parent element that cannot be clicked|`disabled`|`String`|
|`isSingleRemUnit`|singleHeight and singleWidth Whether to enable the rem metric|`false`|`Boolean`|

## Individual special configuration items

> 1.The outermost container needs to be set manually`width height overflow:hidden`

> 2.The left and right seamless rolling needs to be set for the main content area (that is, the default slot slots)`css width`(otherwise, the actual width cannot be calculated correctly)

> 3.The step value is not recommended to be too small, otherwise there will be carton effect.

> 4.You need to set when you need to manually switch left and right to scroll`autoPlay:false`,(The loop is not currently supported.)

> 5.Provides `slot left-switch || right-switch` you can freely define the button styles you want. The outer div is positioned in the middle,the distance from both sides can be adjusted by the switchOffset parameter.

> 6.When the button reaches the boundary position, it automatically adds a definition to the state button that cannot be clicked.`switchDisabledClass: 'disabled'`,you can configure it as needed.

## Issues solution
> [**`Event cannot be duplicated`**](./issuses/problem1-en.md)

## Changelog
See the GitHub [release history](https://github.com/chenxuan0000/vue-seamless-scroll/releases).

## Cares
If you want js to scroll seamlessly (without dependencies) you can switch to here.[seamscroll](https://github.com/chenxuan0000/seamless-scroll)。

## Contribution
Welcome to give some Suggestions and optimizations, and look forward to your `Pull Request`.

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).
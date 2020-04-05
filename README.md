# vue-seamless-scroll
> A simple, Seamless scrolling for Vue.js

<p align="center">
   🐾<a href="http://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-default">online demo</a> |
   🌾 <a href="https://chenxuan0000.github.io/vue-seamless-scroll/index.html">sample demo</a> |
   📘 <a href="./document/README.md">中文文档</a>
</p>

## Content

- [**`Update log`**](#update-log)
- [**`Browser support`**](#browser-support)
- [**`Features`**](#features)
- [**`Installation`**](#installation)
- [**`Usage`**](#usage)
    - [**`ES6`**](#eS6)
    - [**`Normal use`**](#normal-use)
- [**`Configure`**](#configure)
- [**`Events`**](#events)
- [**`Individual special configuration items`**](#individual-special-configuration-items)
- [**`Changelog`**](#changelog)
- [**`Issues solution`**](#issues-solution)
- [**`Cares`**](#cares)
- [**`Contribution`**](#contribution)

## Update log

### 1.1.21
  - fixed issues [#68](https://github.com/chenxuan0000/vue-seamless-scroll/issues/68) [#87](https://github.com/chenxuan0000/vue-seamless-scroll/issues/87) [#89](https://github.com/chenxuan0000/vue-seamless-scroll/issues/89)

### 1.1.20
  - Document update, source code fine-tuning.

### 1.1.17
 Bug fix
  - The step attribute is set to a decimal point below 1 and scrolls up with a sway.
  - The offsetWidth is rounded off, causing the error to be calculated. The horizontal scrolling is not on one line, and a blank will appear.
  - If single-step scrolling is set, the step needs to be a single-numbered divisor, otherwise the position of the single-step scrolling end cannot be guaranteed.

 Configuration update
  - Added navigation configuration, whether the left and right scrolling shows the controller button. When the value is true, autoPlay automatically becomes false.

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## Features
* [x] base on requestAnimationFrame.
* [x] the configuration meets a variety of requirements.
* [x] current support for seamless scrolling, single-step scrolling, and manual switching support for horizontal direction.

## Installation

### NPM

```bash
npm install vue-seamless-scroll --save
```

### CDN
`https://cdn.jsdelivr.net/npm/vue-seamless-scroll@latest/dist/vue-seamless-scroll.min.js`

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
|`autoPlay`|Less than 1.1.17 version needs to be set to false when manually switching|`true`|`Boolean`|
|`switchSingleStep`|the size of a single step switch (px)|`134`|`Number`|
|`switchDelay`|the animation time of a single step switch(ms)|`400`|`Number`|
|`switchDisabledClass`|the className of the switch parent element that cannot be clicked|`disabled`|`String`|
|`isSingleRemUnit`|singleHeight and singleWidth Whether to enable the rem metric|`false`|`Boolean`|


- update 1.1.17

|key|description|default|val|
|:---|---|---|---|
|`navigation`|Whether the left and right scrolling shows the controller button, autoPlay automatically becomes false when true|`false`|`Boolean`|

## CalBackEvents
|name|description|calback params|
|:---|---|---|
|`ScrollEnd`|A roll-through callback event|`null`|

## Individual special configuration items

> 1.The outermost container needs to be set manually`width height overflow:hidden`

> 2.The left and right seamless rolling needs to be set for the main content area (that is, the default slot slots)`css width`(otherwise, the actual width cannot be calculated correctly). You can also set it to `display:flex;` without setting the `css width` property.

> 3.The step value is not recommended to be too small, otherwise there will be carton effect.(If single-step scrolling is set, the step needs to be a divisor of the single-step size, otherwise the position of the single-step scrolling end cannot be guaranteed to be accurate. ~~~~~, such as single step 30, step can not be 4)

> 4.You need to set when you need to manually switch left and right to scroll`autoPlay:false`(Starting with version 1.1.17, you only need to set `navigation:false`),(The loop is not currently supported.)

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
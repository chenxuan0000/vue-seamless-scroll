(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueSeamlessScroll"] = factory();
	else
		root["vueSeamlessScroll"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _myClass = __webpack_require__(1);

var _myClass2 = _interopRequireDefault(_myClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_myClass2.default.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.component(options.componentName || _myClass2.default.name, _myClass2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(_myClass2.default.name, _myClass2.default);
}

exports.default = _myClass2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "G:\\github\\vue-seamless-scroll\\src\\components\\myClass.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myClass.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-299cf3bf", Component.options)
  } else {
    hotAPI.reload("data-v-299cf3bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


__webpack_require__(4)();
var arrayEqual = __webpack_require__(5);
var copyObj = __webpack_require__(6);
exports.default = {
  name: 'vue-seamless-scroll',
  data: function data() {
    return {
      xPos: 0,
      yPos: 0,
      delay: 0,
      copyHtml: '',
      height: 0,
      width: 0,
      realBoxWidth: 0,
      reqFrame: null,
      singleWaitTime: null,
      isHover: false };
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    classOption: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    leftSwitchState: function leftSwitchState() {
      return this.xPos < 0;
    },
    rightSwitchState: function rightSwitchState() {
      return Math.abs(this.xPos) < this.realBoxWidth - this.width;
    },
    leftSwitchClass: function leftSwitchClass() {
      return this.leftSwitchState ? '' : this.options.switchDisabledClass;
    },
    rightSwitchClass: function rightSwitchClass() {
      return this.rightSwitchState ? '' : this.options.switchDisabledClass;
    },
    leftSwitch: function leftSwitch() {
      return {
        position: 'absolute',
        margin: this.height / 2 + 'px 0 0 -' + this.options.switchOffset + 'px',
        transform: 'translate(-100%,-50%)'
      };
    },
    rightSwitch: function rightSwitch() {
      return {
        position: 'absolute',
        margin: this.height / 2 + 'px 0 0 ' + (this.width + this.options.switchOffset) + 'px',
        transform: 'translateY(-50%)'
      };
    },
    float: function float() {
      return this.options.direction > 1 || !this.options.autoPlay ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' };
    },
    pos: function pos() {
      return {
        transform: 'translate(' + this.xPos + 'px,' + this.yPos + 'px)',
        transition: 'all ' + (this.ease || 'ease-in') + ' ' + this.delay + 'ms',
        overflow: 'hidden'
      };
    },
    defaultOption: function defaultOption() {
      return {
        step: 1,
        limitMoveNum: 5,
        hoverStop: true,
        direction: 1,
        openTouch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 1000,
        switchOffset: 30,
        autoPlay: true,
        switchSingleStep: 134,
        switchDelay: 400,
        switchDisabledClass: 'disabled'
      };
    },
    options: function options() {
      return copyObj({}, this.defaultOption, this.classOption);
    },
    moveSwitch: function moveSwitch() {
      return this.data.length < this.options.limitMoveNum;
    },
    hoverStop: function hoverStop() {
      return !this.options.autoPlay || !this.options.hoverStop || this.moveSwitch;
    },
    canTouch: function canTouch() {
      return !this.options.openTouch || !this.options.autoPlay;
    }
  },
  methods: {
    leftSwitchClick: function leftSwitchClick() {
      if (!this.leftSwitchState) return;

      if (Math.abs(this.xPos) < this.options.switchSingleStep) {
        this.xPos = 0;
        return;
      }
      this.xPos += this.options.switchSingleStep;
    },
    rightSwitchClick: function rightSwitchClick() {
      if (!this.rightSwitchState) return;

      if (this.realBoxWidth - this.width + this.xPos < this.options.switchSingleStep) {
        this.xPos = this.width - this.realBoxWidth;
        return;
      }
      this.xPos -= this.options.switchSingleStep;
    },
    _cancle: function _cancle() {
      cancelAnimationFrame(this.reqFrame || '');
    },
    touchStart: function touchStart(e) {
      var _this = this;

      if (this.canTouch) return;
      var timer = void 0;
      var touch = e.targetTouches[0];
      this.startPos = {
        x: touch.pageX,
        y: touch.pageY
      };
      this.startPosY = this.yPos;
      this.startPosX = this.xPos;
      if (!!this.options.singleHeight && !!this.options.singleWidth) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          _this._cancle();
        }, this.options.waitTime + 20);
      } else {
        this._cancle();
      }
    },
    touchMove: function touchMove(e) {
      if (this.canTouch || e.targetTouches.length > 1 || e.scale && e.scale !== 1) return;
      var touch = e.targetTouches[0];
      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y
      };
      event.preventDefault();
      var dir = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0;
      if (dir === 1 && this.options.direction < 2) {
        this.yPos = this.startPosY + this.endPos.y;
      } else if (dir === 0 && this.options.direction > 1) {
        this.xPos = this.startPosX + this.endPos.x;
      }
    },
    touchEnd: function touchEnd() {
      var _this2 = this;

      if (this.canTouch) return;
      var timer = void 0;
      var direction = this.options.direction;
      this.delay = 50;
      if (direction === 1) {
        if (this.yPos > 0) this.yPos = 0;
      } else if (direction === 0) {
        var h = this.$refs.realBox.offsetHeight / 2 * -1;
        if (this.yPos < h) this.yPos = h;
      } else if (direction === 2) {
        if (this.xPos > 0) this.xPos = 0;
      } else if (direction === 3) {
        var w = this.$refs.slotList.offsetWidth * -1;
        if (this.xPos < w) this.xPos = w;
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.delay = 0;
        _this2._move();
      }, this.delay);
    },
    enter: function enter() {
      if (this.hoverStop) return;
      this.isHover = true;
      if (this.singleWaitTime) clearTimeout(this.singleWaitTime);
      this._cancle();
    },
    leave: function leave() {
      if (this.hoverStop) return;
      this.isHover = false;
      this._move();
    },
    _move: function _move() {
      if (this.isHover) return;
      this._cancle();
      this.reqFrame = requestAnimationFrame(function () {
        var _this3 = this;

        if (!this.$refs.realBox) return;
        var h = this.$refs.realBox.offsetHeight / 2;
        var w = this.$refs.slotList.offsetWidth;
        var direction = this.options.direction;
        if (direction === 1) {
          if (Math.abs(this.yPos) >= h) this.yPos = 0;
          this.yPos -= this.options.step;
        } else if (direction === 0) {
          if (this.yPos >= 0) this.yPos = h * -1;
          this.yPos += this.options.step;
        } else if (direction === 2) {
          if (Math.abs(this.xPos) >= w) this.xPos = 0;
          this.xPos -= this.options.step;
        } else if (direction === 3) {
          if (this.xPos >= 0) this.xPos = w * -1;
          this.xPos += this.options.step;
        }
        if (this.singleWaitTime) clearTimeout(this.singleWaitTime);
        if (!!this.options.singleHeight) {
          if (Math.abs(this.yPos) % this.options.singleHeight === 0) {
            this.singleWaitTime = setTimeout(function () {
              _this3._move();
            }, this.options.waitTime);
          } else {
            this._move();
          }
        } else if (!!this.options.singleWidth) {
          if (Math.abs(this.xPos) % this.options.singleWidth === 0) {
            this.singleWaitTime = setTimeout(function () {
              _this3._move();
            }, this.options.waitTime);
          } else {
            this._move();
          }
        } else {
          this._move();
        }
      }.bind(this));
    },
    _initMove: function _initMove() {
      var _this4 = this;

      this.copyHtml = '';
      if (this.moveSwitch) {
        this._cancle();
        this.yPos = this.xPos = 0;
      } else {
        var timer = void 0;
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          _this4.copyHtml = _this4.$refs.slotList.innerHTML;
        }, 20);
        this._move();
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$refs.wrap.offsetHeight;
    this.width = this.$refs.wrap.offsetWidth;

    if (this.options.direction > 1 || !this.options.autoPlay) {
      var rate = void 0;
      if (!this.options.autoPlay) {
        rate = 1;
      } else {
        rate = 2;
      }
      this.$refs.realBox.style.width = this.$refs.slotList.offsetWidth * rate + 'px';
      this.realBoxWidth = this.$refs.slotList.offsetWidth * rate;
    }
    if (!this.options.autoPlay) {
      this.ease = 'linear';
      this.delay = this.options.switchDelay;
      return;
    }
    this._initMove();
  },

  watch: {
    data: function data(newData, oldData) {
      if (!arrayEqual(newData, oldData)) {
        this._cancle();
        this._initMove();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this._cancle();
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * @desc AnimationFrame简单兼容hack
 */
var animationFrame = function animationFrame() {
  window.cancelAnimationFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
      return window.clearTimeout(id);
    };
  }();
  window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();
};

module.exports = animationFrame;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * @desc 判断数组是否相等
 * @param {arr1,arr2}
 * @return {Boolean}
 */
var arrayEqual = function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

module.exports = arrayEqual;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @desc 深浅合并拷贝
 */
function copyObj() {
  var name = void 0,
      options = void 0,
      src = void 0,
      copy = void 0,
      copyIsArray = void 0,
      clone = void 0,
      i = 1,
      target = arguments[0] || {},
      // 使用||运算符，排除隐式强制类型转换为false的数据类型
  deep = false,
      len = arguments.length;
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i++;
  }
  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function') {
    target = {};
  }
  // 如果arguments.length === 1 或typeof arguments[0] === 'boolean',且存在arguments[1]，则直接返回target对象
  if (i === len) {
    return target;
  }
  for (; i < len; i++) {
    //所以如果源对象中数据类型为Undefined或Null那么就会跳过本次循环，接着循环下一个源对象
    if ((options = arguments[i]) != null) {
      // 如果遇到源对象的数据类型为Boolean, Number for in循环会被跳过，不执行for in循环// src用于判断target对象是否存在name属性
      for (name in options) {
        // src用于判断target对象是否存在name属性
        src = target[name];
        // 需要复制的属性当前源对象的name属性
        copy = options[name];
        // 判断copy是否是数组
        copyIsArray = Array.isArray(copy);
        // 如果是深复制且copy是一个对象或数组则需要递归直到copy成为一个基本数据类型为止
        if (deep && copy && ((typeof copy === 'undefined' ? 'undefined' : _typeof(copy)) === 'object' || copyIsArray)) {
          if (copyIsArray) {
            copyIsArray = false;
            // 如果目标对象存在name属性且是一个数组
            // 则使用目标对象的name属性，否则重新创建一个数组，用于复制
            clone = src && Array.isArray(src) ? src : [];
          } else {
            // 如果目标对象存在name属性且是一个对象则使用目标对象的name属性，否则重新创建一个对象，用于复制
            clone = src && (typeof src === 'undefined' ? 'undefined' : _typeof(src)) === 'object' ? src : {};
          }
          // 深复制，所以递归调用copyObject函数
          // 返回值为target对象，即clone对象
          // copy是一个源对象
          target[name] = copyObj(deep, clone, copy);
        } else if (copy !== undefined) {
          // 浅复制，直接复制到target对象上
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

module.exports = copyObj;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrap"
  }, [_c('div', {
    class: _vm.leftSwitchClass,
    style: (_vm.leftSwitch),
    on: {
      "click": _vm.leftSwitchClick
    }
  }, [_vm._t("left-switch")], 2), _vm._v(" "), _c('div', {
    class: _vm.rightSwitchClass,
    style: (_vm.rightSwitch),
    on: {
      "click": _vm.rightSwitchClick
    }
  }, [_vm._t("right-switch")], 2), _vm._v(" "), _c('div', {
    ref: "realBox",
    style: (_vm.pos),
    on: {
      "mouseenter": _vm.enter,
      "mouseleave": _vm.leave,
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd
    }
  }, [_c('div', {
    ref: "slotList",
    style: (_vm.float)
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    style: (_vm.float),
    domProps: {
      "innerHTML": _vm._s(_vm.copyHtml)
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-299cf3bf", module.exports)
  }
}

/***/ })
/******/ ])["default"];
});
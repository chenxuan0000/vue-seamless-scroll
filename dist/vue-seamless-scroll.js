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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
      realBoxWidth: 0 };
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
      return this.isHorizontal ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' };
    },
    pos: function pos() {
      return {
        transform: 'translate(' + this.xPos + 'px,' + this.yPos + 'px)',
        transition: 'all ' + this.ease + ' ' + this.delay + 'ms',
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
        navigation: false,
        switchSingleStep: 134,
        switchDelay: 400,
        switchDisabledClass: 'disabled',
        isSingleRemUnit: false };
    },
    options: function options() {
      return copyObj({}, this.defaultOption, this.classOption);
    },
    navigation: function navigation() {
      return this.options.navigation;
    },
    autoPlay: function autoPlay() {
      if (this.navigation) return false;
      return this.options.autoPlay;
    },
    scrollSwitch: function scrollSwitch() {
      return this.data.length >= this.options.limitMoveNum;
    },
    hoverStopSwitch: function hoverStopSwitch() {
      return this.options.hoverStop && this.autoPlay && this.scrollSwitch;
    },
    canTouchScroll: function canTouchScroll() {
      return this.options.openTouch;
    },
    isHorizontal: function isHorizontal() {
      return this.options.direction > 1;
    },
    baseFontSize: function baseFontSize() {
      return this.options.isSingleRemUnit ? parseInt(window.getComputedStyle(document.documentElement, null).fontSize) : 1;
    },
    realSingleStopWidth: function realSingleStopWidth() {
      return this.options.singleWidth * this.baseFontSize;
    },
    realSingleStopHeight: function realSingleStopHeight() {
      return this.options.singleHeight * this.baseFontSize;
    },
    step: function step() {
      var singleStep = void 0;
      var step = this.options.step;
      if (this.isHorizontal) {
        singleStep = this.realSingleStopWidth;
      } else {
        singleStep = this.realSingleStopHeight;
      }
      if (singleStep > 0 && singleStep % step > 0) {
        console.error('如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~');
      }
      return step;
    }
  },
  methods: {
    reset: function reset() {
      this._cancle();
      this._initMove();
    },
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

      if (!this.canTouchScroll) return;
      var timer = void 0;
      var touch = e.targetTouches[0];var _options = this.options,
          waitTime = _options.waitTime,
          singleHeight = _options.singleHeight,
          singleWidth = _options.singleWidth;

      this.startPos = {
        x: touch.pageX,
        y: touch.pageY
      };
      this.startPosY = this.yPos;
      this.startPosX = this.xPos;
      if (!!singleHeight && !!singleWidth) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          _this._cancle();
        }, waitTime + 20);
      } else {
        this._cancle();
      }
    },
    touchMove: function touchMove(e) {
      if (!this.canTouchScroll || e.targetTouches.length > 1 || e.scale && e.scale !== 1) return;
      var touch = e.targetTouches[0];
      var direction = this.options.direction;

      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y
      };
      event.preventDefault();
      var dir = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0;
      if (dir === 1 && direction < 2) {
        this.yPos = this.startPosY + this.endPos.y;
      } else if (dir === 0 && direction > 1) {
        this.xPos = this.startPosX + this.endPos.x;
      }
    },
    touchEnd: function touchEnd() {
      var _this2 = this;

      if (!this.canTouchScroll) return;
      var timer = void 0;
      var direction = this.options.direction;
      this.delay = 50;
      if (direction === 1) {
        if (this.yPos > 0) this.yPos = 0;
      } else if (direction === 0) {
        var h = this.realBoxHeight / 2 * -1;
        if (this.yPos < h) this.yPos = h;
      } else if (direction === 2) {
        if (this.xPos > 0) this.xPos = 0;
      } else if (direction === 3) {
        var w = this.realBoxWidth * -1;
        if (this.xPos < w) this.xPos = w;
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.delay = 0;
        _this2._move();
      }, this.delay);
    },
    enter: function enter() {
      if (this.hoverStopSwitch) this._stopMove();
    },
    leave: function leave() {
      if (this.hoverStopSwitch) this._startMove();
    },
    _move: function _move() {
      if (this.isHover) return;
      this._cancle();
      this.reqFrame = requestAnimationFrame(function () {
        var _this3 = this;

        var h = this.realBoxHeight / 2;
        var w = this.realBoxWidth / 2;var _options2 = this.options,
            direction = _options2.direction,
            waitTime = _options2.waitTime;
        var step = this.step;

        if (direction === 1) {
          if (Math.abs(this.yPos) >= h) {
            this.$emit('ScrollEnd');
            this.yPos = 0;
          }
          this.yPos -= step;
        } else if (direction === 0) {
          if (this.yPos >= 0) {
            this.$emit('ScrollEnd');
            this.yPos = h * -1;
          }
          this.yPos += step;
        } else if (direction === 2) {
          if (Math.abs(this.xPos) >= w) {
            this.$emit('ScrollEnd');
            this.xPos = 0;
          }
          this.xPos -= step;
        } else if (direction === 3) {
          if (this.xPos >= 0) {
            this.$emit('ScrollEnd');
            this.xPos = w * -1;
          }
          this.xPos += step;
        }
        if (this.singleWaitTime) clearTimeout(this.singleWaitTime);
        if (!!this.realSingleStopHeight) {
          if (Math.abs(this.yPos) % this.realSingleStopHeight < step) {
            this.singleWaitTime = setTimeout(function () {
              _this3._move();
            }, waitTime);
          } else {
            this._move();
          }
        } else if (!!this.realSingleStopWidth) {
          if (Math.abs(this.xPos) % this.realSingleStopWidth < step) {
            this.singleWaitTime = setTimeout(function () {
              _this3._move();
            }, waitTime);
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

      this.$nextTick(function () {
        var switchDelay = _this4.options.switchDelay;
        var autoPlay = _this4.autoPlay,
            isHorizontal = _this4.isHorizontal;

        _this4._dataWarm(_this4.data);
        _this4.copyHtml = '';
        if (isHorizontal) {
          _this4.height = _this4.$refs.wrap.offsetHeight;
          _this4.width = _this4.$refs.wrap.offsetWidth;
          var slotListWidth = _this4.$refs.slotList.offsetWidth;

          if (autoPlay) {
            slotListWidth = slotListWidth * 2 + 1;
          }
          _this4.$refs.realBox.style.width = slotListWidth + 'px';
          _this4.realBoxWidth = slotListWidth;
        }

        if (autoPlay) {
          _this4.ease = 'ease-in';
          _this4.delay = 0;
        } else {
          _this4.ease = 'linear';
          _this4.delay = switchDelay;
          return;
        }

        if (_this4.scrollSwitch) {
          var timer = void 0;
          if (timer) clearTimeout(timer);
          _this4.copyHtml = _this4.$refs.slotList.innerHTML;
          setTimeout(function () {
            _this4.realBoxHeight = _this4.$refs.realBox.offsetHeight;
            _this4._move();
          }, 0);
        } else {
          _this4._cancle();
          _this4.yPos = _this4.xPos = 0;
        }
      });
    },
    _dataWarm: function _dataWarm(data) {
      if (data.length > 100) {
        console.warn('\u6570\u636E\u8FBE\u5230\u4E86' + data.length + '\u6761\u6709\u70B9\u591A\u54E6~,\u53EF\u80FD\u4F1A\u9020\u6210\u90E8\u5206\u8001\u65E7\u6D4F\u89C8\u5668\u5361\u987F\u3002');
      }
    },
    _startMove: function _startMove() {
      this.isHover = false;
      this._move();
    },
    _stopMove: function _stopMove() {
      this.isHover = true;
      if (this.singleWaitTime) clearTimeout(this.singleWaitTime);
      this._cancle();
    }
  },
  mounted: function mounted() {
    this._initMove();
  },

  watch: {
    data: function data(newData, oldData) {
      this._dataWarm(newData);

      if (!arrayEqual(newData, oldData)) {
        this.reset();
      }
    },
    autoPlay: function autoPlay(bol) {
      if (bol) {
        this.reset();
      } else {
        this._stopMove();
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.reqFrame = null;
    this.singleWaitTime = null;
    this.isHover = false;
    this.ease = 'ease-in';
  },
  beforeDestroy: function beforeDestroy() {
    this._cancle();
    clearTimeout(this.singleWaitTime);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _myClass = __webpack_require__(2);

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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f52f2968_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myClass_vue__ = __webpack_require__(7);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myClass_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f52f2968_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myClass_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/myClass.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f52f2968", Component.options)
  } else {
    hotAPI.reload("data-v-f52f2968", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


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
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "wrap" }, [
    _vm.navigation
      ? _c(
          "div",
          {
            class: _vm.leftSwitchClass,
            style: _vm.leftSwitch,
            on: { click: _vm.leftSwitchClick }
          },
          [_vm._t("left-switch")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.navigation
      ? _c(
          "div",
          {
            class: _vm.rightSwitchClass,
            style: _vm.rightSwitch,
            on: { click: _vm.rightSwitchClick }
          },
          [_vm._t("right-switch")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "realBox",
        style: _vm.pos,
        on: {
          mouseenter: _vm.enter,
          mouseleave: _vm.leave,
          touchstart: _vm.touchStart,
          touchmove: _vm.touchMove,
          touchend: _vm.touchEnd
        }
      },
      [
        _c(
          "div",
          { ref: "slotList", style: _vm.float },
          [_vm._t("default")],
          2
        ),
        _vm._v(" "),
        _c("div", {
          style: _vm.float,
          domProps: { innerHTML: _vm._s(_vm.copyHtml) }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f52f2968", esExports)
  }
}

/***/ })
/******/ ])["default"];
});
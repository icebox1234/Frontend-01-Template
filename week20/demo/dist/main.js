/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./createElement.js":
/*!**************************!*\
  !*** ./createElement.js ***!
  \**************************/
/*! exports provided: createElement, Text, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var _gesture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture */ \"./gesture.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction createElement(Cls, attributes) {\n  var o;\n\n  if (typeof Cls === \"string\") {\n    o = new Wrapper(Cls);\n  } else {\n    o = new Cls({\n      timer: {}\n    });\n  }\n\n  for (var name in attributes) {\n    o.setAttribute(name, attributes[name]);\n  } //console.log(children);\n  // console.log(o);\n\n\n  var visit = function visit(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          visit(child);\n          continue;\n        }\n\n        if (typeof child === \"string\") {\n          child = new Text(child);\n        }\n\n        o.appendChild(child);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return o;\n}\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.children = [];\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(Text, [{\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }, {\n    key: \"gettAttribute\",\n    value: function gettAttribute(name) {\n      //attribute\n      return this[name];\n    }\n  }]);\n\n  return Text;\n}();\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(type) {\n    _classCallCheck(this, Wrapper);\n\n    this.children = [];\n    this.root = document.createElement(type);\n  }\n\n  _createClass(Wrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      //attribute\n      this.root.setAttribute(name, value);\n\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        // console.log(RegExp.$1);\n        var eventName = RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLowerCase();\n        });\n        this.addEventListener(eventName, value);\n      }\n\n      if (name === 'enableGesture') {\n        Object(_gesture__WEBPACK_IMPORTED_MODULE_0__[\"enableGesture\"])(this.root);\n      }\n    }\n  }, {\n    key: \"gettAttribute\",\n    value: function gettAttribute(name) {\n      //attribute\n      return this.root.gettAttribute(name);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"style\",\n    get: function get() {\n      return this.root.style;\n    }\n  }, {\n    key: \"innerText\",\n    set: function set(text) {\n      this.root.innerText = text;\n    },\n    get: function get() {\n      return this.root.innerText;\n    }\n  }, {\n    key: \"classList\",\n    get: function get() {\n      return this.root.classList;\n    }\n  }]);\n\n  return Wrapper;\n}();\n\n//# sourceURL=webpack:///./createElement.js?");

/***/ }),

/***/ "./gesture.js":
/*!********************!*\
  !*** ./gesture.js ***!
  \********************/
/*! exports provided: enableGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableGesture\", function() { return enableGesture; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// let element = document.body;\n// enableGesture(element);\nfunction enableGesture(element) {\n  var contexts = Object.create(null);\n  var MOUSE_SYMBOL = Symbol('mouse');\n  /**\r\n   * @description listen mouse in the enviroment which is PC browser\r\n   */\n\n  if (document.body.ontouchstart !== null) {\n    element.addEventListener('mousedown', function (event) {\n      contexts[MOUSE_SYMBOL] = Object.create(null);\n      start(event, contexts[MOUSE_SYMBOL]);\n\n      var mosemove = function mosemove(event) {\n        move(event, contexts[MOUSE_SYMBOL]);\n      };\n\n      var mouseup = function mouseup(event) {\n        end(event, contexts[MOUSE_SYMBOL]);\n        document.removeEventListener('mousemove', mosemove);\n        document.removeEventListener('mouseup', mouseup);\n      };\n\n      document.addEventListener('mousemove', mosemove);\n      document.addEventListener('mouseup', mouseup);\n    });\n  }\n  /**\r\n   * @description lissten touch \r\n   */\n\n\n  element.addEventListener('touchstart', function (event) {\n    var _iterator = _createForOfIteratorHelper(event.changedTouches),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var touch = _step.value;\n        contexts[touch.identifier] = Object.create(null);\n        start(touch, contexts[touch.identifier]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n  element.addEventListener('touchmove', function (event) {\n    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var touch = _step2.value;\n        contexts[touch.identifier] = Object.create(null);\n        move(touch, contexts[touch.identifier]);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  });\n  element.addEventListener('touchend', function (event) {\n    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var touch = _step3.value;\n        contexts[touch.identifier] = Object.create(null);\n        end(touch, contexts[touch.identifier]);\n        delete contexts[touch.identifier];\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  });\n  element.addEventListener('touchcancel', function (event) {\n    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var touch = _step4.value;\n        contexts[touch.identifier] = Object.create(null);\n        cancel(touch, contexts[touch.identifier]);\n        delete contexts[touch.identifier];\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n  });\n  /**\r\n   * @description 手势的分类 \r\n   * 1.tap\r\n   * 2.pan panstart panmove panend\r\n   * 3.flick\r\n   * 4.press pressstart pressend  \r\n   */\n\n  /**\r\n   * @description abstract action\r\n   */\n\n  var start = function start(point, context) {\n    element.dispatchEvent(new CustomEvent('start', {\n      detail: {\n        startX: point.clientX,\n        startY: point.clientY,\n        clientX: point.clientX,\n        clientY: point.clientY\n      }\n    }));\n    context.startX = point.clientX;\n    context.startY = point.clientY;\n    context.moves = [];\n    context.isTap = true;\n    context.isPan = false;\n    context.isPress = false;\n    context.timeHandler = setTimeout(function () {\n      if (context.isPan) {\n        return;\n      }\n\n      context.isPress = true;\n      context.isTap = false;\n      context.isPan = false; //pressstart\n\n      element.dispatchEvent(new CustomEvent('pressstart'), {});\n    }, 500);\n  };\n\n  var move = function move(point, context) {\n    var dx = point.clientX - context.startX;\n    var dy = point.clientY - context.startY;\n\n    if (Math.pow(dx, 2) + Math.pow(dy, 2) > 100 && !context.isPan) {\n      if (context.isPress) {\n        //presscancel\n        element.dispatchEvent(new CustomEvent('presscancel'), {});\n      }\n\n      context.isPan = true;\n      context.isTap = false;\n      context.isPress = false; //panstart\n\n      element.dispatchEvent(new CustomEvent('panstart', {\n        detail: {\n          startX: context.startX,\n          startY: context.startY,\n          clientX: point.clientX,\n          clientY: point.clientY\n        }\n      }));\n    }\n\n    if (context.isPan) {\n      //pan\n      //compute speed for flick\n\n      /**\r\n       * 左右滑动的计算可以考虑计算moves中的平均速度，然后根据最后一个clientX与startX\r\n       * 比较来判定方向\r\n       */\n      context.moves.push({\n        dx: dx,\n        dy: dy,\n        t: Date.now()\n      }); //只计算300毫秒以内的\n\n      context.moves = context.moves.filter(function (record) {\n        return Date.now() - record.t < 300;\n      }); //可以放在第二个参数的detail内部\n\n      var e = new CustomEvent('pan', {\n        detail: {\n          startX: context.startX,\n          startY: context.startY,\n          clientX: point.clientX,\n          clientY: point.clientY\n        }\n      });\n      element.dispatchEvent(e);\n    }\n  };\n\n  var end = function end(point, context) {\n    if (context.isTap) {\n      element.dispatchEvent(new CustomEvent('tap'), {});\n    }\n\n    if (context.isPan) {\n      var dx = point.clientX - context.startX,\n          dy = point.clientY - context.startY;\n      var record = context.moves[0];\n      var speed = Math.sqrt(Math.pow(record.dx - dx, 2) + Math.pow(record.dy - dy, 2)) / (Date.now() - record.t);\n      var isFlick = speed > 2.5;\n\n      if (isFlick) {\n        //flick\n        element.dispatchEvent(new CustomEvent('flick', {\n          detail: {\n            startX: context.startX,\n            startY: context.startY,\n            clientX: point.clientX,\n            clientY: point.clientY,\n            speed: speed\n          }\n        }));\n      }\n\n      element.dispatchEvent(new CustomEvent('panend', {\n        detail: {\n          startX: context.startX,\n          startY: context.startY,\n          clientX: point.clientX,\n          clientY: point.clientY,\n          speed: speed,\n          isFlick: isFlick\n        }\n      }));\n    }\n\n    if (context.isPress) {\n      element.dispatchEvent(new CustomEvent('pressend'), {});\n    }\n\n    clearTimeout(context.timeHandler);\n  };\n\n  var cancel = function cancel(point, context) {\n    element.dispatchEvent(new CustomEvent('cancel'), {});\n    clearTimeout(context.timeHandler);\n  };\n}\n\n//# sourceURL=webpack:///./gesture.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./createElement.js\");\n // import { Carousel } from './carousel';\n// import { Panel } from './Panel';\n// import { ListView } from './list-view';\n// let component = <Carousel data={[\n//     \"https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg\",\n//     \"https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg\",\n//     \"https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg\",\n//     \"https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg\",\n// ]} />\n// let pannel = <Panel title='this is my panel'>\n//     <span>this is a panel</span>\n// </Panel>\n// let data = [\n//     {\n//         title: '蓝猫',\n//         url: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg'\n//     },\n//     {\n//         title: '橘猫加白',\n//         url: 'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg'\n//     },\n//     {\n//         title: '狸花加白',\n//         url: 'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg'\n//     },\n//     {\n//         title: '蓝猫',\n//         url: 'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg'\n//     }\n// ]\n// let list = <ListView data={data}>\n//     {\n//         record => (\n//             <figure>\n//                 <img src={record.url} />\n//                 <figcaption>{record.title}</figcaption>\n//             </figure>\n//         )\n//     }\n// </ListView>\n\nvar element = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, \"hello yahaha\"));\nelement.mountTo(document.body); // console.log(component);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });
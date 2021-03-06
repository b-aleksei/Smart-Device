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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/helpers/checkValidity.js":
/*!*************************************!*\
  !*** ./js/helpers/checkValidity.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar regExpName = /^[\\s-]+$|^\\s*-+|[^A-Za-zА-Яа-я\\-.\\s']+/;\nvar errorSign = document.querySelector('#tmp5');\nvar errorEmpty = document.querySelector('#tmp6');\n\nvar checkValidity = function checkValidity(input) {\n  if (!input.validity.valid) {\n    input.parentElement.classList.remove('form__valid');\n    input.parentElement.classList.add('form__invalid');\n  } else {\n    input.parentElement.classList.remove('form__invalid');\n    input.parentElement.classList.add('form__valid');\n  }\n};\n\nvar checkValue = function checkValue(input) {\n  input.setCustomValidity('');\n\n  if (input.name === 'name') {\n    if (input.value === '' && errorEmpty) {\n      input.setCustomValidity(errorEmpty.textContent);\n    }\n\n    if (regExpName.test(input.value) && errorSign) {\n      input.setCustomValidity(errorSign.textContent);\n    }\n  }\n\n  if (input.name === 'phone') {\n    var phoneLength = input.value.replace(/\\D/g, '').length;\n    var messageError = 'Длина номера менее 11 цифр, сейчас: ' + phoneLength;\n\n    if (phoneLength < 11) {\n      input.setCustomValidity(messageError);\n    }\n  }\n\n  checkValidity(input);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkValue);\n\n//# sourceURL=webpack:///./js/helpers/checkValidity.js?");

/***/ }),

/***/ "./js/helpers/modal.js":
/*!*****************************!*\
  !*** ./js/helpers/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/focus-trap.min */ \"./js/vendor/focus-trap.min.js\");\n/* harmony import */ var _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0__);\n\nvar overlay = document.querySelector('.modal');\nvar container = document.querySelector('.modal__wrap');\nvar btnClose = document.querySelector('.modal__close');\nvar body = document.body;\nvar focusTrapOne = _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0___default()(container, {\n  initialFocus: btnClose,\n  fallbackFocus: btnClose,\n  escapeDeactivates: true,\n  clickOutsideDeactivates: true,\n  onActivate: function onActivate() {\n    overlay.classList.add('modal--active');\n    body.dataset.scrollY = self.pageYOffset; //  для предотвращения скрола\n\n    body.style.top = \"-\".concat(body.dataset.scrollY, \"px\");\n    body.classList.add('body-lock');\n    btnClose.addEventListener('click', function () {\n      focusTrapOne.deactivate();\n    }, {\n      once: true\n    });\n  },\n  onDeactivate: function onDeactivate() {\n    body.classList.remove('body-lock');\n    window.scrollTo(0, body.dataset.scrollY);\n    overlay.classList.remove('modal--active');\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (focusTrapOne);\n\n//# sourceURL=webpack:///./js/helpers/modal.js?");

/***/ }),

/***/ "./js/helpers/phoneMask.js":
/*!*********************************!*\
  !*** ./js/helpers/phoneMask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValidity */ \"./js/helpers/checkValidity.js\");\n\nvar COUNTRY_CODE = '+7';\n\nvar onInputPhoneInput = function onInputPhoneInput(_ref) {\n  var target = _ref.target;\n  var matrix = \"\".concat(COUNTRY_CODE, \" (___) ___ __ __\");\n  var def = matrix.replace(/\\D/g, '');\n  var i = 0;\n  var val = target.value.replace(/\\D/g, '');\n\n  if (!val.length) {\n    val = def;\n  }\n\n  target.value = '';\n  Array.prototype.forEach.call(matrix, function (item) {\n    var isValNumber = /[_\\d]/.test(item) && val.length > i;\n\n    if (isValNumber) {\n      target.value += val.charAt(i++);\n    } else {\n      target.value += val.length <= i ? '' : item;\n    }\n  });\n  Object(_checkValidity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target);\n};\n\nvar onFocusPhoneInput = function onFocusPhoneInput(_ref2) {\n  var target = _ref2.target;\n\n  if (!target.value) {\n    target.value = COUNTRY_CODE;\n  }\n\n  target.addEventListener('input', onInputPhoneInput);\n  target.addEventListener('blur', onBlurPhoneInput);\n};\n\nvar onBlurPhoneInput = function onBlurPhoneInput(_ref3) {\n  var target = _ref3.target;\n\n  if (target.value === COUNTRY_CODE) {\n    target.value = '';\n  }\n\n  target.removeEventListener('input', onInputPhoneInput);\n  target.removeEventListener('blur', onBlurPhoneInput);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (onFocusPhoneInput);\n\n//# sourceURL=webpack:///./js/helpers/phoneMask.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validate */ \"./js/modules/validate.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./js/modules/form.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordeon */ \"./js/modules/accordeon.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_accordeon__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_intersect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/intersect */ \"./js/modules/intersect.js\");\n/* harmony import */ var _modules_intersect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_intersect__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/accordeon.js":
/*!*********************************!*\
  !*** ./js/modules/accordeon.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var firstCheckbox = document.querySelector('#checkbox-1');\nvar secondCheckbox = document.querySelector('#checkbox-2');\n\nif (firstCheckbox && secondCheckbox) {\n  firstCheckbox.addEventListener('change', function () {\n    if (firstCheckbox.checked === true) {\n      secondCheckbox.checked = false;\n    }\n  });\n  secondCheckbox.addEventListener('change', function () {\n    if (secondCheckbox.checked === true) {\n      firstCheckbox.checked = false;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/accordeon.js?");

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: deactivateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deactivateForm\", function() { return deactivateForm; });\n/* harmony import */ var _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/focus-trap.min */ \"./js/vendor/focus-trap.min.js\");\n/* harmony import */ var _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mainContainer = document.querySelector('.feedback');\nvar openForm = document.querySelector('.nav__btn');\nvar overlay = document.querySelector('.feedback__overlay');\nvar container = document.querySelector('.feedback__wrap');\n\nif (!container) {\n  container = document.body;\n}\n\nvar inputName = document.querySelector('input[name=name]');\nvar inputPhone = document.querySelector('input[name=phone]');\nvar btnClose = document.querySelector('.feedback__btn');\nvar modalTitle = document.querySelector('.feedback__wrap > h2');\nvar modalText = document.querySelector('.feedback__wrap > p');\nvar modalBtn = document.querySelector('button[type=submit]');\nvar templateTitle = document.querySelector('#tmp1');\nvar templateText = document.querySelector('#tmp2');\nvar templateButton = document.querySelector('#tmp3');\nvar modalTitleInitialValue;\nvar modalTextInitialValue;\nvar modalBtnInitialValue;\nvar body = document.body;\n\nvar initModal = function initModal() {\n  if (modalTitle && templateTitle) {\n    modalTitleInitialValue = modalTitle.textContent;\n    modalTitle.textContent = templateTitle.textContent;\n  }\n\n  if (modalText && templateText) {\n    modalTextInitialValue = modalText.textContent;\n    modalText.textContent = templateText.textContent;\n  }\n\n  if (modalBtn && templateButton) {\n    modalBtnInitialValue = modalBtn.textContent;\n    modalBtn.textContent = templateButton.textContent;\n  }\n};\n\nvar deactivateForm = function deactivateForm() {\n  focusTrapOne.deactivate();\n};\n\nvar returnInitialValue = function returnInitialValue() {\n  if (modalTitle && modalText && modalBtn) {\n    modalTitle.textContent = modalTitleInitialValue;\n    modalText.textContent = modalTextInitialValue;\n    modalBtn.textContent = modalBtnInitialValue;\n  }\n};\n\nvar focusTrapOne = _vendor_focus_trap_min__WEBPACK_IMPORTED_MODULE_0___default()(container, {\n  initialFocus: inputName,\n  fallbackFocus: inputPhone,\n  escapeDeactivates: true,\n  clickOutsideDeactivates: true,\n  onActivate: function onActivate() {\n    initModal();\n\n    if (overlay) {\n      overlay.classList.add('js');\n    } //  для предотвращения скрола\n\n\n    body.dataset.scrollY = self.pageYOffset;\n    body.style.top = \"-\".concat(body.dataset.scrollY, \"px\");\n    body.classList.add('body-lock');\n\n    if (btnClose) {\n      btnClose.addEventListener('click', deactivateForm);\n    }\n  },\n  onDeactivate: function onDeactivate() {\n    body.classList.remove('body-lock');\n    window.scrollTo(0, body.dataset.scrollY);\n\n    if (overlay) {\n      overlay.classList.remove('js');\n    }\n\n    returnInitialValue();\n\n    if (btnClose) {\n      btnClose.removeEventListener('click', deactivateForm);\n    }\n  }\n});\n\nif (openForm) {\n  openForm.addEventListener('click', function () {\n    if (mainContainer) {\n      mainContainer.classList.remove('op', 'tr');\n    }\n\n    focusTrapOne.activate();\n  });\n}\n\n\n\n//# sourceURL=webpack:///./js/modules/form.js?");

/***/ }),

/***/ "./js/modules/intersect.js":
/*!*********************************!*\
  !*** ./js/modules/intersect.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ua = window.navigator.userAgent.toLowerCase();\nvar isIe = /trident/gi.test(ua) || /msie/gi.test(ua);\n\nif (!isIe) {\n  var options = {\n    rootMargin: '0px 0px -30px 0px'\n  };\n  var views = ['.advantages', '.about', '.goods', '.feedback', 'footer'];\n\n  var handleChanges = function handleChanges(entries, observer) {\n    entries.forEach(function (el) {\n      if (el.isIntersecting) {\n        observer.unobserve(el.target);\n        el.target.classList.remove('op');\n        el.target.addEventListener('transitionend', function () {\n          el.target.classList.remove('tr');\n        }, {\n          once: true\n        });\n      }\n    });\n  };\n\n  var observer = new IntersectionObserver(handleChanges, options);\n  window.addEventListener('load', function () {\n    views.forEach(function (view) {\n      var target = document.querySelector(view);\n\n      if (target) {\n        target.classList.add('op', 'tr');\n        observer.observe(target);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/intersect.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ua = window.navigator.userAgent.toLowerCase();\nvar isIe = /trident/gi.test(ua) || /msie/gi.test(ua);\n\nvar goToTarget = function goToTarget(target) {\n  // фолбэк для ie11\n  var y = target.offsetTop;\n\n  var moveTo = function moveTo() {\n    if (window.pageYOffset < y) {\n      window.scrollBy(0, 60);\n      setTimeout(moveTo);\n    }\n  };\n\n  moveTo();\n};\n\nvar makeSmoothScroll = function makeSmoothScroll(link) {\n  link.addEventListener('click', function (e) {\n    e.preventDefault();\n    var targetId = link.getAttribute('href');\n    var target = document.querySelector(targetId);\n\n    if (target) {\n      if (isIe) {\n        // примитивная проверка для ie 11\n        goToTarget(target);\n      } else {\n        target.scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      }\n    }\n  });\n};\n\nvar links = document.querySelectorAll('.main-screen__wrap-content a');\n\nif (links.length) {\n  links.forEach(function (link) {\n    return makeSmoothScroll(link);\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/validate.js":
/*!********************************!*\
  !*** ./js/modules/validate.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_phoneMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/phoneMask */ \"./js/helpers/phoneMask.js\");\n/* harmony import */ var _helpers_checkValidity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/checkValidity */ \"./js/helpers/checkValidity.js\");\n/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/modal */ \"./js/helpers/modal.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"./js/modules/form.js\");\n\n\n\n\nvar overlay = document.querySelector('.feedback__overlay');\nvar forms = document.querySelectorAll('form');\n\nvar initValidation = function initValidation(input) {\n  if (input.name === 'phone') {\n    input.addEventListener('focus', _helpers_phoneMask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n  if (input.name === 'name') {\n    input.addEventListener('input', function (_ref) {\n      var target = _ref.target;\n      Object(_helpers_checkValidity__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target);\n    });\n  }\n};\n\nvar onSubmit = function onSubmit(e) {\n  e.preventDefault();\n  var form = e.currentTarget;\n  var inputs = form.querySelectorAll('input[data-validate]');\n\n  if (inputs.length) {\n    inputs.forEach(function (input) {\n      localStorage.setItem(input.name, input.value);\n      input.parentElement.classList.remove('form__valid');\n    });\n  }\n\n  if (overlay.classList.contains('js')) {\n    Object(_form__WEBPACK_IMPORTED_MODULE_3__[\"deactivateForm\"])();\n    setTimeout(function () {\n      return _helpers_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activate();\n    });\n  } else {\n    _helpers_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activate();\n  }\n\n  setTimeout(function () {\n    return form.reset();\n  });\n};\n\nif (forms.length) {\n  forms.forEach(function (form) {\n    var inputs = form.querySelectorAll('input[data-validate]');\n\n    if (inputs.length) {\n      inputs.forEach(function (input) {\n        var value = localStorage.getItem(input.name);\n\n        if (value) {\n          input.value = value;\n        }\n\n        initValidation(input);\n      });\n    }\n\n    form.addEventListener('submit', onSubmit);\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/validate.js?");

/***/ }),

/***/ "./js/vendor/focus-trap.min.js":
/*!*************************************!*\
  !*** ./js/vendor/focus-trap.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function (f) {\n  if (( false ? undefined : _typeof(exports)) === \"object\" && typeof module !== \"undefined\") {\n    module.exports = f();\n  } else if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var g; }\n})(function () {\n  var define, module, exports;\n  return function () {\n    function r(e, n, t) {\n      function o(i, f) {\n        if (!n[i]) {\n          if (!e[i]) {\n            var c = \"function\" == typeof require && require;\n            if (!f && c) return require(i, !0);\n            if (u) return u(i, !0);\n            var a = new Error(\"Cannot find module '\" + i + \"'\");\n            throw a.code = \"MODULE_NOT_FOUND\", a;\n          }\n\n          var p = n[i] = {\n            exports: {}\n          };\n          e[i][0].call(p.exports, function (r) {\n            var n = e[i][1][r];\n            return o(n || r);\n          }, p, p.exports, r, e, n, t);\n        }\n\n        return n[i].exports;\n      }\n\n      for (var u = \"function\" == typeof require && require, i = 0; i < t.length; i++) {\n        o(t[i]);\n      }\n\n      return o;\n    }\n\n    return r;\n  }()({\n    1: [function (require, module, exports) {\n      var tabbable = require(\"tabbable\");\n\n      var xtend = require(\"xtend\");\n\n      var activeFocusDelay;\n\n      var activeFocusTraps = function () {\n        var trapQueue = [];\n        return {\n          activateTrap: function activateTrap(trap) {\n            if (trapQueue.length > 0) {\n              var activeTrap = trapQueue[trapQueue.length - 1];\n\n              if (activeTrap !== trap) {\n                activeTrap.pause();\n              }\n            }\n\n            var trapIndex = trapQueue.indexOf(trap);\n\n            if (trapIndex === -1) {\n              trapQueue.push(trap);\n            } else {\n              trapQueue.splice(trapIndex, 1);\n              trapQueue.push(trap);\n            }\n          },\n          deactivateTrap: function deactivateTrap(trap) {\n            var trapIndex = trapQueue.indexOf(trap);\n\n            if (trapIndex !== -1) {\n              trapQueue.splice(trapIndex, 1);\n            }\n\n            if (trapQueue.length > 0) {\n              trapQueue[trapQueue.length - 1].unpause();\n            }\n          }\n        };\n      }();\n\n      function focusTrap(element, userOptions) {\n        var doc = document;\n        var container = typeof element === \"string\" ? doc.querySelector(element) : element;\n        var config = xtend({\n          returnFocusOnDeactivate: true,\n          escapeDeactivates: true\n        }, userOptions);\n        var state = {\n          firstTabbableNode: null,\n          lastTabbableNode: null,\n          nodeFocusedBeforeActivation: null,\n          mostRecentlyFocusedNode: null,\n          active: false,\n          paused: false\n        };\n        var trap = {\n          activate: activate,\n          deactivate: deactivate,\n          pause: pause,\n          unpause: unpause\n        };\n        return trap;\n\n        function activate(activateOptions) {\n          if (state.active) return;\n          updateTabbableNodes();\n          state.active = true;\n          state.paused = false;\n          state.nodeFocusedBeforeActivation = doc.activeElement;\n          var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;\n\n          if (onActivate) {\n            onActivate();\n          }\n\n          addListeners();\n          return trap;\n        }\n\n        function deactivate(deactivateOptions) {\n          if (!state.active) return;\n          clearTimeout(activeFocusDelay);\n          removeListeners();\n          state.active = false;\n          state.paused = false;\n          activeFocusTraps.deactivateTrap(trap);\n          var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;\n\n          if (onDeactivate) {\n            onDeactivate();\n          }\n\n          var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;\n\n          if (returnFocus) {\n            delay(function () {\n              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));\n            });\n          }\n\n          return trap;\n        }\n\n        function pause() {\n          if (state.paused || !state.active) return;\n          state.paused = true;\n          removeListeners();\n        }\n\n        function unpause() {\n          if (!state.paused || !state.active) return;\n          state.paused = false;\n          updateTabbableNodes();\n          addListeners();\n        }\n\n        function addListeners() {\n          if (!state.active) return;\n          activeFocusTraps.activateTrap(trap);\n          activeFocusDelay = delay(function () {\n            tryFocus(getInitialFocusNode());\n          });\n          doc.addEventListener(\"focusin\", checkFocusIn, true);\n          doc.addEventListener(\"mousedown\", checkPointerDown, {\n            capture: true,\n            passive: false\n          });\n          doc.addEventListener(\"touchstart\", checkPointerDown, {\n            capture: true,\n            passive: false\n          });\n          doc.addEventListener(\"click\", checkClick, {\n            capture: true,\n            passive: false\n          });\n          doc.addEventListener(\"keydown\", checkKey, {\n            capture: true,\n            passive: false\n          });\n          return trap;\n        }\n\n        function removeListeners() {\n          if (!state.active) return;\n          doc.removeEventListener(\"focusin\", checkFocusIn, true);\n          doc.removeEventListener(\"mousedown\", checkPointerDown, true);\n          doc.removeEventListener(\"touchstart\", checkPointerDown, true);\n          doc.removeEventListener(\"click\", checkClick, true);\n          doc.removeEventListener(\"keydown\", checkKey, true);\n          return trap;\n        }\n\n        function getNodeForOption(optionName) {\n          var optionValue = config[optionName];\n          var node = optionValue;\n\n          if (!optionValue) {\n            return null;\n          }\n\n          if (typeof optionValue === \"string\") {\n            node = doc.querySelector(optionValue);\n\n            if (!node) {\n              throw new Error(\"`\" + optionName + \"` refers to no known node\");\n            }\n          }\n\n          if (typeof optionValue === \"function\") {\n            node = optionValue();\n\n            if (!node) {\n              throw new Error(\"`\" + optionName + \"` did not return a node\");\n            }\n          }\n\n          return node;\n        }\n\n        function getInitialFocusNode() {\n          var node;\n\n          if (getNodeForOption(\"initialFocus\") !== null) {\n            node = getNodeForOption(\"initialFocus\");\n          } else if (container.contains(doc.activeElement)) {\n            node = doc.activeElement;\n          } else {\n            node = state.firstTabbableNode || getNodeForOption(\"fallbackFocus\");\n          }\n\n          if (!node) {\n            throw new Error(\"Your focus-trap needs to have at least one focusable element\");\n          }\n\n          return node;\n        }\n\n        function getReturnFocusNode(previousActiveElement) {\n          var node = getNodeForOption(\"setReturnFocus\");\n          return node ? node : previousActiveElement;\n        }\n\n        function checkPointerDown(e) {\n          if (container.contains(e.target)) return;\n\n          if (config.clickOutsideDeactivates) {\n            deactivate({\n              returnFocus: !tabbable.isFocusable(e.target)\n            });\n            return;\n          }\n\n          if (config.allowOutsideClick && config.allowOutsideClick(e)) {\n            return;\n          }\n\n          e.preventDefault();\n        }\n\n        function checkFocusIn(e) {\n          if (container.contains(e.target) || e.target instanceof Document) {\n            return;\n          }\n\n          e.stopImmediatePropagation();\n          tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());\n        }\n\n        function checkKey(e) {\n          if (config.escapeDeactivates !== false && isEscapeEvent(e)) {\n            e.preventDefault();\n            deactivate();\n            return;\n          }\n\n          if (isTabEvent(e)) {\n            checkTab(e);\n            return;\n          }\n        }\n\n        function checkTab(e) {\n          updateTabbableNodes();\n\n          if (e.shiftKey && e.target === state.firstTabbableNode) {\n            e.preventDefault();\n            tryFocus(state.lastTabbableNode);\n            return;\n          }\n\n          if (!e.shiftKey && e.target === state.lastTabbableNode) {\n            e.preventDefault();\n            tryFocus(state.firstTabbableNode);\n            return;\n          }\n        }\n\n        function checkClick(e) {\n          if (config.clickOutsideDeactivates) return;\n          if (container.contains(e.target)) return;\n\n          if (config.allowOutsideClick && config.allowOutsideClick(e)) {\n            return;\n          }\n\n          e.preventDefault();\n          e.stopImmediatePropagation();\n        }\n\n        function updateTabbableNodes() {\n          var tabbableNodes = tabbable(container);\n          state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();\n          state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();\n        }\n\n        function tryFocus(node) {\n          if (node === doc.activeElement) return;\n\n          if (!node || !node.focus) {\n            tryFocus(getInitialFocusNode());\n            return;\n          }\n\n          node.focus();\n          state.mostRecentlyFocusedNode = node;\n\n          if (isSelectableInput(node)) {\n            node.select();\n          }\n        }\n      }\n\n      function isSelectableInput(node) {\n        return node.tagName && node.tagName.toLowerCase() === \"input\" && typeof node.select === \"function\";\n      }\n\n      function isEscapeEvent(e) {\n        return e.key === \"Escape\" || e.key === \"Esc\" || e.keyCode === 27;\n      }\n\n      function isTabEvent(e) {\n        return e.key === \"Tab\" || e.keyCode === 9;\n      }\n\n      function delay(fn) {\n        return setTimeout(fn, 0);\n      }\n\n      module.exports = focusTrap;\n    }, {\n      tabbable: 2,\n      xtend: 3\n    }],\n    2: [function (require, module, exports) {\n      var candidateSelectors = [\"input\", \"select\", \"textarea\", \"a[href]\", \"button\", \"[tabindex]\", \"audio[controls]\", \"video[controls]\", '[contenteditable]:not([contenteditable=\"false\"])'];\n      var candidateSelector = candidateSelectors.join(\",\");\n      var matches = typeof Element === \"undefined\" ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;\n\n      function tabbable(el, options) {\n        options = options || {};\n        var regularTabbables = [];\n        var orderedTabbables = [];\n        var candidates = el.querySelectorAll(candidateSelector);\n\n        if (options.includeContainer) {\n          if (matches.call(el, candidateSelector)) {\n            candidates = Array.prototype.slice.apply(candidates);\n            candidates.unshift(el);\n          }\n        }\n\n        var i, candidate, candidateTabindex;\n\n        for (i = 0; i < candidates.length; i++) {\n          candidate = candidates[i];\n          if (!isNodeMatchingSelectorTabbable(candidate)) continue;\n          candidateTabindex = getTabindex(candidate);\n\n          if (candidateTabindex === 0) {\n            regularTabbables.push(candidate);\n          } else {\n            orderedTabbables.push({\n              documentOrder: i,\n              tabIndex: candidateTabindex,\n              node: candidate\n            });\n          }\n        }\n\n        var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {\n          return a.node;\n        }).concat(regularTabbables);\n        return tabbableNodes;\n      }\n\n      tabbable.isTabbable = isTabbable;\n      tabbable.isFocusable = isFocusable;\n\n      function isNodeMatchingSelectorTabbable(node) {\n        if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {\n          return false;\n        }\n\n        return true;\n      }\n\n      function isTabbable(node) {\n        if (!node) throw new Error(\"No node provided\");\n        if (matches.call(node, candidateSelector) === false) return false;\n        return isNodeMatchingSelectorTabbable(node);\n      }\n\n      function isNodeMatchingSelectorFocusable(node) {\n        if (node.disabled || isHiddenInput(node) || isHidden(node)) {\n          return false;\n        }\n\n        return true;\n      }\n\n      var focusableCandidateSelector = candidateSelectors.concat(\"iframe\").join(\",\");\n\n      function isFocusable(node) {\n        if (!node) throw new Error(\"No node provided\");\n        if (matches.call(node, focusableCandidateSelector) === false) return false;\n        return isNodeMatchingSelectorFocusable(node);\n      }\n\n      function getTabindex(node) {\n        var tabindexAttr = parseInt(node.getAttribute(\"tabindex\"), 10);\n        if (!isNaN(tabindexAttr)) return tabindexAttr;\n        if (isContentEditable(node)) return 0;\n        return node.tabIndex;\n      }\n\n      function sortOrderedTabbables(a, b) {\n        return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;\n      }\n\n      function isContentEditable(node) {\n        return node.contentEditable === \"true\";\n      }\n\n      function isInput(node) {\n        return node.tagName === \"INPUT\";\n      }\n\n      function isHiddenInput(node) {\n        return isInput(node) && node.type === \"hidden\";\n      }\n\n      function isRadio(node) {\n        return isInput(node) && node.type === \"radio\";\n      }\n\n      function isNonTabbableRadio(node) {\n        return isRadio(node) && !isTabbableRadio(node);\n      }\n\n      function getCheckedRadio(nodes) {\n        for (var i = 0; i < nodes.length; i++) {\n          if (nodes[i].checked) {\n            return nodes[i];\n          }\n        }\n      }\n\n      function isTabbableRadio(node) {\n        if (!node.name) return true;\n        var radioSet = node.ownerDocument.querySelectorAll('input[type=\"radio\"][name=\"' + node.name + '\"]');\n        var checked = getCheckedRadio(radioSet);\n        return !checked || checked === node;\n      }\n\n      function isHidden(node) {\n        return node.offsetParent === null || getComputedStyle(node).visibility === \"hidden\";\n      }\n\n      module.exports = tabbable;\n    }, {}],\n    3: [function (require, module, exports) {\n      module.exports = extend;\n      var hasOwnProperty = Object.prototype.hasOwnProperty;\n\n      function extend() {\n        var target = {};\n\n        for (var i = 0; i < arguments.length; i++) {\n          var source = arguments[i];\n\n          for (var key in source) {\n            if (hasOwnProperty.call(source, key)) {\n              target[key] = source[key];\n            }\n          }\n        }\n\n        return target;\n      }\n    }, {}]\n  }, {}, [1])(1);\n});\n\n//# sourceURL=webpack:///./js/vendor/focus-trap.min.js?");

/***/ })

/******/ });
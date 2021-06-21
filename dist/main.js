/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_backdrop_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/backdrop.jpg */ \"./src/images/backdrop.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@100;300;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_backdrop_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Google Fonts */\\n\\n:root {\\n\\t--default-font: 'Poppins', sans-serif;\\n\\t--default-font-size: 10px;\\n}\\n\\n*, *::after, *::before {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tbox-sizing: border-box;\\n}\\n\\nhtml {\\n\\tscroll-behavior: smooth;\\n\\tfont-family: var(--default-font);\\n\\tfont-size:  var(--default-font-size);\\n\\tline-height: 1.6;\\n\\tfont-weight: 300;\\n}\\n\\nh1 {\\n font-size: 5rem;\\n}\\n\\np {\\n\\tfont-size: 1.8rem;\\n}\\n\\nbutton {\\n\\tfont-family: var(--default-font);\\n\\tcursor: pointer;\\n\\tfont-weight: 300;\\n\\tfont-size: 1.6rem;\\n\\tcolor: white;\\n}\\n\\nheader {\\n\\tpadding: 1.2rem 0em;\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n}\\n\\nimg {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\ttransition: box-shadow .2s;\\n}\\n\\nimg:hover {\\n\\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);\\n}\\n\\n#content {\\n\\tbackground-image: linear-gradient(35deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tbackground-position: center;\\n\\tbackground-size: cover;\\n\\theight: 100vh;\\n}\\n\\n.logo {\\n\\tfont-weight: 700;\\n\\tfont-size: 3rem;\\n\\tcolor: white;\\n}\\n\\n.home-tab, .menu-tab, .contact-tab {\\n\\tbackground-color: transparent;\\n\\tpadding: 0.5rem 2rem;\\n\\tmargin: 0 2rem;\\n\\tborder: none;\\n}\\n\\n.home-container {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\theight: 70%;\\n\\tcolor: white;\\n}\\n\\n.menu-container {\\n\\tbackground-color: white;\\n\\theight: 100vh;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n}\\n\\n.menu-grid {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\\n\\tgrid-gap: 2rem;\\n\\twidth: 80%;\\n\\tpadding: 3rem 0;\\n}\\n\\n.main-quote, .description, .check-menu {\\n\\tanimation-name: show-up;\\n\\tanimation-duration: 1s;\\n\\tanimation-fill-mode: forwards;\\n}\\n\\n@keyframes show-up {\\n\\t0% {\\n\\t\\ttransform: translateY(-100px);\\n\\t\\topacity: 0;\\n\\t}\\n\\t100% {\\n\\t\\topacity: 1;\\n\\t\\ttransform: translateY(0px);\\n\\t}\\n}\\n\\nspan {\\n\\tcolor: red;\\n}\\n\\n@media screen and (max-width: 480px) {\\n\\th1 {\\n\\t\\tfont-size: 3.5rem;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-size: 1.8rem;\\n\\t}\\n\\n\\t.home-tab, .menu-tab, .contact-tab {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\theader {\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.main-quote {\\n\\t\\tmax-width: 500px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/backdrop.jpg":
/*!*********************************!*\
  !*** ./src/images/backdrop.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f7d7ceec0986379caa1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/backdrop.jpg?");

/***/ }),

/***/ "./src/images/capriciosa.jpg":
/*!***********************************!*\
  !*** ./src/images/capriciosa.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2eaaae8764a5cfad047f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/capriciosa.jpg?");

/***/ }),

/***/ "./src/images/carbonara.jpg":
/*!**********************************!*\
  !*** ./src/images/carbonara.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0799ad35f83d3ace6467.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/carbonara.jpg?");

/***/ }),

/***/ "./src/images/diavola.jpg":
/*!********************************!*\
  !*** ./src/images/diavola.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49b633b0fb8112716851.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/diavola.jpg?");

/***/ }),

/***/ "./src/images/hawaiian.jpg":
/*!*********************************!*\
  !*** ./src/images/hawaiian.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a01ab9be389f0e6bd6ec.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hawaiian.jpg?");

/***/ }),

/***/ "./src/images/margherita.jpg":
/*!***********************************!*\
  !*** ./src/images/margherita.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"799633a990776e620aed.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/margherita.jpg?");

/***/ }),

/***/ "./src/images/pepperoni.jpeg":
/*!***********************************!*\
  !*** ./src/images/pepperoni.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d173e5db8dacdf1324ed.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pepperoni.jpeg?");

/***/ }),

/***/ "./src/images/prosciutto.jpg":
/*!***********************************!*\
  !*** ./src/images/prosciutto.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2820b5a77b86005f7051.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/prosciutto.jpg?");

/***/ }),

/***/ "./src/images/quadro-stagioni.jpeg":
/*!*****************************************!*\
  !*** ./src/images/quadro-stagioni.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd53e45aa62b82c5a860.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/quadro-stagioni.jpeg?");

/***/ }),

/***/ "./src/images/quattro-formaggi.jpg":
/*!*****************************************!*\
  !*** ./src/images/quattro-formaggi.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"611329fae66aff7791ad.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/quattro-formaggi.jpg?");

/***/ }),

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Base {\n\tconstructor(content) {\n\t\tthis._content = content\n\t}\n\n\tgetButtons = () => {\n\t\tconst buttons = this._navContainer.querySelectorAll('button');\n\t\treturn buttons;\n\t}\n\n\tcreateNav = (header) => {\n\t\tconst navContainer = document.createElement('div');\n\t\tnavContainer.classList.add('nav-container');\n\t\theader.appendChild(navContainer);\n\n\t\tconst homeTab = document.createElement('button');\n\t\thomeTab.classList.add('home-tab');\n\t\thomeTab.setAttribute('id', 'homeB')\n\t\thomeTab.textContent = 'HOME'\n\t\tnavContainer.appendChild(homeTab);\n\n\t\tconst menuTab = document.createElement('button');\n\t\tmenuTab.classList.add('menu-tab');\n\t\tmenuTab.setAttribute('id', 'menuB')\n\t\tmenuTab.textContent = 'MENU'\n\t\tnavContainer.appendChild(menuTab);\n\n\t\tconst contactTab = document.createElement('button');\n\t\tcontactTab.classList.add('contact-tab');\n\t\tcontactTab.setAttribute('id', 'contactB')\n\t\tcontactTab.textContent = 'CONTACT';\n\t\tnavContainer.appendChild(contactTab);\n\n\t\tthis._navContainer = navContainer\n\t}\n\n\tcreate = () => {\n\t\tconst header = document.createElement('header');\n\t\tthis._content.appendChild(header);\n\n\t\tconst logoContainer = document.createElement('div');\n\t\tlogoContainer.classList.add('logo-container');\n\t\theader.appendChild(logoContainer);\n\n\t\tconst logo = document.createElement('p');\n\t\tlogo.classList.add('logo');\n\t\tlogo.textContent = 'STANLEY\\'S';\n\t\tlogoContainer.appendChild(logo);\n\n\t\tthis.createNav(header);\n\n\t}\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);\n\n//# sourceURL=webpack://restaurant-page/./src/js/base.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Home {\n\tcreateHome = () => {\n\t\tconst homeContainer = document.createElement('div');\n\t\thomeContainer.classList.add('home-container');\n\n\t\tconst mainQuote = document.createElement('h1');\n\t\tmainQuote.classList.add('main-quote');\n\t\tmainQuote.innerHTML = 'WE CREATE YOUR <span>TASTE</span>';\n\t\thomeContainer.appendChild(mainQuote);\n\n\t\tconst description = document.createElement('p');\n\t\tdescription.classList.add('description');\n\t\tdescription.textContent = 'Here at Stanley\\'s you get to taste the best pizza';\n\t\thomeContainer.appendChild(description);\n\n\t\tconst checkMenu = document.createElement('p');\n\t\tcheckMenu.classList.add('check-menu');\n\t\tcheckMenu.textContent = 'Check our menu for more';\n\t\thomeContainer.appendChild(checkMenu);\n\n\t\treturn homeContainer;\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://restaurant-page/./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/base.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\n\n\n\n\nlet prevPage;\nconst content = document.getElementById('content');\n\nfunction setMainContent(button) {\n\t// Remove the previous page\n\tcontent.removeChild(prevPage);\n\n\tswitch (button.id) {\n\t\tcase 'homeB':\n\t\t\tconst home = new _home__WEBPACK_IMPORTED_MODULE_1__.default().createHome();\n\t\t\tcontent.appendChild(home);\n\t\t\tprevPage = home;\n\t\t\tbreak;\n\t\tcase 'menuB':\n\t\t\tconst menu = new _menu__WEBPACK_IMPORTED_MODULE_2__.default().createMenu();\n\t\t\tcontent.appendChild(menu);\n\t\t\tprevPage = menu;\n\t\t\tbreak;\n\n\t}\n}\n\nfunction main() {\n\t// Getting the content div\n\tconst loadWebsite = new _base__WEBPACK_IMPORTED_MODULE_0__.default(content);\n\n\tloadWebsite.create();\n\n\t// Getting the main div\n\tconst mainDiv = content.querySelector('main-content');\n\t// Creating the default page\n\tconst homePage = new _home__WEBPACK_IMPORTED_MODULE_1__.default().createHome();\n\tcontent.appendChild(homePage);\n\tprevPage = homePage;\n\n\t// Getting the buttons from the nav-bar\n\tconst buttons = loadWebsite.getButtons();\n\t// Checking if any button is clicked\n\tbuttons.forEach(button => {\n\t\tbutton.addEventListener('click', () => {\n\t\t\tsetMainContent(button);\n\t\t})\n\t})\n\n}\n\nmain()\n\n//# sourceURL=webpack://restaurant-page/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_capriciosa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/capriciosa.jpg */ \"./src/images/capriciosa.jpg\");\n/* harmony import */ var _images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/carbonara.jpg */ \"./src/images/carbonara.jpg\");\n/* harmony import */ var _images_diavola_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/diavola.jpg */ \"./src/images/diavola.jpg\");\n/* harmony import */ var _images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hawaiian.jpg */ \"./src/images/hawaiian.jpg\");\n/* harmony import */ var _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/margherita.jpg */ \"./src/images/margherita.jpg\");\n/* harmony import */ var _images_pepperoni_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pepperoni.jpeg */ \"./src/images/pepperoni.jpeg\");\n/* harmony import */ var _images_prosciutto_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/prosciutto.jpg */ \"./src/images/prosciutto.jpg\");\n/* harmony import */ var _images_quadro_stagioni_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/quadro-stagioni.jpeg */ \"./src/images/quadro-stagioni.jpeg\");\n/* harmony import */ var _images_quattro_formaggi_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/quattro-formaggi.jpg */ \"./src/images/quattro-formaggi.jpg\");\n\n\n\n\n\n\n\n\n\n\nclass Menu {\n\tcreatePizza = (image) => {\n\t\tconst pizzaImage = new Image();\n\t\tpizzaImage.src = image;\n\n\t\treturn pizzaImage\n\t}\n\n\tcreateMenu = () => {\n\t\tconst menuContainer = document.createElement('div');\n\t\tmenuContainer.classList.add('menu-container');\n\n\t\tconst title = document.createElement('h1');\n\t\ttitle.textContent = 'MENU';\n\t\ttitle.classList.add('menu-title');\n\t\tmenuContainer.appendChild(title);\n\n\t\tconst description = document.createElement('p');\n\t\tdescription.textContent = \"These are only a few from our variety of pizzas\";\n\t\tdescription.classList.add(\"menu-description\");\n\t\tmenuContainer.appendChild(description);\n\n\t\tconst menuGrid = document.createElement('div');\n\t\tmenuGrid.classList.add('menu-grid');\n\t\tmenuContainer.appendChild(menuGrid);\n\n\t\tmenuGrid.appendChild(this.createPizza(_images_capriciosa_jpg__WEBPACK_IMPORTED_MODULE_0__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_diavola_jpg__WEBPACK_IMPORTED_MODULE_2__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_3__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_margherita_jpg__WEBPACK_IMPORTED_MODULE_4__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_pepperoni_jpeg__WEBPACK_IMPORTED_MODULE_5__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_prosciutto_jpg__WEBPACK_IMPORTED_MODULE_6__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_quadro_stagioni_jpeg__WEBPACK_IMPORTED_MODULE_7__));\n\t\tmenuGrid.appendChild(this.createPizza(_images_quattro_formaggi_jpg__WEBPACK_IMPORTED_MODULE_8__));\n\n\t\treturn menuContainer;\n\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/js/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
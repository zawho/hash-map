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

/***/ "./src/hash-map.js":
/*!*************************!*\
  !*** ./src/hash-map.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\nclass HashMap {\n\n    constructor() {\n        this.map = new Array(16);\n        for (let i = 0; i < this.map.length; i++) {\n            this.map[i] = new _linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        }\n    }\n\n    hash(key) {\n        const prime = 31;\n        let hashCode = 0;\n\n        for (let i = 0; i < key.length; i++) {\n            hashCode = (prime * hashCode + key.charCodeAt(i));\n        }\n\n        console.log(`${key} will go to bucket ${hashCode % this.map.length}.`);\n        return hashCode % this.map.length;\n    }\n\n    set(key, value) {\n        const index = this.hash(key);\n        this.map[index].prepend([key, value]);\n\n        // Add load factor calculation and growth component later.\n    }\n\n    get(key) {\n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].contains(key)) {\n                return;\n            }\n        }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashMap);\n\n/* if (index < 0 || index >= buckets.length) {\n  throw new Error(\"Trying to access index out of bound\");\n} */\n\n//# sourceURL=webpack://hash-map/./src/hash-map.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash-map */ \"./src/hash-map.js\");\n\n\nconst testMap = new _hash_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntestMap.set('snake', 'black');\ntestMap.set('frog', 'green');\ntestMap.set('owl', 'brown');\ntestMap.set('dolphin', 'grey');\ntestMap.set('tiger', 'orange');\n// console.log(testMap);\ntestMap.get('frog');\n\n//# sourceURL=webpack://hash-map/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-node */ \"./src/list-node.js\");\n\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n\n    prepend(data) {\n        const newNode = (0,_list_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n        newNode.next = this.head;\n        this.head = newNode;\n    }\n\n\n    contains(data) {\n        for (let i = this.head; i; i = i.next) {\n            if (i.value[0] === data) {\n                console.log(i.value);\n                return i.value[1];\n            }\n        }\n        console.log(`The \"${data}\" key does not exist.`);\n        return null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);\n\n//# sourceURL=webpack://hash-map/./src/linked-list.js?");

/***/ }),

/***/ "./src/list-node.js":
/*!**************************!*\
  !*** ./src/list-node.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Node factory.\nfunction node(value) {\n    const nodeObj = {\n        value,\n        next: null,\n    }\n    return nodeObj;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);\n\n//# sourceURL=webpack://hash-map/./src/list-node.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
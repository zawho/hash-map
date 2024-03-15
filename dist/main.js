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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\nclass HashMap {\n\n    constructor() {\n        this.map = new Array(16);\n        for (let i = 0; i < this.map.length; i++) {\n            this.map[i] = new _linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        }\n    }\n\n    hash(key) {\n        const prime = 31;\n        let hashCode = 0;\n\n        for (let i = 0; i < key.length; i++) {\n            hashCode = (prime * hashCode + key.charCodeAt(i));\n        }\n\n        console.log(`${key} will go to bucket ${hashCode % this.map.length}.`);\n        return hashCode % this.map.length;\n    }\n\n    set(key, value) {\n        const index = this.hash(key);\n        this.map[index].prepend([key, value]);\n        \n        const loadFactor = 0.75;\n        let filledBuckets = 0;\n        \n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].head != null) {\n                filledBuckets += 1;\n            }\n        }\n\n        const currentCapacity = filledBuckets / this.map.length;\n\n        if (currentCapacity >= loadFactor) {\n            this.map[this.map.length] = new _linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        }\n\n    }\n\n    get(key) {\n        for (let i = 0; i < this.map.length; i++) {\n            const value = this.map[i].contains(key);\n            if (value != null) {\n                console.log(`The value of \"${key}\" is \"${value}\".`);\n                return value;\n            }\n            if (i === this.map.length - 1 && this.map[i].contains(key) === null) {\n                console.log(`The \"${key}\" key does not exist.`);\n            }\n        }\n        return null;\n    }\n\n    has(key) {\n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].contains(key) != null) {\n                console.log(`This table contains the \"${key}\" key.`);\n                return true;\n            }\n        }\n        console.log(`This table does not contain the \"${key}\" key.`);\n        return false;\n    }\n\n    remove(key) {\n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].delete(key) === true) {\n                console.log(this);\n                return true;\n            }\n        }\n        console.log (`This table does not contain the \"${key}\" key.`)\n        return false;\n    }\n\n    length() {\n        let length = 0;\n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].head != null) {\n                length += 1;\n            }\n            if (this.map[i].head != null && this.map[i].head.next != null) {\n                length += this.map[i].length();\n            }\n        }\n        console.log(`This table contains ${length} keys.`);\n        return length;\n    }\n\n    clear() {\n        for (let i = 0; i < this.map.length; i++) {\n            if (this.map[i].head != null) {\n                this.map[i].head = null;\n            }\n        }\n    }\n\n    keys() {\n        const allKeysArr = [];\n        let keyArr;\n        for (let i = 0; i < this.map.length; i++) {\n            keyArr = this.map[i].keysAndValues(true, null);\n            for (let j = 0; j < keyArr.length; j++) {\n                allKeysArr.push(keyArr[j]);\n            } \n        }\n        console.log(allKeysArr);\n        return allKeysArr;\n    }\n\n    values() {\n        const allValuesArr = [];\n        let valueArr;\n        for (let i = 0; i < this.map.length; i++) {\n            valueArr = this.map[i].keysAndValues(null, true);\n            for (let j = 0; j < valueArr.length; j++) {\n                allValuesArr.push(valueArr[j]);\n            } \n        }\n        console.log(allValuesArr);\n        return allValuesArr;\n    }\n\n    entries() {\n        const allEntriesArr = [];\n        let entryArr;\n        for (let i = 0; i < this.map.length; i++) {\n            entryArr = this.map[i].keysAndValues(true, true);\n            for (let j = 0; j < entryArr.length; j++) {\n                allEntriesArr.push(entryArr[j]);\n            } \n        }\n        console.log(allEntriesArr);\n        return allEntriesArr;\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashMap);\n\n//# sourceURL=webpack://hash-map/./src/hash-map.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash-map */ \"./src/hash-map.js\");\n\n\nconst testMap = new _hash_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntestMap.set('snake', 'black');\ntestMap.set('frog', 'green');\ntestMap.set('owl', 'brown');\ntestMap.set('giraffe', 'yellow');\ntestMap.set('zebra', 'striped');\ntestMap.set('cow', 'spotted');\ntestMap.set('penguin', 'tuxedo');\ntestMap.set('dolphin', 'grey');\ntestMap.set('tiger', 'orange');\ntestMap.set('octopus', 'purple');\n// testMap.get('frog');\n// testMap.has('tiger');\n// testMap.remove('owl');\n// testMap.length();\n// testMap.clear();\n// testMap.keys();\n// testMap.values();\n// testMap.entries();\nconsole.log(testMap);\n\n\n//# sourceURL=webpack://hash-map/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-node */ \"./src/list-node.js\");\n\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n\n    prepend(data) {\n        const newNode = (0,_list_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n        newNode.next = this.head;\n        this.head = newNode;\n    }\n\n    contains(data) {\n        for (let i = this.head; i; i = i.next) {\n            if (i.value[0] === data) {\n                return i.value[1];\n            }\n        }\n        return null;\n    }\n\n    length() {\n        let length = 0;\n        for (let i = this.head; i; i = i.next) {\n            if (i.next != null) {\n                length += 1;\n            }\n        }\n        return length;\n    }\n\n    delete(data) {\n        let current;\n        let dataIndex;\n        let dataNext;\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (i !== this.head && i.value[0] === data) {\n                dataIndex = current;\n                dataNext = i.next;\n            }\n        }\n\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (i === this.head && i.value[0] === data && i.next === null) {\n                this.head = null;\n                return true;\n            }\n            if (i === this.head && i.value[0] === data && i.next != null) {\n                this.head = this.head.next;\n                return true;\n            }\n            if (current === dataIndex - 1 && this.contains(data)) {\n                i.next = dataNext;\n                return true;\n            }\n        }\n        return false;\n    }\n\n    keysAndValues(key, value) {\n        const arr = [];\n        if (key === true && value === null) {\n            for (let i = this.head; i; i = i.next) {\n                arr.push(i.value[0]);\n            }\n        }\n        if (value === true && key === null) {\n            for (let i = this.head; i; i = i.next) {\n                arr.push(i.value[1]);\n            }\n        }\n        if (key === true && value === true) {\n            for (let i = this.head; i; i = i.next) {\n                arr.push(i.value);\n            }\n        }\n        return arr;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);\n\n//# sourceURL=webpack://hash-map/./src/linked-list.js?");

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
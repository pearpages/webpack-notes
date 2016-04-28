/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./app */1);
	module.exports = __webpack_require__(/*! ./utils */3);


/***/ },
/* 1 */
/*!*****************!*\
  !*** ./app.es6 ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _login = __webpack_require__(/*! ./login */ 2);
	
	(0, _login.login)('admin', 'radical'); // require('./login');
	
	
	document.write("Hello World!!!");
	
	console.log('App loaded');

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./login.es6 ***!
  \*******************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var login = function login(username, password) {
	    if (username !== 'admin' || password !== 'radical') {
	        console.log('incorret login');
	    }
	};
	
	// login('admin','idunno');
	exports.login = login;

/***/ },
/* 3 */
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ function(module, exports) {

	// This is global JS provided to all apps.
	console.log('logging from the utils.js file ...');
	// debugger;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Index/MatchList.js":
/*!***************************************!*\
  !*** ./components/Index/MatchList.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/papaspotts/git/scorebook-hackathon/components/Index/MatchList.js\";\n\n\nfunction MatchList({\n  matches\n}) {\n  function mapMatchesToItems(matches) {\n    return matches.map(match => ({\n      header: match.wrestler,\n      meta: match.result,\n      description: `Match against ${match.opponent}`,\n      color: 'blue',\n      fluid: true,\n      childKey: match._id,\n      href: `/match?_id=${match._id}`\n    }));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Group, {\n    itemsPerRow: \"3\",\n    centered: true,\n    stackable: true,\n    items: mapMatchesToItems(matches)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MatchList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vY29tcG9uZW50cy9JbmRleC9NYXRjaExpc3QuanM/ZTQ2NiJdLCJuYW1lcyI6WyJNYXRjaExpc3QiLCJtYXRjaGVzIiwibWFwTWF0Y2hlc1RvSXRlbXMiLCJtYXAiLCJtYXRjaCIsImhlYWRlciIsIndyZXN0bGVyIiwibWV0YSIsInJlc3VsdCIsImRlc2NyaXB0aW9uIiwib3Bwb25lbnQiLCJjb2xvciIsImZsdWlkIiwiY2hpbGRLZXkiLCJfaWQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQjtBQUFDQztBQUFELENBQW5CLEVBQThCO0FBQzVCLFdBQVNDLGlCQUFULENBQTJCRCxPQUEzQixFQUFtQztBQUVqQyxXQUFPQSxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsS0FBSyxLQUFLO0FBQzNCQyxZQUFNLEVBQUVELEtBQUssQ0FBQ0UsUUFEYTtBQUUzQkMsVUFBSSxFQUFFSCxLQUFLLENBQUNJLE1BRmU7QUFHM0JDLGlCQUFXLEVBQUcsaUJBQWdCTCxLQUFLLENBQUNNLFFBQVMsRUFIbEI7QUFJM0JDLFdBQUssRUFBRSxNQUpvQjtBQUszQkMsV0FBSyxFQUFFLElBTG9CO0FBTTNCQyxjQUFRLEVBQUVULEtBQUssQ0FBQ1UsR0FOVztBQU8zQkMsVUFBSSxFQUFHLGNBQWFYLEtBQUssQ0FBQ1UsR0FBSTtBQVBILEtBQUwsQ0FBakIsQ0FBUDtBQVNEOztBQUVELHNCQUFPLDhEQUFDLHlEQUFEO0FBQVksZUFBVyxFQUFDLEdBQXhCO0FBQTRCLFlBQVEsTUFBcEM7QUFBcUMsYUFBUyxNQUE5QztBQUErQyxTQUFLLEVBQUVaLGlCQUFpQixDQUFDRCxPQUFEO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlRCxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9NYXRjaExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcmR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZnVuY3Rpb24gTWF0Y2hMaXN0KHttYXRjaGVzfSkge1xuICBmdW5jdGlvbiBtYXBNYXRjaGVzVG9JdGVtcyhtYXRjaGVzKXtcblxuICAgIHJldHVybiBtYXRjaGVzLm1hcChtYXRjaCA9PiAoe1xuICAgICAgaGVhZGVyOiBtYXRjaC53cmVzdGxlcixcbiAgICAgIG1ldGE6IG1hdGNoLnJlc3VsdCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgTWF0Y2ggYWdhaW5zdCAke21hdGNoLm9wcG9uZW50fWAsXG4gICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICBjaGlsZEtleTogbWF0Y2guX2lkLFxuICAgICAgaHJlZjogYC9tYXRjaD9faWQ9JHttYXRjaC5faWR9YFxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PVwiM1wiIGNlbnRlcmVkIHN0YWNrYWJsZSBpdGVtcz17bWFwTWF0Y2hlc1RvSXRlbXMobWF0Y2hlcyl9Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGNoTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/MatchList.js\n");

/***/ }),

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/papaspotts/git/scorebook-hackathon/components/Index/ProductList.js\";\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.mediaUrl,\n      meta: `$${product.price}`,\n      color: 'teal',\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`\n    }));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Group, {\n    itemsPerRow: \"3\",\n    centered: true,\n    stackable: true,\n    items: mapProductsToItems(products)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdC5qcz82NWQ3Il0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJtYXBQcm9kdWN0c1RvSXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwiaGVhZGVyIiwibmFtZSIsImltYWdlIiwibWVkaWFVcmwiLCJtZXRhIiwicHJpY2UiLCJjb2xvciIsImZsdWlkIiwiY2hpbGRLZXkiLCJfaWQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFDQztBQUFELENBQXJCLEVBQWlDO0FBQy9CLFdBQVNDLGtCQUFULENBQTRCRCxRQUE1QixFQUFxQztBQUVuQyxXQUFPQSxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsT0FBTyxLQUFLO0FBQzlCQyxZQUFNLEVBQUVELE9BQU8sQ0FBQ0UsSUFEYztBQUU5QkMsV0FBSyxFQUFFSCxPQUFPLENBQUNJLFFBRmU7QUFHOUJDLFVBQUksRUFBRyxJQUFHTCxPQUFPLENBQUNNLEtBQU0sRUFITTtBQUk5QkMsV0FBSyxFQUFFLE1BSnVCO0FBSzlCQyxXQUFLLEVBQUUsSUFMdUI7QUFNOUJDLGNBQVEsRUFBRVQsT0FBTyxDQUFDVSxHQU5ZO0FBTzlCQyxVQUFJLEVBQUcsZ0JBQWVYLE9BQU8sQ0FBQ1UsR0FBSTtBQVBKLEtBQUwsQ0FBcEIsQ0FBUDtBQVNEOztBQUVELHNCQUFPLDhEQUFDLHlEQUFEO0FBQVksZUFBVyxFQUFDLEdBQXhCO0FBQTRCLFlBQVEsTUFBcEM7QUFBcUMsYUFBUyxNQUE5QztBQUErQyxTQUFLLEVBQUVaLGtCQUFrQixDQUFDRCxRQUFEO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlRCxXQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FyZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCh7cHJvZHVjdHN9KSB7XG4gIGZ1bmN0aW9uIG1hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cyl7XG5cbiAgICByZXR1cm4gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgIGhlYWRlcjogcHJvZHVjdC5uYW1lLFxuICAgICAgaW1hZ2U6IHByb2R1Y3QubWVkaWFVcmwsXG4gICAgICBtZXRhOiBgJCR7cHJvZHVjdC5wcmljZX1gLFxuICAgICAgY29sb3I6ICd0ZWFsJyxcbiAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgY2hpbGRLZXk6IHByb2R1Y3QuX2lkLFxuICAgICAgaHJlZjogYC9wcm9kdWN0P19pZD0ke3Byb2R1Y3QuX2lkfWBcbiAgICB9KSlcbiAgfVxuXG4gIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz1cIjNcIiBjZW50ZXJlZCBzdGFja2FibGUgaXRlbXM9e21hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cyl9Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\n/* harmony import */ var _components_Index_MatchList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/MatchList */ \"./components/Index/MatchList.js\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n\nvar _jsxFileName = \"/home/papaspotts/git/scorebook-hackathon/pages/index.js\";\n\n\n\n\n\n\nfunction Home({\n  matches\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Index_MatchList__WEBPACK_IMPORTED_MODULE_4__.default, {\n    matches: matches\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 12\n  }, this);\n}\n\nasync function getMatches() {\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/matches`;\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n  console.log(response.data);\n}\n\nHome.getInitialProps = async () => {\n  //fetch data on server\n  // return response data as an object\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/matches`;\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n  return {\n    matches: response.data\n  }; //note:  this object will be merged with existing props\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibWF0Y2hlcyIsImdldE1hdGNoZXMiLCJ1cmwiLCJiYXNlVXJsIiwicmVzcG9uc2UiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBeUI7QUFDckIsc0JBQU8sOERBQUMsZ0VBQUQ7QUFBVyxXQUFPLEVBQUVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUVELGVBQWVDLFVBQWYsR0FBMkI7QUFDekIsUUFBTUMsR0FBRyxHQUFJLEdBQUVDLG1EQUFRLGNBQXZCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQVVILEdBQVYsQ0FBdkI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVEsQ0FBQ0ksSUFBckI7QUFDRDs7QUFFRFQsSUFBSSxDQUFDVSxlQUFMLEdBQXVCLFlBQVU7QUFDL0I7QUFDQTtBQUNBLFFBQU1QLEdBQUcsR0FBSSxHQUFFQyxtREFBUSxjQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFVSCxHQUFWLENBQXZCO0FBQ0EsU0FBTztBQUFDRixXQUFPLEVBQUVJLFFBQVEsQ0FBQ0k7QUFBbkIsR0FBUCxDQUwrQixDQU0vQjtBQUNELENBUEQ7O0FBUUEsK0RBQWVULElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdExpc3QnO1xuaW1wb3J0IE1hdGNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L01hdGNoTGlzdCc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcblxuXG5mdW5jdGlvbiBIb21lKHttYXRjaGVzfSkge1xuICAgIHJldHVybiA8TWF0Y2hMaXN0IG1hdGNoZXM9e21hdGNoZXN9IC8+O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRNYXRjaGVzKCl7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9tYXRjaGVzYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCk9PntcbiAgLy9mZXRjaCBkYXRhIG9uIHNlcnZlclxuICAvLyByZXR1cm4gcmVzcG9uc2UgZGF0YSBhcyBhbiBvYmplY3RcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL21hdGNoZXNgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICByZXR1cm4ge21hdGNoZXM6IHJlc3BvbnNlLmRhdGF9O1xuICAvL25vdGU6ICB0aGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIGV4aXN0aW5nIHByb3BzXG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst baseUrl =  false ? 0 : 'http://localhost:3000';\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseUrl);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vdXRpbHMvYmFzZVVybC5qcz9hZTMzIl0sIm5hbWVzIjpbImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLEdBQ2IsU0FDTSxDQUROLEdBRU0sdUJBSE47QUFLQSwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3V0aWxzL2Jhc2VVcmwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVXJsID0gXG5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgXG4gICAgPyAnaHR0cHM6Ly9kZXBsb3ltZW50LXVybC5ub3cuc2gnXG4gICAgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
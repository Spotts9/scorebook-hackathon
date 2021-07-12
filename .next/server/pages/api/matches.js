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
exports.id = "pages/api/matches";
exports.ids = ["pages/api/matches"];
exports.modules = {

/***/ "./models/Match.js":
/*!*************************!*\
  !*** ./models/Match.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  String,\n  Number\n} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types);\nconst MatchSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  wrestler: {\n    type: String,\n    required: true\n  },\n  opponent: {\n    type: String,\n    required: true\n  },\n  result: {\n    type: String,\n    required: true,\n    default: 'W',\n    enum: ['W', 'L']\n  },\n  pointsFor: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  pointsAgainst: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  takedowns: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  escapes: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  NF2: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  NF3: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  NF4: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  fall: {\n    type: Boolean,\n    default: false,\n    required: true\n  },\n  time: {\n    type: String,\n    required: true,\n    default: \"0:00\"\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Match) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Match', MatchSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vbW9kZWxzL01hdGNoLmpzPzE2ZDgiXSwibmFtZXMiOlsiU3RyaW5nIiwiTnVtYmVyIiwibW9uZ29vc2UiLCJNYXRjaFNjaGVtYSIsIndyZXN0bGVyIiwidHlwZSIsInJlcXVpcmVkIiwib3Bwb25lbnQiLCJyZXN1bHQiLCJkZWZhdWx0IiwiZW51bSIsInBvaW50c0ZvciIsInBvaW50c0FnYWluc3QiLCJ0YWtlZG93bnMiLCJlc2NhcGVzIiwiTkYyIiwiTkYzIiwiTkY0IiwiZmFsbCIsIkJvb2xlYW4iLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBLE1BQU07QUFBQ0EsUUFBRDtBQUFTQztBQUFULElBQW1CQyw4REFBekI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUQsd0RBQUosQ0FBb0I7QUFDcENFLFVBQVEsRUFBRTtBQUNOQyxRQUFJLEVBQUVMLE1BREE7QUFFTk0sWUFBUSxFQUFFO0FBRkosR0FEMEI7QUFLcENDLFVBQVEsRUFBRTtBQUNORixRQUFJLEVBQUVMLE1BREE7QUFFTk0sWUFBUSxFQUFFO0FBRkosR0FMMEI7QUFTcENFLFFBQU0sRUFBRTtBQUNKSCxRQUFJLEVBQUVMLE1BREY7QUFFSk0sWUFBUSxFQUFFLElBRk47QUFHSkcsV0FBTyxFQUFFLEdBSEw7QUFJSkMsUUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU47QUFKRixHQVQ0QjtBQWVwQ0MsV0FBUyxFQUFFO0FBQ1BOLFFBQUksRUFBRUosTUFEQztBQUVQSyxZQUFRLEVBQUUsSUFGSDtBQUdQRyxXQUFPLEVBQUU7QUFIRixHQWZ5QjtBQW9CcENHLGVBQWEsRUFBRTtBQUNYUCxRQUFJLEVBQUVKLE1BREs7QUFFWEssWUFBUSxFQUFFLElBRkM7QUFHWEcsV0FBTyxFQUFFO0FBSEUsR0FwQnFCO0FBeUJwQ0ksV0FBUyxFQUFFO0FBQ1BSLFFBQUksRUFBRUosTUFEQztBQUVQSyxZQUFRLEVBQUUsSUFGSDtBQUdQRyxXQUFPLEVBQUU7QUFIRixHQXpCeUI7QUE4QnBDSyxTQUFPLEVBQUU7QUFDTFQsUUFBSSxFQUFFSixNQUREO0FBRUxLLFlBQVEsRUFBRSxJQUZMO0FBR0xHLFdBQU8sRUFBRTtBQUhKLEdBOUIyQjtBQW1DcENNLEtBQUcsRUFBRTtBQUNEVixRQUFJLEVBQUVKLE1BREw7QUFFREssWUFBUSxFQUFFLElBRlQ7QUFHREcsV0FBTyxFQUFFO0FBSFIsR0FuQytCO0FBd0NwQ08sS0FBRyxFQUFFO0FBQ0RYLFFBQUksRUFBRUosTUFETDtBQUVESyxZQUFRLEVBQUUsSUFGVDtBQUdERyxXQUFPLEVBQUU7QUFIUixHQXhDK0I7QUE2Q3BDUSxLQUFHLEVBQUU7QUFDRFosUUFBSSxFQUFFSixNQURMO0FBRURLLFlBQVEsRUFBRSxJQUZUO0FBR0RHLFdBQU8sRUFBRTtBQUhSLEdBN0MrQjtBQWtEcENTLE1BQUksRUFBRTtBQUNGYixRQUFJLEVBQUVjLE9BREo7QUFFRlYsV0FBTyxFQUFDLEtBRk47QUFHRkgsWUFBUSxFQUFFO0FBSFIsR0FsRDhCO0FBdURwQ2MsTUFBSSxFQUFFO0FBQ0ZmLFFBQUksRUFBRUwsTUFESjtBQUVGTSxZQUFRLEVBQUUsSUFGUjtBQUdGRyxXQUFPLEVBQUU7QUFIUDtBQXZEOEIsQ0FBcEIsQ0FBcEI7QUE4REEsK0RBQWVQLDhEQUFBLElBQXlCQSxxREFBQSxDQUFlLE9BQWYsRUFBd0JDLFdBQXhCLENBQXhDIiwiZmlsZSI6Ii4vbW9kZWxzL01hdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHtTdHJpbmcsIE51bWJlcn0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XG5cbmNvbnN0IE1hdGNoU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgd3Jlc3RsZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb3Bwb25lbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcmVzdWx0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICdXJyxcbiAgICAgICAgZW51bTogWydXJywgJ0wnXVxuICAgIH0sXG4gICAgcG9pbnRzRm9yOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIHBvaW50c0FnYWluc3Q6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgdGFrZWRvd25zOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGVzY2FwZXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgTkYyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIE5GMzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBORjQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgZmFsbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OmZhbHNlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogXCIwOjAwXCJcbiAgICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLk1hdGNoIHx8IG1vbmdvb3NlLm1vZGVsKCdNYXRjaCcsIE1hdGNoU2NoZW1hKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Match.js\n");

/***/ }),

/***/ "./pages/api/matches.js":
/*!******************************!*\
  !*** ./pages/api/matches.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Match */ \"./models/Match.js\");\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n// import Matches from '../../static/Matches.json'\n\n\n(0,_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__.default)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const Matches = await _models_Match__WEBPACK_IMPORTED_MODULE_0__.default.find();\n  res.status(200).json(Matches);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vcGFnZXMvYXBpL21hdGNoZXMuanM/YmUzNiJdLCJuYW1lcyI6WyJjb25uZWN0RGIiLCJyZXEiLCJyZXMiLCJNYXRjaGVzIiwiTWF0Y2giLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEseURBQVM7QUFFVCwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEMsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLHVEQUFBLEVBQXRCO0FBQ0FGLEtBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxPQUFyQjtBQUNGLENBSEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWF0Y2hlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNYXRjaGVzIGZyb20gJy4uLy4uL3N0YXRpYy9NYXRjaGVzLmpzb24nXG5pbXBvcnQgTWF0Y2ggZnJvbSAnLi4vLi4vbW9kZWxzL01hdGNoJztcbmltcG9ydCBjb25uZWN0RGIgZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdERiJ1xuXG5jb25uZWN0RGIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICBjb25zdCBNYXRjaGVzID0gYXdhaXQgTWF0Y2guZmluZCgpO1xuICAgcmVzLnN0YXR1cygyMDApLmpzb24oTWF0Y2hlcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/matches.js\n");

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connectDb() {\n  if (connection.isConnected) {\n    //use existing DB Connection\n    console.log(\"Using exisitng connection\");\n    return;\n  } //use a new DB Connection\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://doadmin:3umr47w8IZ0Ka915@db-mongodb-nyc3-scorebook-2928dd70.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-scorebook&tls=true&tlsCAFile=./ca-certificate.crt\", {\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  console.log(\"DB Connected\");\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDb);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vdXRpbHMvY29ubmVjdERiLmpzP2FlN2QiXSwibmFtZXMiOlsiY29ubmVjdGlvbiIsImNvbm5lY3REYiIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwibW9uZ29vc2UiLCJwcm9jZXNzIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRSxFQUFsQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUEyQjtBQUN2QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBO0FBQ0gsR0FMc0IsQ0FPdkI7OztBQUNBLFFBQU1DLEVBQUUsR0FBRyxNQUFNQyx1REFBQSxDQUFpQkMsd01BQWpCLEVBQXdDO0FBQ3JEQyxrQkFBYyxFQUFFLElBRHFDO0FBRXJEQyxvQkFBZ0IsRUFBRSxLQUZtQztBQUdyREMsbUJBQWUsRUFBRSxJQUhvQztBQUlyREMsc0JBQWtCLEVBQUU7QUFKaUMsR0FBeEMsQ0FBakI7QUFNQVIsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBSixZQUFVLENBQUNFLFdBQVgsR0FBeUJHLEVBQUUsQ0FBQ08sV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0g7O0FBRUQsK0RBQWVaLFNBQWYiLCJmaWxlIjoiLi91dGlscy9jb25uZWN0RGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgbW9uZ28gfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPXt9O1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0RGIoKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICAvL3VzZSBleGlzdGluZyBEQiBDb25uZWN0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc2l0bmcgY29ubmVjdGlvblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vdXNlIGEgbmV3IERCIENvbm5lY3Rpb25cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fU1JWLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwiREIgQ29ubmVjdGVkXCIpO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/connectDb.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/matches.js"));
module.exports = __webpack_exports__;

})();
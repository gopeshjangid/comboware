webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Modules/Workspace/redux/reducer.js":
/*!*******************************************************!*\
  !*** ./components/Modules/Workspace/redux/reducer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/Modules/Workspace/redux/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  domain: {
    name: "",
    description: "",
    id: ""
  },
  project: {
    name: "",
    description: "",
    id: ""
  },
  network: null,
  image: null,
  server: null,
  serverList: [],
  loading: false,
  message: "",
  error: ''
};

function reducer(state = initialState, action) {
  var _action$payload, _action$payload2, _action$payload3, _action$payload4;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_DOMAIN"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.data), {}, {
        loading: false,
        error: '',
        message: (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.message
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_REQUEST"]:
      console.log("action?.payload?.data", action === null || action === void 0 ? void 0 : (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.data);
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: '',
        message: (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.message
      }, action === null || action === void 0 ? void 0 : action.payload);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_START"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
        error: '',
        loading: true
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_FAILED"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
        message: '',
        loading: false
      });
      break;

    default:
      return state;
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRvbWFpbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImlkIiwicHJvamVjdCIsIm5ldHdvcmsiLCJpbWFnZSIsInNlcnZlciIsInNlcnZlckxpc3QiLCJsb2FkaW5nIiwibWVzc2FnZSIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNBVkVfRE9NQUlOIiwicGF5bG9hZCIsImRhdGEiLCJTQVZFX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwiUkVRVUVTVF9TVEFSVCIsIlJFUVVFU1RfRkFJTEVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUUsRUFEQTtBQUVOQyxlQUFXLEVBQUUsRUFGUDtBQUdOQyxNQUFFLEVBQUU7QUFIRSxHQURXO0FBS2pCQyxTQUFPLEVBQUU7QUFDVEgsUUFBSSxFQUFFLEVBREc7QUFFVEMsZUFBVyxFQUFFLEVBRko7QUFHVEMsTUFBRSxFQUFFO0FBSEssR0FMUTtBQVVuQkUsU0FBTyxFQUFFLElBVlU7QUFXbkJDLE9BQUssRUFBRSxJQVhZO0FBWW5CQyxRQUFNLEVBQUUsSUFaVztBQWFuQkMsWUFBVSxFQUFHLEVBYk07QUFjbkJDLFNBQU8sRUFBRSxLQWRVO0FBZW5CQyxTQUFPLEVBQUUsRUFmVTtBQWdCbkJDLE9BQUssRUFBRztBQWhCVyxDQUFyQjs7QUFtQkEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBSyxHQUFHZCxZQUF6QixFQUF1Q2UsTUFBdkMsRUFBK0M7QUFBQTs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0Msc0RBQUw7QUFDRSwyREFDS0gsS0FETCxzQkFFS0MsTUFBTSxDQUFDRyxPQUZaLG9EQUVLLGdCQUFnQkMsSUFGckI7QUFHRVQsZUFBTyxFQUFHLEtBSFo7QUFJRUUsYUFBSyxFQUFFLEVBSlQ7QUFLRUQsZUFBTyxzQkFBR0ksTUFBTSxDQUFDRyxPQUFWLHFEQUFHLGlCQUFnQlA7QUFMNUI7QUFRQTs7QUFFQSxTQUFLUyx1REFBTDtBQUNFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1AsTUFBckMsYUFBcUNBLE1BQXJDLDJDQUFxQ0EsTUFBTSxDQUFFRyxPQUE3QyxxREFBcUMsaUJBQWlCQyxJQUF0RDtBQUNBLDZDQUNLTCxLQURMO0FBRUVKLGVBQU8sRUFBRyxLQUZaO0FBR0VFLGFBQUssRUFBRSxFQUhUO0FBSUVELGVBQU8sc0JBQUdJLE1BQU0sQ0FBQ0csT0FBVixxREFBRyxpQkFBZ0JQO0FBSjVCLFNBS0tJLE1BTEwsYUFLS0EsTUFMTCx1QkFLS0EsTUFBTSxDQUFFRyxPQUxiO0FBUUE7O0FBRUosU0FBS0ssd0RBQUw7QUFDRSwyREFDS1QsS0FETCxHQUVLQyxNQUFNLENBQUNHLE9BRlo7QUFHRU4sYUFBSyxFQUFHLEVBSFY7QUFJRUYsZUFBTyxFQUFFO0FBSlg7QUFPQTs7QUFFRixTQUFLYyx5REFBTDtBQUNFLDJEQUNLVixLQURMLEdBRUtDLE1BQU0sQ0FBQ0csT0FGWjtBQUdFUCxlQUFPLEVBQUcsRUFIWjtBQUlFRCxlQUFPLEVBQUU7QUFKWDtBQU9BOztBQUVGO0FBQ0UsYUFBT0ksS0FBUDtBQUNBO0FBOUNKO0FBZ0REOztBQUVjRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAwYWUwODI2ZjUyZWFlYWVjZmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTQVZFX0RPTUFJTiwgUkVRVUVTVF9TVEFSVCwgUkVRVUVTVF9GQUlMRUQgLFNBVkVfUkVRVUVTVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkb21haW46IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGlkOiBcIlwiLFxuICB9LHByb2plY3Q6IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGlkOiBcIlwiLFxuICB9LFxuICBuZXR3b3JrOiBudWxsLFxuICBpbWFnZTogbnVsbCxcbiAgc2VydmVyOiBudWxsLFxuICBzZXJ2ZXJMaXN0IDogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBtZXNzYWdlOiBcIlwiLFxuICBlcnJvciA6ICcnXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0FWRV9ET01BSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQ/LmRhdGEsXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6ICcnLFxuICAgICAgICBtZXNzYWdlIDogYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2VcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNBVkVfUkVRVUVTVDpcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24/LnBheWxvYWQ/LmRhdGFcIiAsYWN0aW9uPy5wYXlsb2FkPy5kYXRhKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgbWVzc2FnZSA6IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlLFxuICAgICAgICAgIC4uLmFjdGlvbj8ucGF5bG9hZFxuICAgICAgICB9O1xuICBcbiAgICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFJFUVVFU1RfU1RBUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGVycm9yIDogJycsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgUkVRVUVTVF9GQUlMRUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIG1lc3NhZ2UgOiAnJyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
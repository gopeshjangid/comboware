webpackHotUpdate_N_E("pages/dashboard/profile",{

/***/ "./components/Modules/Workspace/redux/action.js":
/*!******************************************************!*\
  !*** ./components/Modules/Workspace/redux/action.js ***!
  \******************************************************/
/*! exports provided: saveDomain, saveRequest, requestStart, requestFailed, createDomain, serverRequest, getServerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDomain", function() { return saveDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRequest", function() { return saveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestStart", function() { return requestStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFailed", function() { return requestFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomain", function() { return createDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRequest", function() { return serverRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerDetails", function() { return getServerDetails; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/Modules/Workspace/redux/constants.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/index */ "./service/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const saveDomain = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_DOMAIN"],
    payload: data
  };
};
const saveRequest = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_REQUEST"],
    payload: data
  };
};
const requestStart = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_START"],
    payload: data
  };
};
const requestFailed = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_FAILED"],
    payload: data
  };
};
const createDomain = data => dispatch => {
  dispatch(requestStart({
    message: "Creating domain and project..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createDomain, data).then(res => {
    var _res$data;

    console.log("res", res === null || res === void 0 ? void 0 : res.response);
    dispatch(saveDomain({
      data: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data,
      message: "Domain and project has been created successfully."
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestFailed({
      data: null,
      error: err === null || err === void 0 ? void 0 : err.message
    }));
  });
};
const serverRequest = data => dispatch => {
  dispatch(requestStart({
    message: "Creating request..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createServerRequest, data).then(res => {
    var _res$data2;

    console.log("res", res === null || res === void 0 ? void 0 : res.response);
    dispatch(saveRequest({
      data: {
        server: _objectSpread({}, res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data)
      },
      message: "Server request has been created successfully."
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestFailed({
      data: null,
      error: err === null || err === void 0 ? void 0 : err.message
    }));
  });
};
const getServerDetails = data => dispatch => {
  dispatch(requestStart({
    message: "Fetching workspace details..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getServerDetails, data).then(res => {
    var _res$data3;

    console.log("res", res === null || res === void 0 ? void 0 : res.response);
    dispatch(saveRequest({
      data: {
        server: _objectSpread({}, res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data)
      },
      message: "Server request has been created successfully."
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestFailed({
      data: null,
      error: err === null || err === void 0 ? void 0 : err.message
    }));
  });
};

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

/***/ }),

/***/ "./components/Modules/Workspace/redux/constants.js":
/*!*********************************************************!*\
  !*** ./components/Modules/Workspace/redux/constants.js ***!
  \*********************************************************/
/*! exports provided: SAVE_DOMAIN, SAVE_SERVER_USER, SIGNUP_SUCCESS, REQUEST_START, REQUEST_FAILED, SAVE_REQUEST, API_BASE_URL, NETWORK, FLAVOR, IMAGE, MESSAGE, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_DOMAIN", function() { return SAVE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_SERVER_USER", function() { return SAVE_SERVER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_START", function() { return REQUEST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_FAILED", function() { return REQUEST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_REQUEST", function() { return SAVE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK", function() { return NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAVOR", function() { return FLAVOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE", function() { return IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
const SAVE_DOMAIN = 'SAVE_DOMAIN';
const SAVE_SERVER_USER = 'SAVE_SERVER_USER';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const REQUEST_START = 'REQUEST_START';
const REQUEST_FAILED = 'REQUEST_FAILED';
const SAVE_REQUEST = 'SAVE_REQUEST';
const API_BASE_URL = 'http://localhost:8000';
const NETWORK = {
  id: '9f5e5d0a-8918-4321-8fec-eb062a784fd7',
  name: 'Engineero-network',
  type: 'Physical',
  subnetCIDR: '192.168.60.0/24',
  dhcp: 'enabled',
  allocationPool: '192.168.60.110 — 192.168.60.210'
};
const FLAVOR = {
  id: '423def1e-30ec-4a2d-bad7-226c2de9250b',
  size: {
    cpu: 2,
    ram: 4
  }
};
const IMAGE = {
  id: 'bef927d4-1eec-441e-a161-a25a43a80a7c',
  size: '7 GiB',
  os_type: 'Generic Linux'
};
const MESSAGE = {
  creatingDomain: 'Creating domain...',
  accountSuccess: 'Created success.'
};
const API = {
  createDomain: API_BASE_URL + '/v1/workspace/createDomain',
  createServerRequest: API_BASE_URL + '/v1/workspace/createWorkspace',
  getServerDetails: API_BASE_URL + "/v1/workspace/getServerDetails"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kdWxlcy9Xb3Jrc3BhY2UvcmVkdXgvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbInNhdmVEb21haW4iLCJkYXRhIiwidHlwZSIsIlNBVkVfRE9NQUlOIiwicGF5bG9hZCIsInNhdmVSZXF1ZXN0IiwiU0FWRV9SRVFVRVNUIiwicmVxdWVzdFN0YXJ0IiwiUkVRVUVTVF9TVEFSVCIsInJlcXVlc3RGYWlsZWQiLCJSRVFVRVNUX0ZBSUxFRCIsImNyZWF0ZURvbWFpbiIsImRpc3BhdGNoIiwibWVzc2FnZSIsIlNlcnZpY2UiLCJwb3N0IiwiQVBJIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJzZXJ2ZXJSZXF1ZXN0IiwiY3JlYXRlU2VydmVyUmVxdWVzdCIsInNlcnZlciIsImdldFNlcnZlckRldGFpbHMiLCJTQVZFX1NFUlZFUl9VU0VSIiwiU0lHTlVQX1NVQ0NFU1MiLCJBUElfQkFTRV9VUkwiLCJORVRXT1JLIiwiaWQiLCJuYW1lIiwic3VibmV0Q0lEUiIsImRoY3AiLCJhbGxvY2F0aW9uUG9vbCIsIkZMQVZPUiIsInNpemUiLCJjcHUiLCJyYW0iLCJJTUFHRSIsIm9zX3R5cGUiLCJNRVNTQUdFIiwiY3JlYXRpbmdEb21haW4iLCJhY2NvdW50U3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFVBQVUsR0FBSUMsSUFBRCxJQUFTO0FBQ2pDLFNBQU87QUFBQ0MsUUFBSSxFQUFHQyxzREFBUjtBQUFzQkMsV0FBTyxFQUFHSDtBQUFoQyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1JLFdBQVcsR0FBSUosSUFBRCxJQUFTO0FBQ2xDLFNBQU87QUFBQ0Ms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SFE7QUFJZmlDLFlBQVUsRUFBRyxpQkFKRTtBQUtmQyxNQUFJLEVBQUcsU0FMUTtBQU1mQyxnQkFBYyxFQUFHO0FBTkYsQ0FBaEI7QUFTQSxNQUFNQyxNQUFNLEdBQUc7QUFDaEJMLElBQUUsRUFBRSxzQ0FEWTtBQUVoQk0sTUFBSSxFQUFJO0FBQ05DLE9BQUcsRUFBRyxDQURBO0FBRU5DLE9BQUcsRUFBRTtBQUZDO0FBRlEsQ0FBZjtBQU9BLE1BQU1DLEtBQUssR0FBRztBQUNqQlQsSUFBRSxFQUFJLHNDQURXO0FBRWpCTSxNQUFJLEVBQUcsT0FGVTtBQUdqQkksU0FBTyxFQUFHO0FBSE8sQ0FBZDtBQUtBLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsZ0JBQWMsRUFBRyxvQkFESTtBQUVyQkMsZ0JBQWMsRUFBRztBQUZJLENBQWhCO0FBTUEsTUFBTTlCLEdBQUcsR0FBRztBQUNqQkwsY0FBWSxFQUFHb0IsWUFBWSxHQUFDLDRCQURYO0FBRWpCTCxxQkFBbUIsRUFBR0ssWUFBWSxHQUFDLCtCQUZsQjtBQUdqQkgsa0JBQWdCLEVBQUdHLFlBQVksR0FBQztBQUhmLENBQVoiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUuMWQzNDQwOGZkOGY4YWQ0MDM0ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtTQVZFX0RPTUFJTiwgUkVRVUVTVF9TVEFSVCxSRVFVRVNUX0ZBSUxFRCxTQVZFX1JFUVVFU1QsTUVTU0FHRSxBUEl9IGZyb20gIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZXJ2aWNlIGZyb20gIFwiLi4vLi4vLi4vLi4vc2VydmljZS9pbmRleFwiO1xuXG5leHBvcnQgY29uc3Qgc2F2ZURvbWFpbiA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU0FWRV9ET01BSU4gLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVSZXF1ZXN0ID0gKGRhdGEpID0+e1xuICByZXR1cm4ge3R5cGUgOiBTQVZFX1JFUVVFU1QgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTdGFydCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9TVEFSVCAsIHBheWxvYWQgOiBkYXRhfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdEZhaWxlZCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9GQUlMRUQgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvbWFpbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIGRvbWFpbiBhbmQgcHJvamVjdC4uLlwifSkpO1xuICBTZXJ2aWNlLnBvc3QoQVBJLmNyZWF0ZURvbWFpbiAsZGF0YSkudGhlbihyZXM9PntcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiICxyZXM/LnJlc3BvbnNlKVxuICAgIGRpc3BhdGNoKHNhdmVEb21haW4oe2RhdGEgIDogcmVzPy5kYXRhPy5kYXRhICwgbWVzc2FnZSA6IFwiRG9tYWluIGFuZCBwcm9qZWN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG5leHBvcnQgY29uc3Qgc2VydmVyUmVxdWVzdCA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIHJlcXVlc3QuLi5cIn0pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5jcmVhdGVTZXJ2ZXJSZXF1ZXN0ICxkYXRhKS50aGVuKHJlcz0+e1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIgLHJlcz8ucmVzcG9uc2UpXG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3QoeyBkYXRhICA6ICB7IHNlcnZlciA6IHsuLi5yZXM/LmRhdGE/LmRhdGEgfSB9ICwgbWVzc2FnZSA6IFwiU2VydmVyIHJlcXVlc3QgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCJ9KSk7XG4gIH0pLmNhdGNoKGVyciA9PntcbiAgICBjb25zb2xlLmxvZyhcImVyci0tXCIgLGVycilcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmFpbGVkKHtkYXRhICA6IG51bGwsIGVycm9yIDogZXJyPy5tZXNzYWdlfSkpO1xuICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJEZXRhaWxzID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT57XG4gIGRpc3BhdGNoKHJlcXVlc3RTdGFydCh7bWVzc2FnZSA6IFwiRmV0Y2hpbmcgd29ya3NwYWNlIGRldGFpbHMuLi5cIn0pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5nZXRTZXJ2ZXJEZXRhaWxzICxkYXRhKS50aGVuKHJlcz0+e1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIgLHJlcz8ucmVzcG9uc2UpXG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3QoeyBkYXRhICA6ICB7IHNlcnZlciA6IHsuLi5yZXM/LmRhdGE/LmRhdGEgfSB9ICwgbWVzc2FnZSA6IFwiU2VydmVyIHJlcXVlc3QgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCJ9KSk7XG4gIH0pLmNhdGNoKGVyciA9PntcbiAgICBjb25zb2xlLmxvZyhcImVyci0tXCIgLGVycilcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmFpbGVkKHtkYXRhICA6IG51bGwsIGVycm9yIDogZXJyPy5tZXNzYWdlfSkpO1xuICB9KVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCBTQVZFX0RPTUFJTiA9ICdTQVZFX0RPTUFJTic7XG5leHBvcnQgY29uc3QgU0FWRV9TRVJWRVJfVVNFUiA9ICdTQVZFX1NFUlZFUl9VU0VSJztcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFSVCA9ICdSRVFVRVNUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0ZBSUxFRCA9ICdSRVFVRVNUX0ZBSUxFRCc7XG5leHBvcnQgY29uc3QgU0FWRV9SRVFVRVNUID0gJ1NBVkVfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5leHBvcnQgY29uc3QgTkVUV09SSyA9IHtcbiAgICAgICAgaWQgOiAnOWY1ZTVkMGEtODkxOC00MzIxLThmZWMtZWIwNjJhNzg0ZmQ3JyxcbiAgICAgICAgbmFtZSA6ICdFbmdpbmVlcm8tbmV0d29yaycsXG4gICAgICAgIHR5cGUgOiAnUGh5c2ljYWwnLFxuICAgICAgICBzdWJuZXRDSURSIDogJzE5Mi4xNjguNjAuMC8yNCcsXG4gICAgICAgIGRoY3AgOiAnZW5hYmxlZCcsXG4gICAgICAgIGFsbG9jYXRpb25Qb29sIDogJzE5Mi4xNjguNjAuMTEwIOKAlCAxOTIuMTY4LjYwLjIxMCcgXG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IEZMQVZPUiA9IHtcbiAgICAgIGlkOiAnNDIzZGVmMWUtMzBlYy00YTJkLWJhZDctMjI2YzJkZTkyNTBiJyxcbiAgICAgIHNpemUgIDoge1xuICAgICAgICBjcHUgOiAyLFxuICAgICAgICByYW0gOjRcbiAgICAgIH1cbiAgfVxuZXhwb3J0IGNvbnN0IElNQUdFID0ge1xuICAgIGlkIDogICdiZWY5MjdkNC0xZWVjLTQ0MWUtYTE2MS1hMjVhNDNhODBhN2MnLFxuICAgIHNpemUgOiAnNyBHaUInLFxuICAgIG9zX3R5cGUgOiAnR2VuZXJpYyBMaW51eCdcbiB9IFxuZXhwb3J0IGNvbnN0IE1FU1NBR0UgPSB7XG4gIGNyZWF0aW5nRG9tYWluIDogJ0NyZWF0aW5nIGRvbWFpbi4uLicsXG4gIGFjY291bnRTdWNjZXNzIDogJ0NyZWF0ZWQgc3VjY2Vzcy4nXG59XG5cblxuZXhwb3J0IGNvbnN0IEFQSSA9IHtcbiAgY3JlYXRlRG9tYWluIDogQVBJX0JBU0VfVVJMKycvdjEvd29ya3NwYWNlL2NyZWF0ZURvbWFpbicsXG4gIGNyZWF0ZVNlcnZlclJlcXVlc3QgOiBBUElfQkFTRV9VUkwrJy92MS93b3Jrc3BhY2UvY3JlYXRlV29ya3NwYWNlJyxcbiAgZ2V0U2VydmVyRGV0YWlsczogIEFQSV9CQVNFX1VSTCtcIi92MS93b3Jrc3BhY2UvZ2V0U2VydmVyRGV0YWlsc1wiXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
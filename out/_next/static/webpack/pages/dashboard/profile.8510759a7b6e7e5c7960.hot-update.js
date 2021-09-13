webpackHotUpdate_N_E("pages/dashboard/profile",{

/***/ "./components/Modules/Workspace/redux/action.js":
/*!******************************************************!*\
  !*** ./components/Modules/Workspace/redux/action.js ***!
  \******************************************************/
/*! exports provided: saveDomain, saveRequest, requestStart, requestFailed, createDomain, serverRequest, getWorkSpaceDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDomain", function() { return saveDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRequest", function() { return saveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestStart", function() { return requestStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFailed", function() { return requestFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomain", function() { return createDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRequest", function() { return serverRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkSpaceDetails", function() { return getWorkSpaceDetails; });
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
const getWorkSpaceDetails = id => dispatch => {
  dispatch(requestStart({
    message: "Fetching workspace details..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getServerDetails + "?userId=" + id).then(res => {
    var _res$data3, _res$data3$data;

    console.log("res", res === null || res === void 0 ? void 0 : res.response);
    dispatch(saveRequest({
      data: {
        server: _objectSpread({}, res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$data = _res$data3.data) === null || _res$data3$data === void 0 ? void 0 : _res$data3$data.workspace)
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb24uanMiXSwibmFtZXMiOlsic2F2ZURvbWFpbiIsImRhdGEiLCJ0eXBlIiwiU0FWRV9ET01BSU4iLCJwYXlsb2FkIiwic2F2ZVJlcXVlc3QiLCJTQVZFX1JFUVVFU1QiLCJyZXF1ZXN0U3RhcnQiLCJSRVFVRVNUX1NUQVJUIiwicmVxdWVzdEZhaWxlZCIsIlJFUVVFU1RfRkFJTEVEIiwiY3JlYXRlRG9tYWluIiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwiU2VydmljZSIsInBvc3QiLCJBUEkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInNlcnZlclJlcXVlc3QiLCJjcmVhdGVTZXJ2ZXJSZXF1ZXN0Iiwic2VydmVyIiwiZ2V0V29ya1NwYWNlRGV0YWlscyIsImlkIiwiZ2V0IiwiZ2V0U2VydmVyRGV0YWlscyIsIndvcmtzcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFVBQVUsR0FBSUMsSUFBRCxJQUFTO0FBQ2pDLFNBQU87QUFBQ0MsUUFBSSxFQUFHQyxzREFBUjtBQUFzQkMsV0FBTyxFQUFHSDtBQUFoQyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1JLFdBQVcsR0FBSUosSUFBRCxJQUFTO0FBQ2xDLFNBQU87QUFBQ0MsUUFBSSxFQUFHSSx1REFBUjtBQUF1QkYsV0FBTyxFQUFHSDtBQUFqQyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1NLFlBQVksR0FBSU4sSUFBRCxJQUFTO0FBQ25DLFNBQU87QUFBQ0MsUUFBSSxFQUFHTSx3REFBUjtBQUF3QkosV0FBTyxFQUFHSDtBQUFsQyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1RLGFBQWEsR0FBSVIsSUFBRCxJQUFTO0FBQ3BDLFNBQU87QUFBQ0MsUUFBSSxFQUFHUSx5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LG9EQUFPLGdCQUFpQitCLFNBQXhCO0FBQVIsT0FBWDtBQUEyRG5CLGFBQU8sRUFBRztBQUFyRSxLQUFELENBQVosQ0FBUjtBQUNELEdBSEQsRUFHR1MsS0FISCxDQUdTQyxHQUFHLElBQUc7QUFDYkosV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkcsR0FBckI7QUFDQVgsWUFBUSxDQUFDSCxhQUFhLENBQUM7QUFBQ1IsVUFBSSxFQUFJLElBQVQ7QUFBZXVCLFdBQUssRUFBR0QsR0FBSCxhQUFHQSxHQUFILHVCQUFHQSxHQUFHLENBQUVWO0FBQTVCLEtBQUQsQ0FBZCxDQUFSO0FBQ0QsR0FORDtBQVFELENBVk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUuODUxMDc1OWE3YjZlN2U1Yzc5NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtTQVZFX0RPTUFJTiwgUkVRVUVTVF9TVEFSVCxSRVFVRVNUX0ZBSUxFRCxTQVZFX1JFUVVFU1QsTUVTU0FHRSxBUEl9IGZyb20gIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZXJ2aWNlIGZyb20gIFwiLi4vLi4vLi4vLi4vc2VydmljZS9pbmRleFwiO1xuXG5leHBvcnQgY29uc3Qgc2F2ZURvbWFpbiA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU0FWRV9ET01BSU4gLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVSZXF1ZXN0ID0gKGRhdGEpID0+e1xuICByZXR1cm4ge3R5cGUgOiBTQVZFX1JFUVVFU1QgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTdGFydCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9TVEFSVCAsIHBheWxvYWQgOiBkYXRhfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdEZhaWxlZCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9GQUlMRUQgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvbWFpbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIGRvbWFpbiBhbmQgcHJvamVjdC4uLlwifSkpO1xuICBTZXJ2aWNlLnBvc3QoQVBJLmNyZWF0ZURvbWFpbiAsZGF0YSkudGhlbihyZXM9PntcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiICxyZXM/LnJlc3BvbnNlKVxuICAgIGRpc3BhdGNoKHNhdmVEb21haW4oe2RhdGEgIDogcmVzPy5kYXRhPy5kYXRhICwgbWVzc2FnZSA6IFwiRG9tYWluIGFuZCBwcm9qZWN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG5leHBvcnQgY29uc3Qgc2VydmVyUmVxdWVzdCA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIHJlcXVlc3QuLi5cIn0pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5jcmVhdGVTZXJ2ZXJSZXF1ZXN0ICxkYXRhKS50aGVuKHJlcz0+e1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIgLHJlcz8ucmVzcG9uc2UpXG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3QoeyBkYXRhICA6ICB7IHNlcnZlciA6IHsuLi5yZXM/LmRhdGE/LmRhdGEgfSB9ICwgbWVzc2FnZSA6IFwiU2VydmVyIHJlcXVlc3QgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCJ9KSk7XG4gIH0pLmNhdGNoKGVyciA9PntcbiAgICBjb25zb2xlLmxvZyhcImVyci0tXCIgLGVycilcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmFpbGVkKHtkYXRhICA6IG51bGwsIGVycm9yIDogZXJyPy5tZXNzYWdlfSkpO1xuICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBnZXRXb3JrU3BhY2VEZXRhaWxzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkZldGNoaW5nIHdvcmtzcGFjZSBkZXRhaWxzLi4uXCJ9KSk7XG4gIFNlcnZpY2UuZ2V0KEFQSS5nZXRTZXJ2ZXJEZXRhaWxzK1wiP3VzZXJJZD1cIitpZCApLnRoZW4ocmVzPT57XG4gICAgY29uc29sZS5sb2coXCJyZXNcIiAscmVzPy5yZXNwb25zZSlcbiAgICBkaXNwYXRjaChzYXZlUmVxdWVzdCh7IGRhdGEgIDogIHsgc2VydmVyIDogey4uLnJlcz8uZGF0YT8uZGF0YT8ud29ya3NwYWNlIH0gfSAsIG1lc3NhZ2UgOiBcIlNlcnZlciByZXF1ZXN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9
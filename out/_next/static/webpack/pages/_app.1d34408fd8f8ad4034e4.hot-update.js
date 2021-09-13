webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiU0FWRV9ET01BSU4iLCJTQVZFX1NFUlZFUl9VU0VSIiwiU0lHTlVQX1NVQ0NFU1MiLCJSRVFVRVNUX1NUQVJUIiwiUkVRVUVTVF9GQUlMRUQiLCJTQVZFX1JFUVVFU1QiLCJBUElfQkFTRV9VUkwiLCJORVRXT1JLIiwiaWQiLCJuYW1lIiwidHlwZSIsInN1Ym5ldENJRFIiLCJkaGNwIiwiYWxsb2NhdGlvblBvb2wiLCJGTEFWT1IiLCJzaXplIiwiY3B1IiwicmFtIiwiSU1BR0UiLCJvc190eXBlIiwiTUVTU0FHRSIsImNyZWF0aW5nRG9tYWluIiwiYWNjb3VudFN1Y2Nlc3MiLCJBUEkiLCJjcmVhdGVEb21haW4iLCJjcmVhdGVTZXJ2ZXJSZXF1ZXN0IiwiZ2V0U2VydmVyRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsdUJBQXJCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLElBQUUsRUFBRyxzQ0FEVTtBQUVmQyxNQUFJLEVBQUcsbUJBRlE7QUFHZkMsTUFBSSxFQUFHLFVBSFE7QUFJZkMsWUFBVSxFQUFHLGlCQUpFO0FBS2ZDLE1BQUksRUFBRyxTQUxRO0FBTWZDLGdCQUFjLEVBQUc7QUFORixDQUFoQjtBQVNBLE1BQU1DLE1BQU0sR0FBRztBQUNoQk4sSUFBRSxFQUFFLHNDQURZO0FBRWhCTyxNQUFJLEVBQUk7QUFDTkMsT0FBRyxFQUFHLENBREE7QUFFTkMsT0FBRyxFQUFFO0FBRkM7QUFGUSxDQUFmO0FBT0EsTUFBTUMsS0FBSyxHQUFHO0FBQ2pCVixJQUFFLEVBQUksc0NBRFc7QUFFakJPLE1BQUksRUFBRyxPQUZVO0FBR2pCSSxTQUFPLEVBQUc7QUFITyxDQUFkO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxnQkFBYyxFQUFHLG9CQURJO0FBRXJCQyxnQkFBYyxFQUFHO0FBRkksQ0FBaEI7QUFNQSxNQUFNQyxHQUFHLEdBQUc7QUFDakJDLGNBQVksRUFBR2xCLFlBQVksR0FBQyw0QkFEWDtBQUVqQm1CLHFCQUFtQixFQUFHbkIsWUFBWSxHQUFDLCtCQUZsQjtBQUdqQm9CLGtCQUFnQixFQUFHcEIsWUFBWSxHQUFDO0FBSGYsQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkMzQ0MDhmZDhmOGFkNDAzNGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0FWRV9ET01BSU4gPSAnU0FWRV9ET01BSU4nO1xuZXhwb3J0IGNvbnN0IFNBVkVfU0VSVkVSX1VTRVIgPSAnU0FWRV9TRVJWRVJfVVNFUic7XG5leHBvcnQgY29uc3QgU0lHTlVQX1NVQ0NFU1MgPSAnU0lHTlVQX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBUlQgPSAnUkVRVUVTVF9TVEFSVCc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9GQUlMRUQgPSAnUkVRVUVTVF9GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IFNBVkVfUkVRVUVTVCA9ICdTQVZFX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xuZXhwb3J0IGNvbnN0IE5FVFdPUksgPSB7XG4gICAgICAgIGlkIDogJzlmNWU1ZDBhLTg5MTgtNDMyMS04ZmVjLWViMDYyYTc4NGZkNycsXG4gICAgICAgIG5hbWUgOiAnRW5naW5lZXJvLW5ldHdvcmsnLFxuICAgICAgICB0eXBlIDogJ1BoeXNpY2FsJyxcbiAgICAgICAgc3VibmV0Q0lEUiA6ICcxOTIuMTY4LjYwLjAvMjQnLFxuICAgICAgICBkaGNwIDogJ2VuYWJsZWQnLFxuICAgICAgICBhbGxvY2F0aW9uUG9vbCA6ICcxOTIuMTY4LjYwLjExMCDigJQgMTkyLjE2OC42MC4yMTAnIFxuICAgIH07XG5cbmV4cG9ydCBjb25zdCBGTEFWT1IgPSB7XG4gICAgICBpZDogJzQyM2RlZjFlLTMwZWMtNGEyZC1iYWQ3LTIyNmMyZGU5MjUwYicsXG4gICAgICBzaXplICA6IHtcbiAgICAgICAgY3B1IDogMixcbiAgICAgICAgcmFtIDo0XG4gICAgICB9XG4gIH1cbmV4cG9ydCBjb25zdCBJTUFHRSA9IHtcbiAgICBpZCA6ICAnYmVmOTI3ZDQtMWVlYy00NDFlLWExNjEtYTI1YTQzYTgwYTdjJyxcbiAgICBzaXplIDogJzcgR2lCJyxcbiAgICBvc190eXBlIDogJ0dlbmVyaWMgTGludXgnXG4gfSBcbmV4cG9ydCBjb25zdCBNRVNTQUdFID0ge1xuICBjcmVhdGluZ0RvbWFpbiA6ICdDcmVhdGluZyBkb21haW4uLi4nLFxuICBhY2NvdW50U3VjY2VzcyA6ICdDcmVhdGVkIHN1Y2Nlc3MuJ1xufVxuXG5cbmV4cG9ydCBjb25zdCBBUEkgPSB7XG4gIGNyZWF0ZURvbWFpbiA6IEFQSV9CQVNFX1VSTCsnL3YxL3dvcmtzcGFjZS9jcmVhdGVEb21haW4nLFxuICBjcmVhdGVTZXJ2ZXJSZXF1ZXN0IDogQVBJX0JBU0VfVVJMKycvdjEvd29ya3NwYWNlL2NyZWF0ZVdvcmtzcGFjZScsXG4gIGdldFNlcnZlckRldGFpbHM6ICBBUElfQkFTRV9VUkwrXCIvdjEvd29ya3NwYWNlL2dldFNlcnZlckRldGFpbHNcIlxufSJdLCJzb3VyY2VSb290IjoiIn0=
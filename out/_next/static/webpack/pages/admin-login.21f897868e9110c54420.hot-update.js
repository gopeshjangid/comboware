webpackHotUpdate_N_E("pages/admin-login",{

/***/ "./components/Modules/AdminLogin/redux/constants.js":
/*!**********************************************************!*\
  !*** ./components/Modules/AdminLogin/redux/constants.js ***!
  \**********************************************************/
/*! exports provided: SIGNUP_REQUEST, SIGNUP_FAILED, SIGNUP_SUCCESS, API_BASE_URL, MESSAGE, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_REQUEST", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILED", function() { return SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_FAILED = 'SIGNUP_FAILED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const API_BASE_URL = 'http://localhost:8000';
const MESSAGE = {
  creatingAccount: 'Creating account...',
  accountSuccess: 'Created success.'
};
const API = {
  login: API_BASE_URL + '/v1/user/adminLogin'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0FkbWluTG9naW4vcmVkdXgvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX0ZBSUxFRCIsIlNJR05VUF9TVUNDRVNTIiwiQVBJX0JBU0VfVVJMIiwiTUVTU0FHRSIsImNyZWF0aW5nQWNjb3VudCIsImFjY291bnRTdWNjZXNzIiwiQVBJIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLHVCQUFyQjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsaUJBQWUsRUFBRyxxQkFERztBQUVyQkMsZ0JBQWMsRUFBRztBQUZJLENBQWhCO0FBTUEsTUFBTUMsR0FBRyxHQUFHO0FBQ2pCQyxPQUFLLEVBQUdMLFlBQVksR0FBQztBQURKLENBQVoiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4tbG9naW4uMjFmODk3ODY4ZTkxMTBjNTQ0MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTlVQX0ZBSUxFRCA9ICdTSUdOVVBfRkFJTEVEJztcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRSA9IHtcbiAgY3JlYXRpbmdBY2NvdW50IDogJ0NyZWF0aW5nIGFjY291bnQuLi4nLFxuICBhY2NvdW50U3VjY2VzcyA6ICdDcmVhdGVkIHN1Y2Nlc3MuJ1xufVxuXG5cbmV4cG9ydCBjb25zdCBBUEkgPSB7XG4gIGxvZ2luIDogQVBJX0JBU0VfVVJMKycvdjEvdXNlci9hZG1pbkxvZ2luJ1xufSJdLCJzb3VyY2VSb290IjoiIn0=
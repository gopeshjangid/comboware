webpackHotUpdate_N_E("pages/admin/requests",{

/***/ "./components/Modules/Admin/redux/constants.js":
/*!*****************************************************!*\
  !*** ./components/Modules/Admin/redux/constants.js ***!
  \*****************************************************/
/*! exports provided: START, FAILED, SAVE_PROFILE, API_BASE_URL, MESSAGE, COLUMNS, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILED", function() { return FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PROFILE", function() { return SAVE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
const START = 'START';
const FAILED = 'FAILED';
const SAVE_PROFILE = 'SAVE_PROFILE'; //export const API_BASE_URL = 'http://210.242.250.38:8000';

const API_BASE_URL = 'http://localhost:8000';
const MESSAGE = {
  creatingAccount: 'Creating account...',
  accountSuccess: 'Created success.'
};
const COLUMNS = [{
  field: 'server_name',
  headerName: "Server Name",
  width: 250
}, {
  field: 'ram',
  headerName: "RAM",
  width: 130
}, {
  field: 'cpu',
  headerName: "CPUs",
  width: 120
}, {
  field: 'request_status',
  headerName: "Status",
  width: 200
}, {
  field: 'created_date',
  headerName: "Created Date",
  width: 200
}, {
  field: 'action',
  headerName: "Approve/Reject",
  width: 200
}];
const API = {
  getAllWorkspace: API_BASE_URL + '/v1/workspace/getAllWorkspaceRequest',
  updateRequest: API_BASE_URL + '/v1/workspace/updateRequest'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0FkbWluL3JlZHV4L2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJTVEFSVCIsIkZBSUxFRCIsIlNBVkVfUFJPRklMRSIsIkFQSV9CQVNFX1VSTCIsIk1FU1NBR0UiLCJjcmVhdGluZ0FjY291bnQiLCJhY2NvdW50U3VjY2VzcyIsIkNPTFVNTlMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsIkFQSSIsImdldEFsbFdvcmtzcGFjZSIsInVwZGF0ZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsS0FBSyxHQUFHLE9BQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDLENBQ1A7O0FBQ08sTUFBTUMsWUFBWSxHQUFHLHVCQUFyQjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsaUJBQWUsRUFBRyxxQkFERztBQUVyQkMsZ0JBQWMsRUFBRztBQUZJLENBQWhCO0FBS0EsTUFBTUMsT0FBTyxHQUFHLENBQ3JCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLFlBQVUsRUFBRyxhQUZmO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRHFCLEVBTXJCO0FBQ0VGLE9BQUssRUFBRSxLQURUO0FBRUVDLFlBQVUsRUFBRyxLQUZmO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTnFCLEVBV3JCO0FBQ0VGLE9BQUssRUFBRSxLQURUO0FBRUVDLFlBQVUsRUFBRyxNQUZmO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWHFCLEVBZ0JyQjtBQUNFRixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsWUFBVSxFQUFHLFFBRmY7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQnFCLEVBcUJyQjtBQUNFRixPQUFLLEVBQUUsY0FEVDtBQUVFQyxZQUFVLEVBQUcsY0FGZjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXJCcUIsRUEwQnJCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLFlBQVUsRUFBRyxnQkFGZjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTFCcUIsQ0FBaEI7QUFtQ0EsTUFBTUMsR0FBRyxHQUFHO0FBQ2pCQyxpQkFBZSxFQUFHVCxZQUFZLEdBQUMsc0NBRGQ7QUFFakJVLGVBQWEsRUFBSVYsWUFBWSxHQUFDO0FBRmIsQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXF1ZXN0cy5lZDJiYzkyODU1YzgxMzMzNWY1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNUQVJUID0gJ1NUQVJUJztcbmV4cG9ydCBjb25zdCBGQUlMRUQgPSAnRkFJTEVEJztcbmV4cG9ydCBjb25zdCBTQVZFX1BST0ZJTEUgPSAnU0FWRV9QUk9GSUxFJztcbi8vZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vMjEwLjI0Mi4yNTAuMzg6ODAwMCc7XG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRSA9IHtcbiAgY3JlYXRpbmdBY2NvdW50IDogJ0NyZWF0aW5nIGFjY291bnQuLi4nLFxuICBhY2NvdW50U3VjY2VzcyA6ICdDcmVhdGVkIHN1Y2Nlc3MuJ1xufVxuXG5leHBvcnQgY29uc3QgQ09MVU1OUyA9IFtcbiAge1xuICAgIGZpZWxkOiAnc2VydmVyX25hbWUnLFxuICAgIGhlYWRlck5hbWUgOiBcIlNlcnZlciBOYW1lXCIsXG4gICAgd2lkdGg6IDI1MCxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAncmFtJyxcbiAgICBoZWFkZXJOYW1lIDogXCJSQU1cIixcbiAgICB3aWR0aDogMTMwXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2NwdScsXG4gICAgaGVhZGVyTmFtZSA6IFwiQ1BVc1wiLFxuICAgIHdpZHRoOiAxMjBcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAncmVxdWVzdF9zdGF0dXMnLFxuICAgIGhlYWRlck5hbWUgOiBcIlN0YXR1c1wiLFxuICAgIHdpZHRoOiAyMDBcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnY3JlYXRlZF9kYXRlJyxcbiAgICBoZWFkZXJOYW1lIDogXCJDcmVhdGVkIERhdGVcIixcbiAgICB3aWR0aDogMjAwXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2FjdGlvbicsXG4gICAgaGVhZGVyTmFtZSA6IFwiQXBwcm92ZS9SZWplY3RcIixcbiAgICB3aWR0aDogMjAwXG4gIH1cbiAgXG5dXG5cblxuZXhwb3J0IGNvbnN0IEFQSSA9IHtcbiAgZ2V0QWxsV29ya3NwYWNlIDogQVBJX0JBU0VfVVJMKycvdjEvd29ya3NwYWNlL2dldEFsbFdvcmtzcGFjZVJlcXVlc3QnLFxuICB1cGRhdGVSZXF1ZXN0IDogIEFQSV9CQVNFX1VSTCsnL3YxL3dvcmtzcGFjZS91cGRhdGVSZXF1ZXN0Jyxcbn0iXSwic291cmNlUm9vdCI6IiJ9
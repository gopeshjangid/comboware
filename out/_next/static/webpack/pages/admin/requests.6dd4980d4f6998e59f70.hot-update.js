webpackHotUpdate_N_E("pages/admin/requests",{

/***/ "./components/Modules/Admin/redux/action.js":
/*!**************************************************!*\
  !*** ./components/Modules/Admin/redux/action.js ***!
  \**************************************************/
/*! exports provided: saveProfile, updateRequest, getAllWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return updateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllWorkspace", function() { return getAllWorkspace; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/Modules/Admin/redux/constants.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../service/index */ "./service/index.js");
/* harmony import */ var _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Workspace/redux/action */ "./components/Modules/Workspace/redux/action.js");




const requestInit = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["START"],
    payload: data
  };
};

const requestStop = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FAILED"],
    payload: data
  };
};

const saveProfile = data => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SAVE_PROFILE"],
    payload: data
  };
};
const updateRequest = data => (dispatch, getState) => {
  dispatch(requestInit({
    message: "Updating the request... "
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_0__["API"].updateRequest, data).then(res => {
    dispatch(Object(_Workspace_redux_action__WEBPACK_IMPORTED_MODULE_2__["saveRequest"])({
      message: "Request has been updated."
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestStop({
      data: null,
      message: "Something went wrong. Please try again"
    }));
  });
};
const getAllWorkspace = data => dispatch => {
  dispatch(requestInit({
    message: "Fetching the workspace list..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_0__["API"].getAllWorkspace + "?status=OPEN").then(({
    data
  }) => {
    dispatch(Object(_Workspace_redux_action__WEBPACK_IMPORTED_MODULE_2__["saveRequest"])({
      serverList: data === null || data === void 0 ? void 0 : data.data
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestStop({
      data: null,
      message: err === null || err === void 0 ? void 0 : err.message
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0FkbWluL3JlZHV4L2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0SW5pdCIsImRhdGEiLCJ0eXBlIiwiU1RBUlQiLCJwYXlsb2FkIiwicmVxdWVzdFN0b3AiLCJGQUlMRUQiLCJzYXZlUHJvZmlsZSIsIlNBVkVfUFJPRklMRSIsInVwZGF0ZVJlcXVlc3QiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibWVzc2FnZSIsIlNlcnZpY2UiLCJwdXQiLCJBUEkiLCJ0aGVuIiwicmVzIiwic2F2ZVJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxXb3Jrc3BhY2UiLCJnZXQiLCJzZXJ2ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFJQyxJQUFELElBQVM7QUFDM0IsU0FBTztBQUFDQyxRQUFJLEVBQUdDLGdEQUFSO0FBQWdCQyxXQUFPLEVBQUdIO0FBQTFCLEdBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1JLFdBQVcsR0FBSUosSUFBRCxJQUFTO0FBQzNCLFNBQU87QUFBQ0MsUUFBSSxFQUFHSSxpREFBUjtBQUFpQkYsV0FBTyxFQUFHSDtBQUEzQixHQUFQO0FBQ0QsQ0FGRDs7QUFJTyxNQUFNTSxXQUFXLEdBQUlOLElBQUQsSUFBUztBQUNsQyxTQUFPO0FBQUNDLFFBQUksRUFBR00sdURBQVI7QUFBdUJKLFdBQU8sRUFBR0g7QUFBakMsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNUSxhQUFhLEdBQUlSLElBQUQsSUFBVSxDQUFDUyxRQUFELEVBQVdDLFFBQVgsS0FBdUI7QUFFNURELFVBQVEsQ0FBQ1YsV0FBVyxDQUFDO0FBQUNZLFdBQU8sRUFBRztBQUFYLEdBQUQsQ0FBWixDQUFSO0FBQ0FDLHdEQUFPLENBQUNDLEdBQVIsQ0FBWUMsOENBQUcsQ0FBQ04sYUFBaEIsRUFBK0JSLElBQS9CLEVBQXFDZSxJQUFyQyxDQUEwQ0MsR0FBRyxJQUFFO0FBQzdDUCxZQUFRLENBQUNRLDJFQUFXLENBQUM7QUFBQ04sYUFBTyxFQUFHO0FBQVgsS0FBRCxDQUFaLENBQVI7QUFDRCxHQUZELEVBRUdPLEtBRkgsQ0FFU0MsR0FBRyxJQUFHO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEdBQXJCO0FBQ0FWLFlBQVEsQ0FBQ0wsV0FBVyxDQUFDO0FBQUNKLFVBQUksRUFBSSxJQUFUO0FBQWVXLGFBQU8sRUFBRztBQUF6QixLQUFELENBQVosQ0FBUjtBQUNELEdBTEQ7QUFPRCxDQVZNO0FBWUEsTUFBTVcsZUFBZSxHQUFJdEIsSUFBRCxJQUFXUyxRQUFELElBQWE7QUFDcERBLFVBQVEsQ0FBQ1YsV0FBVyxDQUFDO0FBQUNZLFdBQU8sRUFBRztBQUFYLEdBQUQsQ0FBWixDQUFSO0FBQ0FDLHdEQUFPLENBQUNXLEdBQVIsQ0FBWVQsOENBQUcsQ0FBQ1EsZUFBSixHQUFvQixjQUFoQyxFQUFnRFAsSUFBaEQsQ0FBcUQsQ0FBQztBQUFDZjtBQUFELEdBQUQsS0FBVTtBQUM3RFMsWUFBUSxDQUFDUSwyRUFBVyxDQUFDO0FBQUNPLGdCQUFVLEVBQUV4QixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUE7QUFBbkIsS0FBRCxDQUFaLENBQVI7QUFDRCxHQUZELEVBRUdrQixLQUZILENBRVNDLEdBQUcsSUFBRztBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixHQUFyQjtBQUNBVixZQUFRLENBQUNMLFdBQVcsQ0FBQztBQUFDSixVQUFJLEVBQUksSUFBVDtBQUFlVyxhQUFPLEVBQUdRLEdBQUgsYUFBR0EsR0FBSCx1QkFBR0EsR0FBRyxDQUFFUjtBQUE5QixLQUFELENBQVosQ0FBUjtBQUNELEdBTEQ7QUFPRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3JlcXVlc3RzLjZkZDQ5ODBkNGY2OTk4ZTU5ZjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7U1RBUlQgLEZBSUxFRCxTQVZFX1BST0ZJTEUgLE1FU1NBR0UsQVBJfSBmcm9tICBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tICBcIi4uLy4uLy4uLy4uL3NlcnZpY2UvaW5kZXhcIjtcbmltcG9ydCB7c2F2ZVJlcXVlc3R9IGZyb20gIFwiLi4vLi4vV29ya3NwYWNlL3JlZHV4L2FjdGlvblwiO1xuXG5jb25zdCByZXF1ZXN0SW5pdCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU1RBUlQgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuY29uc3QgcmVxdWVzdFN0b3AgPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IEZBSUxFRCAsIHBheWxvYWQgOiBkYXRhfVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVByb2ZpbGUgPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IFNBVkVfUFJPRklMRSAsIHBheWxvYWQgOiBkYXRhfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVxdWVzdCA9IChkYXRhKSA9PiAoZGlzcGF0Y2ggLGdldFN0YXRlKSA9PntcbiAgXG4gIGRpc3BhdGNoKHJlcXVlc3RJbml0KHttZXNzYWdlIDogXCJVcGRhdGluZyB0aGUgcmVxdWVzdC4uLiBcIn0pKTtcbiAgU2VydmljZS5wdXQoQVBJLnVwZGF0ZVJlcXVlc3QgLGRhdGEpLnRoZW4ocmVzPT57XG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3Qoe21lc3NhZ2UgOiBcIlJlcXVlc3QgaGFzIGJlZW4gdXBkYXRlZC5cIn0pKVxuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdFN0b3Aoe2RhdGEgIDogbnVsbCwgbWVzc2FnZSA6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW5cIn0pKTtcbiAgfSlcblxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsV29ya3NwYWNlID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT57XG4gIGRpc3BhdGNoKHJlcXVlc3RJbml0KHttZXNzYWdlIDogXCJGZXRjaGluZyB0aGUgd29ya3NwYWNlIGxpc3QuLi5cIn0pKTtcbiAgU2VydmljZS5nZXQoQVBJLmdldEFsbFdvcmtzcGFjZStcIj9zdGF0dXM9T1BFTlwiKS50aGVuKCh7ZGF0YX0pPT57XG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3Qoe3NlcnZlckxpc3QgOmRhdGE/LmRhdGF9KSlcbiAgfSkuY2F0Y2goZXJyID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZXJyLS1cIiAsZXJyKVxuICAgIGRpc3BhdGNoKHJlcXVlc3RTdG9wKHtkYXRhICA6IG51bGwsIG1lc3NhZ2UgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
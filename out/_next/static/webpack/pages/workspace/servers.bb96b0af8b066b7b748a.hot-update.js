webpackHotUpdate_N_E("pages/workspace/servers",{

/***/ "./components/Modules/Profile/redux/action.js":
/*!****************************************************!*\
  !*** ./components/Modules/Profile/redux/action.js ***!
  \****************************************************/
/*! exports provided: requestInit, requestStop, saveProfile, signUp, updateProfile, getProfile, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestInit", function() { return requestInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestStop", function() { return requestStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/Modules/Profile/redux/constants.js");
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
const signUp = (data, router) => dispatch => {
  dispatch(requestInit({
    message: 'Logging in...'
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_0__["API"].signUp, data).then(res => {
    var _res$data, _res$data$data, _res$data2, _res$data3, _res$data3$data;

    console.log("login success", res);
    localStorage.setItem("userId", res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.id);
    dispatch(saveProfile({
      user: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data
    }));

    if (!(res !== null && res !== void 0 && (_res$data3 = res.data) !== null && _res$data3 !== void 0 && (_res$data3$data = _res$data3.data) !== null && _res$data3$data !== void 0 && _res$data3$data.is_profile_setup)) {
      router.push("/dashboard/profile");
    } else {
      router.push("/dashboard");
    }
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestStop({
      data: null,
      message: err === null || err === void 0 ? void 0 : err.message
    }));
  });
};
const updateProfile = data => dispatch => {
  dispatch(requestInit({
    message: "Updating the profile... "
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_0__["API"].updateProfile, data).then(res => {
    dispatch(saveProfile({
      message: "Profile updated successfully."
    }));
  }).catch(err => {
    console.log("err--", err);
    dispatch(requestStop({
      data: null,
      message: err === null || err === void 0 ? void 0 : err.message
    }));
  });
};
const getProfile = id => dispatch => {
  dispatch(requestInit({
    message: "Fetching the profile..."
  }));
  _service_index__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_0__["API"].getProfile + "?userId=" + id).then(({
    data
  }) => {
    var _data$data, _data$data2, _data$data3, _data$data4;

    console.log("getProfile res", data);
    dispatch(Object(_Workspace_redux_action__WEBPACK_IMPORTED_MODULE_2__["saveRequest"])({
      domain: data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.domain,
      project: data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.project
    }));
    dispatch(saveProfile({
      profile: data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.user,
      skills: data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : _data$data4.skills
    }));
  }).catch(err => {
    console.log("err--", err); //dispatch(requestStop({data  : null, message : err?.message}));
  });
};
const logoutUser = data => dispatch => {
  dispatch(requestInit({
    message: "Logging out... "
  }));
  dispatch(saveProfile({
    profile: {}
  }));
  dispatch(Object(_Workspace_redux_action__WEBPACK_IMPORTED_MODULE_2__["saveRequest"])({
    domain: {
      id: "",
      name: ""
    },
    project: {
      id: "",
      name: ""
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1Byb2ZpbGUvcmVkdXgvYWN0aW9uLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RJbml0IiwiZGF0YSIsInR5cGUiLCJTVEFSVCIsInBheWxvYWQiLCJyZXF1ZXN0U3RvcCIsIkZBSUxFRCIsInNhdmVQcm9maWxlIiwiU0FWRV9QUk9GSUxFIiwic2lnblVwIiwicm91dGVyIiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwiU2VydmljZSIsInBvc3QiLCJBUEkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInVzZXIiLCJpc19wcm9maWxlX3NldHVwIiwicHVzaCIsImNhdGNoIiwiZXJyIiwidXBkYXRlUHJvZmlsZSIsInB1dCIsImdldFByb2ZpbGUiLCJnZXQiLCJzYXZlUmVxdWVzdCIsImRvbWFpbiIsInByb2plY3QiLCJwcm9maWxlIiwic2tpbGxzIiwibG9nb3V0VXNlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxHQUFJQyxJQUFELElBQVM7QUFDbEMsU0FBTztBQUFDQyxRQUFJLEVBQUdDLGdEQUFSO0FBQWdCQyxXQUFPLEVBQUdIO0FBQTFCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUksV0FBVyxHQUFJSixJQUFELElBQVM7QUFDbEMsU0FBTztBQUFDQyxRQUFJLEVBQUdJLGlEQUFSO0FBQWlCRixXQUFPLEVBQUdIO0FBQTNCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTU0sV0FBVyxHQUFJTixJQUFELElBQVM7QUFDbEMsU0FBTztBQUFDQyxRQUFJLEVBQUdNLHVEQUFSO0FBQXVCSixXQUFPLEVBQUdIO0FBQWpDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTVEsTUFBTSxHQUFHLENBQUNSLElBQUQsRUFBT1MsTUFBUCxLQUFtQkMsUUFBRCxJQUFhO0FBQ25EQSxVQUFRLENBQUNYLFdBQVcsQ0FBQztBQUFDWSxXQUFPLEVBQUc7QUFBWCxHQUFELENBQVosQ0FBUjtBQUNBQyx3REFBTyxDQUFDQyxJQUFSLENBQWFDLDhDQUFHLENBQUNOLE1BQWpCLEVBQXlCUixJQUF6QixFQUErQmUsSUFBL0IsQ0FBb0NDLEdBQUcsSUFBRTtBQUFBOztBQUN2Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsR0FBN0I7QUFDQUcsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixFQUErQkosR0FBL0IsYUFBK0JBLEdBQS9CLG9DQUErQkEsR0FBRyxDQUFFaEIsSUFBcEMsZ0VBQStCLFVBQVdBLElBQTFDLG1EQUErQixlQUFpQnFCLEVBQWhEO0FBQ0FYLFlBQVEsQ0FBQ0osV0FBVyxDQUFDO0FBQUNnQixVQUFJLEVBQUlOLEdBQUosYUFBSUEsR0FBSixxQ0FBSUEsR0FBRyxDQUFFaEIsSUFBVCwrQ0FBSSxXQUFXQTtBQUFwQixLQUFELENBQVosQ0FBUjs7QUFDQSxRQUFHLEVBQUNnQixHQUFELGFBQUNBLEdBQUQsNkJBQUNBLEdBQUcsQ0FBRWhCLElBQU4sMERBQUMsV0FBV0EsSUFBWiw0Q0FBQyxnQkFBaUJ1QixnQkFBbEIsQ0FBSCxFQUFzQztBQUNwQ2QsWUFBTSxDQUFDZSxJQUFQLENBQVksb0JBQVo7QUFDRCxLQUZELE1BRU87QUFDTGYsWUFBTSxDQUFDZSxJQUFQLENBQVksWUFBWjtBQUNEO0FBQ0YsR0FURCxFQVNHQyxLQVRILENBU1NDLEdBQUcsSUFBRztBQUNiVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUSxHQUFyQjtBQUNBaEIsWUFBUSxDQUFDTixXQUFXLENBQUM7QUFBQ0osVUFBSSxFQUFJLElBQVQ7QUFBZVcsYUFBTyxFQUFHZSxHQUFILGFBQUdBLEdBQUgsdUJBQUdBLEdBQUcsQ0FBRWY7QUFBOUIsS0FBRCxDQUFaLENBQVI7QUFDRCxHQVpEO0FBY0QsQ0FoQk07QUFrQkEsTUFBTWdCLGFBQWEsR0FBSTNCLElBQUQsSUFBV1UsUUFBRCxJQUFhO0FBQ2xEQSxVQUFRLENBQUNYLFdBQVcsQ0FBQztBQUFDWSxXQUFPLEVBQUc7QUFBWCxHQUFELENBQVosQ0FBUjtBQUNBQyx3REFBTyxDQUFDZ0IsR0FBUixDQUFZZCw4Q0FBRyxDQUFDYSxhQUFoQixFQUErQjNCLElBQS9CLEVBQXFDZSxJQUFyQyxDQUEwQ0MsR0FBRyxJQUFFO0FBQzdDTixZQUFRLENBQUNKLFdBQVcsQ0FBQztBQUFDSyxhQUFPLEVBQUc7QUFBWCxLQUFELENBQVosQ0FBUjtBQUNELEdBRkQsRUFFR2MsS0FGSCxDQUVTQyxHQUFHLElBQUc7QUFDYlQsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlEsR0FBckI7QUFDQWhCLFlBQVEsQ0FBQ04sV0FBVyxDQUFDO0FBQUNKLFVBQUksRUFBSSxJQUFUO0FBQWVXLGFBQU8sRUFBR2UsR0FBSCxhQUFHQSxHQUFILHVCQUFHQSxHQUFHLENBQUVmO0FBQTlCLEtBQUQsQ0FBWixDQUFSO0FBQ0QsR0FMRDtBQU9ELENBVE07QUFXQSxNQUFNa0IsVUFBVSxHQUFJUixFQUFELElBQVNYLFFBQUQsSUFBYTtBQUM3Q0EsVUFBUSxDQUFDWCxXQUFXLENBQUM7QUFBQ1ksV0FBTyxFQUFHO0FBQVgsR0FBRCxDQUFaLENBQVI7QUFDQUMsd0RBQU8sQ0FBQ2tCLEdBQVIsQ0FBWWhCLDhDQUFHLENBQUNlLFVBQUosR0FBZSxVQUFmLEdBQTBCUixFQUF0QyxFQUEwQ04sSUFBMUMsQ0FBK0MsQ0FBQztBQUFDZjtBQUFELEdBQUQsS0FBVTtBQUFBOztBQUN2RGlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCbEIsSUFBOUI7QUFDQVUsWUFBUSxDQUFDcUIsMkVBQVcsQ0FBQztBQUFDQyxZQUFNLEVBQUVoQyxJQUFGLGFBQUVBLElBQUYscUNBQUVBLElBQUksQ0FBRUEsSUFBUiwrQ0FBRSxXQUFZZ0MsTUFBckI7QUFBNkJDLGFBQU8sRUFBRWpDLElBQUYsYUFBRUEsSUFBRixzQ0FBRUEsSUFBSSxDQUFFQSxJQUFSLGdEQUFFLFlBQVlpQztBQUFsRCxLQUFELENBQVosQ0FBUjtBQUNBdkIsWUFBUSxDQUFDSixXQUFXLENBQUU7QUFBQzRCLGFBQU8sRUFBR2xDLElBQUgsYUFBR0EsSUFBSCxzQ0FBR0EsSUFBSSxDQUFFQSxJQUFULGdEQUFHLFlBQVlzQixJQUF2QjtBQUE4QmEsWUFBTSxFQUFHbkMsSUFBSCxhQUFHQSxJQUFILHNDQUFHQSxJQUFJLENBQUVBLElBQVQsZ0RBQUcsWUFBWW1DO0FBQW5ELEtBQUYsQ0FBWixDQUFSO0FBQ0QsR0FKRCxFQUlHVixLQUpILENBSVNDLEdBQUcsSUFBRztBQUNiVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUSxHQUFyQixFQURhLENBRWI7QUFDRCxHQVBEO0FBU0QsQ0FYTTtBQWFBLE1BQU1VLFVBQVUsR0FBSXBDLElBQUQsSUFBV1UsUUFBRCxJQUFhO0FBQy9DQSxVQUFRLENBQUNYLFdBQVcsQ0FBQztBQUFDWSxXQUFPLEVBQUc7QUFBWCxHQUFELENBQVosQ0FBUjtBQUNBRCxVQUFRLENBQUNKLFdBQVcsQ0FBQztBQUFDNEIsV0FBTyxFQUFHO0FBQVgsR0FBRCxDQUFaLENBQVI7QUFDQXhCLFVBQVEsQ0FBQ3FCLDJFQUFXLENBQUM7QUFBQ0MsVUFBTSxFQUFFO0FBQUNYLFFBQUUsRUFBRyxFQUFOO0FBQVVnQixVQUFJLEVBQUc7QUFBakIsS0FBVDtBQUErQkosV0FBTyxFQUFHO0FBQUNaLFFBQUUsRUFBRyxFQUFOO0FBQVVnQixVQUFJLEVBQUc7QUFBakI7QUFBekMsR0FBRCxDQUFaLENBQVI7QUFFRCxDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmtzcGFjZS9zZXJ2ZXJzLmJiOTZiMGFmOGIwNjZiN2I3NDhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7U1RBUlQgLEZBSUxFRCxTQVZFX1BST0ZJTEUgLE1FU1NBR0UsQVBJfSBmcm9tICBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tICBcIi4uLy4uLy4uLy4uL3NlcnZpY2UvaW5kZXhcIjtcbmltcG9ydCB7c2F2ZVJlcXVlc3R9IGZyb20gIFwiLi4vLi4vV29ya3NwYWNlL3JlZHV4L2FjdGlvblwiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdEluaXQgPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IFNUQVJUICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0U3RvcCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogRkFJTEVEICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUHJvZmlsZSA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU0FWRV9QUk9GSUxFICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSAscm91dGVyKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0SW5pdCh7bWVzc2FnZSA6ICdMb2dnaW5nIGluLi4uJ30pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5zaWduVXAgLGRhdGEpLnRoZW4ocmVzPT57XG4gICAgY29uc29sZS5sb2coXCJsb2dpbiBzdWNjZXNzXCIgLHJlcylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiICxyZXM/LmRhdGE/LmRhdGE/LmlkKTtcbiAgICBkaXNwYXRjaChzYXZlUHJvZmlsZSh7dXNlciAgOiByZXM/LmRhdGE/LmRhdGF9KSk7XG4gICAgaWYoIXJlcz8uZGF0YT8uZGF0YT8uaXNfcHJvZmlsZV9zZXR1cCl7XG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmQvcHJvZmlsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH1cbiAgfSkuY2F0Y2goZXJyID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZXJyLS1cIiAsZXJyKVxuICAgIGRpc3BhdGNoKHJlcXVlc3RTdG9wKHtkYXRhICA6IG51bGwsIG1lc3NhZ2UgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGUgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PntcbiAgZGlzcGF0Y2gocmVxdWVzdEluaXQoe21lc3NhZ2UgOiBcIlVwZGF0aW5nIHRoZSBwcm9maWxlLi4uIFwifSkpO1xuICBTZXJ2aWNlLnB1dChBUEkudXBkYXRlUHJvZmlsZSAsZGF0YSkudGhlbihyZXM9PntcbiAgICBkaXNwYXRjaChzYXZlUHJvZmlsZSh7bWVzc2FnZSA6IFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIn0pKTtcbiAgfSkuY2F0Y2goZXJyID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZXJyLS1cIiAsZXJyKVxuICAgIGRpc3BhdGNoKHJlcXVlc3RTdG9wKHtkYXRhICA6IG51bGwsIG1lc3NhZ2UgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT57XG4gIGRpc3BhdGNoKHJlcXVlc3RJbml0KHttZXNzYWdlIDogXCJGZXRjaGluZyB0aGUgcHJvZmlsZS4uLlwifSkpO1xuICBTZXJ2aWNlLmdldChBUEkuZ2V0UHJvZmlsZStcIj91c2VySWQ9XCIraWQpLnRoZW4oKHtkYXRhfSk9PntcbiAgICBjb25zb2xlLmxvZyhcImdldFByb2ZpbGUgcmVzXCIgLGRhdGEpXG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3Qoe2RvbWFpbiA6ZGF0YT8uZGF0YT8uZG9tYWluICxwcm9qZWN0IDpkYXRhPy5kYXRhPy5wcm9qZWN0IH0pKVxuICAgIGRpc3BhdGNoKHNhdmVQcm9maWxlKCB7cHJvZmlsZSA6IGRhdGE/LmRhdGE/LnVzZXIgLCBza2lsbHMgOiBkYXRhPy5kYXRhPy5za2lsbHN9KSk7XG4gIH0pLmNhdGNoKGVyciA9PntcbiAgICBjb25zb2xlLmxvZyhcImVyci0tXCIgLGVycilcbiAgICAvL2Rpc3BhdGNoKHJlcXVlc3RTdG9wKHtkYXRhICA6IG51bGwsIG1lc3NhZ2UgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PntcbiAgZGlzcGF0Y2gocmVxdWVzdEluaXQoe21lc3NhZ2UgOiBcIkxvZ2dpbmcgb3V0Li4uIFwifSkpO1xuICBkaXNwYXRjaChzYXZlUHJvZmlsZSh7cHJvZmlsZSA6IHt9fSkpO1xuICBkaXNwYXRjaChzYXZlUmVxdWVzdCh7ZG9tYWluIDp7aWQgOiBcIlwiICxuYW1lIDogXCJcIn0gLHByb2plY3QgOiB7aWQgOiBcIlwiICxuYW1lIDogXCJcIiB9fSkpO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
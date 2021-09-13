webpackHotUpdate_N_E("pages/workspace/servers",{

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

/***/ "./components/Modules/Workspace/virtualServer.js":
/*!*******************************************************!*\
  !*** ./components/Modules/Workspace/virtualServer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var _CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../CustomInput/TextField */ "./components/CustomInput/TextField.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./components/Modules/Workspace/styles.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Select */ "./components/Select/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Modal */ "./components/Modal/index.js");
/* harmony import */ var components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Loader */ "./components/Loader/index.js");
/* harmony import */ var components_Snackbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Snackbar */ "./components/Snackbar/index.js");
/* harmony import */ var _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Workspace/redux/action */ "./components/Modules/Workspace/redux/action.js");
/* harmony import */ var _redux_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./redux/constants */ "./components/Modules/Workspace/redux/constants.js");



var _jsxFileName = "C:\\Home\\comboware\\comboware-frontend\\components\\Modules\\Workspace\\virtualServer.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















function Server({
  serverRequest,
  getWorkSpaceDetails
}) {
  _s();

  var _reduxState$user, _reduxState$user$prof, _reduxState$user2, _reduxState$user2$pro, _reduxState$workspace3, _reduxState$workspace5, _reduxState$workspace6, _reduxState$workspace7, _reduxState$user4, _reduxState$user4$pro, _reduxState$workspace8, _FLAVOR$size, _FLAVOR$size2, _server$form4, _server$form4$server, _server$form5, _server$form5$server, _server$form6, _server$form6$server, _server$form7, _server$form7$server, _server$form8, _server$form8$server;

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"]);
  const classes = useStyles();
  const reduxState = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: isSubmitted,
    1: setSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: server,
    1: setServer
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    form: {
      networks: {
        name: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name,
        uuid: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
      },
      server: {
        server_name: (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user = reduxState.user) === null || _reduxState$user === void 0 ? void 0 : (_reduxState$user$prof = _reduxState$user.profile) === null || _reduxState$user$prof === void 0 ? void 0 : _reduxState$user$prof.first_name) + "Cloud",
        ram: 4,
        cpu: 2,
        capacity: 64
      },
      imageRef: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].id,
      flavorRef: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].id,
      userId: reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user2 = reduxState.user) === null || _reduxState$user2 === void 0 ? void 0 : (_reduxState$user2$pro = _reduxState$user2.profile) === null || _reduxState$user2$pro === void 0 ? void 0 : _reduxState$user2$pro.id
    },
    error: {
      network_name: false,
      user_name: false,
      password: false
    }
  });

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace, _reduxState$workspace2;

    setMessage((reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace = reduxState.workspace) === null || _reduxState$workspace === void 0 ? void 0 : _reduxState$workspace.message) || (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace2 = reduxState.workspace) === null || _reduxState$workspace2 === void 0 ? void 0 : _reduxState$workspace2.error));
    manageMessage();
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace3 = reduxState.workspace) === null || _reduxState$workspace3 === void 0 ? void 0 : _reduxState$workspace3.message]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace4;

    setLoader(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace4 = reduxState.workspace) === null || _reduxState$workspace4 === void 0 ? void 0 : _reduxState$workspace4.loading);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace5 = reduxState.workspace) === null || _reduxState$workspace5 === void 0 ? void 0 : _reduxState$workspace5.loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _server$form, _reduxState$user3, _reduxState$user3$pro;

    setServer(_objectSpread(_objectSpread({}, server), {}, {
      form: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : server.form), {}, {
        server: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : (_server$form = server.form) === null || _server$form === void 0 ? void 0 : _server$form.server), {}, {
          server_name: (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user3 = reduxState.user) === null || _reduxState$user3 === void 0 ? void 0 : (_reduxState$user3$pro = _reduxState$user3.profile) === null || _reduxState$user3$pro === void 0 ? void 0 : _reduxState$user3$pro.first_name) + "Cloud"
        })
      })
    }));
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace6 = reduxState.workspace) === null || _reduxState$workspace6 === void 0 ? void 0 : (_reduxState$workspace7 = _reduxState$workspace6.user) === null || _reduxState$workspace7 === void 0 ? void 0 : _reduxState$workspace7.profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getWorkSpaceDetails({
      userId: Number(localStorage.getItem("userId"))
    });
  }, []);

  const profileValidation = () => {
    var _server$form2;

    let _server = _objectSpread({}, server);

    _server.error = _objectSpread(_objectSpread({}, _server.error), {}, {
      first_name: (_server === null || _server === void 0 ? void 0 : (_server$form2 = _server.form) === null || _server$form2 === void 0 ? void 0 : _server$form2.first_name) === ""
    });
    setServer(_server);
    return !Object.values(_server === null || _server === void 0 ? void 0 : _server.error).some(field => field);
  };

  const submitHandler = e => {
    e.preventDefault(); //if (profileValidation()) {

    setSubmitted(true);
    setLoader(true);
    serverRequest(server === null || server === void 0 ? void 0 : server.form); //}
  };

  const changeHandler = e => {
    var _server$form3;

    let name = e.target.name;
    let value = e.target.value;
    setServer(_objectSpread(_objectSpread({}, server), {}, {
      form: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : server.form), {}, {
        server: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : (_server$form3 = server.form) === null || _server$form3 === void 0 ? void 0 : _server$form3.server), {}, {
          [name]: value
        })
      })
    }));
  };

  console.log("server=====", server, reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user4 = reduxState.user) === null || _reduxState$user4 === void 0 ? void 0 : (_reduxState$user4$pro = _reduxState$user4.profile) === null || _reduxState$user4$pro === void 0 ? void 0 : _reduxState$user4$pro.first_name);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
      open: loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      open: isSubmitted,
      type: reduxState !== null && reduxState !== void 0 && (_reduxState$workspace8 = reduxState.workspace) !== null && _reduxState$workspace8 !== void 0 && _reduxState$workspace8.error ? "error" : "success",
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.cardBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h5",
          children: "Virtual Server Quotation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          spacing: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "left",
              variant: "subtitle1",
              color: "secondary",
              children: "Network Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              className: classes.boxModal,
              borderColor: "#e7e9f0",
              border: .5,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                spacing: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Network Name:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Type:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 21
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Network ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "left",
              variant: "subtitle1",
              color: "secondary",
              children: "Size Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              className: classes.boxModal,
              borderColor: "#e7e9f0",
              border: .5,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                spacing: 1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "RAM"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : (_FLAVOR$size = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size === void 0 ? void 0 : _FLAVOR$size.ram
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "CPUs"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: (_FLAVOR$size2 = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size2 === void 0 ? void 0 : _FLAVOR$size2.cpu
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "FLAVOR ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "left",
              variant: "subtitle1",
              color: "secondary",
              children: "Image Template"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              className: classes.boxModal,
              borderColor: "#e7e9f0",
              border: .5,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                spacing: 1,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 5,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Template Name:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Engineero-workspace"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 2,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 5,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 5,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Os Type:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 231,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].os_type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 5,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Image ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        align: "left",
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "left",
              variant: "subtitle1",
              color: "secondary",
              children: "Compute Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              className: classes.boxModal,
              borderColor: "#e7e9f0",
              border: .5,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                spacing: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    variant: "outlined",
                    fullWidth: true,
                    name: "server_name",
                    label: "Server Name",
                    type: "text",
                    id: "vCPUs",
                    value: (server === null || server === void 0 ? void 0 : (_server$form4 = server.form) === null || _server$form4 === void 0 ? void 0 : (_server$form4$server = _server$form4.server) === null || _server$form4$server === void 0 ? void 0 : _server$form4$server.server_name) || "server name",
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    variant: "outlined",
                    required: true,
                    fullWidth: true,
                    name: "cpu",
                    label: "vCPUs",
                    type: "number",
                    id: "vCPUs",
                    value: (server === null || server === void 0 ? void 0 : (_server$form5 = server.form) === null || _server$form5 === void 0 ? void 0 : (_server$form5$server = _server$form5.server) === null || _server$form5$server === void 0 ? void 0 : _server$form5$server.cpu) || 2,
                    onChange: changeHandler,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    variant: "outlined",
                    required: true,
                    fullWidth: true,
                    name: "ram",
                    label: "RAM",
                    type: "number",
                    id: "RAM",
                    helperText: "in GB",
                    value: (server === null || server === void 0 ? void 0 : (_server$form6 = server.form) === null || _server$form6 === void 0 ? void 0 : (_server$form6$server = _server$form6.server) === null || _server$form6$server === void 0 ? void 0 : _server$form6$server.ram) || 4,
                    inputProps: {
                      minLength: 0
                    },
                    onChange: changeHandler,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    variant: "outlined",
                    required: true,
                    fullWidth: true,
                    name: "capacity",
                    label: "Storage Capacity",
                    type: "number",
                    id: "storage",
                    helperText: "Volume size in GB",
                    onChange: changeHandler,
                    value: (server === null || server === void 0 ? void 0 : (_server$form7 = server.form) === null || _server$form7 === void 0 ? void 0 : (_server$form7$server = _server$form7.server) === null || _server$form7$server === void 0 ? void 0 : _server$form7$server.capacity) || 64,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 9
          }, this), server !== null && server !== void 0 && (_server$form8 = server.form) !== null && _server$form8 !== void 0 && (_server$form8$server = _server$form8.server) !== null && _server$form8$server !== void 0 && _server$form8$server.server_name ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "left",
              variant: "subtitle1",
              color: "secondary",
              children: "Server Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              className: classes.boxModal,
              borderColor: "#e7e9f0",
              border: .5,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                spacing: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 331,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 334,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Progress:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 337,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 340,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 21
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "VM Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 342,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 345,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 10
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 12,
            md: 12,
            align: "right",
            alignContent: "flex-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
              type: "button",
              variant: "contained",
              color: "primary",
              className: classes.submit,
              onClick: submitHandler,
              children: "Send Request"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

_s(Server, "E6QbAM5xw1Ui+AFkq1HL0bP8A5E=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Server;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => {
  return _objectSpread({}, state);
}, {
  serverRequest: _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_19__["serverRequest"],
  getWorkSpaceDetails: _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_19__["getWorkSpaceDetails"]
})(Server));

var _c;

$RefreshReg$(_c, "Server");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kdWxlcy9Xb3Jrc3BhY2UvdmlydHVhbFNlcnZlci5qcyJdLCJuYW1lcyI6WyJzYXZlRG9tYWluIiwiZGF0YSIsInR5cGUiLCJTQVZFX0RPTUFJTiIsInBheWxvYWQiLCJzYXZlUmVxdWVzdCIsIlNBVkVfUkVRVUVTVCIsInJlcXVlc3RTdGFydCIsIlJFUVVFU1RfU1RBUlQiLCJyZXF1ZXN0RmFpbGVkIiwiUkVRVUVTVF9GQUlMRUQiLCJjcmVhdGVEb21haW4iLCJkaXNwYXRjaCIsIm1lc3NhZ2UiLCJTZXJ2aWNlIiwicG9zdCIsIkFQSSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImVycm9yIiwic2VydmVyUmVxdWVzdCIsImNyZWF0ZVNlcnZlclJlcXVlc3QiLCJzZXJ2ZXIiLCJnZXRXb3JrU3BhY2VEZXRhaWxzIiwiaWQiLCJnZXQiLCJnZXRTZXJ2ZXJEZXRhaWxzIiwiU2VydmVyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJyZWR1eFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0U2VydmVyIiwiZm9ybSIsIm5ldHdvcmtzIiwibmFtZSIsIk5FVFdPUksiLCJ1dWlkIiwic2VydmVyX25hbWUiLCJ1c2VyIiwicHJvZmlsZSIsImZpcnN0X25hbWUiLCJyYW0iLCJjcHUiLCJjYXBhY2l0eSIsImltYWdlUmVmIiwiSU1BR0UiLCJmbGF2b3JSZWYiLCJGTEFWT1IiLCJ1c2VySWQiLCJuZXR3b3JrX25hbWUiLCJ1c2VyX25hbWUiLCJwYXNzd29yZCIsIm1hbmFnZU1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwid29ya3NwYWNlIiwibG9hZGluZyIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcm9maWxlVmFsaWRhdGlvbiIsIl9zZXJ2ZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwiZmllbGQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiY2FyZEJveCIsImJveE1vZGFsIiwic2l6ZSIsIm9zX3R5cGUiLCJtaW5MZW5ndGgiLCJzdWJtaXQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sTUFBTUEsVUFBVSxHQUFJQyxJQUFELElBQVM7QUFDakMsU0FBTztBQUFDQyxRQUFJLEVBQUdDLHNEQUFSO0FBQXNCQyxXQUFPLEVBQUdIO0FBQWhDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUksV0FBVyxHQUFJSixJQUFELElBQVM7QUFDbEMsU0FBTztBQUFDQyxRQUFJLEVBQUdJLHVEQUFSO0FBQXVCRixXQUFPLEVBQUdIO0FBQWpDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTU0sWUFBWSxHQUFJTixJQUFELElBQVM7QUFDbkMsU0FBTztBQUFDQyxRQUFJLEVBQUdNLHdEQUFSO0FBQXdCSixXQUFPLEVBQUdIO0FBQWxDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTVEsYUFBYSxHQUFJUixJQUFELElBQVM7QUFDcEMsU0FBTztBQUFDQyxRQUFJLEVBQUdRLHlEQUFSO0FBQXlCTixXQUFPLEVBQUdIO0FBQW5DLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTVUsWUFBWSxHQUFJVixJQUFELElBQVdXLFFBQUQsSUFBYTtBQUNqREEsVUFBUSxDQUFDTCxZQUFZLENBQUM7QUFBQ00sV0FBTyxFQUFHO0FBQVgsR0FBRCxDQUFiLENBQVI7QUFDQUMsd0RBQU8sQ0FBQ0MsSUFBUixDQUFh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Y2svcGFnZXMvd29ya3NwYWNlL3NlcnZlcnMuYmNiYmJhMDYxZThiZTI1MGVhMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtTQVZFX0RPTUFJTiwgUkVRVUVTVF9TVEFSVCxSRVFVRVNUX0ZBSUxFRCxTQVZFX1JFUVVFU1QsTUVTU0FHRSxBUEl9IGZyb20gIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZXJ2aWNlIGZyb20gIFwiLi4vLi4vLi4vLi4vc2VydmljZS9pbmRleFwiO1xuXG5leHBvcnQgY29uc3Qgc2F2ZURvbWFpbiA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU0FWRV9ET01BSU4gLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVSZXF1ZXN0ID0gKGRhdGEpID0+e1xuICByZXR1cm4ge3R5cGUgOiBTQVZFX1JFUVVFU1QgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTdGFydCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9TVEFSVCAsIHBheWxvYWQgOiBkYXRhfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdEZhaWxlZCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogUkVRVUVTVF9GQUlMRUQgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvbWFpbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIGRvbWFpbiBhbmQgcHJvamVjdC4uLlwifSkpO1xuICBTZXJ2aWNlLnBvc3QoQVBJLmNyZWF0ZURvbWFpbiAsZGF0YSkudGhlbihyZXM9PntcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiICxyZXM/LnJlc3BvbnNlKVxuICAgIGRpc3BhdGNoKHNhdmVEb21haW4oe2RhdGEgIDogcmVzPy5kYXRhPy5kYXRhICwgbWVzc2FnZSA6IFwiRG9tYWluIGFuZCBwcm9qZWN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG5leHBvcnQgY29uc3Qgc2VydmVyUmVxdWVzdCA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkNyZWF0aW5nIHJlcXVlc3QuLi5cIn0pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5jcmVhdGVTZXJ2ZXJSZXF1ZXN0ICxkYXRhKS50aGVuKHJlcz0+e1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIgLHJlcz8ucmVzcG9uc2UpXG4gICAgZGlzcGF0Y2goc2F2ZVJlcXVlc3QoeyBkYXRhICA6ICB7IHNlcnZlciA6IHsuLi5yZXM/LmRhdGE/LmRhdGEgfSB9ICwgbWVzc2FnZSA6IFwiU2VydmVyIHJlcXVlc3QgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCJ9KSk7XG4gIH0pLmNhdGNoKGVyciA9PntcbiAgICBjb25zb2xlLmxvZyhcImVyci0tXCIgLGVycilcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmFpbGVkKHtkYXRhICA6IG51bGwsIGVycm9yIDogZXJyPy5tZXNzYWdlfSkpO1xuICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBnZXRXb3JrU3BhY2VEZXRhaWxzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkZldGNoaW5nIHdvcmtzcGFjZSBkZXRhaWxzLi4uXCJ9KSk7XG4gIFNlcnZpY2UuZ2V0KEFQSS5nZXRTZXJ2ZXJEZXRhaWxzK1wiP3VzZXJJZD1cIitpZCApLnRoZW4ocmVzPT57XG4gICAgY29uc29sZS5sb2coXCJyZXNcIiAscmVzPy5yZXNwb25zZSlcbiAgICBkaXNwYXRjaChzYXZlUmVxdWVzdCh7IGRhdGEgIDogIHsgc2VydmVyIDogey4uLnJlcz8uZGF0YT8uZGF0YSB9IH0gLCBtZXNzYWdlIDogXCJTZXJ2ZXIgcmVxdWVzdCBoYXMgYmVlbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIn0pKTtcbiAgfSkuY2F0Y2goZXJyID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZXJyLS1cIiAsZXJyKVxuICAgIGRpc3BhdGNoKHJlcXVlc3RGYWlsZWQoe2RhdGEgIDogbnVsbCwgZXJyb3IgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IEFkZENpcmNsZU91dGxpbmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIi4uLy4uL0N1c3RvbUlucHV0L1RleHRGaWVsZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL1NlbGVjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcImNvbXBvbmVudHMvTW9kYWxcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcImNvbXBvbmVudHMvU25hY2tiYXJcIjtcbmltcG9ydCB7IHNlcnZlclJlcXVlc3QgLGdldFdvcmtTcGFjZURldGFpbHMgfSBmcm9tIFwiLi4vV29ya3NwYWNlL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHtJTUFHRSAsIE5FVFdPUksgLCBGTEFWT1J9IGZyb20gIFwiLi9yZWR1eC9jb25zdGFudHNcIjtcbmZ1bmN0aW9uIFNlcnZlcih7IHNlcnZlclJlcXVlc3QgLGdldFdvcmtTcGFjZURldGFpbHMgfSkge1xuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVkdXhTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VydmVyLCBzZXRTZXJ2ZXJdID0gdXNlU3RhdGUoe1xuICAgIGZvcm06IHtcbiAgICAgIG5ldHdvcmtzOiB7XG4gICAgICAgIG5hbWU6IE5FVFdPUks/Lm5hbWUsXG4gICAgICAgIHV1aWQ6IE5FVFdPUks/LmlkXG4gICAgICB9LFxuXG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgc2VydmVyX25hbWU6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmZpcnN0X25hbWUrXCJDbG91ZFwiLFxuICAgICAgICByYW06IDQsXG4gICAgICAgIGNwdTogMixcbiAgICAgICAgY2FwYWNpdHk6IDY0LFxuICAgICAgfSxcbiAgICAgIGltYWdlUmVmOiBJTUFHRT8uaWQsXG4gICAgICBmbGF2b3JSZWY6IEZMQVZPUj8uaWQsXG4gICAgICB1c2VySWQ6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmlkLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG5ldHdvcmtfbmFtZTogZmFsc2UsXG4gICAgICB1c2VyX25hbWU6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlLFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWFuYWdlTWVzc2FnZSA9ICgpID0+e1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XG4gICAgfSw0MDAwKVxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWVzc2FnZShyZWR1eFN0YXRlPy53b3Jrc3BhY2U/Lm1lc3NhZ2UgfHwgcmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5lcnJvcik7XG4gICAgbWFuYWdlTWVzc2FnZSgpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ubWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGVyKHJlZHV4U3RhdGU/LndvcmtzcGFjZT8ubG9hZGluZyk7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbcmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5sb2FkaW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXJ2ZXIoeyAuLi5zZXJ2ZXIsIGZvcm06IHsgLi4uc2VydmVyPy5mb3JtLCBzZXJ2ZXI6IHsuLi5zZXJ2ZXI/LmZvcm0/LnNlcnZlciwgc2VydmVyX25hbWU6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmZpcnN0X25hbWUrXCJDbG91ZFwiIH0gfSB9KTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LnVzZXI/LnByb2ZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXRXb3JrU3BhY2VEZXRhaWxzKHt1c2VySWQ6IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSl9KTtcbiAgfSxbXSlcblxuICBjb25zdCBwcm9maWxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgX3NlcnZlciA9IHsgLi4uc2VydmVyIH07XG4gICAgX3NlcnZlci5lcnJvciA9IHtcbiAgICAgIC4uLl9zZXJ2ZXIuZXJyb3IsXG4gICAgICBmaXJzdF9uYW1lOiBfc2VydmVyPy5mb3JtPy5maXJzdF9uYW1lID09PSBcIlwiLFxuICAgIH07XG5cbiAgICBzZXRTZXJ2ZXIoX3NlcnZlcik7XG5cbiAgICByZXR1cm4gIU9iamVjdC52YWx1ZXMoX3NlcnZlcj8uZXJyb3IpLnNvbWUoKGZpZWxkKSA9PiBmaWVsZCk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vaWYgKHByb2ZpbGVWYWxpZGF0aW9uKCkpIHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgIHNlcnZlclJlcXVlc3Qoc2VydmVyPy5mb3JtKTtcbiAgICAvL31cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0U2VydmVyKHsgLi4uc2VydmVyLCBmb3JtOiB7IC4uLnNlcnZlcj8uZm9ybSwgc2VydmVyOiB7Li4uc2VydmVyPy5mb3JtPy5zZXJ2ZXIsIFtuYW1lXTogdmFsdWUgfSB9IH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwic2VydmVyPT09PT1cIiwgc2VydmVyICxyZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5maXJzdF9uYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgPExvYWRlciBvcGVuPXtsb2FkZXJ9IC8+XG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17aXNTdWJtaXR0ZWR9XG4gICAgICAgIHR5cGU9e3JlZHV4U3RhdGU/LndvcmtzcGFjZT8uZXJyb3IgPyBcImVycm9yXCIgOiBcInN1Y2Nlc3NcIn1cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+IFxuICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQm94fT5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+VmlydHVhbCBTZXJ2ZXIgUXVvdGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICBcbiAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5OZXR3b3JrIENvbmZpZ3VyYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk5ldHdvcmsgTmFtZTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5UeXBlOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksudHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+IDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPk5ldHdvcmsgSUQ6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57TkVUV09SSy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgey8qIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvZmlsZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJQdWJsaWMgSVBcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQdWJsaWMgSVBcIlxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17c2VydmVyPy5lcnJvcj8uZmlyc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICAgICAgc2VydmVyPy5lcnJvcj8uZmlyc3RfbmFtZSAmJiBcIlBsZWFzZSBlbnRlciBmaXJzdCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPiAgKi99XG4gICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgIGd1dHRlckJvdHRvbT17Mn0gYWxpZ249XCJsZWZ0XCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+U2l6ZSBDb25maWd1cmF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveE1vZGFsfSBib3JkZXJDb2xvcj1cIiNlN2U5ZjBcIiBib3JkZXI9ey41fT5cbiAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlJBTTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0ZMQVZPUj8uc2l6ZT8ucmFtfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+Q1BVczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0ZMQVZPUi5zaXplPy5jcHV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5GTEFWT1IgSUQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntGTEFWT1I/LmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgIGd1dHRlckJvdHRvbT17Mn0gYWxpZ249XCJsZWZ0XCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+SW1hZ2UgVGVtcGxhdGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5UZW1wbGF0ZSBOYW1lOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+RW5naW5lZXJvLXdvcmtzcGFjZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN0YXR1czo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17N30+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+QWN0aXZlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5PcyBUeXBlOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntJTUFHRT8ub3NfdHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbWFnZSBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17N30+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJsZWZ0XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntJTUFHRT8uaWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5Db21wdXRlIENvbmZpZ3VyYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXJ2ZXJfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VydmVyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidkNQVXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LnNlcnZlcl9uYW1lIHx8IFwic2VydmVyIG5hbWVcIn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNwdVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidkNQVXNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uY3B1IHx8IDJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBpdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYW1cIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJBTVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIlJBTVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJpbiBHQlwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8ucmFtIHx8IDR9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3ttaW5MZW5ndGggOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RvcmFnZSBDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0b3JhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiVm9sdW1lIHNpemUgaW4gR0JcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5jYXBhY2l0eSB8fCA2NH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAge1xuICAgICAgICAgc2VydmVyPy5mb3JtPy5zZXJ2ZXI/LnNlcnZlcl9uYW1lICA/IFxuICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgIGd1dHRlckJvdHRvbT17Mn0gYWxpZ249XCJsZWZ0XCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+U2VydmVyIERldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN0YXR1czo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5Qcm9ncmVzczo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLnR5cGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPiA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5WTSBTdGF0dXM6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57TkVUV09SSy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgIDogIFxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gYWxpZ249XCJyaWdodFwiIGFsaWduQ29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZW5kIFJlcXVlc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIFxuICAgICAgICB9XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfSxcbiAgeyBzZXJ2ZXJSZXF1ZXN0LGdldFdvcmtTcGFjZURldGFpbHMgfVxuKShTZXJ2ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
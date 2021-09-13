webpackHotUpdate_N_E("pages/workspace/servers",{

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
  getServerDetails
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
    getServerDetails({
      userId: localStorage.getItem("userId")
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
  getServerDetails: _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_19__["getServerDetails"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kdWxlcy9Xb3Jrc3BhY2UvcmVkdXgvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZHVsZXMvV29ya3NwYWNlL3ZpcnR1YWxTZXJ2ZXIuanMiXSwibmFtZXMiOlsic2F2ZURvbWFpbiIsImRhdGEiLCJ0eXBlIiwiU0FWRV9ET01BSU4iLCJwYXlsb2FkIiwic2F2ZVJlcXVlc3QiLCJTQVZFX1JFUVVFU1QiLCJyZXF1ZXN0U3RhcnQiLCJSRVFVRVNUX1NUQVJUIiwicmVxdWVzdEZhaWxlZCIsIlJFUVVFU1RfRkFJTEVEIiwiY3JlYXRlRG9tYWluIiwiZGlzcGF0Y2giLCJtZXNzYWdlIiwiU2VydmljZSIsInBvc3QiLCJBUEkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInNlcnZlclJlcXVlc3QiLCJjcmVhdGVTZXJ2ZXJSZXF1ZXN0Iiwic2VydmVyIiwiZ2V0U2VydmVyRGV0YWlscyIsIlNBVkVfU0VSVkVSX1VTRVIiLCJTSUdOVVBfU1VDQ0VTUyIsIkFQSV9CQVNFX1VSTCIsIk5FVFdPUksiLCJpZCIsIm5hbWUiLCJzdWJuZXRDSURSIiwiZGhjcCIsImFsbG9jYXRpb25Qb29sIiwiRkxBVk9SIiwic2l6ZSIsImNwdSIsInJhbSIsIklNQUdFIiwib3NfdHlwZSIsIk1FU1NBR0UiLCJjcmVhdGluZ0RvbWFpbiIsImFjY291bnRTdWNjZXNzIiwiU2VydmVyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJyZWR1eFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0U2VydmVyIiwiZm9ybSIsIm5ldHdvcmtzIiwidXVpZCIsInNlcnZlcl9uYW1lIiwidXNlciIsInByb2ZpbGUiLCJmaXJzdF9uYW1lIiwiY2FwYWNpdHkiLCJpbWFnZVJlZiIsImZsYXZvclJlZiIsInVzZXJJZCIsIm5ldHdvcmtfbmFtZSIsInVzZXJfbmFtZSIsInBhc3N3b3JkIiwibWFuYWdlTWVzc2FnZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJ3b3Jrc3BhY2UiLCJsb2FkaW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2ZpbGVWYWxpZGF0aW9uIiwiX3NlcnZlciIsIk9iamVjdCIsInZhbHVlcyIsInNvbWUiLCJmaWVsZCIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJjYXJkQm94IiwiYm94TW9kYWwiLCJtaW5MZW5ndGgiLCJzdWJtaXQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sTUFBTUEsVUFBVSxHQUFJQyxJQUFELElBQVM7QUFDakMsU0FBTztBQUFDQyxRQUFJLEVBQUdDLHNEQUFSO0FBQXNCQyxXQUFPLEVBQUdIO0FBQWhDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUksV0FBVyxHQUFJSixJQUFELElBQVM7QUFDbEMsU0FBTztBQUFDQyxRQUFJLEVBQUdJLHVEQUFSO0FBQXVCRixXQUFPLEVBQUdIO0FBQWpDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTU0sWUFBWSxHQUFJTixJQUFELElBQVM7QUFDbkMsU0FBTztBQUFDQyxRQUFJLEVBQUdNLHdEQUFSO0FBQXdCSixXQUFPLEVBQUdIO0FBQWxDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTVEsYUFBYSxHQUFJUixJQUFELElBQVM7QUFDcEMsU0FBTztBQUFDQyxRQUFJLEVBQUdRLHlEQUFSO0FBQXlCTixXQUFP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LENBQ25CN0MsS0FBRCxJQUFXO0FBQ1QsMkJBQVlBLEtBQVo7QUFDRCxDQUhtQixFQUlwQjtBQUFFN0IsdUZBQUY7QUFBZ0JHLDZGQUFnQkE7QUFBaEMsQ0FKb0IsQ0FBUCxDQUtibUIsTUFMYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmtzcGFjZS9zZXJ2ZXJzLjFkMzQ0MDhmZDhmOGFkNDAzNGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7U0FWRV9ET01BSU4sIFJFUVVFU1RfU1RBUlQsUkVRVUVTVF9GQUlMRUQsU0FWRV9SRVFVRVNULE1FU1NBR0UsQVBJfSBmcm9tICBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tICBcIi4uLy4uLy4uLy4uL3NlcnZpY2UvaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IHNhdmVEb21haW4gPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IFNBVkVfRE9NQUlOICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUmVxdWVzdCA9IChkYXRhKSA9PntcbiAgcmV0dXJuIHt0eXBlIDogU0FWRV9SRVFVRVNUICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0U3RhcnQgPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IFJFUVVFU1RfU1RBUlQgLCBwYXlsb2FkIDogZGF0YX1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RGYWlsZWQgPSAoZGF0YSkgPT57XG4gIHJldHVybiB7dHlwZSA6IFJFUVVFU1RfRkFJTEVEICwgcGF5bG9hZCA6IGRhdGF9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEb21haW4gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PntcbiAgZGlzcGF0Y2gocmVxdWVzdFN0YXJ0KHttZXNzYWdlIDogXCJDcmVhdGluZyBkb21haW4gYW5kIHByb2plY3QuLi5cIn0pKTtcbiAgU2VydmljZS5wb3N0KEFQSS5jcmVhdGVEb21haW4gLGRhdGEpLnRoZW4ocmVzPT57XG4gICAgY29uc29sZS5sb2coXCJyZXNcIiAscmVzPy5yZXNwb25zZSlcbiAgICBkaXNwYXRjaChzYXZlRG9tYWluKHtkYXRhICA6IHJlcz8uZGF0YT8uZGF0YSAsIG1lc3NhZ2UgOiBcIkRvbWFpbiBhbmQgcHJvamVjdCBoYXMgYmVlbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIn0pKTtcbiAgfSkuY2F0Y2goZXJyID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZXJyLS1cIiAsZXJyKVxuICAgIGRpc3BhdGNoKHJlcXVlc3RGYWlsZWQoe2RhdGEgIDogbnVsbCwgZXJyb3IgOiBlcnI/Lm1lc3NhZ2V9KSk7XG4gIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IHNlcnZlclJlcXVlc3QgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PntcbiAgZGlzcGF0Y2gocmVxdWVzdFN0YXJ0KHttZXNzYWdlIDogXCJDcmVhdGluZyByZXF1ZXN0Li4uXCJ9KSk7XG4gIFNlcnZpY2UucG9zdChBUEkuY3JlYXRlU2VydmVyUmVxdWVzdCAsZGF0YSkudGhlbihyZXM9PntcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiICxyZXM/LnJlc3BvbnNlKVxuICAgIGRpc3BhdGNoKHNhdmVSZXF1ZXN0KHsgZGF0YSAgOiAgeyBzZXJ2ZXIgOiB7Li4ucmVzPy5kYXRhPy5kYXRhIH0gfSAsIG1lc3NhZ2UgOiBcIlNlcnZlciByZXF1ZXN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyRGV0YWlscyA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+e1xuICBkaXNwYXRjaChyZXF1ZXN0U3RhcnQoe21lc3NhZ2UgOiBcIkZldGNoaW5nIHdvcmtzcGFjZSBkZXRhaWxzLi4uXCJ9KSk7XG4gIFNlcnZpY2UucG9zdChBUEkuZ2V0U2VydmVyRGV0YWlscyAsZGF0YSkudGhlbihyZXM9PntcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiICxyZXM/LnJlc3BvbnNlKVxuICAgIGRpc3BhdGNoKHNhdmVSZXF1ZXN0KHsgZGF0YSAgOiAgeyBzZXJ2ZXIgOiB7Li4ucmVzPy5kYXRhPy5kYXRhIH0gfSAsIG1lc3NhZ2UgOiBcIlNlcnZlciByZXF1ZXN0IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwifSkpO1xuICB9KS5jYXRjaChlcnIgPT57XG4gICAgY29uc29sZS5sb2coXCJlcnItLVwiICxlcnIpXG4gICAgZGlzcGF0Y2gocmVxdWVzdEZhaWxlZCh7ZGF0YSAgOiBudWxsLCBlcnJvciA6IGVycj8ubWVzc2FnZX0pKTtcbiAgfSlcblxufVxuXG4iLCJleHBvcnQgY29uc3QgU0FWRV9ET01BSU4gPSAnU0FWRV9ET01BSU4nO1xuZXhwb3J0IGNvbnN0IFNBVkVfU0VSVkVSX1VTRVIgPSAnU0FWRV9TRVJWRVJfVVNFUic7XG5leHBvcnQgY29uc3QgU0lHTlVQX1NVQ0NFU1MgPSAnU0lHTlVQX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBUlQgPSAnUkVRVUVTVF9TVEFSVCc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9GQUlMRUQgPSAnUkVRVUVTVF9GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IFNBVkVfUkVRVUVTVCA9ICdTQVZFX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xuZXhwb3J0IGNvbnN0IE5FVFdPUksgPSB7XG4gICAgICAgIGlkIDogJzlmNWU1ZDBhLTg5MTgtNDMyMS04ZmVjLWViMDYyYTc4NGZkNycsXG4gICAgICAgIG5hbWUgOiAnRW5naW5lZXJvLW5ldHdvcmsnLFxuICAgICAgICB0eXBlIDogJ1BoeXNpY2FsJyxcbiAgICAgICAgc3VibmV0Q0lEUiA6ICcxOTIuMTY4LjYwLjAvMjQnLFxuICAgICAgICBkaGNwIDogJ2VuYWJsZWQnLFxuICAgICAgICBhbGxvY2F0aW9uUG9vbCA6ICcxOTIuMTY4LjYwLjExMCDigJQgMTkyLjE2OC42MC4yMTAnIFxuICAgIH07XG5cbmV4cG9ydCBjb25zdCBGTEFWT1IgPSB7XG4gICAgICBpZDogJzQyM2RlZjFlLTMwZWMtNGEyZC1iYWQ3LTIyNmMyZGU5MjUwYicsXG4gICAgICBzaXplICA6IHtcbiAgICAgICAgY3B1IDogMixcbiAgICAgICAgcmFtIDo0XG4gICAgICB9XG4gIH1cbmV4cG9ydCBjb25zdCBJTUFHRSA9IHtcbiAgICBpZCA6ICAnYmVmOTI3ZDQtMWVlYy00NDFlLWExNjEtYTI1YTQzYTgwYTdjJyxcbiAgICBzaXplIDogJzcgR2lCJyxcbiAgICBvc190eXBlIDogJ0dlbmVyaWMgTGludXgnXG4gfSBcbmV4cG9ydCBjb25zdCBNRVNTQUdFID0ge1xuICBjcmVhdGluZ0RvbWFpbiA6ICdDcmVhdGluZyBkb21haW4uLi4nLFxuICBhY2NvdW50U3VjY2VzcyA6ICdDcmVhdGVkIHN1Y2Nlc3MuJ1xufVxuXG5cbmV4cG9ydCBjb25zdCBBUEkgPSB7XG4gIGNyZWF0ZURvbWFpbiA6IEFQSV9CQVNFX1VSTCsnL3YxL3dvcmtzcGFjZS9jcmVhdGVEb21haW4nLFxuICBjcmVhdGVTZXJ2ZXJSZXF1ZXN0IDogQVBJX0JBU0VfVVJMKycvdjEvd29ya3NwYWNlL2NyZWF0ZVdvcmtzcGFjZScsXG4gIGdldFNlcnZlckRldGFpbHM6ICBBUElfQkFTRV9VUkwrXCIvdjEvd29ya3NwYWNlL2dldFNlcnZlckRldGFpbHNcIlxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBBZGRDaXJjbGVPdXRsaW5lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEljb25CdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanNcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi8uLi9DdXN0b21JbnB1dC9UZXh0RmllbGRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9TZWxlY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJjb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJjb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJjb21wb25lbnRzL1NuYWNrYmFyXCI7XG5pbXBvcnQgeyBzZXJ2ZXJSZXF1ZXN0ICxnZXRTZXJ2ZXJEZXRhaWxzIH0gZnJvbSBcIi4uL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb25cIjtcbmltcG9ydCB7SU1BR0UgLCBORVRXT1JLICwgRkxBVk9SfSBmcm9tICBcIi4vcmVkdXgvY29uc3RhbnRzXCI7XG5mdW5jdGlvbiBTZXJ2ZXIoeyBzZXJ2ZXJSZXF1ZXN0ICxnZXRTZXJ2ZXJEZXRhaWxzIH0pIHtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJlZHV4U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlcnZlciwgc2V0U2VydmVyXSA9IHVzZVN0YXRlKHtcbiAgICBmb3JtOiB7XG4gICAgICBuZXR3b3Jrczoge1xuICAgICAgICBuYW1lOiBORVRXT1JLPy5uYW1lLFxuICAgICAgICB1dWlkOiBORVRXT1JLPy5pZFxuICAgICAgfSxcblxuICAgICAgc2VydmVyOiB7XG4gICAgICAgIHNlcnZlcl9uYW1lOiByZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5maXJzdF9uYW1lK1wiQ2xvdWRcIixcbiAgICAgICAgcmFtOiA0LFxuICAgICAgICBjcHU6IDIsXG4gICAgICAgIGNhcGFjaXR5OiA2NCxcbiAgICAgIH0sXG4gICAgICBpbWFnZVJlZjogSU1BR0U/LmlkLFxuICAgICAgZmxhdm9yUmVmOiBGTEFWT1I/LmlkLFxuICAgICAgdXNlcklkOiByZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5pZCxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBuZXR3b3JrX25hbWU6IGZhbHNlLFxuICAgICAgdXNlcl9uYW1lOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZSxcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1hbmFnZU1lc3NhZ2UgPSAoKSA9PntcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIH0sNDAwMClcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lc3NhZ2UocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5tZXNzYWdlIHx8IHJlZHV4U3RhdGU/LndvcmtzcGFjZT8uZXJyb3IpO1xuICAgIG1hbmFnZU1lc3NhZ2UoKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/Lm1lc3NhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlcihyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmxvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ubG9hZGluZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VydmVyKHsgLi4uc2VydmVyLCBmb3JtOiB7IC4uLnNlcnZlcj8uZm9ybSwgc2VydmVyOiB7Li4uc2VydmVyPy5mb3JtPy5zZXJ2ZXIsIHNlcnZlcl9uYW1lOiByZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5maXJzdF9uYW1lK1wiQ2xvdWRcIiB9IH0gfSk7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbcmVkdXhTdGF0ZT8ud29ya3NwYWNlPy51c2VyPy5wcm9maWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0U2VydmVyRGV0YWlscyh7dXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKX0pO1xuICB9LFtdKVxuXG4gIGNvbnN0IHByb2ZpbGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBfc2VydmVyID0geyAuLi5zZXJ2ZXIgfTtcbiAgICBfc2VydmVyLmVycm9yID0ge1xuICAgICAgLi4uX3NlcnZlci5lcnJvcixcbiAgICAgIGZpcnN0X25hbWU6IF9zZXJ2ZXI/LmZvcm0/LmZpcnN0X25hbWUgPT09IFwiXCIsXG4gICAgfTtcblxuICAgIHNldFNlcnZlcihfc2VydmVyKTtcblxuICAgIHJldHVybiAhT2JqZWN0LnZhbHVlcyhfc2VydmVyPy5lcnJvcikuc29tZSgoZmllbGQpID0+IGZpZWxkKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9pZiAocHJvZmlsZVZhbGlkYXRpb24oKSkge1xuICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgICAgc2V0TG9hZGVyKHRydWUpO1xuICAgICAgc2VydmVyUmVxdWVzdChzZXJ2ZXI/LmZvcm0pO1xuICAgIC8vfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTZXJ2ZXIoeyAuLi5zZXJ2ZXIsIGZvcm06IHsgLi4uc2VydmVyPy5mb3JtLCBzZXJ2ZXI6IHsuLi5zZXJ2ZXI/LmZvcm0/LnNlcnZlciwgW25hbWVdOiB2YWx1ZSB9IH0gfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJzZXJ2ZXI9PT09PVwiLCBzZXJ2ZXIgLHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmZpcnN0X25hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICA8TG9hZGVyIG9wZW49e2xvYWRlcn0gLz5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtpc1N1Ym1pdHRlZH1cbiAgICAgICAgdHlwZT17cmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5lcnJvciA/IFwiZXJyb3JcIiA6IFwic3VjY2Vzc1wifVxuICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgLz4gXG4gICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRCb3h9PlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5WaXJ0dWFsIFNlcnZlciBRdW90YXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgIFxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwibGVmdFwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPk5ldHdvcmsgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TmV0d29yayBOYW1lOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlR5cGU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57TkVUV09SSy50eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+TmV0d29yayBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICB7LyogPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lICYmIFwiUGxlYXNlIGVudGVyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+ICAqL31cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5TaXplIENvbmZpZ3VyYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+UkFNPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57RkxBVk9SPy5zaXplPy5yYW19PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5DUFVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57RkxBVk9SLnNpemU/LmNwdX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPkZMQVZPUiBJRDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0ZMQVZPUj8uaWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cbiAgICAgICAgIFxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5JbWFnZSBUZW1wbGF0ZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRlbXBsYXRlIE5hbWU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5FbmdpbmVlcm8td29ya3NwYWNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHVzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5BY3RpdmU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk9zIFR5cGU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0lNQUdFPy5vc190eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkltYWdlIElEOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0lNQUdFPy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwibGVmdFwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPkNvbXB1dGUgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcnZlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXJ2ZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uc2VydmVyX25hbWUgfHwgXCJzZXJ2ZXIgbmFtZVwifVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3B1XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInZDUFVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5jcHUgfHwgMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhbVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cImluIEdCXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5yYW0gfHwgNH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e21pbkxlbmd0aCA6IDB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdG9yYWdlIENhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJWb2x1bWUgc2l6ZSBpbiBHQlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LmNhcGFjaXR5IHx8IDY0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICB7XG4gICAgICAgICBzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uc2VydmVyX25hbWUgID8gXG4gICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5TZXJ2ZXIgRGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHVzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlByb2dyZXNzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksudHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+IDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlZNIFN0YXR1czo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgOiAgXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBhbGlnbj1cInJpZ2h0XCIgYWxpZ25Db250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlbmQgUmVxdWVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgXG4gICAgICAgIH1cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxuICB7IHNlcnZlclJlcXVlc3QsZ2V0U2VydmVyRGV0YWlscyB9XG4pKFNlcnZlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9
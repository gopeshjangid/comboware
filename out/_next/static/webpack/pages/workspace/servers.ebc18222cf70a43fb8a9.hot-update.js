webpackHotUpdate_N_E("pages/workspace/servers",{

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
  serverRequest
}) {
  _s();

  var _reduxState$user, _reduxState$user$prof, _reduxState$user2, _reduxState$user2$pro, _reduxState$workspace3, _reduxState$workspace5, _reduxState$user3, _reduxState$user3$pro, _reduxState$workspace6, _FLAVOR$size, _FLAVOR$size2, _server$form3, _server$form3$server, _server$form4, _server$form4$server, _server$form5, _server$form5$server, _server$form6, _server$form6$server;

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
        uuid: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id,
        fixed_ip: "192.168.10.2"
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
  console.log("reduxState=====", reduxState);

  const profileValidation = () => {
    var _server$form;

    let _server = _objectSpread({}, server);

    _server.error = _objectSpread(_objectSpread({}, _server.error), {}, {
      first_name: (_server === null || _server === void 0 ? void 0 : (_server$form = _server.form) === null || _server$form === void 0 ? void 0 : _server$form.first_name) === ""
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
    var _server$form2;

    let name = e.target.name;
    let value = e.target.value;
    setServer(_objectSpread(_objectSpread({}, server), {}, {
      form: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : server.form), {}, {
        server: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : (_server$form2 = server.form) === null || _server$form2 === void 0 ? void 0 : _server$form2.server), {}, {
          [name]: value
        })
      })
    }));
  };

  console.log("server=====", server, reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user3 = reduxState.user) === null || _reduxState$user3 === void 0 ? void 0 : (_reduxState$user3$pro = _reduxState$user3.profile) === null || _reduxState$user3$pro === void 0 ? void 0 : _reduxState$user3$pro.first_name);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
      open: loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      open: isSubmitted,
      type: reduxState !== null && reduxState !== void 0 && (_reduxState$workspace6 = reduxState.workspace) !== null && _reduxState$workspace6 !== void 0 && _reduxState$workspace6.error ? "error" : "success",
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.cardBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h5",
          children: "Virtual Server Quotation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
              align: "center",
              variant: "subtitle1",
              color: "secondary",
              children: "Network Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
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
                        lineNumber: 127,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Type:"
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
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 21
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Network ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "center",
              variant: "subtitle1",
              color: "secondary",
              children: "Size Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
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
                        lineNumber: 168,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : (_FLAVOR$size = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size === void 0 ? void 0 : _FLAVOR$size.ram
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "CPUs"
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
                        children: (_FLAVOR$size2 = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size2 === void 0 ? void 0 : _FLAVOR$size2.cpu
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
                        children: "FLAVOR ID"
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
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "center",
              variant: "subtitle1",
              color: "secondary",
              children: "Image Template"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
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
                        lineNumber: 202,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Engineero-workspace"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 2,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 3,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 6,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 217,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 6,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Os Type:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 6,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].os_type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 3,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Image ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        align: "left",
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
            xs: 12,
            sm: 6,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              gutterBottom: 2,
              align: "center",
              variant: "subtitle1",
              color: "secondary",
              children: "Compute Configuration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
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
                    value: (server === null || server === void 0 ? void 0 : (_server$form3 = server.form) === null || _server$form3 === void 0 ? void 0 : (_server$form3$server = _server$form3.server) === null || _server$form3$server === void 0 ? void 0 : _server$form3$server.server_name) || "server name",
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
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
                    value: (server === null || server === void 0 ? void 0 : (_server$form4 = server.form) === null || _server$form4 === void 0 ? void 0 : (_server$form4$server = _server$form4.server) === null || _server$form4$server === void 0 ? void 0 : _server$form4$server.cpu) || 2,
                    onChange: changeHandler,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
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
                    value: (server === null || server === void 0 ? void 0 : (_server$form5 = server.form) === null || _server$form5 === void 0 ? void 0 : (_server$form5$server = _server$form5.server) === null || _server$form5$server === void 0 ? void 0 : _server$form5$server.ram) || 4,
                    inputProps: {
                      minLength: 0
                    },
                    onChange: changeHandler,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
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
                    value: (server === null || server === void 0 ? void 0 : (_server$form6 = server.form) === null || _server$form6 === void 0 ? void 0 : (_server$form6$server = _server$form6.server) === null || _server$form6$server === void 0 ? void 0 : _server$form6$server.capacity) || 64,
                    disabled: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
              lineNumber: 316,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

_s(Server, "6kFnh/X2/ZyQqWqczrsmWBfd4ws=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Server;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => {
  return _objectSpread({}, state);
}, {
  serverRequest: _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_19__["serverRequest"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS92aXJ0dWFsU2VydmVyLmpzIl0sIm5hbWVzIjpbIlNlcnZlciIsInNlcnZlclJlcXVlc3QiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2xhc3NlcyIsInJlZHV4U3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2VydmVyIiwic2V0U2VydmVyIiwiZm9ybSIsIm5ldHdvcmtzIiwibmFtZSIsIk5FVFdPUksiLCJ1dWlkIiwiaWQiLCJmaXhlZF9pcCIsInNlcnZlcl9uYW1lIiwidXNlciIsInByb2ZpbGUiLCJmaXJzdF9uYW1lIiwicmFtIiwiY3B1IiwiY2FwYWNpdHkiLCJpbWFnZVJlZiIsIklNQUdFIiwiZmxhdm9yUmVmIiwiRkxBVk9SIiwidXNlcklkIiwiZXJyb3IiLCJuZXR3b3JrX25hbWUiLCJ1c2VyX25hbWUiLCJwYXNzd29yZCIsIm1hbmFnZU1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwid29ya3NwYWNlIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlVmFsaWRhdGlvbiIsIl9zZXJ2ZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwiZmllbGQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiY2FyZEJveCIsImJveE1vZGFsIiwidHlwZSIsInNpemUiLCJvc190eXBlIiwibWluTGVuZ3RoIiwic3VibWl0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Skw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvT0Q7O0dBdFRRdEQsTTtVQUVTRSxTLEVBQ0dLLHVEOzs7S0FIWlAsTTtBQXdUTW1FLDBIQUFPLENBQ25CM0QsS0FBRCxJQUFXO0FBQ1QsMkJBQVlBLEtBQVo7QUFDRCxDQUhtQixFQUlwQjtBQUFFUCx1RkFBYUE7QUFBZixDQUpvQixDQUFQLENBS2JELE1BTGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3Jrc3BhY2Uvc2VydmVycy5lYmMxODIyMmNmNzBhNDNmYjhhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IEFkZENpcmNsZU91dGxpbmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIi4uLy4uL0N1c3RvbUlucHV0L1RleHRGaWVsZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL1NlbGVjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcImNvbXBvbmVudHMvTW9kYWxcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcImNvbXBvbmVudHMvU25hY2tiYXJcIjtcbmltcG9ydCB7IHNlcnZlclJlcXVlc3QgfSBmcm9tIFwiLi4vV29ya3NwYWNlL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHtJTUFHRSAsIE5FVFdPUksgLCBGTEFWT1J9IGZyb20gIFwiLi9yZWR1eC9jb25zdGFudHNcIjtcbmZ1bmN0aW9uIFNlcnZlcih7IHNlcnZlclJlcXVlc3QgfSkge1xuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVkdXhTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VydmVyLCBzZXRTZXJ2ZXJdID0gdXNlU3RhdGUoe1xuICAgIGZvcm06IHtcbiAgICAgIG5ldHdvcmtzOiB7XG4gICAgICAgIG5hbWU6IE5FVFdPUks/Lm5hbWUsXG4gICAgICAgIHV1aWQ6IE5FVFdPUks/LmlkLFxuICAgICAgICBmaXhlZF9pcCA6IFwiMTkyLjE2OC4xMC4yXCJcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBzZXJ2ZXJfbmFtZTogcmVkdXhTdGF0ZT8udXNlcj8ucHJvZmlsZT8uZmlyc3RfbmFtZStcIkNsb3VkXCIsXG4gICAgICAgIHJhbTogNCxcbiAgICAgICAgY3B1OiAyLFxuICAgICAgICBjYXBhY2l0eTogNjQsXG4gICAgICB9LFxuICAgICAgaW1hZ2VSZWY6IElNQUdFPy5pZCxcbiAgICAgIGZsYXZvclJlZjogRkxBVk9SPy5pZCxcbiAgICAgIHVzZXJJZDogcmVkdXhTdGF0ZT8udXNlcj8ucHJvZmlsZT8uaWQsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbmV0d29ya19uYW1lOiBmYWxzZSxcbiAgICAgIHVzZXJfbmFtZTogZmFsc2UsXG4gICAgICBwYXNzd29yZDogZmFsc2UsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYW5hZ2VNZXNzYWdlID0gKCkgPT57XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcbiAgICB9LDQwMDApXG4gIH1cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNZXNzYWdlKHJlZHV4U3RhdGU/LndvcmtzcGFjZT8ubWVzc2FnZSB8fCByZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmVycm9yKTtcbiAgICBtYW5hZ2VNZXNzYWdlKCk7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbcmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5tZXNzYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkZXIocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5sb2FkaW5nKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmxvYWRpbmddKTtcblxuICBjb25zb2xlLmxvZyhcInJlZHV4U3RhdGU9PT09PVwiLCByZWR1eFN0YXRlKTtcblxuICBjb25zdCBwcm9maWxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgX3NlcnZlciA9IHsgLi4uc2VydmVyIH07XG4gICAgX3NlcnZlci5lcnJvciA9IHtcbiAgICAgIC4uLl9zZXJ2ZXIuZXJyb3IsXG4gICAgICBmaXJzdF9uYW1lOiBfc2VydmVyPy5mb3JtPy5maXJzdF9uYW1lID09PSBcIlwiLFxuICAgIH07XG5cbiAgICBzZXRTZXJ2ZXIoX3NlcnZlcik7XG5cbiAgICByZXR1cm4gIU9iamVjdC52YWx1ZXMoX3NlcnZlcj8uZXJyb3IpLnNvbWUoKGZpZWxkKSA9PiBmaWVsZCk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vaWYgKHByb2ZpbGVWYWxpZGF0aW9uKCkpIHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgIHNlcnZlclJlcXVlc3Qoc2VydmVyPy5mb3JtKTtcbiAgICAvL31cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0U2VydmVyKHsgLi4uc2VydmVyLCBmb3JtOiB7IC4uLnNlcnZlcj8uZm9ybSwgc2VydmVyOiB7Li4uc2VydmVyPy5mb3JtPy5zZXJ2ZXIsIFtuYW1lXTogdmFsdWUgfSB9IH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwic2VydmVyPT09PT1cIiwgc2VydmVyICxyZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5maXJzdF9uYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgPExvYWRlciBvcGVuPXtsb2FkZXJ9IC8+XG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17aXNTdWJtaXR0ZWR9XG4gICAgICAgIHR5cGU9e3JlZHV4U3RhdGU/LndvcmtzcGFjZT8uZXJyb3IgPyBcImVycm9yXCIgOiBcInN1Y2Nlc3NcIn1cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+IFxuICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQm94fT5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+VmlydHVhbCBTZXJ2ZXIgUXVvdGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICBcbiAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPk5ldHdvcmsgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TmV0d29yayBOYW1lOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlR5cGU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57TkVUV09SSy50eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+TmV0d29yayBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICB7LyogPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lICYmIFwiUGxlYXNlIGVudGVyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+ICAqL31cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPlNpemUgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5SQU08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntGTEFWT1I/LnNpemU/LnJhbX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPkNQVXM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntGTEFWT1Iuc2l6ZT8uY3B1fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+RkxBVk9SIElEPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57RkxBVk9SPy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICAgXG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+SW1hZ2UgVGVtcGxhdGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5UZW1wbGF0ZSBOYW1lOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+RW5naW5lZXJvLXdvcmtzcGFjZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN0YXR1czo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+QWN0aXZlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5PcyBUeXBlOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntJTUFHRT8ub3NfdHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbWFnZSBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJsZWZ0XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntJTUFHRT8uaWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPkNvbXB1dGUgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcnZlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXJ2ZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uc2VydmVyX25hbWUgfHwgXCJzZXJ2ZXIgbmFtZVwifVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3B1XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInZDUFVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5jcHUgfHwgMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhbVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cImluIEdCXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5yYW0gfHwgNH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e21pbkxlbmd0aCA6IDB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdG9yYWdlIENhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJWb2x1bWUgc2l6ZSBpbiBHQlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LmNhcGFjaXR5IHx8IDY0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBhbGlnbj1cInJpZ2h0XCIgYWxpZ25Db250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlbmQgUmVxdWVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gIH0sXG4gIHsgc2VydmVyUmVxdWVzdCB9XG4pKFNlcnZlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9
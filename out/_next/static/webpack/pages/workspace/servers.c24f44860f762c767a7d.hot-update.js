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
                        color: "primary",
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
                        color: "primary",
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
                        color: "primary",
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
                        color: "primary",
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
                        color: "primary",
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
                        color: "primary",
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
                  xs: 7,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 6,
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
                      xs: 6,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        color: "textSecondary",
                        children: "Engineero-workspace"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
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
                      xs: 4,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 6,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        color: "primary",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 6,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Os Type:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 5,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        color: "primary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].os_type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 1,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Image ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 238,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        align: "left",
                        color: "primary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
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
              lineNumber: 251,
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
                    lineNumber: 256,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
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
                    lineNumber: 268,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
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
                    lineNumber: 282,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
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
                    lineNumber: 298,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
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
              lineNumber: 317,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS92aXJ0dWFsU2VydmVyLmpzIl0sIm5hbWVzIjpbIlNlcnZlciIsInNlcnZlclJlcXVlc3QiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2xhc3NlcyIsInJlZHV4U3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2VydmVyIiwic2V0U2VydmVyIiwiZm9ybSIsIm5ldHdvcmtzIiwibmFtZSIsIk5FVFdPUksiLCJ1dWlkIiwiaWQiLCJmaXhlZF9pcCIsInNlcnZlcl9uYW1lIiwidXNlciIsInByb2ZpbGUiLCJmaXJzdF9uYW1lIiwicmFtIiwiY3B1IiwiY2FwYWNpdHkiLCJpbWFnZVJlZiIsIklNQUdFIiwiZmxhdm9yUmVmIiwiRkxBVk9SIiwidXNlcklkIiwiZXJyb3IiLCJuZXR3b3JrX25hbWUiLCJ1c2VyX25hbWUiLCJwYXNzd29yZCIsIm1hbmFnZU1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwid29ya3NwYWNlIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlVmFsaWRhdGlvbiIsIl9zZXJ2ZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwiZmllbGQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiY2FyZEJveCIsImJveE1vZGFsIiwidHlwZSIsInNpemUiLCJvc190eXBlIiwibWluTGVuZ3RoIiwic3VibWl0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmtzcGFjZS9zZXJ2ZXJzLmMyNGY0NDg2MGY3NjJjNzY3YTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgQWRkQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZC5qc1wiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi4vLi4vQ3VzdG9tSW5wdXQvVGV4dEZpZWxkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vLi4vU2VsZWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiY29tcG9uZW50cy9Nb2RhbFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiY29tcG9uZW50cy9TbmFja2JhclwiO1xuaW1wb3J0IHsgc2VydmVyUmVxdWVzdCB9IGZyb20gXCIuLi9Xb3Jrc3BhY2UvcmVkdXgvYWN0aW9uXCI7XG5pbXBvcnQge0lNQUdFICwgTkVUV09SSyAsIEZMQVZPUn0gZnJvbSAgXCIuL3JlZHV4L2NvbnN0YW50c1wiO1xuZnVuY3Rpb24gU2VydmVyKHsgc2VydmVyUmVxdWVzdCB9KSB7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByZWR1eFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZXJ2ZXIsIHNldFNlcnZlcl0gPSB1c2VTdGF0ZSh7XG4gICAgZm9ybToge1xuICAgICAgbmV0d29ya3M6IHtcbiAgICAgICAgbmFtZTogTkVUV09SSz8ubmFtZSxcbiAgICAgICAgdXVpZDogTkVUV09SSz8uaWQsXG4gICAgICAgIGZpeGVkX2lwIDogXCIxOTIuMTY4LjEwLjJcIlxuICAgICAgfSxcblxuICAgICAgc2VydmVyOiB7XG4gICAgICAgIHNlcnZlcl9uYW1lOiByZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5maXJzdF9uYW1lK1wiQ2xvdWRcIixcbiAgICAgICAgcmFtOiA0LFxuICAgICAgICBjcHU6IDIsXG4gICAgICAgIGNhcGFjaXR5OiA2NCxcbiAgICAgIH0sXG4gICAgICBpbWFnZVJlZjogSU1BR0U/LmlkLFxuICAgICAgZmxhdm9yUmVmOiBGTEFWT1I/LmlkLFxuICAgICAgdXNlcklkOiByZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5pZCxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBuZXR3b3JrX25hbWU6IGZhbHNlLFxuICAgICAgdXNlcl9uYW1lOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZSxcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1hbmFnZU1lc3NhZ2UgPSAoKSA9PntcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIH0sNDAwMClcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lc3NhZ2UocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5tZXNzYWdlIHx8IHJlZHV4U3RhdGU/LndvcmtzcGFjZT8uZXJyb3IpO1xuICAgIG1hbmFnZU1lc3NhZ2UoKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/Lm1lc3NhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlcihyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmxvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ubG9hZGluZ10pO1xuXG4gIGNvbnNvbGUubG9nKFwicmVkdXhTdGF0ZT09PT09XCIsIHJlZHV4U3RhdGUpO1xuXG4gIGNvbnN0IHByb2ZpbGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBfc2VydmVyID0geyAuLi5zZXJ2ZXIgfTtcbiAgICBfc2VydmVyLmVycm9yID0ge1xuICAgICAgLi4uX3NlcnZlci5lcnJvcixcbiAgICAgIGZpcnN0X25hbWU6IF9zZXJ2ZXI/LmZvcm0/LmZpcnN0X25hbWUgPT09IFwiXCIsXG4gICAgfTtcblxuICAgIHNldFNlcnZlcihfc2VydmVyKTtcblxuICAgIHJldHVybiAhT2JqZWN0LnZhbHVlcyhfc2VydmVyPy5lcnJvcikuc29tZSgoZmllbGQpID0+IGZpZWxkKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9pZiAocHJvZmlsZVZhbGlkYXRpb24oKSkge1xuICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgICAgc2V0TG9hZGVyKHRydWUpO1xuICAgICAgc2VydmVyUmVxdWVzdChzZXJ2ZXI/LmZvcm0pO1xuICAgIC8vfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTZXJ2ZXIoeyAuLi5zZXJ2ZXIsIGZvcm06IHsgLi4uc2VydmVyPy5mb3JtLCBzZXJ2ZXI6IHsuLi5zZXJ2ZXI/LmZvcm0/LnNlcnZlciwgW25hbWVdOiB2YWx1ZSB9IH0gfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJzZXJ2ZXI9PT09PVwiLCBzZXJ2ZXIgLHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmZpcnN0X25hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICA8TG9hZGVyIG9wZW49e2xvYWRlcn0gLz5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtpc1N1Ym1pdHRlZH1cbiAgICAgICAgdHlwZT17cmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5lcnJvciA/IFwiZXJyb3JcIiA6IFwic3VjY2Vzc1wifVxuICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgLz4gXG4gICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRCb3h9PlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5WaXJ0dWFsIFNlcnZlciBRdW90YXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgIFxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+TmV0d29yayBDb25maWd1cmF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveE1vZGFsfSBib3JkZXJDb2xvcj1cIiNlN2U5ZjBcIiBib3JkZXI9ey41fT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXR3b3JrIE5hbWU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPntORVRXT1JLLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5UeXBlOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj57TkVUV09SSy50eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+TmV0d29yayBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+e05FVFdPUksuaWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgIHsvKiA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb2ZpbGVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUHVibGljIElQXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHVibGljIElQXCJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3NlcnZlcj8uZXJyb3I/LmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcj8uZXJyb3I/LmZpcnN0X25hbWUgJiYgXCJQbGVhc2UgZW50ZXIgZmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gICovfVxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+U2l6ZSBDb25maWd1cmF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveE1vZGFsfSBib3JkZXJDb2xvcj1cIiNlN2U5ZjBcIiBib3JkZXI9ey41fT5cbiAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlJBTTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj57RkxBVk9SPy5zaXplPy5yYW19PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5DUFVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPntGTEFWT1Iuc2l6ZT8uY3B1fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+RkxBVk9SIElEPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPntGTEFWT1I/LmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgIGd1dHRlckJvdHRvbT17Mn0gYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5JbWFnZSBUZW1wbGF0ZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17N30+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGVtcGxhdGUgTmFtZTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPkVuZ2luZWVyby13b3Jrc3BhY2U8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TdGF0dXM6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj5BY3RpdmU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+T3MgVHlwZTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPntJTUFHRT8ub3NfdHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbWFnZSBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJsZWZ0XCIgY29sb3I9XCJwcmltYXJ5XCI+e0lNQUdFPy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+Q29tcHV0ZSBDb25maWd1cmF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveE1vZGFsfSBib3JkZXJDb2xvcj1cIiNlN2U5ZjBcIiBib3JkZXI9ey41fT5cbiAgICAgICAgIFxuICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VydmVyX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZlciBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInZDUFVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5zZXJ2ZXJfbmFtZSB8fCBcInNlcnZlciBuYW1lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcHVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInZDUFVzXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidkNQVXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LmNwdSB8fCAyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFtXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSQU1cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJSQU1cIlxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiaW4gR0JcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LnJhbSB8fCA0fVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7bWluTGVuZ3RoIDogMH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0b3JhZ2UgQ2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9yYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIlZvbHVtZSBzaXplIGluIEdCXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uY2FwYWNpdHkgfHwgNjR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGFsaWduPVwicmlnaHRcIiBhbGlnbkNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VuZCBSZXF1ZXN0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfSxcbiAgeyBzZXJ2ZXJSZXF1ZXN0IH1cbikoU2VydmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
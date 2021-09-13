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
  serverRequest,
  getWorkSpaceDetails
}) {
  _s();

  var _reduxState$user, _reduxState$user$prof, _reduxState$user2, _reduxState$user2$pro, _reduxState$workspace4, _reduxState$workspace6, _reduxState$workspace11, _reduxState$workspace12, _FLAVOR$size, _FLAVOR$size2, _server$form4, _server$form4$server, _server$form5, _server$form5$server, _server$form6, _server$form6$server, _server$form7, _server$form7$server, _server$form8, _server$form8$server;

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
        fixed_ip: "static"
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
    var _reduxState$workspace;

    if (reduxState !== null && reduxState !== void 0 && (_reduxState$workspace = reduxState.workspace) !== null && _reduxState$workspace !== void 0 && _reduxState$workspace.message) {
      var _reduxState$workspace2, _reduxState$workspace3;

      setMessage((reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace2 = reduxState.workspace) === null || _reduxState$workspace2 === void 0 ? void 0 : _reduxState$workspace2.message) || (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace3 = reduxState.workspace) === null || _reduxState$workspace3 === void 0 ? void 0 : _reduxState$workspace3.error));
      setSubmitted(true);
      manageMessage();
    }

    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace4 = reduxState.workspace) === null || _reduxState$workspace4 === void 0 ? void 0 : _reduxState$workspace4.message]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace5;

    setLoader(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace5 = reduxState.workspace) === null || _reduxState$workspace5 === void 0 ? void 0 : _reduxState$workspace5.loading);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace6 = reduxState.workspace) === null || _reduxState$workspace6 === void 0 ? void 0 : _reduxState$workspace6.loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace7;

    if (!(reduxState !== null && reduxState !== void 0 && (_reduxState$workspace7 = reduxState.workspace) !== null && _reduxState$workspace7 !== void 0 && _reduxState$workspace7.server) && isSubmitted) {
      getWorkSpaceDetails(Number(localStorage.getItem("userId")));
    } else {
      var _reduxState$workspace8, _reduxState$workspace9, _reduxState$workspace10, _server$form, _reduxState$user3, _reduxState$user3$pro;

      setServer(_objectSpread(_objectSpread({}, server), {}, {
        form: _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : server.form), {}, {
          server: reduxState !== null && reduxState !== void 0 && (_reduxState$workspace8 = reduxState.workspace) !== null && _reduxState$workspace8 !== void 0 && (_reduxState$workspace9 = _reduxState$workspace8.server) !== null && _reduxState$workspace9 !== void 0 && _reduxState$workspace9.id ? reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace10 = reduxState.workspace) === null || _reduxState$workspace10 === void 0 ? void 0 : _reduxState$workspace10.server : _objectSpread(_objectSpread({}, server === null || server === void 0 ? void 0 : (_server$form = server.form) === null || _server$form === void 0 ? void 0 : _server$form.server), {}, {
            server_name: (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user3 = reduxState.user) === null || _reduxState$user3 === void 0 ? void 0 : (_reduxState$user3$pro = _reduxState$user3.profile) === null || _reduxState$user3$pro === void 0 ? void 0 : _reduxState$user3$pro.first_name) + "Cloud"
          })
        })
      }));
    }

    setSubmitted(false);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace11 = reduxState.workspace) === null || _reduxState$workspace11 === void 0 ? void 0 : _reduxState$workspace11.server]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getWorkSpaceDetails(Number(localStorage.getItem("userId")));
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

  console.log("reduxState=====", reduxState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
      open: loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      open: isSubmitted,
      type: reduxState !== null && reduxState !== void 0 && (_reduxState$workspace12 = reduxState.workspace) !== null && _reduxState$workspace12 !== void 0 && _reduxState$workspace12.error ? "error" : "success",
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.cardBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h5",
          children: "Virtual Server Quotation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
              lineNumber: 134,
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
                        lineNumber: 142,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Type:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 21
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Network ID:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
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
              lineNumber: 177,
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
                        lineNumber: 183,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : (_FLAVOR$size = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size === void 0 ? void 0 : _FLAVOR$size.ram
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
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "CPUs"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: (_FLAVOR$size2 = _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].size) === null || _FLAVOR$size2 === void 0 ? void 0 : _FLAVOR$size2.cpu
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "FLAVOR ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["FLAVOR"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
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
              lineNumber: 208,
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
                        lineNumber: 217,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Engineero-workspace"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
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
                        lineNumber: 228,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
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
                        lineNumber: 240,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 7,
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === null || _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"] === void 0 ? void 0 : _redux_constants__WEBPACK_IMPORTED_MODULE_20__["IMAGE"].os_type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 244,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
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
                        lineNumber: 252,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
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
                        lineNumber: 255,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
              lineNumber: 265,
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
                    lineNumber: 270,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
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
                    lineNumber: 282,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
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
                    lineNumber: 296,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
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
                    lineNumber: 312,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 9
          }, this), server !== null && server !== void 0 && (_server$form8 = server.form) !== null && _server$form8 !== void 0 && (_server$form8$server = _server$form8.server) !== null && _server$form8$server !== void 0 && _server$form8$server.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
              lineNumber: 332,
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
                        lineNumber: 340,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 343,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Progress:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 346,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 349,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 21
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "VM Status:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 351,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      xs: 8,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        variant: "subtitle2",
                        color: "textSecondary",
                        children: _redux_constants__WEBPACK_IMPORTED_MODULE_20__["NETWORK"].id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 354,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 353,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
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
              lineNumber: 363,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, this);
}

_s(Server, "jQvjrbEVxe7A4zefKhICkNMeN5M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1dvcmtzcGFjZS92aXJ0dWFsU2VydmVyLmpzIl0sIm5hbWVzIjpbIlNlcnZlciIsInNlcnZlclJlcXVlc3QiLCJnZXRXb3JrU3BhY2VEZXRhaWxzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJyZWR1eFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlU3RhdGUiLCJpc1N1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImxvYWRlciIsInNldExvYWRlciIsInNlcnZlciIsInNldFNlcnZlciIsImZvcm0iLCJuZXR3b3JrcyIsIm5hbWUiLCJORVRXT1JLIiwidXVpZCIsImlkIiwiZml4ZWRfaXAiLCJzZXJ2ZXJfbmFtZSIsInVzZXIiLCJwcm9maWxlIiwiZmlyc3RfbmFtZSIsInJhbSIsImNwdSIsImNhcGFjaXR5IiwiaW1hZ2VSZWYiLCJJTUFHRSIsImZsYXZvclJlZiIsIkZMQVZPUiIsInVzZXJJZCIsImVycm9yIiwibmV0d29ya19uYW1lIiwidXNlcl9uYW1lIiwicGFzc3dvcmQiLCJtYW5hZ2VNZXNzYWdlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsIndvcmtzcGFjZSIsImxvYWRpbmciLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvZmlsZVZhbGlkYXRpb24iLCJfc2VydmVyIiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsImZpZWxkIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkQm94IiwiYm94TW9kYWwiLCJ0eXBlIiwic2l6ZSIsIm9zX3R5cGUiLCJtaW5MZW5ndGgiLCJzdWJtaXQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QXZXUXhELE07VUFFU0csUyxFQUNHSyx1RDs7O0tBSFpSLE07QUF5V011RSwwSEFBTyxDQUNuQjlELEtBQUQsSUFBVztBQUNULDJCQUFZQSxLQUFaO0FBQ0QsQ0FIbUIsRUFJcEI7QUFBRVIsdUZBQUY7QUFBZ0JDLG1HQUFtQkE7QUFBbkMsQ0FKb0IsQ0FBUCxDQUtiRixNQUxhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29ya3NwYWNlL3NlcnZlcnMuZjYzMGVmNDA4YzBkMmQwNzc4ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBBZGRDaXJjbGVPdXRsaW5lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEljb25CdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanNcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi8uLi9DdXN0b21JbnB1dC9UZXh0RmllbGRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9TZWxlY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJjb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJjb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJjb21wb25lbnRzL1NuYWNrYmFyXCI7XG5pbXBvcnQgeyBzZXJ2ZXJSZXF1ZXN0ICxnZXRXb3JrU3BhY2VEZXRhaWxzIH0gZnJvbSBcIi4uL1dvcmtzcGFjZS9yZWR1eC9hY3Rpb25cIjtcbmltcG9ydCB7SU1BR0UgLCBORVRXT1JLICwgRkxBVk9SfSBmcm9tICBcIi4vcmVkdXgvY29uc3RhbnRzXCI7XG5mdW5jdGlvbiBTZXJ2ZXIoeyBzZXJ2ZXJSZXF1ZXN0ICxnZXRXb3JrU3BhY2VEZXRhaWxzIH0pIHtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJlZHV4U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlcnZlciwgc2V0U2VydmVyXSA9IHVzZVN0YXRlKHtcbiAgICBmb3JtOiB7XG4gICAgICBuZXR3b3Jrczoge1xuICAgICAgICBuYW1lOiBORVRXT1JLPy5uYW1lLFxuICAgICAgICB1dWlkOiBORVRXT1JLPy5pZCxcbiAgICAgICAgZml4ZWRfaXAgOiBcInN0YXRpY1wiXG4gICAgICB9LFxuXG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgc2VydmVyX25hbWU6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmZpcnN0X25hbWUrXCJDbG91ZFwiLFxuICAgICAgICByYW06IDQsXG4gICAgICAgIGNwdTogMixcbiAgICAgICAgY2FwYWNpdHk6IDY0LFxuICAgICAgfSxcbiAgICAgIGltYWdlUmVmOiBJTUFHRT8uaWQsXG4gICAgICBmbGF2b3JSZWY6IEZMQVZPUj8uaWQsXG4gICAgICB1c2VySWQ6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmlkLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG5ldHdvcmtfbmFtZTogZmFsc2UsXG4gICAgICB1c2VyX25hbWU6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlLFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWFuYWdlTWVzc2FnZSA9ICgpID0+e1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XG4gICAgfSw0MDAwKVxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5tZXNzYWdlKXtcbiAgICAgIHNldE1lc3NhZ2UocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5tZXNzYWdlIHx8IHJlZHV4U3RhdGU/LndvcmtzcGFjZT8uZXJyb3IpO1xuICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgICAgbWFuYWdlTWVzc2FnZSgpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/Lm1lc3NhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlcihyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmxvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ubG9hZGluZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIXJlZHV4U3RhdGU/LndvcmtzcGFjZT8uc2VydmVyICYmIGlzU3VibWl0dGVkKSB7XG4gICAgICBnZXRXb3JrU3BhY2VEZXRhaWxzKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZXJ2ZXIoeyAuLi5zZXJ2ZXIsIGZvcm06IHsgLi4uc2VydmVyPy5mb3JtLCBzZXJ2ZXI6IHJlZHV4U3RhdGU/LndvcmtzcGFjZT8uc2VydmVyPy5pZCA/IHJlZHV4U3RhdGU/LndvcmtzcGFjZT8uc2VydmVyIDogey4uLnNlcnZlcj8uZm9ybT8uc2VydmVyLCBzZXJ2ZXJfbmFtZTogcmVkdXhTdGF0ZT8udXNlcj8ucHJvZmlsZT8uZmlyc3RfbmFtZStcIkNsb3VkXCIgfSB9IH0pO1xuICAgIH1cbiAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8uc2VydmVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0V29ya1NwYWNlRGV0YWlscyhOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpKTtcbiAgfSxbXSlcblxuICBjb25zdCBwcm9maWxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgX3NlcnZlciA9IHsgLi4uc2VydmVyIH07XG4gICAgX3NlcnZlci5lcnJvciA9IHtcbiAgICAgIC4uLl9zZXJ2ZXIuZXJyb3IsXG4gICAgICBmaXJzdF9uYW1lOiBfc2VydmVyPy5mb3JtPy5maXJzdF9uYW1lID09PSBcIlwiLFxuICAgIH07XG5cbiAgICBzZXRTZXJ2ZXIoX3NlcnZlcik7XG5cbiAgICByZXR1cm4gIU9iamVjdC52YWx1ZXMoX3NlcnZlcj8uZXJyb3IpLnNvbWUoKGZpZWxkKSA9PiBmaWVsZCk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vaWYgKHByb2ZpbGVWYWxpZGF0aW9uKCkpIHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgIHNlcnZlclJlcXVlc3Qoc2VydmVyPy5mb3JtKTtcbiAgICAvL31cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0U2VydmVyKHsgLi4uc2VydmVyLCBmb3JtOiB7IC4uLnNlcnZlcj8uZm9ybSwgc2VydmVyOiB7Li4uc2VydmVyPy5mb3JtPy5zZXJ2ZXIsIFtuYW1lXTogdmFsdWUgfSB9IH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwicmVkdXhTdGF0ZT09PT09XCIsIHJlZHV4U3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICA8TG9hZGVyIG9wZW49e2xvYWRlcn0gLz5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtpc1N1Ym1pdHRlZH1cbiAgICAgICAgdHlwZT17cmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5lcnJvciA/IFwiZXJyb3JcIiA6IFwic3VjY2Vzc1wifVxuICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgLz4gXG4gICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRCb3h9PlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5WaXJ0dWFsIFNlcnZlciBRdW90YXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgIFxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwibGVmdFwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPk5ldHdvcmsgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TmV0d29yayBOYW1lOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlR5cGU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57TkVUV09SSy50eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+TmV0d29yayBJRDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICB7LyogPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpYyBJUFwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXI/LmVycm9yPy5maXJzdF9uYW1lICYmIFwiUGxlYXNlIGVudGVyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+ICAqL31cbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5TaXplIENvbmZpZ3VyYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94TW9kYWx9IGJvcmRlckNvbG9yPVwiI2U3ZTlmMFwiIGJvcmRlcj17LjV9PlxuICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSA+UkFNPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57RkxBVk9SPy5zaXplPy5yYW19PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5DUFVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57RkxBVk9SLnNpemU/LmNwdX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPkZMQVZPUiBJRDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0ZMQVZPUj8uaWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cbiAgICAgICAgIFxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5JbWFnZSBUZW1wbGF0ZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRlbXBsYXRlIE5hbWU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5FbmdpbmVlcm8td29ya3NwYWNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHVzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5BY3RpdmU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk9zIFR5cGU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0lNQUdFPy5vc190eXBlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkltYWdlIElEOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e0lNQUdFPy5pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5ICBndXR0ZXJCb3R0b209ezJ9IGFsaWduPVwibGVmdFwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPkNvbXB1dGUgQ29uZmlndXJhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcnZlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXJ2ZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uc2VydmVyX25hbWUgfHwgXCJzZXJ2ZXIgbmFtZVwifVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3B1XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ2Q1BVc1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInZDUFVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5jcHUgfHwgMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhbVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUkFNXCJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cImluIEdCXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZlcj8uZm9ybT8uc2VydmVyPy5yYW0gfHwgNH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e21pbkxlbmd0aCA6IDB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdG9yYWdlIENhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJWb2x1bWUgc2l6ZSBpbiBHQlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmVyPy5mb3JtPy5zZXJ2ZXI/LmNhcGFjaXR5IHx8IDY0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICB7XG4gICAgICAgICBzZXJ2ZXI/LmZvcm0/LnNlcnZlcj8uaWQgID8gXG4gICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSAgZ3V0dGVyQm90dG9tPXsyfSBhbGlnbj1cImxlZnRcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5TZXJ2ZXIgRGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hNb2RhbH0gYm9yZGVyQ29sb3I9XCIjZTdlOWYwXCIgYm9yZGVyPXsuNX0+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHVzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlByb2dyZXNzOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e05FVFdPUksudHlwZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+IDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgPlZNIFN0YXR1czo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntORVRXT1JLLmlkfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgOiAgXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBhbGlnbj1cInJpZ2h0XCIgYWxpZ25Db250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlbmQgUmVxdWVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgXG4gICAgICAgIH1cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxuICB7IHNlcnZlclJlcXVlc3QsZ2V0V29ya1NwYWNlRGV0YWlscyB9XG4pKFNlcnZlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9
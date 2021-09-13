webpackHotUpdate_N_E("pages/dashboard/profile",{

/***/ "./components/Modules/Profile/index.js":
/*!*********************************************!*\
  !*** ./components/Modules/Profile/index.js ***!
  \*********************************************/
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./components/Modules/Profile/styles.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Select */ "./components/Select/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Modal */ "./components/Modal/index.js");
/* harmony import */ var components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Loader */ "./components/Loader/index.js");
/* harmony import */ var components_Snackbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Snackbar */ "./components/Snackbar/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./redux/action */ "./components/Modules/Profile/redux/action.js");
/* harmony import */ var _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Workspace/redux/action */ "./components/Modules/Workspace/redux/action.js");




var _jsxFileName = "C:\\Home\\comboware\\comboware-frontend\\components\\Modules\\Profile\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















function Profile({
  updateProfile,
  createDomain,
  getProfile
}) {
  _s();

  var _reduxState$workspace4, _reduxState$workspace7, _reduxState$user3, _reduxState$user6, _reduxState$user8, _reduxState$user11, _reduxState$workspace8, _profile$form4, _profile$error, _profile$error2, _profile$form5, _profile$form6, _profile$form7, _profile$form8, _profile$form8$user_n, _profile$form9, _profile$form10, _profile$form10$passw, _reduxState$user14, _reduxState$user14$pr;

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"]);
  const classes = useStyles();
  const reduxState = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state);
  const defaultSkill = {
    skill_name: "",
    skill_level: ""
  };
  const {
    0: skills,
    1: setSkills
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([defaultSkill]);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      user_name: "",
      password: ""
    },
    error: {
      first_name: false,
      user_name: false,
      password: false
    }
  });
  const {
    0: domainModal,
    1: setDomainModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: domain,
    1: setDomain
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    description: ""
  });
  const {
    0: isSubmitted,
    1: setSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: project,
    1: setProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "Service",
    description: ""
  });
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace, _reduxState$workspace2;

    setLoader(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace = reduxState.workspace) === null || _reduxState$workspace === void 0 ? void 0 : _reduxState$workspace.loading);
    setDomain(_objectSpread({}, reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace2 = reduxState.workspace) === null || _reduxState$workspace2 === void 0 ? void 0 : _reduxState$workspace2.domain));
    setDomainModal(false);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : reduxState.workspace]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace3;

    setProject(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace3 = reduxState.workspace) === null || _reduxState$workspace3 === void 0 ? void 0 : _reduxState$workspace3.project);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace4 = reduxState.workspace) === null || _reduxState$workspace4 === void 0 ? void 0 : _reduxState$workspace4.project]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$workspace5, _reduxState$workspace6;

    setMessage((reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace5 = reduxState.workspace) === null || _reduxState$workspace5 === void 0 ? void 0 : _reduxState$workspace5.message) || (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace6 = reduxState.workspace) === null || _reduxState$workspace6 === void 0 ? void 0 : _reduxState$workspace6.error));
    manageMessage();
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$workspace7 = reduxState.workspace) === null || _reduxState$workspace7 === void 0 ? void 0 : _reduxState$workspace7.message]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$user, _reduxState$user$prof;

    getProfile((reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user = reduxState.user) === null || _reduxState$user === void 0 ? void 0 : (_reduxState$user$prof = _reduxState$user.profile) === null || _reduxState$user$prof === void 0 ? void 0 : _reduxState$user$prof.id) || localStorage.getItem("userId"));
    return () => {};
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$user2;

    setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      form: _objectSpread(_objectSpread({}, profile === null || profile === void 0 ? void 0 : profile.form), reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user2 = reduxState.user) === null || _reduxState$user2 === void 0 ? void 0 : _reduxState$user2.profile)
    }));
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user3 = reduxState.user) === null || _reduxState$user3 === void 0 ? void 0 : _reduxState$user3.profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$user4, _reduxState$user5;

    manageMessage();
    setMessage((reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user4 = reduxState.user) === null || _reduxState$user4 === void 0 ? void 0 : _reduxState$user4.message) || (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user5 = reduxState.user) === null || _reduxState$user5 === void 0 ? void 0 : _reduxState$user5.error));
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user6 = reduxState.user) === null || _reduxState$user6 === void 0 ? void 0 : _reduxState$user6.message]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$user7;

    setLoader(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user7 = reduxState.user) === null || _reduxState$user7 === void 0 ? void 0 : _reduxState$user7.loading);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user8 = reduxState.user) === null || _reduxState$user8 === void 0 ? void 0 : _reduxState$user8.loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _reduxState$user9, _reduxState$user10;

    setSkills(reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user9 = reduxState.user) === null || _reduxState$user9 === void 0 ? void 0 : _reduxState$user9.skills);
    console.log("skills====", reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user10 = reduxState.user) === null || _reduxState$user10 === void 0 ? void 0 : _reduxState$user10.skills);
    return () => {};
  }, [reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user11 = reduxState.user) === null || _reduxState$user11 === void 0 ? void 0 : _reduxState$user11.skills]);
  console.log("reduxState=====", reduxState);

  const addSkill = () => {
    let _skills = [...skills];

    _skills.push(defaultSkill);

    setSkills(_skills);
  };

  const profileValidation = () => {
    var _profile$form, _profile$form2, _profile$form3;

    let _profile = _objectSpread({}, profile);

    _profile.error = _objectSpread(_objectSpread({}, _profile.error), {}, {
      first_name: (_profile === null || _profile === void 0 ? void 0 : (_profile$form = _profile.form) === null || _profile$form === void 0 ? void 0 : _profile$form.first_name) === ""
    });
    _profile.error = _objectSpread(_objectSpread({}, _profile.error), {}, {
      user_name: (_profile === null || _profile === void 0 ? void 0 : (_profile$form2 = _profile.form) === null || _profile$form2 === void 0 ? void 0 : _profile$form2.user_name) === ""
    });
    _profile.error = _objectSpread(_objectSpread({}, _profile.error), {}, {
      password: (_profile === null || _profile === void 0 ? void 0 : (_profile$form3 = _profile.form) === null || _profile$form3 === void 0 ? void 0 : _profile$form3.password) === ""
    });
    setProfile(_profile);
    return !Object.values(_profile === null || _profile === void 0 ? void 0 : _profile.error).some(field => field);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (profileValidation()) {
      var _reduxState$user12, _reduxState$user12$pr;

      setSubmitted(true);
      updateProfile(_objectSpread(_objectSpread({}, profile === null || profile === void 0 ? void 0 : profile.form), {}, {
        domain_id: domain === null || domain === void 0 ? void 0 : domain.id,
        skills,
        project_id: project === null || project === void 0 ? void 0 : project.id,
        userId: (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user12 = reduxState.user) === null || _reduxState$user12 === void 0 ? void 0 : (_reduxState$user12$pr = _reduxState$user12.profile) === null || _reduxState$user12$pr === void 0 ? void 0 : _reduxState$user12$pr.id) || 1
      }));
    }
  };

  const submitDomainHandler = e => {
    var _reduxState$user13, _reduxState$user13$pr;

    e.preventDefault();
    setSubmitted(true);
    createDomain({
      domain,
      project,
      userId: (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user13 = reduxState.user) === null || _reduxState$user13 === void 0 ? void 0 : (_reduxState$user13$pr = _reduxState$user13.profile) === null || _reduxState$user13$pr === void 0 ? void 0 : _reduxState$user13$pr.id) || 1
    });
  };

  const domainChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    setDomain(_objectSpread(_objectSpread({}, domain), {}, {
      [name]: value
    }));
  };

  const projectChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    setProject(_objectSpread(_objectSpread({}, project), {}, {
      [name]: value
    }));
  };

  const profileChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      form: _objectSpread(_objectSpread({}, profile === null || profile === void 0 ? void 0 : profile.form), {}, {
        [name]: value
      })
    }));
  };

  const skillHandler = (e, itemIndex) => {
    var _skills2;

    let name = e.target.name;
    let value = e.target.value;
    console.log("name----", name, value);
    console.log("eeeee", e);
    let _skills = [...skills];
    _skills = (_skills2 = _skills) === null || _skills2 === void 0 ? void 0 : _skills2.map((skill, index) => {
      if (itemIndex === index) {
        skill[name] = value;
      }

      return skill;
    });
    setSkills(_skills);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
      open: loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      open: isSubmitted,
      type: reduxState !== null && reduxState !== void 0 && (_reduxState$workspace8 = reduxState.workspace) !== null && _reduxState$workspace8 !== void 0 && _reduxState$workspace8.error ? "error" : "success",
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: "Create Domain and Project",
      isOpen: domainModal,
      onSubmit: submitDomainHandler,
      onChange: flag => setDomainModal(flag),
      submitText: "Save Domain and Project",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        spacing: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChange: domainChangeHandler,
            name: "name",
            fullWidth: true,
            label: "Domain Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChange: domainChangeHandler,
            name: "description",
            fullWidth: true,
            label: "Domain Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChange: projectChangeHandler,
            name: "name",
            fullWidth: true,
            label: "Project Name",
            value: "Service",
            isDisabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChange: projectChangeHandler,
            name: "description",
            fullWidth: true,
            label: "Project Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        xs: 12,
        sm: 12,
        md: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              variant: "h5",
              children: "Project and domain details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
              spacing: 2,
              children: [(domain === null || domain === void 0 ? void 0 : domain.id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  className: classes.gridRow,
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                    display: "flex",
                    justifyContent: "space-around",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      align: "center",
                      variant: "subtitle2",
                      children: "Domain Name:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      align: "left",
                      color: "primary",
                      variant: "subtitle2",
                      children: domain === null || domain === void 0 ? void 0 : domain.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  className: classes.gridRow,
                  xs: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                    display: "flex",
                    justifyContent: "space-around",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      variant: "subtitle2",
                      children: "Domain Description:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      color: "primary",
                      variant: "subtitle2",
                      children: domain === null || domain === void 0 ? void 0 : domain.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 21
                }, this)]
              }, void 0, true), (project === null || project === void 0 ? void 0 : project.id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  className: classes.gridRow,
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                    display: "flex",
                    justifyContent: "space-around",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      align: "center",
                      variant: "subtitle2",
                      children: "Project Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      align: "left",
                      color: "primary",
                      variant: "subtitle2",
                      children: project === null || project === void 0 ? void 0 : project.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  className: classes.gridRow,
                  xs: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                    display: "flex",
                    justifyContent: "space-around",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      variant: "subtitle2",
                      children: "Project Description:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      color: "primary",
                      variant: "subtitle2",
                      children: project === null || project === void 0 ? void 0 : project.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 21
                }, this)]
              }, void 0, true), !(domain !== null && domain !== void 0 && domain.id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                    variant: "h6",
                    component: "h5",
                    children: "First create a new domain and project."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  xs: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    variant: "outlined",
                    color: "primary",
                    onClick: () => setDomainModal(true),
                    children: "Create"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 21
                }, this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              variant: "h5",
              children: "Personal Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
              spacing: 3,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  onChange: profileChangeHandler,
                  name: "first_name",
                  fullWidth: true,
                  label: "First Name",
                  value: profile === null || profile === void 0 ? void 0 : (_profile$form4 = profile.form) === null || _profile$form4 === void 0 ? void 0 : _profile$form4.first_name,
                  error: profile === null || profile === void 0 ? void 0 : (_profile$error = profile.error) === null || _profile$error === void 0 ? void 0 : _profile$error.first_name,
                  helperText: (profile === null || profile === void 0 ? void 0 : (_profile$error2 = profile.error) === null || _profile$error2 === void 0 ? void 0 : _profile$error2.first_name) && "Please enter first name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  fullWidth: true,
                  onChange: profileChangeHandler,
                  name: "last_name",
                  label: "Last Name",
                  value: profile === null || profile === void 0 ? void 0 : (_profile$form5 = profile.form) === null || _profile$form5 === void 0 ? void 0 : _profile$form5.last_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  fullWidth: true,
                  onChange: profileChangeHandler,
                  name: "email",
                  type: "email",
                  label: "Email",
                  isDisabled: true,
                  value: profile === null || profile === void 0 ? void 0 : (_profile$form6 = profile.form) === null || _profile$form6 === void 0 ? void 0 : _profile$form6.email,
                  isDisabled: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  fullWidth: true,
                  onChange: profileChangeHandler,
                  name: "phone",
                  type: "number",
                  label: "Phone",
                  value: profile === null || profile === void 0 ? void 0 : (_profile$form7 = profile.form) === null || _profile$form7 === void 0 ? void 0 : _profile$form7.phone
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  fullWidth: true,
                  onChange: profileChangeHandler,
                  helperText: (profile === null || profile === void 0 ? void 0 : (_profile$form8 = profile.form) === null || _profile$form8 === void 0 ? void 0 : (_profile$form8$user_n = _profile$form8.user_name) === null || _profile$form8$user_n === void 0 ? void 0 : _profile$form8$user_n.error) && "Please enter user name",
                  name: "user_name",
                  type: "text",
                  label: "UserName",
                  value: profile === null || profile === void 0 ? void 0 : (_profile$form9 = profile.form) === null || _profile$form9 === void 0 ? void 0 : _profile$form9.user_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  fullWidth: true,
                  type: "password",
                  autoComplete: "off",
                  label: "Password",
                  error: true,
                  helperText: (profile === null || profile === void 0 ? void 0 : (_profile$form10 = profile.form) === null || _profile$form10 === void 0 ? void 0 : (_profile$form10$passw = _profile$form10.password) === null || _profile$form10$passw === void 0 ? void 0 : _profile$form10$passw.error) && "Please enter password",
                  onChange: profileChangeHandler,
                  name: "password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, this), (reduxState === null || reduxState === void 0 ? void 0 : (_reduxState$user14 = reduxState.user) === null || _reduxState$user14 === void 0 ? void 0 : (_reduxState$user14$pr = _reduxState$user14.profile) === null || _reduxState$user14$pr === void 0 ? void 0 : _reduxState$user14$pr.user_type) === "ER" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              variant: "h5",
              children: "Work Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
              spacing: 3,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                xs: 10,
                sm: 10,
                md: 10,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  spacing: 2,
                  style: {
                    marginRight: 10
                  },
                  children: skills === null || skills === void 0 ? void 0 : skills.map((skill, index) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomInput_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
                          variant: "outlined",
                          required: true,
                          fullWidth: true,
                          name: "skill_name",
                          label: "Skills",
                          type: "text",
                          id: "skills",
                          value: skill === null || skill === void 0 ? void 0 : skill.skill_name,
                          onChange: e => skillHandler(e, index)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 402,
                          columnNumber: 31
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 401,
                        columnNumber: 29
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Select__WEBPACK_IMPORTED_MODULE_14__["default"], {
                          style: {
                            width: "210px"
                          },
                          label: "Skills Level",
                          name: "skill_level",
                          value: skill === null || skill === void 0 ? void 0 : skill.skill_level,
                          onChange: e => skillHandler(e, index),
                          options: [{
                            label: "Beginner",
                            value: "Beginner"
                          }]
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 415,
                          columnNumber: 31
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 414,
                        columnNumber: 29
                      }, this)]
                    }, "skillkey" + index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 400,
                      columnNumber: 27
                    }, this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 396,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: true,
                xs: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
                  onClick: addSkill,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["AddCircleOutline"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 431,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 430,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 11
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
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }, this);
}

_s(Profile, "yNCrG6R/KFpfWcm5ReWJ37esErc=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => {
  return _objectSpread({}, state);
}, {
  createDomain: _Workspace_redux_action__WEBPACK_IMPORTED_MODULE_20__["createDomain"],
  updateProfile: _redux_action__WEBPACK_IMPORTED_MODULE_19__["updateProfile"],
  getProfile: _redux_action__WEBPACK_IMPORTED_MODULE_19__["getProfile"]
})(Profile));

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL1Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVwZGF0ZVByb2ZpbGUiLCJjcmVhdGVEb21haW4iLCJnZXRQcm9maWxlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJyZWR1eFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRlZmF1bHRTa2lsbCIsInNraWxsX25hbWUiLCJza2lsbF9sZXZlbCIsInNraWxscyIsInNldFNraWxscyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsInVzZXJfbmFtZSIsInBhc3N3b3JkIiwiZXJyb3IiLCJkb21haW5Nb2RhbCIsInNldERvbWFpbk1vZGFsIiwiZG9tYWluIiwic2V0RG9tYWluIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXNTdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsImxvYWRlciIsInNldExvYWRlciIsIm1hbmFnZU1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwid29ya3NwYWNlIiwibG9hZGluZyIsInVzZXIiLCJpZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiYWRkU2tpbGwiLCJfc2tpbGxzIiwicHVzaCIsInByb2ZpbGVWYWxpZGF0aW9uIiwiX3Byb2ZpbGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwiZmllbGQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9tYWluX2lkIiwicHJvamVjdF9pZCIsInVzZXJJZCIsInN1Ym1pdERvbWFpbkhhbmRsZXIiLCJkb21haW5DaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9qZWN0Q2hhbmdlSGFuZGxlciIsInByb2ZpbGVDaGFuZ2VIYW5kbGVyIiwic2tpbGxIYW5kbGVyIiwiaXRlbUluZGV4IiwibWFwIiwic2tpbGwiLCJpbmRleCIsImZsYWciLCJncmlkUm93IiwidXNlcl90eXBlIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImxhYmVsIiwic3VibWl0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQyxlQUFGO0FBQWlCQyxjQUFqQjtBQUErQkM7QUFBL0IsQ0FBakIsRUFBOEQ7QUFBQTs7QUFBQTs7QUFDNUQsUUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxnREFBRCxDQUE1QjtBQUNBLFFBQU1DLE9BQU8sR0FBR0gsU0FBUyxFQUF6QjtBQUNBLFFBQU1JLFVBQVUsR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFaLENBQTlCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHO0FBQUVDLGNBQVUsRUFBRSxFQUFkO0FBQWtCQyxlQUFXLEVBQUU7QUFBL0IsR0FBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsQ0FBQ0wsWUFBRCxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUM7QUFDckNLLFFBQUksRUFBRTtBQUNKQyxnQkFBVSxFQUFFLEVBRFI7QUFFSkMsZUFBUyxFQUFFLEVBRlA7QUFH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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUpKLGVBaU5FLHFFQUFDLG1FQUFEO0FBQVUsVUFBRSxFQUFFLEVBQWQ7QUFBa0IsVUFBRSxFQUFFLEVBQXRCO0FBQTBCLFVBQUUsRUFBRSxFQUE5QjtBQUFrQyxhQUFLLEVBQUMsT0FBeEM7QUFBZ0Qsb0JBQVksRUFBQyxVQUE3RDtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxpQkFBTyxFQUFDLFdBRlY7QUFHRSxlQUFLLEVBQUMsU0FIUjtBQUlFLG1CQUFTLEVBQUU3QyxPQUFPLENBQUM2RSxNQUpyQjtBQUtFLGlCQUFPLEVBQUV2QixhQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtUkQ7O0dBbGJRN0QsTztVQUVTSSxTLEVBQ0dLLHVEOzs7S0FIWlQsTztBQW9iTXFGLDBIQUFPLENBQ25CM0UsS0FBRCxJQUFXO0FBQ1QsMkJBQVlBLEtBQVo7QUFDRCxDQUhtQixFQUlwQjtBQUFFUixxRkFBRjtBQUFnQkQsNkVBQWhCO0FBQWdDRSx1RUFBVUE7QUFBMUMsQ0FKb0IsQ0FBUCxDQUtiSCxPQUxhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUuN2VlZjlkYTJjNTgyYjcyMTI1YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBBZGRDaXJjbGVPdXRsaW5lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEljb25CdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanNcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi8uLi9DdXN0b21JbnB1dC9UZXh0RmllbGRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9TZWxlY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJjb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJjb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJjb21wb25lbnRzL1NuYWNrYmFyXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9maWxlICxnZXRQcm9maWxlIH0gZnJvbSBcIi4vcmVkdXgvYWN0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21haW4gfSBmcm9tIFwiLi4vV29ya3NwYWNlL3JlZHV4L2FjdGlvblwiO1xuXG5mdW5jdGlvbiBQcm9maWxlKHsgdXBkYXRlUHJvZmlsZSwgY3JlYXRlRG9tYWluLCBnZXRQcm9maWxlIH0pIHtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJlZHV4U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc3QgZGVmYXVsdFNraWxsID0geyBza2lsbF9uYW1lOiBcIlwiLCBza2lsbF9sZXZlbDogXCJcIiB9O1xuICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGUoW2RlZmF1bHRTa2lsbF0pO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuICAgIGZvcm06IHtcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBob25lOiBcIlwiLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgZmlyc3RfbmFtZTogZmFsc2UsXG4gICAgICB1c2VyX25hbWU6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IFtkb21haW5Nb2RhbCwgc2V0RG9tYWluTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG9tYWluLCBzZXREb21haW5dID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiB9KTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiU2VydmljZVwiLCBkZXNjcmlwdGlvbjogXCJcIiB9KTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtYW5hZ2VNZXNzYWdlID0gKCkgPT57XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcbiAgICB9LDQwMDApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlcihyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmxvYWRpbmcpO1xuICAgIHNldERvbWFpbih7IC4uLnJlZHV4U3RhdGU/LndvcmtzcGFjZT8uZG9tYWluIH0pO1xuICAgIHNldERvbWFpbk1vZGFsKGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy53b3Jrc3BhY2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2plY3QocmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5wcm9qZWN0KVxuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ucHJvamVjdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWVzc2FnZShyZWR1eFN0YXRlPy53b3Jrc3BhY2U/Lm1lc3NhZ2UgfHwgcmVkdXhTdGF0ZT8ud29ya3NwYWNlPy5lcnJvcik7XG4gICAgbWFuYWdlTWVzc2FnZSgpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LndvcmtzcGFjZT8ubWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvZmlsZShyZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlPy5pZCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgZm9ybSA6IHsuLi5wcm9maWxlPy5mb3JtLCAuLi5yZWR1eFN0YXRlPy51c2VyPy5wcm9maWxlfX0pXG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbcmVkdXhTdGF0ZT8udXNlcj8ucHJvZmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFuYWdlTWVzc2FnZSgpO1xuICAgIHNldE1lc3NhZ2UocmVkdXhTdGF0ZT8udXNlcj8ubWVzc2FnZSB8fCByZWR1eFN0YXRlPy51c2VyPy5lcnJvcik7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbcmVkdXhTdGF0ZT8udXNlcj8ubWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGVyKHJlZHV4U3RhdGU/LnVzZXI/LmxvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3JlZHV4U3RhdGU/LnVzZXI/LmxvYWRpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNraWxscyhyZWR1eFN0YXRlPy51c2VyPy5za2lsbHMpO1xuICAgIGNvbnNvbGUubG9nKFwic2tpbGxzPT09PVwiLHJlZHV4U3RhdGU/LnVzZXI/LnNraWxscylcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyZWR1eFN0YXRlPy51c2VyPy5za2lsbHNdKTtcblxuICBjb25zb2xlLmxvZyhcInJlZHV4U3RhdGU9PT09PVwiLCByZWR1eFN0YXRlKTtcbiAgXG4gIGNvbnN0IGFkZFNraWxsID0gKCkgPT4ge1xuICAgIGxldCBfc2tpbGxzID0gWy4uLnNraWxsc107XG4gICAgX3NraWxscy5wdXNoKGRlZmF1bHRTa2lsbCk7XG4gICAgc2V0U2tpbGxzKF9za2lsbHMpO1xuICB9O1xuXG4gIGNvbnN0IHByb2ZpbGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBfcHJvZmlsZSA9IHsgLi4ucHJvZmlsZSB9O1xuICAgIF9wcm9maWxlLmVycm9yID0ge1xuICAgICAgLi4uX3Byb2ZpbGUuZXJyb3IsXG4gICAgICBmaXJzdF9uYW1lOiBfcHJvZmlsZT8uZm9ybT8uZmlyc3RfbmFtZSA9PT0gXCJcIixcbiAgICB9O1xuICAgIF9wcm9maWxlLmVycm9yID0ge1xuICAgICAgLi4uX3Byb2ZpbGUuZXJyb3IsXG4gICAgICB1c2VyX25hbWU6IF9wcm9maWxlPy5mb3JtPy51c2VyX25hbWUgPT09IFwiXCIsXG4gICAgfTtcbiAgICBfcHJvZmlsZS5lcnJvciA9IHtcbiAgICAgIC4uLl9wcm9maWxlLmVycm9yLFxuICAgICAgcGFzc3dvcmQ6IF9wcm9maWxlPy5mb3JtPy5wYXNzd29yZCA9PT0gXCJcIixcbiAgICB9O1xuICAgIHNldFByb2ZpbGUoX3Byb2ZpbGUpO1xuXG4gICAgcmV0dXJuICFPYmplY3QudmFsdWVzKF9wcm9maWxlPy5lcnJvcikuc29tZSgoZmllbGQpID0+IGZpZWxkKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb2ZpbGVWYWxpZGF0aW9uKCkpIHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICAgIHVwZGF0ZVByb2ZpbGUoeyAuLi5wcm9maWxlPy5mb3JtLCBkb21haW5faWQ6IGRvbWFpbj8uaWQsIHNraWxscyAscHJvamVjdF9pZCA6IHByb2plY3Q/LmlkICx1c2VySWQ6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmlkIHx8IDEgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdERvbWFpbkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgY3JlYXRlRG9tYWluKHsgZG9tYWluLCBwcm9qZWN0LCB1c2VySWQ6IHJlZHV4U3RhdGU/LnVzZXI/LnByb2ZpbGU/LmlkIHx8IDEgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9tYWluQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldERvbWFpbih7IC4uLmRvbWFpbiwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFByb2plY3QoeyAuLi5wcm9qZWN0LCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByb2ZpbGVDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0UHJvZmlsZSh7IC4uLnByb2ZpbGUsIGZvcm06IHsgLi4ucHJvZmlsZT8uZm9ybSwgW25hbWVdOiB2YWx1ZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IHNraWxsSGFuZGxlciA9IChlICxpdGVtSW5kZXgpID0+IHtcblxuICAgIFxuICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGNvbnNvbGUubG9nKFwibmFtZS0tLS1cIixuYW1lICx2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coXCJlZWVlZVwiICxlKVxuICAgIGxldCBfc2tpbGxzID0gWy4uLnNraWxsc107XG4gICAgX3NraWxscyA9IF9za2lsbHM/Lm1hcCAoKHNraWxsICwgaW5kZXgpID0+IHtcbiAgICAgIGlmKGl0ZW1JbmRleCA9PT0gaW5kZXgpe1xuICAgICAgICBza2lsbFtuYW1lXSAgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBza2lsbDtcbiAgICB9KVxuICAgIHNldFNraWxscyhfc2tpbGxzKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMb2FkZXIgb3Blbj17bG9hZGVyfSAvPlxuICAgICAgPFNuYWNrYmFyXG4gICAgICAgIG9wZW49e2lzU3VibWl0dGVkfVxuICAgICAgICB0eXBlPXtyZWR1eFN0YXRlPy53b3Jrc3BhY2U/LmVycm9yID8gXCJlcnJvclwiIDogXCJzdWNjZXNzXCJ9XG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPVwiQ3JlYXRlIERvbWFpbiBhbmQgUHJvamVjdFwiXG4gICAgICAgIGlzT3Blbj17ZG9tYWluTW9kYWx9XG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXREb21haW5IYW5kbGVyfVxuICAgICAgICBvbkNoYW5nZT17KGZsYWcpID0+IHNldERvbWFpbk1vZGFsKGZsYWcpfVxuICAgICAgICBzdWJtaXRUZXh0PVwiU2F2ZSBEb21haW4gYW5kIFByb2plY3RcIlxuICAgICAgPlxuICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9tYWluQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbGFiZWw9XCJEb21haW4gTmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvbWFpbkNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD1cIkRvbWFpbiBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb2plY3RDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiU2VydmljZVwiXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvamVjdENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L01vZGFsPlxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5Qcm9qZWN0IGFuZCBkb21haW4gZGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAge2RvbWFpbj8uaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkUm93fSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Eb21haW4gTmFtZTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImxlZnRcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwic3VidGl0bGUyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG9tYWluPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRSb3d9IHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Eb21haW4gRGVzY3JpcHRpb246PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RvbWFpbj8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRSb3d9IHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cInN1YnRpdGxlMlwiPlByb2plY3QgTmFtZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwibGVmdFwiIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj57cHJvamVjdD8ubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZFJvd30geHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IERlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiPntwcm9qZWN0Py5kZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshZG9tYWluPy5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IGNyZWF0ZSBhIG5ldyBkb21haW4gYW5kIHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RG9tYWluTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5QZXJzb25hbCBEZXRhaWxzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvZmlsZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlPy5mb3JtPy5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvZmlsZT8uZXJyb3I/LmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU/LmVycm9yPy5maXJzdF9uYW1lICYmIFwiUGxlYXNlIGVudGVyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGU/LmZvcm0/Lmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb2ZpbGVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZmlsZT8uZm9ybT8uZW1haWwgfVxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZmlsZT8uZm9ybT8ucGhvbmUgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvZmlsZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlPy5mb3JtPy51c2VyX25hbWU/LmVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgXCJQbGVhc2UgZW50ZXIgdXNlciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGU/LmZvcm0/LnVzZXJfbmFtZSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlPy5mb3JtPy5wYXNzd29yZD8uZXJyb3IgJiYgXCJQbGVhc2UgZW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9maWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICB7cmVkdXhTdGF0ZT8udXNlcj8ucHJvZmlsZT8udXNlcl90eXBlID09PSBcIkVSXCIgJiYgKFxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9ID5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5Xb3JrIERldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMH0gc209ezEwfSBtZD17MTB9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3NraWxscz8ubWFwKChza2lsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e1wic2tpbGxrZXlcIiArIGluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2tpbGxfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2tpbGxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNraWxsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtza2lsbD8uc2tpbGxfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBza2lsbEhhbmRsZXIoZSAsaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJTa2lsbHMgTGV2ZWxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNraWxsX2xldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NraWxsPy5za2lsbF9sZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBza2lsbEhhbmRsZXIoZSAsaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbe2xhYmVsIDogXCJCZWdpbm5lclwiICwgdmFsdWUgOiBcIkJlZ2lubmVyXCJ9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gaXRlbSB4cz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZFNraWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QWRkQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgey8qIDxHcmlkSXRlbSB4cz17MTB9IHNtPXsxMH0gbWQ9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggbGFiZWw9XCJXb3JrIEV4cGVyaWVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT4gKi99XG4gICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBhbGlnbj1cInJpZ2h0XCIgYWxpZ25Db250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxuICB7IGNyZWF0ZURvbWFpbiwgdXBkYXRlUHJvZmlsZSAsIGdldFByb2ZpbGUgfVxuKShQcm9maWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
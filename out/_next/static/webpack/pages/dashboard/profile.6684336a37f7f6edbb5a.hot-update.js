webpackHotUpdate_N_E("pages/dashboard/profile",{

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var components_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Navbars/AdminNavbarLinks.js */ "./components/Navbars/AdminNavbarLinks.js");
/* harmony import */ var components_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Navbars/RTLNavbarLinks.js */ "./components/Navbars/RTLNavbarLinks.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/sidebarStyle.js */ "./assets/jss/nextjs-material-dashboard/components/sidebarStyle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Home\\comboware\\comboware-frontend\\components\\Sidebar\\Sidebar.js",
    _s = $RefreshSig$();

/*eslint-disable*/




 // @material-ui/core components











 // core components





function Sidebar(props) {
  _s();

  var _routes$filter;

  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // creates styles for this component

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
  const classes = useStyles(); // verifies if routeName is the one active (in browser input)

  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["useSelector"])(state => {
    var _state$user;

    return state === null || state === void 0 ? void 0 : (_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.profile;
  });
  const {
    user_type
  } = userInfo;

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  const {
    color,
    logo,
    image,
    logoText,
    routes
  } = props;

  var links = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.list,
    children: routes === null || routes === void 0 ? void 0 : (_routes$filter = routes.filter(route => {
      var _route$accessors;

      return (route === null || route === void 0 ? void 0 : (_route$accessors = route.accessors) === null || _route$accessors === void 0 ? void 0 : _route$accessors.indexOf(user_type)) > -1;
    })) === null || _routes$filter === void 0 ? void 0 : _routes$filter.map((prop, key) => {
      var activePro = " ";
      var listItemClasses;
      listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        [" " + classes[color]]: activeRoute(prop.layout + prop.path)
      });
      const whiteFontClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path) || prop.path === "/upgrade-to-pro"
      });
      let subItems = prop === null || prop === void 0 ? void 0 : prop.subItems;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: !subItems ? prop.layout + prop.path : "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: activePro + classes.item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            button: true,
            className: classes.itemLink + listItemClasses,
            onClick: e => subItems ? handleClick(e) : '',
            children: [typeof prop.icon === "string" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, {
                [classes.itemIconRTL]: props.rtlActive
              }),
              children: prop.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(prop.icon, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, {
                [classes.itemIconRTL]: props.rtlActive
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemText, whiteFontClasses, {
                [classes.itemTextRTL]: props.rtlActive
              }),
              disableTypography: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classes.collapseIcon,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: props.rtlActive ? prop.rtlName : prop.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 55
                }, this), "\xA0\xA0", (subItems === null || subItems === void 0 ? void 0 : subItems.length) && (router.route.indexOf(prop.layout + prop.path) > -1 || open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 100
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 118
                }, this))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this), (subItems === null || subItems === void 0 ? void 0 : subItems.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15__["default"], {
                in: open,
                timeout: "auto",
                unmountOnExit: true,
                children: subItems === null || subItems === void 0 ? void 0 : subItems.map((item, index) => {
                  let Icon = item === null || item === void 0 ? void 0 : item.icon;
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    href: item === null || item === void 0 ? void 0 : item.path,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: activePro + classes.item,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        component: "div",
                        disablePadding: true,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          button: true,
                          className: classes.nested + listItemClasses,
                          children: [(item === null || item === void 0 ? void 0 : item.icon) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            style: {
                              color: 'white'
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 107,
                              columnNumber: 72
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 31
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            primary: item === null || item === void 0 ? void 0 : item.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 27
                        }, this)
                      }, "listitem" + index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 25
                    }, this)
                  }, key, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this)
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);

  var brand = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.logo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://www.creative-tim.com?ref=njsmd-sidebar",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.logoLink, {
        [classes.logoLinkRTL]: props.rtlActive
      }),
      target: "_blank",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.logoImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: logo,
          alt: "logo",
          className: classes.img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), logoText]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__["default"], {
      mdUp: true,
      implementation: "css",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "temporary",
        anchor: props.rtlActive ? "left" : "right",
        open: props.open,
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, {
            [classes.drawerPaperRTL]: props.rtlActive
          })
        },
        onClose: props.handleDrawerToggle,
        ModalProps: {
          keepMounted: true // Better open performance on mobile.

        },
        children: [brand, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sidebarWrapper,
          children: [props.rtlActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_18__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 32
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 53
          }, this), links]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), image !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.background,
          style: {
            backgroundImage: "url(" + image + ")"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__["default"], {
      smDown: true,
      implementation: "css",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        anchor: props.rtlActive ? "right" : "left",
        variant: "permanent",
        open: true,
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, {
            [classes.drawerPaperRTL]: props.rtlActive
          })
        },
        children: [brand, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sidebarWrapper,
          children: links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), image !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.background,
          style: {
            backgroundImage: "url(" + image + ")"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "E8aeq53F/mfw95JC9chkg24nqhE=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_20__["useSelector"]];
});

_c = Sidebar;
Sidebar.propTypes = {
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["white", "purple", "blue", "green", "orange", "red"]),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  logoText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

var _c;

$RefreshReg$(_c, "Sidebar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJhY3RpdmVSb3V0ZSIsInJvdXRlTmFtZSIsInJvdXRlIiwiaW5kZXhPZiIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZXJJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJwcm9maWxlIiwidXNlcl90eXBlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb2xvciIsImxvZ28iLCJpbWFnZSIsImxvZ29UZXh0Iiwicm91dGVzIiwibGlua3MiLCJsaXN0IiwiZmlsdGVyIiwiYWNjZXNzb3JzIiwibWFwIiwicHJvcCIsImtleSIsImFjdGl2ZVBybyIsImxpc3RJdGVtQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJsYXlvdXQiLCJwYXRoIiwid2hpdGVGb250Q2xhc3NlcyIsIndoaXRlRm9udCIsInN1Ykl0ZW1zIiwiaXRlbSIsIml0ZW1MaW5rIiwiaWNvbiIsIml0ZW1JY29uIiwiaXRlbUljb25SVEwiLCJydGxBY3RpdmUiLCJpdGVtVGV4dCIsIml0ZW1UZXh0UlRMIiwiY29sbGFwc2VJY29uIiwicnRsTmFtZSIsIm5hbWUiLCJsZW5ndGgiLCJpbmRleCIsIkljb24iLCJuZXN0ZWQiLCJicmFuZCIsImxvZ29MaW5rIiwibG9nb0xpbmtSVEwiLCJsb2dvSW1hZ2UiLCJpbWciLCJwYXBlciIsImRyYXdlclBhcGVyIiwiZHJhd2VyUGFwZXJSVEwiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJrZWVwTW91bnRlZCIsInNpZGViYXJXcmFwcGVyIiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwiYmdDb2xvciIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDckM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRnFDLENBR3JDOztBQUNBLFFBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0Msd0dBQUQsQ0FBNUI7QUFDQSxRQUFNQyxPQUFPLEdBQUdILFNBQVMsRUFBekIsQ0FMcUMsQ0FNckM7O0FBQ0EsV0FBU0ksV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFDN0IsV0FBT1AsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJGLFNBQXJCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsSUFBdkMsR0FBOEMsS0FBckQ7QUFDRjs7QUFDRCxRQUFNLENBQUNHLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUlDLGdFQUFXLENBQUNDLEtBQUs7QUFBQTs7QUFBQSxXQUFHQSxLQUFILGFBQUdBLEtBQUgsc0NBQUdBLEtBQUssQ0FBRUMsSUFBVixnREFBRyxZQUFhQyxPQUFoQjtBQUFBLEdBQU4sQ0FBN0I7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBZ0JMLFFBQXRCOztBQUNBLFFBQU1NLFdBQVcsR0FBSUMsQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxlQUFGO0FBQ0FaLFdBQU8sQ0FB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aUI7QUFBcEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBS0csSUFqQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDs7R0ExS3VCNUIsTztVQUVQRyxxRCxFQVNHYyx3RDs7O0tBWElqQixPO0FBNEt4QkEsT0FBTyxDQUFDMkUsU0FBUixHQUFvQjtBQUNsQnhCLFdBQVMsRUFBRXlCLGlEQUFTLENBQUNDLElBREg7QUFFbEJSLG9CQUFrQixFQUFFTyxpREFBUyxDQUFDRSxJQUZaO0FBR2xCQyxTQUFPLEVBQUVILGlEQUFTLENBQUNJLEtBQVYsQ0FBZ0IsQ0FDdkIsT0FEdUIsRUFFdkIsUUFGdUIsRUFHdkIsTUFIdUIsRUFJdkIsT0FKdUIsRUFLdkIsUUFMdUIsRUFNdkIsS0FOdUIsQ0FBaEIsQ0FIUztBQVdsQnJELE1BQUksRUFBRWlELGlEQUFTLENBQUNLLE1BWEU7QUFZbEJyRCxPQUFLLEVBQUVnRCxpREFBUyxDQUFDSyxNQVpDO0FBYWxCcEQsVUFBUSxFQUFFK0MsaURBQVMsQ0FBQ0ssTUFiRjtBQWNsQm5ELFFBQU0sRUFBRThDLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNPLE1BQTVCLENBZFU7QUFlbEJ2RSxNQUFJLEVBQUVnRSxpREFBUyxDQUFDQztBQWZFLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlLjY2ODQzMzZhMzdmN2Y2ZWRiYjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludC1kaXNhYmxlKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEFkbWluTmF2YmFyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9BZG1pbk5hdmJhckxpbmtzLmpzXCI7XHJcbmltcG9ydCBSVExOYXZiYXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL1JUTE5hdmJhckxpbmtzLmpzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXJTdHlsZS5qc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xyXG4gIC8vIHVzZWQgZm9yIGNoZWNraW5nIGN1cnJlbnQgcm91dGVcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjcmVhdGVzIHN0eWxlcyBmb3IgdGhpcyBjb21wb25lbnRcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIC8vIHZlcmlmaWVzIGlmIHJvdXRlTmFtZSBpcyB0aGUgb25lIGFjdGl2ZSAoaW4gYnJvd3NlciBpbnB1dClcclxuICBmdW5jdGlvbiBhY3RpdmVSb3V0ZShyb3V0ZU5hbWUpIHtcclxuICAgICByZXR1cm4gcm91dGVyLnJvdXRlLmluZGV4T2Yocm91dGVOYW1lKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB1c2VySW5mbyAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PnN0YXRlPy51c2VyPy5wcm9maWxlKTtcclxuICBjb25zdCB7dXNlcl90eXBlfSAgPSAgdXNlckluZm87XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY29sb3IsIGxvZ28sIGltYWdlLCBsb2dvVGV4dCwgcm91dGVzIH0gPSBwcm9wcztcclxuXHJcbiAgdmFyIGxpbmtzID0gKFxyXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICB7cm91dGVzPy5maWx0ZXIocm91dGUgPT5yb3V0ZT8uYWNjZXNzb3JzPy5pbmRleE9mKHVzZXJfdHlwZSkgPiAtMSk/Lm1hcCgocHJvcCwga2V5KSA9PiB7XHJcbiAgICAgICAgdmFyIGFjdGl2ZVBybyA9IFwiIFwiO1xyXG4gICAgICAgIHZhciBsaXN0SXRlbUNsYXNzZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsaXN0SXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgW1wiIFwiICsgY2xhc3Nlc1tjb2xvcl1dOiBhY3RpdmVSb3V0ZShwcm9wLmxheW91dCArIHByb3AucGF0aCksXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2hpdGVGb250Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgW1wiIFwiICsgY2xhc3Nlcy53aGl0ZUZvbnRdOlxyXG4gICAgICAgICAgICBhY3RpdmVSb3V0ZShwcm9wLmxheW91dCArIHByb3AucGF0aCkgfHxcclxuICAgICAgICAgICAgcHJvcC5wYXRoID09PSBcIi91cGdyYWRlLXRvLXByb1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3ViSXRlbXMgPSBwcm9wPy5zdWJJdGVtcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17IXN1Ykl0ZW1zID8gIHByb3AubGF5b3V0ICsgcHJvcC5wYXRoIDogXCIjXCJ9IGtleT17a2V5fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVQcm8gKyBjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1MaW5rICsgbGlzdEl0ZW1DbGFzc2VzfSBvbkNsaWNrPXsoZSk9PiBzdWJJdGVtcyAgPyBoYW5kbGVDbGljayhlKSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIHt0eXBlb2YgcHJvcC5pY29uID09PSBcInN0cmluZ1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLml0ZW1JY29uLCB3aGl0ZUZvbnRDbGFzc2VzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5pdGVtSWNvblJUTF06IHByb3BzLnJ0bEFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wLmljb259XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwcm9wLmljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5pdGVtSWNvbiwgd2hpdGVGb250Q2xhc3Nlcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuaXRlbUljb25SVExdOiBwcm9wcy5ydGxBY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5pdGVtVGV4dCwgd2hpdGVGb250Q2xhc3Nlcywge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLml0ZW1UZXh0UlRMXTogcHJvcHMucnRsQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVR5cG9ncmFwaHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2xsYXBzZUljb259PjxzcGFuPntwcm9wcy5ydGxBY3RpdmUgPyBwcm9wLnJ0bE5hbWUgOiBwcm9wLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICB7c3ViSXRlbXM/Lmxlbmd0aCAmJiAocm91dGVyLnJvdXRlLmluZGV4T2YocHJvcC5sYXlvdXQgKyBwcm9wLnBhdGgpID4gLTEgfHwgb3BlbiA/IDxFeHBhbmRMZXNzICAvPiA6IDxFeHBhbmRNb3JlICAvPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdWJJdGVtcz8ubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW1zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgSWNvbiA9IGl0ZW0/Lmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtPy5wYXRofSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlUHJvICsgY2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJsaXN0aXRlbVwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZCtsaXN0SXRlbUNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/Lmljb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7Y29sb3IgOiAnd2hpdGUnfX0+ezxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbT8ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbiAgdmFyIGJyYW5kID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20/cmVmPW5qc21kLXNpZGViYXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmxvZ29MaW5rLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5sb2dvTGlua1JUTF06IHByb3BzLnJ0bEFjdGl2ZSxcclxuICAgICAgICB9KX1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltYWdlfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bG9nb1RleHR9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgYW5jaG9yPXtwcm9wcy5ydGxBY3RpdmUgPyBcImxlZnRcIiA6IFwicmlnaHRcIn1cclxuICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbGFzc05hbWVzKGNsYXNzZXMuZHJhd2VyUGFwZXIsIHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJQYXBlclJUTF06IHByb3BzLnJ0bEFjdGl2ZSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbG9zZT17cHJvcHMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnJhbmR9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5ydGxBY3RpdmUgPyA8UlRMTmF2YmFyTGlua3MgLz4gOiA8QWRtaW5OYXZiYXJMaW5rcyAvPn1cclxuICAgICAgICAgICAge2xpbmtzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWFnZSArIFwiKVwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDxIaWRkZW4gc21Eb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgYW5jaG9yPXtwcm9wcy5ydGxBY3RpdmUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgb3BlblxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xhc3NOYW1lcyhjbGFzc2VzLmRyYXdlclBhcGVyLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyUGFwZXJSVExdOiBwcm9wcy5ydGxBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnJhbmR9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyV3JhcHBlcn0+e2xpbmtzfTwvZGl2PlxyXG4gICAgICAgICAge2ltYWdlICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaW1hZ2UgKyBcIilcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDwvSGlkZGVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuU2lkZWJhci5wcm9wVHlwZXMgPSB7XHJcbiAgcnRsQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBoYW5kbGVEcmF3ZXJUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcInB1cnBsZVwiLFxyXG4gICAgXCJibHVlXCIsXHJcbiAgICBcImdyZWVuXCIsXHJcbiAgICBcIm9yYW5nZVwiLFxyXG4gICAgXCJyZWRcIixcclxuICBdKSxcclxuICBsb2dvOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxvZ29UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJvdXRlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
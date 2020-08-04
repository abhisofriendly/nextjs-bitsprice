webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "D:\\Projects\\nextjsBrad\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: "USD"
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list;

      if (this.state.currency === "USD") {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 9
          }
        }, this.props.bpi.disclaimer ? __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 40
          }
        }, this.props.disclaimer) : "hi", "Bitcoin rate for ", this.props.bpi.bpi.USD.description, " :", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.USD.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.USD.rate));
      } else if (this.state.currency === "GBP") {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 9
          }
        }, this.props.bpi.disclaimer ? __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 40
          }
        }, this.props.disclaimer) : "hi", "Bitcoin rate for ", this.props.bpi.bpi.GBP.description, " :", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.GBP.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.GBP.rate));
      } else {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }
        }, this.props.bpi.disclaimer ? __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 40
          }
        }, this.props.disclaimer) : "hi", "Bitcoin rate for ", this.props.bpi.bpi.EUR.description, " :", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.EUR.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }
        }, this.props.bpi.bpi.EUR.rate));
      }

      console.log(this.state.currency);
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, list, __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, __jsx("option", {
        value: "USD",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "USD"), __jsx("option", {
        value: "GBP",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "GBP"), __jsx("option", {
        value: "EUR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, "EUR"))));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJsaXN0Iiwic3RhdGUiLCJwcm9wcyIsImJwaSIsImRpc2NsYWltZXIiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwiY29uc29sZSIsImxvZyIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFO0FBREosSzs7Ozs7Ozs2QkFHQztBQUFBOztBQUNQLFVBQUlDLElBQUo7O0FBQ0EsVUFBSSxLQUFLQyxLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDakNDLFlBQUksR0FDRjtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxVQUFmLEdBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSSxLQUFLRixLQUFMLENBQVdFLFVBQWYsQ0FBNUIsR0FBNkQsSUFEaEUsdUJBRW9CLEtBQUtGLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQSxHQUFmLENBQW1CRSxHQUFuQixDQUF1QkMsV0FGM0MsUUFHRTtBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkUsR0FBbkIsQ0FBdUJFLElBRDFCLENBSEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0wsS0FBTCxDQUFXQyxHQUFYLENB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ZjY5NGMxYzRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGxpc3Q7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gXCJVU0RcIikge1xyXG4gICAgICBsaXN0ID0gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5kaXNjbGFpbWVyID8gPHA+e3RoaXMucHJvcHMuZGlzY2xhaW1lcn08L3A+IDogXCJoaVwifVxyXG4gICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5kZXNjcmlwdGlvbn0gOlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5jb2RlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09IFwiR0JQXCIpIHtcclxuICAgICAgbGlzdCA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuZGlzY2xhaW1lciA/IDxwPnt0aGlzLnByb3BzLmRpc2NsYWltZXJ9PC9wPiA6IFwiaGlcIn1cclxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5HQlAuZGVzY3JpcHRpb259IDpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5HQlAuY29kZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLmJwaS5HQlAucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdCA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuZGlzY2xhaW1lciA/IDxwPnt0aGlzLnByb3BzLmRpc2NsYWltZXJ9PC9wPiA6IFwiaGlcIn1cclxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5FVVIuZGVzY3JpcHRpb259IDpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5FVVIuY29kZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLmJwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVuY3kpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
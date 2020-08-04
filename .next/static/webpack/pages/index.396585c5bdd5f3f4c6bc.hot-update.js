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
        list = "{this.props.bpi.disclaimer ? <p>{this.props.disclaimer}</p> : \"hi\"}\n        Bitcoin rate for {this.props.bpi.bpi.USD.description} :\n        <span className=\"badge badge-primary\">\n          {this.props.bpi.bpi.USD.code}\n        </span>";
      } else if (this.state.currency === "GBP") {
        list = "{this.props.bpi.disclaimer ? <p>{this.props.disclaimer}</p> : \"hi\"}\n        Bitcoin rate for {this.props.bpi.bpi.GBP.description} :\n        <span className=\"badge badge-primary\">\n          {this.props.bpi.bpi.GBP.code}\n        </span>";
      } else {
        list = "{this.props.bpi.disclaimer ? <p>{this.props.disclaimer}</p> : \"hi\"}\n        Bitcoin rate for {this.props.bpi.bpi.USD.description} :\n        <span className=\"badge badge-primary\">\n          {this.props.bpi.bpi.USD.code}\n        </span>";
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, list, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, this.props.bpi.bpi.USD.rate), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("option", {
        value: "USD",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, "USD"), __jsx("option", {
        value: "GBP",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }, "GBP"), __jsx("option", {
        value: "EUR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, "EUR")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJsaXN0Iiwic3RhdGUiLCJwcm9wcyIsImJwaSIsIlVTRCIsInJhdGUiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGNBQVEsRUFBRTtBQURKLEs7Ozs7Ozs7NkJBR0M7QUFBQTs7QUFDUCxVQUFJQyxJQUFKOztBQUNBLFVBQUksS0FBS0MsS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTVCLEVBQW1DO0FBQ2pDQyxZQUFJLHVQQUFKO0FBS0QsT0FORCxNQU1PLElBQUksS0FBS0MsS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTVCLEVBQW1DO0FBQ3hDQyxZQUFJLHVQQUFKO0FBS0QsT0FOTSxNQU1BO0FBQ0xBLFlBQUksdVBBQUo7QUFLRDs7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0EsSUFESCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJDLElBQWhDLENBRkYsRUFHRTtBQUNFLGdCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFUixvQkFBUSxFQUFFTyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBckIsV0FBZCxDQUFQO0FBQUEsU0FEWjtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1FO0FBQVEsYUFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLENBSEYsQ0FERixDQURGLENBREY7QUFrQkQ7Ozs7RUEzQ2tCQyw0Q0FBSyxDQUFDQyxTOztBQThDWmIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk2NTg1YzViZGQ1ZjNmNGM2YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBsaXN0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcclxuICAgICAgbGlzdCA9IGB7dGhpcy5wcm9wcy5icGkuZGlzY2xhaW1lciA/IDxwPnt0aGlzLnByb3BzLmRpc2NsYWltZXJ9PC9wPiA6IFwiaGlcIn1cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5icGkuVVNELmRlc2NyaXB0aW9ufSA6XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuY29kZX1cclxuICAgICAgICA8L3NwYW4+YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gXCJHQlBcIikge1xyXG4gICAgICBsaXN0ID0gYHt0aGlzLnByb3BzLmJwaS5kaXNjbGFpbWVyID8gPHA+e3RoaXMucHJvcHMuZGlzY2xhaW1lcn08L3A+IDogXCJoaVwifVxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5HQlAuZGVzY3JpcHRpb259IDpcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuYnBpLkdCUC5jb2RlfVxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdCA9IGB7dGhpcy5wcm9wcy5icGkuZGlzY2xhaW1lciA/IDxwPnt0aGlzLnByb3BzLmRpc2NsYWltZXJ9PC9wPiA6IFwiaGlcIn1cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5icGkuVVNELmRlc2NyaXB0aW9ufSA6XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuY29kZX1cclxuICAgICAgICA8L3NwYW4+YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
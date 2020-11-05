webpackHotUpdate_N_E("pages/group_registration",{

/***/ "./components/group_regi.js":
/*!**********************************!*\
  !*** ./components/group_regi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Groupregistration; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");






var _jsxFileName = "C:\\Users\\tsujishunya104\\Desktop\\shunya-s15\\jphacks\\B_2003\\front\\components\\group_regi.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Groupregistration = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Groupregistration, _Component);

  var _super = _createSuper(Groupregistration);

  function Groupregistration(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Groupregistration);

    _this = _super.call(this, props);
    _this.handlesubmit = _this.handlesubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Groupregistration, [{
    key: "handlesubmit",
    value: function handlesubmit(e) {
      e.preventDefault();
      var method = "POST";
      var body = JSON.stringify({
        name: information.name.value,
        email_address: information.email_address.value,
        password: information.password.value,
        limit: information.limit.value
      }); //console.log(body);

      fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/register_place/register_place', {
        method: "POST",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log(responseJson);
        if (responseJson.result == 2) {
          window.alert("あなたのトークンは" + responseJson.password_token + "です。必ずメモをとってください。");
        } else {
          window.alert("あなたの団体は登録済みです。ログインしてください。");
        }

        location.href = "/group_log_in";
      })["catch"](function (error) {
        window.alert("登録時にエラーが起きました。もう一度入力してください。");
        location.href = "/group_registration"; //console.error('error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 16
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 16
        }
      }, "Group registration")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 16
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, "\"\u30B5\u30FC\u30D3\u30B9\u540D\"\u3078\u3088\u3046\u3053\u305D"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "\u767B\u9332\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
        id: "information",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, "\u56E3\u4F53\u540D"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "email",
        name: "name",
        placeholder: "Enter your Group name",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:\u3000", __jsx("input", {
        type: "email",
        name: "email_address",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9:\u3000", __jsx("input", {
        type: "text",
        name: "password",
        minLength: "5",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 27
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }, "\u540C\u6642\u306B\u6D3B\u52D5\u3067\u304D\u308B\u4EBA\u6570:\u3000", __jsx("input", {
        type: "number",
        name: "limit",
        min: "1",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 32
        }
      })), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "info",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/group_log_in",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, "\u30ED\u30B0\u30A4\u30F3"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, "Go Home")))));
    }
  }]);

  return Groupregistration;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9yZWdpLmpzIl0sIm5hbWVzIjpbIkdyb3VwcmVnaXN0cmF0aW9uIiwicHJvcHMiLCJoYW5kbGVzdWJtaXQiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5mb3JtYXRpb24iLCJ2YWx1ZSIsImVtYWlsX2FkZHJlc3MiLCJwYXNzd29yZCIsImxpbWl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJwYXNzd29yZF90b2tlbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsaUI7Ozs7O0FBRWpCLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUZlO0FBR2xCOzs7O2lDQUVZQyxDLEVBQUU7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRUMsV0FBVyxDQUFDRCxJQUFaLENBQWlCRSxLQUF4QjtBQUE4QkMscUJBQWEsRUFBRUYsV0FBVyxDQUFDRSxhQUFaLENBQTBCRCxLQUF2RTtBQUE2RUUsZ0JBQVEsRUFBRUgsV0FBVyxDQUFDRyxRQUFaLENBQXFCRixLQUE1RztBQUFrSEcsYUFBSyxFQUFFSixXQUFXLENBQUNJLEtBQVosQ0FBa0JIO0FBQTNJLE9BQWYsQ0FBYixDQUhXLENB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QUcsRUFBQyxHQUF0QztBQUEwQyxnQkFBUSxNQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWYsQ0FOSixFQU9JLE1BQUMsNEVBQUQ7QUFBUSxlQUFPLEVBQUMsTUFBaEI7QUFBdUIsWUFBSSxFQUFDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBUEosQ0FMRyxFQWNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURKLENBREQsQ0FBSCxFQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFHLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FESixDQUxBLENBZEcsQ0FBUDtBQXlCSDs7OztFQXhEMEMwQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9yZWdpc3RyYXRpb24uYzMxNTJlNzg4MGJhOGU1NDU1NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwcmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXN1Ym1pdCA9IHRoaXMuaGFuZGxlc3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlc3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6IGluZm9ybWF0aW9uLm5hbWUudmFsdWUsZW1haWxfYWRkcmVzczogaW5mb3JtYXRpb24uZW1haWxfYWRkcmVzcy52YWx1ZSxwYXNzd29yZDogaW5mb3JtYXRpb24ucGFzc3dvcmQudmFsdWUsbGltaXQ6IGluZm9ybWF0aW9uLmxpbWl0LnZhbHVlLH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdXppOGZlMXd1NC5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9yZWdpc3Rlcl9wbGFjZS9yZWdpc3Rlcl9wbGFjZScse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOBguOBquOBn+OBruODiOODvOOCr+ODs+OBr1wiK3Jlc3BvbnNlSnNvbi5wYXNzd29yZF90b2tlbitcIuOBp+OBmeOAguW/heOBmuODoeODouOCkuOBqOOBo+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOBguOBquOBn+OBruWbo+S9k+OBr+eZu+mMsua4iOOBv+OBp+OBmeOAguODreOCsOOCpOODs+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9ncm91cF9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLnmbvpjLLmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvZ3JvdXBfcmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8cD48aDE+R3JvdXAgcmVnaXN0cmF0aW9uPC9oMT48L3A+XHJcbiAgICAgICAgICAgIDxwPuOAgDwvcD5cclxuICAgICAgICAgICAgPHA+PGRpdj48aDI+XCLjgrXjg7zjg5PjgrnlkI1cIuOBuOOCiOOBhuOBk+OBnTwvaDI+PC9kaXY+PC9wPlxyXG4gICAgICAgICAgICA8cD48ZGl2PjxoND7nmbvpjLLmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQ8L2g0PjwvZGl2PjwvcD5cclxuICAgICAgICAgICAgPHA+PEZvcm0uR3JvdXAgaWQ9XCJpbmZvcm1hdGlvblwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZXN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD7lm6PkvZPlkI08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEdyb3VwIG5hbWVcIiByZXF1aXJlZD48L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxwPuODoeODvOODq+OCouODieODrOOCuTrjgIA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsX2FkZHJlc3NcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPuODkeOCueODr+ODvOODiTrjgIA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBtaW5MZW5ndGg9XCI1XCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7lkIzmmYLjgavmtLvli5XjgafjgY3jgovkurrmlbA644CAPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibGltaXRcIiBtaW49XCIxXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2luZm8nIHR5cGU9XCJzdWJtaXRcIj7mlrDopo/nmbvpjLI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD48ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2dyb3VwX2xvZ19pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPuODreOCsOOCpOODszwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+R28gSG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9wPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
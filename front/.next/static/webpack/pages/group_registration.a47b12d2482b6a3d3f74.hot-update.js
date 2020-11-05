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
/* harmony import */ var _node_modules_react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");






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
          lineNumber: 39,
          columnNumber: 16
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 16
        }
      }, "Group registration")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, "\u3000"), __jsx("p", {
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
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "\"\u30B5\u30FC\u30D3\u30B9\u540D\"\u3078\u3088\u3046\u3053\u305D"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, "\u767B\u9332\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
        controlId: "information",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, "\u56E3\u4F53\u540D"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "text",
        name: "name",
        placeholder: "Enter your group name",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "email",
        name: "email_address",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "text",
        name: "password",
        minLength: "5",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, "\u540C\u6642\u306B\u6D3B\u52D5\u3067\u304D\u308B\u4EBA\u6570"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "number",
        name: "limit",
        min: "1",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "info",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332"))), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        model: "user",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
        controlId: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, "firstName"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "text",
        model: "user.name",
        className: "form-control",
        validateOn: "blur",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Errors, {
        model: "user.name",
        messages: {
          isRequired: '入力必須項目です！'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 16
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/group_log_in",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, "\u30ED\u30B0\u30A4\u30F3"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9yZWdpLmpzIl0sIm5hbWVzIjpbIkdyb3VwcmVnaXN0cmF0aW9uIiwicHJvcHMiLCJoYW5kbGVzdWJtaXQiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5mb3JtYXRpb24iLCJ2YWx1ZSIsImVtYWlsX2FkZHJlc3MiLCJwYXNzd29yZCIsImxpbWl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJwYXNzd29yZF90b2tlbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiaXNSZXF1aXJlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGlCOzs7OztBQUVqQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFGZTtBQUdsQjs7OztpQ0FFWUMsQyxFQUFFO0FBQ1hBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxZQUFJLEVBQUVDLFdBQVcsQ0FBQ0QsSUFBWixDQUFpQkUsS0FBeEI7QUFBOEJDLHFCQUFhLEVBQUVGLFdBQVcsQ0FBQ0UsYUFBWixDQUEwQkQsS0FBdkU7QUFBNkVFLGdCQUFRLEVBQUVILFdBQVcsQ0FBQ0csUUFBWixDQUFxQkYsS0FBNUc7QUFBa0hHLGFBQUssRUFBRUosV0FBVyxDQUFDSSxL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUcsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FESixDQURELENBQUgsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRyxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLENBREosQ0FMQSxDQW5DRyxDQUFQO0FBOENIOzs7O0VBN0UwQ0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXBfcmVnaXN0cmF0aW9uLmE0N2IxMmQyNDgyYjZhM2QzZjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwcmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXN1Ym1pdCA9IHRoaXMuaGFuZGxlc3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlc3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6IGluZm9ybWF0aW9uLm5hbWUudmFsdWUsZW1haWxfYWRkcmVzczogaW5mb3JtYXRpb24uZW1haWxfYWRkcmVzcy52YWx1ZSxwYXNzd29yZDogaW5mb3JtYXRpb24ucGFzc3dvcmQudmFsdWUsbGltaXQ6IGluZm9ybWF0aW9uLmxpbWl0LnZhbHVlLH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdXppOGZlMXd1NC5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9yZWdpc3Rlcl9wbGFjZS9yZWdpc3Rlcl9wbGFjZScse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOBguOBquOBn+OBruODiOODvOOCr+ODs+OBr1wiK3Jlc3BvbnNlSnNvbi5wYXNzd29yZF90b2tlbitcIuOBp+OBmeOAguW/heOBmuODoeODouOCkuOBqOOBo+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOBguOBquOBn+OBruWbo+S9k+OBr+eZu+mMsua4iOOBv+OBp+OBmeOAguODreOCsOOCpOODs+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9ncm91cF9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLnmbvpjLLmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvZ3JvdXBfcmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8cD48aDE+R3JvdXAgcmVnaXN0cmF0aW9uPC9oMT48L3A+XHJcbiAgICAgICAgICAgIDxwPuOAgDwvcD5cclxuICAgICAgICAgICAgPHA+PGRpdj48aDI+XCLjgrXjg7zjg5PjgrnlkI1cIuOBuOOCiOOBhuOBk+OBnTwvaDI+PC9kaXY+PC9wPlxyXG4gICAgICAgICAgICA8cD48ZGl2PjxoND7nmbvpjLLmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQ8L2g0PjwvZGl2PjwvcD5cclxuICAgICAgICAgICAgPHA+PEZvcm0uR3JvdXAgY29udHJvbElkPVwiaW5mb3JtYXRpb25cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+5Zuj5L2T5ZCNPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGdyb3VwIG5hbWVcIiByZXF1aXJlZD48L0Zvcm0uQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD7jg6Hjg7zjg6vjgqLjg4njg6zjgrk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbF9hZGRyZXNzXCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+44OR44K544Ov44O844OJPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIG1pbkxlbmd0aD1cIjVcIiByZXF1aXJlZD48L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPuWQjOaZguOBq+a0u+WLleOBp+OBjeOCi+S6uuaVsDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJsaW1pdFwiIG1pbj1cIjFcIiByZXF1aXJlZD48L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0naW5mbycgdHlwZT1cInN1Ym1pdFwiPuaWsOimj+eZu+mMsjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+PC9wPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0gbW9kZWw9XCJ1c2VyXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJuYW1lXCIgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Zmlyc3ROYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVPbj1cImJsdXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uRXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgIG1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6ICflhaXlipvlv4XpoIjpoIXnm67jgafjgZnvvIEnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8cD48ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2dyb3VwX2xvZ19pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPuODreOCsOOCpOODszwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+R28gSG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9wPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
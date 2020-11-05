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
      }), __jsx(Errors, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9yZWdpLmpzIl0sIm5hbWVzIjpbIkdyb3VwcmVnaXN0cmF0aW9uIiwicHJvcHMiLCJoYW5kbGVzdWJtaXQiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5mb3JtYXRpb24iLCJ2YWx1ZSIsImVtYWlsX2FkZHJlc3MiLCJwYXNzd29yZCIsImxpbWl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJwYXNzd29yZF90b2tlbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiaXNSZXF1aXJlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGlCOzs7OztBQUVqQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFGZTtBQUdsQjs7OztpQ0FFWUMsQyxFQUFFO0FBQ1hBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxZQUFJLEVBQUVDLFdBQVcsQ0FBQ0QsSUFBWixDQUFpQkUsS0FBeEI7QUFBOEJDLHFCQUFhLEVBQUVGLFdBQVcsQ0FBQ0UsYUFBWixDQUEwQkQsS0FBdkU7QUFBNkVFLGdCQUFRLEVBQUVILFdBQVcsQ0FBQ0csUUFBWixDQUFxQkYsS0FBNUc7QUFBa0hHLGFBQUssRUFBRUosV0FBVyxDQUFDSSxL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QTtBQUFBO0FBQUE7QUFBQSxTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFHLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREosQ0FERCxDQUFILEVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUcsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQURKLENBTEEsQ0FuQ0csQ0FBUDtBQThDSDs7OztFQTdFMENDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX3JlZ2lzdHJhdGlvbi40MWNiNTM2MjZlNDgxY2ZkMDg1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cHJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVzdWJtaXQgPSB0aGlzLmhhbmRsZXN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBpbmZvcm1hdGlvbi5uYW1lLnZhbHVlLGVtYWlsX2FkZHJlc3M6IGluZm9ybWF0aW9uLmVtYWlsX2FkZHJlc3MudmFsdWUscGFzc3dvcmQ6IGluZm9ybWF0aW9uLnBhc3N3b3JkLnZhbHVlLGxpbWl0OiBpbmZvcm1hdGlvbi5saW1pdC52YWx1ZSx9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3V6aThmZTF3dTQuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVnaXN0ZXJfcGxhY2UvcmVnaXN0ZXJfcGxhY2UnLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHl9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgYLjgarjgZ/jga7jg4jjg7zjgq/jg7Pjga9cIityZXNwb25zZUpzb24ucGFzc3dvcmRfdG9rZW4rXCLjgafjgZnjgILlv4XjgZrjg6Hjg6LjgpLjgajjgaPjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgYLjgarjgZ/jga7lm6PkvZPjga/nmbvpjLLmuIjjgb/jgafjgZnjgILjg63jgrDjgqTjg7PjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvZ3JvdXBfbG9nX2luXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwi55m76Yyy5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2dyb3VwX3JlZ2lzdHJhdGlvblwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPHA+PGgxPkdyb3VwIHJlZ2lzdHJhdGlvbjwvaDE+PC9wPlxyXG4gICAgICAgICAgICA8cD7jgIA8L3A+XHJcbiAgICAgICAgICAgIDxwPjxkaXY+PGgyPlwi44K144O844OT44K55ZCNXCLjgbjjgojjgYbjgZPjgZ08L2gyPjwvZGl2PjwvcD5cclxuICAgICAgICAgICAgPHA+PGRpdj48aDQ+55m76Yyy5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9oND48L2Rpdj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImluZm9ybWF0aW9uXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlc3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPuWbo+S9k+WQjTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBncm91cCBuYW1lXCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+44Oh44O844Or44Ki44OJ44Os44K5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxfYWRkcmVzc1wiIHJlcXVpcmVkPjwvRm9ybS5Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPuODkeOCueODr+ODvOODiTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBtaW5MZW5ndGg9XCI1XCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD7lkIzmmYLjgavmtLvli5XjgafjgY3jgovkurrmlbA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibGltaXRcIiBtaW49XCIxXCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2luZm8nIHR5cGU9XCJzdWJtaXRcIj7mlrDopo/nmbvpjLI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtIG1vZGVsPVwidXNlclwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibmFtZVwiID5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPmZpcnN0TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBtb2RlbD1cInVzZXIubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlT249XCJibHVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxFcnJvcnNcclxuICAgICAgICAgICAgICAgICAgbW9kZWw9XCJ1c2VyLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZDogJ+WFpeWKm+W/hemgiOmgheebruOBp+OBme+8gSdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDxwPjxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvZ3JvdXBfbG9nX2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+44Ot44Kw44Kk44OzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5HbyBIb21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj48L3A+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
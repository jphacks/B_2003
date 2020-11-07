webpackHotUpdate_N_E("pages/group_log_in",{

/***/ "./components/group_login.js":
/*!***********************************!*\
  !*** ./components/group_login.js ***!
  \***********************************/
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
/* harmony import */ var _node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./components/login.js");






var _jsxFileName = "C:\\Users\\kota1\\Documents\\B_2003\\front\\components\\group_login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Grouplogin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Grouplogin, _Component);

  var _super = _createSuper(Grouplogin);

  function Grouplogin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Grouplogin);

    _this = _super.call(this, props);
    _this.sendinfo = _this.sendinfo.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Grouplogin, [{
    key: "sendinfo",
    value: function sendinfo(e) {
      var _this2 = this;

      e.preventDefault();
      var method = "POST";
      var body = JSON.stringify({
        password: group_info.password.value,
        email_address: group_info.email_address.value
      });
      fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/signin_place/signin_place', {
        method: "POST",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson.result == 0) {
          window.alert("メールアドレスまたはパスワードが間違っています。");
        } else {
          window.alert("ようこそ!" + responseJson.name + "さん。");
          console.log(responseJson.name);
          console.log(responseJson.facilityID);
          console.log(responseJson.password_token);
          var afterdom = document.getElementById('loginarea');
          react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(__jsx(_login__WEBPACK_IMPORTED_MODULE_11__["default"], {
            name: responseJson.name,
            facilityID: responseJson.facilityID,
            password_token: responseJson.password_token,
            password: group_info.password.value,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }
          }), afterdom);
        } //location.href = "/log_in";

      })["catch"](function (error) {
        window.alert("エラーが起きました。もう一度入力してください。"); //location.href = "/group_log_in"
        //console.error('error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx("div", {
        id: "loginarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 12
        }
      }, "Group Log in")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 12
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "\u30ED\u30B0\u30A4\u30F3\u306B\u5FC5\u8981\u306A\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, __jsx("form", {
        id: "group_info",
        onSubmit: this.sendinfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 12
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:\u3000", __jsx("input", {
        type: "email",
        name: "email_address",
        placeholder: "Email",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9:\u3000", __jsx("input", {
        type: "text",
        name: "password",
        placeholder: "Password",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 23
        }
      })), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "info",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, "\u30ED\u30B0\u30A4\u30F3")))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 12
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/group_registration",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, "Go home")))));
    }
  }]);

  return Grouplogin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Grouplogin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9sb2dpbi5qcyJdLCJuYW1lcyI6WyJHcm91cGxvZ2luIiwicHJvcHMiLCJzZW5kaW5mbyIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhc3N3b3JkIiwiZ3JvdXBfaW5mbyIsInZhbHVlIiwiZW1haWxfYWRkcmVzcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJmYWNpbGl0eUlEIiwicGFzc3dvcmRfdG9rZW4iLCJhZnRlcmRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFGZTtBQUdsQjs7Ozs2QkFFUUMsQyxFQUFFO0FBQUE7O0FBQ1BBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxnQkFBUSxFQUFFQyxVQUFVLENBQUNELFFBQVgsQ0FBb0JFLEtBQS9CO0FBQXFDQyxxQkFBYSxFQUFFRixVQUFVLENBQUNFLGFBQVgsQ0FBeUJEO0FBQTdFLE9BQWYsQ0FBYjtBQUNBRSxXQUFLLENBQUMsa0ZBQUQsRUFBb0Y7QUFBQ1IsY0FBTSxFQUFF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QUFBQTtBQUFBO0FBQUEsb0NBSEQsQ0FBSCxDQUxBLENBRFEsRUFZUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUcscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREosQ0FERCxDQUFILEVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUcsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQURKLENBTEEsQ0FaUSxDQUFSO0FBdUJIOzs7O0VBM0RvQitCLCtDOztBQThEVmpDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX2xvZ19pbi4xODBjNWQzZjVjODc5ZWZkZTJhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcclxuXHJcbmNsYXNzIEdyb3VwbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2VuZGluZm8gPSB0aGlzLnNlbmRpbmZvLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZGluZm8oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7cGFzc3dvcmQ6IGdyb3VwX2luZm8ucGFzc3dvcmQudmFsdWUsZW1haWxfYWRkcmVzczogZ3JvdXBfaW5mby5lbWFpbF9hZGRyZXNzLnZhbHVlLH0pO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc2lnbmluX3BsYWNlL3NpZ25pbl9wbGFjZScse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Oh44O844Or44Ki44OJ44Os44K544G+44Gf44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CCXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44KI44GG44GT44GdIVwiK3Jlc3BvbnNlSnNvbi5uYW1lK1wi44GV44KT44CCXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5mYWNpbGl0eUlEKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLnBhc3N3b3JkX3Rva2VuKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luYXJlYScpXHJcblxyXG4gICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxMb2dpbiBuYW1lPXtyZXNwb25zZUpzb24ubmFtZX0gZmFjaWxpdHlJRD17cmVzcG9uc2VKc29uLmZhY2lsaXR5SUR9IHBhc3N3b3JkX3Rva2VuPXtyZXNwb25zZUpzb24ucGFzc3dvcmRfdG9rZW59IHBhc3N3b3JkPXtncm91cF9pbmZvLnBhc3N3b3JkLnZhbHVlfS8+LCBhZnRlcmRvbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9ncm91cF9sb2dfaW5cIlxyXG4gICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIDxkaXYgaWQgPSAnbG9naW5hcmVhJz5cclxuICAgICAgICA8cD48aDE+R3JvdXAgTG9nIGluPC9oMT48L3A+XHJcbiAgICAgICAgPHA+44CAPC9wPlxyXG4gICAgICAgIDxwPjxkaXY+PGg0PuODreOCsOOCpOODs+OBq+W/heimgeOBquaDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhDwvaDQ+PC9kaXY+PC9wPlxyXG5cclxuICAgICAgICA8cD48Zm9ybSBpZCA9IFwiZ3JvdXBfaW5mb1wiIG9uU3VibWl0PXt0aGlzLnNlbmRpbmZvfT5cclxuICAgICAgICAgICAgPHA+44Oh44O844Or44Ki44OJ44Os44K5OuOAgDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxfYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuICAgICAgICAgICAgPHA+44OR44K544Ov44O844OJOuOAgDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIHR5cGU9XCJzdWJtaXRcIj7jg63jgrDjgqTjg7M8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPjxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9ncm91cF9yZWdpc3RyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhPuaWsOimj+eZu+mMsjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPkdvIGhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj48L3A+XHJcbiAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwbG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==
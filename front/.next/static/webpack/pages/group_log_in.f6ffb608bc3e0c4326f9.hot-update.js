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
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, "Group Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, "\u30ED\u30B0\u30A4\u30F3\u306B\u5FC5\u8981\u306A\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx("form", {
        id: "group_info",
        onSubmit: this.sendinfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:", __jsx("input", {
        type: "email",
        name: "email_address",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 24
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9:", __jsx("input", {
        type: "text",
        name: "password",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 22
        }
      })), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "info",
        type: "submit",
        size: "lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "\u30ED\u30B0\u30A4\u30F3"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/member_list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "\u30E1\u30F3\u30D0\u30FC\u30EA\u30B9\u30C8"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/group_registration",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, "Go home"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9sb2dpbi5qcyJdLCJuYW1lcyI6WyJHcm91cGxvZ2luIiwicHJvcHMiLCJzZW5kaW5mbyIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhc3N3b3JkIiwiZ3JvdXBfaW5mbyIsInZhbHVlIiwiZW1haWxfYWRkcmVzcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJmYWNpbGl0eUlEIiwicGFzc3dvcmRfdG9rZW4iLCJhZnRlcmRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFGZTtBQUdsQjs7Ozs2QkFFUUMsQyxFQUFFO0FBQUE7O0FBQ1BBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxnQkFBUSxFQUFFQyxVQUFVLENBQUNELFFBQVgsQ0FBb0JFLEtBQS9CO0FBQXFDQyxxQkFBYSxFQUFFRixVQUFVLENBQUNFLGFBQVgsQ0FBeUJEO0FBQTdFLE9BQWYsQ0FBYjtBQUNBRSxXQUFLLENBQUMsa0ZBQUQsRUFBb0Y7QUFBQ1IsY0FBTSxFQUFF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QUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FESixDQURKLENBaEJRLEVBcUJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFHLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FESixDQXJCUSxDQUFSO0FBMkJIOzs7O0VBL0RvQitCLCtDOztBQWtFVmpDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX2xvZ19pbi5mNmZmYjYwOGJjM2UwYzQzMjZmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcclxuXHJcbmNsYXNzIEdyb3VwbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2VuZGluZm8gPSB0aGlzLnNlbmRpbmZvLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZGluZm8oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7cGFzc3dvcmQ6IGdyb3VwX2luZm8ucGFzc3dvcmQudmFsdWUsZW1haWxfYWRkcmVzczogZ3JvdXBfaW5mby5lbWFpbF9hZGRyZXNzLnZhbHVlLH0pO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc2lnbmluX3BsYWNlL3NpZ25pbl9wbGFjZScse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Oh44O844Or44Ki44OJ44Os44K544G+44Gf44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CCXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44KI44GG44GT44GdIVwiK3Jlc3BvbnNlSnNvbi5uYW1lK1wi44GV44KT44CCXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5mYWNpbGl0eUlEKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLnBhc3N3b3JkX3Rva2VuKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luYXJlYScpXHJcblxyXG4gICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxMb2dpbiBuYW1lPXtyZXNwb25zZUpzb24ubmFtZX0gZmFjaWxpdHlJRD17cmVzcG9uc2VKc29uLmZhY2lsaXR5SUR9IHBhc3N3b3JkX3Rva2VuPXtyZXNwb25zZUpzb24ucGFzc3dvcmRfdG9rZW59Lz4sIGFmdGVyZG9tKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIuOCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2dyb3VwX2xvZ19pblwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZCA9ICdsb2dpbmFyZWEnPlxyXG4gICAgICAgIDxoMT5Hcm91cCBMb2cgaW48L2gxPlxyXG4gICAgICAgIDxkaXY+44Ot44Kw44Kk44Oz44Gr5b+F6KaB44Gq5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtIGlkID0gXCJncm91cF9pbmZvXCIgb25TdWJtaXQ9e3RoaXMuc2VuZGluZm99PlxyXG4gICAgICAgICAgICA8cD7jg6Hjg7zjg6vjgqLjg4njg6zjgrk6PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbF9hZGRyZXNzXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgIDxwPuODkeOCueODr+ODvOODiTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIHR5cGU9XCJzdWJtaXRcIiBzaXplPSdsZyc+44Ot44Kw44Kk44OzPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9tZW1iZXJfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+44Oh44Oz44OQ44O844Oq44K544OIPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2dyb3VwX3JlZ2lzdHJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+5paw6KaP55m76YyyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+R28gaG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm91cGxvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=
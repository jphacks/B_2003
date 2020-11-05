webpackHotUpdate_N_E("pages/group_log_in",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
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
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\kota1\\Documents\\B_2003\\front\\components\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setRef", function (webcam) {
      _this.webcam = webcam;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "capture", function () {
      var img = _this.webcam.getScreenshot();

      console.log(img); //console.log(img)

      var start = img.indexOf(',') + 1;
      var faceid = img.slice(start); //console.log(faceid)

      var method = "POST";
      var body = JSON.stringify({
        face_photo: faceid,
        facilityID: _this.props.facilityID
      });
      console.log(_this.props);
      /*fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/recognition/recognitionr',{method: "POST",body: body})
      .then((response) => response.json())
      .then((responseJson) => {
      //console.log(responseJson);
          if(responseJson.result == 0){
              window.alert("再撮影してください")
          }else if(responseJson.result == 1){
              window.alert("人数制限を超えています、管理者と相談してください")
          }else if(responseJson.result == 2){
              window.alert("入場しました")
          }else if(responseJson.result == 3){
              window.alert("退場しました")
          }
          location.href = "/log_in";
      })
      .catch((error) =>{
          window.alert("認識時にエラーが起きました。もう一度入力してください。")
          location.href = "/log_in"
          //console.error('error');
      });
      */
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_8___default.a, {
        audio: false,
        ref: this.setRef,
        screenshotFormat: "image/jpeg",
        videoConstraints: {
          videoConstraints: videoConstraints
        },
        onUserMediaError: function onUserMediaError() {
          return window.alert('cant access your camera');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/member_list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, "\u30E1\u30F3\u30D0\u30FC\u30EA\u30B9\u30C8"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/add_member",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, "Add member"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/confirmation_screen",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, "Go confirmation screen"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, "Go home"))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImluZGV4T2YiLCJmYWNlaWQiLCJzbGljZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwic2V0UmVmIiwid2luZG93IiwiYWxlcnQiLCJjYXB0dXJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlOQUlWLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFlBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILEtBTmtCOztBQUFBLGtOQVFULFlBQU07QUFFWixVQUFNQyxHQUFHLEdBQUcsTUFBS0QsTUFBTCxDQUFZRSxhQUFaLEVBQVo7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLEVBSFksQ0FJWjs7QUFFQSxVQUFNSSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBakM7QUFDQSxVQUFNQyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSixDQUFVSCxLQUFWLENBQWYsQ0FQWSxDQVNaOztBQUVBLFVBQU1JLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxrQkFBVSxFQUFFTixNQUFiO0FBQXFCTyxrQkFBVSxFQUFFLE1BQUtmLEtBQUwsQ0FBV2U7QUFBNUMsT0FBZixDQUFiO0FBQ0FYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtMLEtBQWpCO0FBRUE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssS0E1Q2tCOztBQUFBO0FBRWxCOzs7OzZCQTRDUTtBQUNMLFVBQU1nQixnQkFBZ0IsR0FBRztBQUNyQkMsYUFBSyxFQUFHLElBRGE7QUFFckJDLGNBQU0sRUFBRyxHQUZZO0FBR3JCQyxrQkFBVSxFQUFHO0FBSFEsT0FBekI7QUFNQSxhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FGQSxFQUdBLE1BQUMsbURBQUQ7QUFDSSxhQUFLLEVBQUUsS0FEWDtBQUVJLFdBQUcsRUFBRSxLQUFLQyxNQUZkO0FBR0ksd0JBQWdCLEVBQUMsWUFIckI7QUFJSSx3QkFBZ0IsRUFBRTtBQUFDSiwwQkFBZ0IsRUFBaEJBO0FBQUQsU0FKdEI7QUFLSSx3QkFBZ0IsRUFBRTtBQUFBLGlCQUFNSyxNQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYixDQUFOO0FBQUEsU0FMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhBLEVBVUE7QUFBUSxlQUFPLEVBQUksS0FBS0MsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWQSxFQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREosQ0FESixDQVpBLEVBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFHLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FESixDQWpCQSxFQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESixDQURKLENBdEJBLEVBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFHLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FESixDQTNCQSxDQURBO0FBa0NIOzs7O0VBekZlQywrQzs7QUEwRm5CO0FBRWN6QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9sb2dfaW4uYmNkMDkxOWJjMjA5ZDU2M2MwMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWYgPSB3ZWJjYW0gPT4ge1xyXG4gICAgICAgIHRoaXMud2ViY2FtID0gd2ViY2FtO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcHR1cmUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IHRoaXMud2ViY2FtLmdldFNjcmVlbnNob3QoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltZylcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbWcuaW5kZXhPZignLCcpICsgMVxyXG4gICAgICAgIGNvbnN0IGZhY2VpZCA9IGltZy5zbGljZShzdGFydClcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmYWNlaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7ZmFjZV9waG90bzogZmFjZWlkLCBmYWNpbGl0eUlEOiB0aGlzLnByb3BzLmZhY2lsaXR5SUR9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgLypmZXRjaCgnaHR0cHM6Ly91emk4ZmUxd3U0LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3JlY29nbml0aW9uL3JlY29nbml0aW9ucicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWGjeaSruW9seOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5Lq65pWw5Yi26ZmQ44KS6LaF44GI44Gm44GE44G+44GZ44CB566h55CG6ICF44Go55u46KuH44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlhaXloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIumAgOWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLoqo3orZjmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgd2lkdGggOiAxMjgwLFxyXG4gICAgICAgICAgICBoZWlnaHQgOiA3MjAsXHJcbiAgICAgICAgICAgIGZhY2luZ01vZGUgOiBcInVzZXJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5Mb2cgaW48L2gxPlxyXG4gICAgICAgIDxkaXY+44Kr44Oh44Op44Gr6aGU44KS5pig44GX44Gm44CB44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS5oq844GX44Gm44GP44Gg44GV44GEPC9kaXY+XHJcbiAgICAgICAgPFdlYmNhbVxyXG4gICAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XHJcbiAgICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgdmlkZW9Db25zdHJhaW50cz17e3ZpZGVvQ29uc3RyYWludHN9fVxyXG4gICAgICAgICAgICBvblVzZXJNZWRpYUVycm9yPXsoKSA9PiB3aW5kb3cuYWxlcnQoJ2NhbnQgYWNjZXNzIHlvdXIgY2FtZXJhJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5jYXB0dXJlfT7mkq7lvbE8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tZW1iZXJfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+44Oh44Oz44OQ44O844Oq44K544OIPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2FkZF9tZW1iZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhPkFkZCBtZW1iZXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmID0gXCIvY29uZmlybWF0aW9uX3NjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+R28gY29uZmlybWF0aW9uIHNjcmVlbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPkdvIGhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==
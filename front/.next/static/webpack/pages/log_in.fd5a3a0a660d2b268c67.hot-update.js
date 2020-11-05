webpackHotUpdate_N_E("pages/log_in",{

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
/* harmony import */ var _showmember__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showmember */ "./components/showmember.js");







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
      var body1 = JSON.stringify({
        face_photo: faceid,
        facilityID: _this.props.facilityID
      });
      console.log(_this.props);
      fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/recognition/recognition', {
        method: "POST",
        body: body1
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log(responseJson);
        if (responseJson.result == 0) {
          window.alert("再撮影してください");
        } else if (responseJson.result == 1) {
          window.alert("人数制限を超えています、管理者と相談してください");
        } else if (responseJson.result == 2) {
          window.alert("入場しました");
        } else if (responseJson.result == 3) {
          window.alert("退場しました");
        } //location.href = "/log_in";

      })["catch"](function (error) {
        window.alert("認識時にエラーが起きました。もう一度入力してください。"); //location.href = "/log_in"
        //console.error('error');
      });
      var body2 = JSON.stringify({
        name: _this.props.name,
        password_token: _this.props.password_token
      });
      var dom = document.getElementById('showmember');
      console.log(body2);
      fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/get_number/get_number', {
        method: "POST",
        body: body2
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson.result == 1) {
          //メンバーリスト更新
          console.log(responseJson);
          console.log(responseJson.name);
          ReactDOM.render(__jsx(_showmember__WEBPACK_IMPORTED_MODULE_9__["default"], {
            memberlist: responseJson.name,
            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }
          }), dom);
        } else {
          window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。");
        }
      })["catch"](function (error) {
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。"); //location.href = "/member_list"
        //console.error('error');
      });
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
          lineNumber: 84,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }));
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

/***/ }),

/***/ "./components/showmember.js":
/*!**********************************!*\
  !*** ./components/showmember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\kota1\\Documents\\B_2003\\front\\components\\showmember.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Showmember = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Showmember, _Component);

  var _super = _createSuper(Showmember);

  function Showmember(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Showmember);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Showmember, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(props) {//const members = new Array('shunya','kotaro','naoya','kohei','uec');
    }
  }, {
    key: "render",
    value: function render() {
      /*
      const members = this.props.memberlist;
      const timeline = document.getElementById("member");
      console.log("jsjs");
      timeline.innerHTML = "";
      for(var i=0;i<members.length;i++){
          const sentence = document.createElement("p");
          const name = document.createTextNode(members[i]);
          sentence.appendChild(name);
          timeline.appendChild(sentence);
      }
      */
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, "\u6D3B\u52D5\u30E1\u30F3\u30D0\u30FC"), __jsx("div", {
        id: "member",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, this.props.memberlist));
    }
  }]);

  return Showmember;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Showmember);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93bWVtYmVyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJ3ZWJjYW0iLCJpbWciLCJnZXRTY3JlZW5zaG90IiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJmZXRjaCIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJlcnJvciIsImJvZHkyIiwibmFtZSIsInBhc3N3b3JkX3Rva2VuIiwiZG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwidmlkZW9Db25zdHJhaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZmFjaW5nTW9kZSIsInNldFJlZiIsImNhcHR1cmUiLCJDb21wb25lbnQiLCJTaG93bWVtYmVyIiwibWVtYmVybGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlOQUlWLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFlBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILEtBTmtCOztBQUFBLGtOQVFULFlBQU07QUFFWixVQUFNQyxHQUFHLEdBQUcsTUFBS0QsTUFBTCxDQUFZRSxhQUFaLEVBQVo7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLEVBSFksQ0FJWjs7QUFFQSxVQUFNSSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssT0FB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QTtBQUVRLGFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBREosRUFFSTtBQUFLLFVBQUUsRUFBRyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0IsS0FBS0EsS0FBTCxDQUFXMEMsVUFBL0IsQ0FGSixDQURBO0FBS0g7Ozs7RUE3Qm9CRiwrQzs7QUFnQ1ZDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ19pbi5mZDVhM2EwYTY2MGQyYjI2OGM2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYmNhbSBmcm9tICdyZWFjdC13ZWJjYW0nO1xyXG5pbXBvcnQgU2hvd21lbWJlciBmcm9tICcuL3Nob3dtZW1iZXInO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZiA9IHdlYmNhbSA9PiB7XHJcbiAgICAgICAgdGhpcy53ZWJjYW0gPSB3ZWJjYW07XHJcbiAgICB9XHJcblxyXG4gICAgY2FwdHVyZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1nID0gdGhpcy53ZWJjYW0uZ2V0U2NyZWVuc2hvdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coaW1nKVxyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGltZy5pbmRleE9mKCcsJykgKyAxXHJcbiAgICAgICAgY29uc3QgZmFjZWlkID0gaW1nLnNsaWNlKHN0YXJ0KVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZhY2VpZClcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keTEgPSBKU09OLnN0cmluZ2lmeSh7ZmFjZV9waG90bzogZmFjZWlkLCBmYWNpbGl0eUlEOiB0aGlzLnByb3BzLmZhY2lsaXR5SUR9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vOWRsc3FienkyNS5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9yZWNvZ25pdGlvbi9yZWNvZ25pdGlvbicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTF9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlho3mkq7lvbHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuS6uuaVsOWItumZkOOCkui2heOBiOOBpuOBhOOBvuOBmeOAgeeuoeeQhuiAheOBqOebuOirh+OBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YWl5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLpgIDloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLoqo3orZjmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCJcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYm9keTIgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTp0aGlzLnByb3BzLm5hbWUscGFzc3dvcmRfdG9rZW46dGhpcy5wcm9wcy5wYXNzd29yZF90b2tlbix9KTtcclxuICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd21lbWJlcicpXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keTIpO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vZ2V0X251bWJlci9nZXRfbnVtYmVyJyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5Mn0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgLy/jg6Hjg7Pjg5Djg7zjg6rjgrnjg4jmm7TmlrBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5uYW1lKVxyXG5cclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8U2hvd21lbWJlciBtZW1iZXJsaXN0ID0ge3Jlc3BvbnNlSnNvbi5uYW1lfS8+LCBkb20pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgrDjg6vjg7zjg5flkI3jgb7jgZ/jga/jgrDjg6vjg7zjg5fjg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZnjgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIumWsuimp+aZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL21lbWJlcl9saXN0XCJcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgd2lkdGggOiAxMjgwLFxyXG4gICAgICAgICAgICBoZWlnaHQgOiA3MjAsXHJcbiAgICAgICAgICAgIGZhY2luZ01vZGUgOiBcInVzZXJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5Mb2cgaW48L2gxPlxyXG4gICAgICAgIDxkaXY+44Kr44Oh44Op44Gr6aGU44KS5pig44GX44Gm44CB44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS5oq844GX44Gm44GP44Gg44GV44GEPC9kaXY+XHJcbiAgICAgICAgPFdlYmNhbVxyXG4gICAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XHJcbiAgICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgdmlkZW9Db25zdHJhaW50cz17e3ZpZGVvQ29uc3RyYWludHN9fVxyXG4gICAgICAgICAgICBvblVzZXJNZWRpYUVycm9yPXsoKSA9PiB3aW5kb3cuYWxlcnQoJ2NhbnQgYWNjZXNzIHlvdXIgY2FtZXJhJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5jYXB0dXJlfT7mkq7lvbE8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9IFwic2hvd21lbWJlclwiLz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY2xhc3MgU2hvd21lbWJlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wcyl7XHJcbiAgICAgICAgLy9jb25zdCBtZW1iZXJzID0gbmV3IEFycmF5KCdzaHVueWEnLCdrb3Rhcm8nLCduYW95YScsJ2tvaGVpJywndWVjJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IHRoaXMucHJvcHMubWVtYmVybGlzdDtcclxuICAgICAgICBjb25zdCB0aW1lbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwianNqc1wiKTtcclxuICAgICAgICB0aW1lbGluZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8bWVtYmVycy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1lbWJlcnNbaV0pO1xyXG4gICAgICAgICAgICBzZW50ZW5jZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICAgICAgdGltZWxpbmUuYXBwZW5kQ2hpbGQoc2VudGVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT7mtLvli5Xjg6Hjg7Pjg5Djg7w8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJtZW1iZXJcIj57dGhpcy5wcm9wcy5tZW1iZXJsaXN0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd21lbWJlcjsiXSwic291cmNlUm9vdCI6IiJ9
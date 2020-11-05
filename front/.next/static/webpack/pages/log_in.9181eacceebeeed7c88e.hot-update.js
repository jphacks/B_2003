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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _showmember__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showmember */ "./components/showmember.js");







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
          react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(__jsx(_showmember__WEBPACK_IMPORTED_MODULE_10__["default"], {
            memberlist: responseJson.name,
            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
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
          lineNumber: 85,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
          lineNumber: 88,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImluZGV4T2YiLCJmYWNlaWQiLCJzbGljZSIsIm1ldGhvZCIsImJvZHkxIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhY2VfcGhvdG8iLCJmYWNpbGl0eUlEIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZpZGVvQ29uc3RyYWludHMiLCJ3aWR0aCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJzZXRSZWYiLCJjYXB0dXJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlOQUlWLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFlBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILEtBTmtCOztBQUFBLGtOQVFULFlBQU07QUFFWixVQUFNQyxHQUFHLEdBQUcsTUFBS0QsTUFBTCxDQUFZRSxhQUFaLEVBQVo7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLEVBSFksQ0FJWjs7QUFFQSxVQUFNSSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBakM7QUFDQSxVQUFNQyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSixD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SFEsT0FBekI7QUFNQSxhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FGQSxFQUdBLE1BQUMsbURBQUQ7QUFDSSxhQUFLLEVBQUUsS0FEWDtBQUVJLFdBQUcsRUFBRSxLQUFLQyxNQUZkO0FBR0ksd0JBQWdCLEVBQUMsWUFIckI7QUFJSSx3QkFBZ0IsRUFBRTtBQUFDSiwwQkFBZ0IsRUFBaEJBO0FBQUQsU0FKdEI7QUFLSSx3QkFBZ0IsRUFBRTtBQUFBLGlCQUFNWCxNQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYixDQUFOO0FBQUEsU0FMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhBLEVBVUE7QUFBUSxlQUFPLEVBQUksS0FBS2UsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWQSxFQVlBO0FBQUssVUFBRSxFQUFHLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVpBLENBREE7QUFnQkg7Ozs7RUE5RmVDLCtDOztBQStGbkI7QUFFY3pDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ19pbi45MTgxZWFjY2VlYmVlZWQ3Yzg4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IFNob3dtZW1iZXIgZnJvbSAnLi9zaG93bWVtYmVyJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWYgPSB3ZWJjYW0gPT4ge1xyXG4gICAgICAgIHRoaXMud2ViY2FtID0gd2ViY2FtO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcHR1cmUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IHRoaXMud2ViY2FtLmdldFNjcmVlbnNob3QoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltZylcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbWcuaW5kZXhPZignLCcpICsgMVxyXG4gICAgICAgIGNvbnN0IGZhY2VpZCA9IGltZy5zbGljZShzdGFydClcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmYWNlaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkxID0gSlNPTi5zdHJpbmdpZnkoe2ZhY2VfcGhvdG86IGZhY2VpZCwgZmFjaWxpdHlJRDogdGhpcy5wcm9wcy5mYWNpbGl0eUlEfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVjb2duaXRpb24vcmVjb2duaXRpb24nLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkxfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YaN5pKu5b2x44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLkurrmlbDliLbpmZDjgpLotoXjgYjjgabjgYTjgb7jgZnjgIHnrqHnkIbogIXjgajnm7joq4fjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWFpeWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6YCA5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6KqN6K2Y5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkyID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6dGhpcy5wcm9wcy5uYW1lLHBhc3N3b3JkX3Rva2VuOnRoaXMucHJvcHMucGFzc3dvcmRfdG9rZW4sfSk7XHJcbiAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dtZW1iZXInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkyKTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2dldF9udW1iZXIvZ2V0X251bWJlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTJ9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIC8v44Oh44Oz44OQ44O844Oq44K544OI5pu05pawXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPFNob3dtZW1iZXIgbWVtYmVybGlzdCA9IHtyZXNwb25zZUpzb24ubmFtZX0vPiwgZG9tKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Kw44Or44O844OX5ZCN44G+44Gf44Gv44Kw44Or44O844OX44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9tZW1iZXJfbGlzdFwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHZpZGVvQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoIDogMTI4MCxcclxuICAgICAgICAgICAgaGVpZ2h0IDogNzIwLFxyXG4gICAgICAgICAgICBmYWNpbmdNb2RlIDogXCJ1c2VyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TG9nIGluPC9oMT5cclxuICAgICAgICA8ZGl2PuOCq+ODoeODqeOBq+mhlOOCkuaYoOOBl+OBpuOAgeODreOCsOOCpOODs+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOBj+OBoOOBleOBhDwvZGl2PlxyXG4gICAgICAgIDxXZWJjYW1cclxuICAgICAgICAgICAgYXVkaW89e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxyXG4gICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgIHZpZGVvQ29uc3RyYWludHM9e3t2aWRlb0NvbnN0cmFpbnRzfX1cclxuICAgICAgICAgICAgb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gd2luZG93LmFsZXJ0KCdjYW50IGFjY2VzcyB5b3VyIGNhbWVyYScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMuY2FwdHVyZX0+5pKu5b2xPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSBcInNob3dtZW1iZXJcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=